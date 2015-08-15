/*
 * AppController.j
 * pact
 *
 * Created by You on August 14, 2015.
 * Copyright 2015, Your Company All rights reserved.
 */

@import <Foundation/Foundation.j>
@import <AppKit/AppKit.j>


@implementation AppController : CPObject
{
    @outlet CPWindow    theWindow;

    @outlet CPScrollView myScrollView;
	@outlet CPView myView;
}

- (void)applicationDidFinishLaunching:(CPNotification)aNotification
{
    // This is called when the application is done loading.
    // Uncomment the following line to turn on the standard menu bar.
   // [CPMenu setMenuBarVisible:NO];
   
   [[myScrollView contentView] setBackgroundColor:[CPColor colorWithRed:213.0 / 255.0 green:221.0 / 255.0 blue:230.0 / 255.0 alpha:1.0]];
 	//[[myScrollView contentView] setBackgroundColor:[CPColor yellowColor]];
	
	//[myView setBackgroundColor:[CPColor redColor]];
	//[myScrollView setBackgroundColor:[CPColor yellowColor]];
	
	[myScrollView setAutohidesScrollers:NO];
	
	//[myScrollView setContentSize:CGSizeMake(100.0, 100.0)];
	
	//[myScrollView setHorizontalScroller:[[CPScroller alloc] initWithFrame:CGRectMake(0.0, 0.0, MAX(CGRectGetWidth(bounds), [CPScroller scrollerWidthInStyle:_scrollerStyle] + 1), [CPScroller scrollerWidthInStyle:_scrollerStyle])]];
	//[[myScrollView horizontalScroller] setFrameSize:CGSizeMake(CGRectGetWidth(bounds), [CPScroller scrollerWidthInStyle:_scrollerStyle])];
	
///	[myScrollView setDocumentView:myView];
}

- (void)awakeFromCib
{
    // This is called when the cib is done loading.
    // You can implement this method on any object instantiated from a Cib.
    // It's a useful hook for setting up current UI values, and other things.

    // In this case, we want the window from Cib to become our full browser window
    [theWindow setFullPlatformWindow:YES];
}

@end
