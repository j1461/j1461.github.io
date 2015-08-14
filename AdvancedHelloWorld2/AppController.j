/*
 * AppController.j
 * AdvancedHelloWorld2
 *
 * Created by You on August 14, 2015.
 * Copyright 2015, Your Company All rights reserved.
 */

@import <Foundation/Foundation.j>
@import <AppKit/AppKit.j>


@implementation AppController : CPObject
{
    @outlet CPWindow    theWindow;
	
	@outlet CPTextField myTextField;
	@outlet CPTextField myLabel ;
}

- (void)applicationDidFinishLaunching:(CPNotification)aNotification
{
    // This is called when the application is done loading.
}

- (void)awakeFromCib
{
    // This is called when the cib is done loading.
    // You can implement this method on any object instantiated from a Cib.
    // It's a useful hook for setting up current UI values, and other things.

    /// In this case, we want the window from Cib to become our full browser window
    [theWindow setFullPlatformWindow:YES];
}

- (IBAction)sayHello:(id)aSender
{
   /// We get the content of the textfield and we set it as the value of the label.
   [myLabel setStringValue:[myTextField stringValue]];
}

@end
