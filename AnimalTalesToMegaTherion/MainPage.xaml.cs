using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace AnimalTales
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        string myStory = "";
		string myAStory = "";
        int LionX = 359;
        int LionY = 155;
		
       
		string curAnimal = "";
		

        TranslateTransform lionTranslation = new TranslateTransform();
        TranslateTransform frogTranslation = new TranslateTransform();
		TranslateTransform squirrelTranslation = new TranslateTransform();
		TranslateTransform wolfTranslation = new TranslateTransform();
		TranslateTransform turtleTranslation = new TranslateTransform();
		TranslateTransform rabbitTranslation = new TranslateTransform();
		TranslateTransform captionGridTranslation = new TranslateTransform();
		TranslateTransform beezCaptionGridTranslation = new TranslateTransform();
		
        public MainPage()
        {
            this.InitializeComponent();
            // Add handler for the ManipulationDelta event
            lionTranslation = new TranslateTransform();
            frogTranslation = new TranslateTransform();
			squirrelTranslation = new TranslateTransform();
			wolfTranslation = new TranslateTransform();
			turtleTranslation = new TranslateTransform();
			rabbitTranslation = new TranslateTransform();
            captionGridTranslation = new TranslateTransform();
            lionZion.ManipulationDelta += Drag_ManipulationDelta;
            lionZion.RenderTransform = this.lionTranslation;
			frogZion.ManipulationDelta += Drag_ManipulationDelta;
			frogZion.RenderTransform = this.frogTranslation;
          	bobSquirrel.ManipulationDelta += Drag_ManipulationDelta;
			bobSquirrel.RenderTransform = this.squirrelTranslation;
			wolfZion.ManipulationDelta += Drag_ManipulationDelta;
			wolfZion.RenderTransform = this.wolfTranslation;
			turtleZion.ManipulationDelta += Drag_ManipulationDelta;
			turtleZion.RenderTransform = this.turtleTranslation;
			jackHare.ManipulationDelta += Drag_ManipulationDelta;
			jackHare.RenderTransform = this.rabbitTranslation;
			captionGrid.ManipulationDelta += Drag_ManipulationDelta;
			captionGrid.RenderTransform = this.captionGridTranslation;
			beezCaptionGrid.ManipulationDelta += Drag_ManipulationDelta;
			beezCaptionGrid.RenderTransform = this.beezCaptionGridTranslation;
            sbMonkey.Begin();
			sbBugsleaf.Begin();
			
        }

        /// <summary>
        /// Invoked when this page is about to be displayed in a Frame.
        /// </summary>
        /// <param name="e">Event data that describes how this page was reached.  The Parameter
        /// property is typically used to configure the page.</param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

        private void buildStory(object sender, TextChangedEventArgs e)
        {
            myStory = "";
            myStory += storyTeller.Text;
            txtStoryText.Text = myStory;	
        }
		


        private void testHold(object sender, Windows.UI.Xaml.Input.HoldingRoutedEventArgs e)
        {
           
        }

        private void Drag_ManipulationDelta(object sender, ManipulationDeltaRoutedEventArgs e)
        {
            switch (curAnimal)
            {
                case "frog":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            frogZion.ManipulationMode -= ManipulationModes.TranslateInertia;
                            
                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            frogZion.ManipulationMode -= ManipulationModes.TranslateInertia;
                            
                        }
                        else
                        {
                            frogTranslation.X += e.Delta.Translation.X;
                            frogTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
                case "lion":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            lionZion.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            lionZion.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        else
                        {
                            lionTranslation.X += e.Delta.Translation.X;
                            lionTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
					case "squirrel":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            bobSquirrel.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            bobSquirrel.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        else
                        {
                            squirrelTranslation.X += e.Delta.Translation.X;
                            squirrelTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
					case "wolf":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            wolfZion.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            wolfZion.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        else
                        {
                            wolfTranslation.X += e.Delta.Translation.X;
                            wolfTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
					case "turtle":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            turtleZion.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            turtleZion.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        else
                        {
                            turtleTranslation.X += e.Delta.Translation.X;
                            turtleTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
					case "rabbit":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            jackHare.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            jackHare.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        else
                        {
                            rabbitTranslation.X += e.Delta.Translation.X;
                            rabbitTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
					case "captionGrid":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            captionGrid.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            captionGrid.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        else
                        {
                            captionGridTranslation.X += e.Delta.Translation.X;
                            captionGridTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
					case "beezCaptionGrid":
                    {
                        // Move the rectangle.
                        double curX = e.Delta.Translation.X;
                        double curY = e.Delta.Translation.Y;
                        if (curX > 30)
                        {
                            curX = 30;
                            beezCaptionGrid.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        if (curY > 30)
                        {
                            curY = 30;
                            beezCaptionGrid.ManipulationMode -= ManipulationModes.TranslateInertia;

                        }
                        else
                        {
                            beezCaptionGridTranslation.X += e.Delta.Translation.X;
                            beezCaptionGridTranslation.Y += e.Delta.Translation.Y;
                        }
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            
           
			
        }

        private void testPress(object sender, PointerRoutedEventArgs e)
        {
            curAnimal = "lion";
        }

   

        private void testManip(object sender, ManipulationStartedRoutedEventArgs e)
        {
            Point curAnimal = new Point((double)LionX, (double)LionY);
            txtInfo.Text = curAnimal.ToString();
			
			
        }
		
   

        private void setLion(object sender, PointerRoutedEventArgs e)
        {
            lionZion.ManipulationDelta += Drag_ManipulationDelta;
            curAnimal = "lion";
        }

        private void setFrog(object sender, PointerRoutedEventArgs e)
        {
            curAnimal = "frog";
        }

        private void setSquirrel(object sender, Windows.UI.Xaml.Input.PointerRoutedEventArgs e)
        {
        	 curAnimal = "squirrel";
        }

        private void setTurtle(object sender, Windows.UI.Xaml.Input.PointerRoutedEventArgs e)
        {
        	 curAnimal = "turtle";
        }

        private void setWolf(object sender, Windows.UI.Xaml.Input.PointerRoutedEventArgs e)
        {
        	curAnimal = "wolf";
        }

        private void setRabbit(object sender, Windows.UI.Xaml.Input.PointerRoutedEventArgs e)
        {
        	curAnimal = "rabbit";
        }

        
        private void setCaptionGrid(object sender, Windows.UI.Xaml.Input.PointerRoutedEventArgs e)
        {
        	curAnimal = "captionGrid";
        }

      
        private void buildTale(object sender, Windows.UI.Xaml.Controls.TextChangedEventArgs e)
        {
			myAStory = "";
            myAStory += storyBTeller.Text;
            beeStoryText.Text = myAStory;
			
        }

        private void setBeezCaptionGrid(object sender, Windows.UI.Xaml.Input.PointerRoutedEventArgs e)
        {
        	curAnimal = "beezCaptionGrid";
        }

        private void endMove(object sender, ManipulationCompletedRoutedEventArgs e)
        {
            if (lionTranslation != null)
           {
               lionZion.ManipulationDelta -= Drag_ManipulationDelta;
                  

            }
            
        }

        private void PlayMedia(object sender, Windows.UI.Xaml.Input.DoubleTappedRoutedEventArgs e)
        {
        	wolfMedia.Play();
        }

        private void StopMedia(object sender, RoutedEventArgs e)
        {
            starMedia.Stop();
        }

        private void PauseMedia(object sender, RoutedEventArgs e)
        {
            starMedia.Pause();
        }

        private void PlayMedia(object sender, RoutedEventArgs e)
        {
            starMedia.Play();
        }

       
    }
 }