(function($, amplify, BI, undefined) {
	'use strict';

	// Config
	var countDownInterval;
	var redirectTimeout;
	var maxTime = 15; // Seconds
	var timeLeft = maxTime;
	var queuedEvents = []; // Array of functions to execute when the welcome ad is hidden

	// DOM elements
	var $adContent;
	var $mainContent;
	var $leaderboard;
	var $wallpaper;
	var $wallpaperPlaced;
	var $eyeDiv;
	var $masthead;
	var $timeSpan;

	function countdowner() {
		--timeLeft;
		$timeSpan.html(timeLeft < 0 ? 0 : timeLeft);
	}

	function redirecter() {
		// Remove interstitial, show content
		$adContent.remove();
		$mainContent.show();
		$leaderboard.show();
		$wallpaper.show();
		$masthead.removeClass('condensed');
		$eyeDiv.show();

		// Event publishing and handling
		amplify.publish('interstitialAdHidden');
		queuedEvents.forEach(function(callback) { callback(); });
		clearInterval(countDownInterval);
		clearTimeout(redirectTimeout);

		return false;
	}

	function init() {
		$adContent = $('.interstitial-ad-content');
		$mainContent = $('#main-content, #ft');
		$leaderboard = $('.standard_leaderboard');
		$wallpaper = $('.ad-wallpaper');
		$masthead = $('.masthead');
		$eyeDiv = $('#eyeDiv');
		$timeSpan = $('#interstitial-countdown span');
		$wallpaperPlaced = $('#placed_wallpaper');
	}

	$(init);

	// Initialize on DOMContentLoaded (a.k.a. "DOM ready")
	$(document).ready(function() {
		// Handle the click to skip the welcome ad
		$('.info a').click(redirecter);
		$('.info a').attr('href', window.location);

		// Hide everything but the welcome ad
		$leaderboard.hide();
		$timeSpan.html(timeLeft);
		$wallpaper.hide();
		$wallpaperPlaced.hide();
		$mainContent.hide();
		$eyeDiv.hide();

		// Setup redirect, converting minutes to seconds
		redirectTimeout = setTimeout(redirecter, maxTime*1000);
		countDownInterval = setInterval(countdowner, 1000);

		// Ad being shown, so prevent race condition on document "ready()" (execution not till next event loop)
		setTimeout(function() {amplify.publish('interstitialAdShown');},0);
	});

	var exposed = {
		executeOnHide: queuedEvents
	};

	BI.welcomeAd = exposed;

	amplify.subscribe('interstitialAdForceRemove', redirecter);
	amplify.publish('interstitialAdWillShow');
}(jQuery, amplify, BI));