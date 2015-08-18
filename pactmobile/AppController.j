/*
 * AppController.j
 * pactmobile
 *
 * Created by You on August 18, 2015.
 * Copyright 2015, Your Company All rights reserved.
 */

@import <Foundation/Foundation.j>
@import <AppKit/AppKit.j>
@import "TouchScrollView.j"


@implementation AppController : CPObject
{
    @outlet CPWindow    theWindow;
    @outlet CPView viewContainerView;
    @outlet CPView viewInsideScrollView;

    @outlet TouchScrollView myScrollView;
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

    // In this case, we want the window from Cib to become our full browser window
    [theWindow setFullPlatformWindow:YES];

    //CPLog.info("theWindow: ") + [theWindow frame].origin.x;
    CPLog.info("theWindow: " + CGStringFromRect([theWindow frame]));
    CPLog.info("viewContainerView: " + CGStringFromRect([viewContainerView frame]));
    CPLog.info("myScrollView: " + CGStringFromRect([myScrollView frame]));
    CPLog.info("viewInsideScrollView: " + CGStringFromRect([viewInsideScrollView frame]));

//150818    [viewInsideScrollView setBackgroundColor:[CPColor redColor]];

}

@end
