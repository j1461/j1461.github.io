/*
 * AppController.j
 * ipadtouch
 *
 * Created by You on August 17, 2015.
 * Copyright 2015, Your Company All rights reserved.
 */

@import <Foundation/Foundation.j>
@import <AppKit/AppKit.j>


@implementation AppController : CPObject
{
	float touchStartingPointX;
	float touchStartingPointY;
}

- (void)applicationDidFinishLaunching:(CPNotification)aNotification
{
//    var theWindow = [[CPWindow alloc] initWithContentRect:CGRectMakeZero() styleMask:CPBorderlessBridgeWindowMask],

//150817    [contentView addSubview:label];

//150817    [theWindow orderFront:self];

    // Uncomment the following line to turn on the standard menu bar.
    //[CPMenu setMenuBarVisible:YES];
	
    touchStartingPointX = 0.0;

        touchStartingPointY = 0.0;

        var theWindow = [[CPWindow alloc] initWithContentRect:CGRectMakeZero() styleMask:CPBorderlessBridgeWindowMask];

        [theWindow setAcceptsMouseMovedEvents:YES]

        [theWindow setAutorecalculatesKeyViewLoop:YES];

        

        windowContentView = [theWindow contentView];

   //     [windowContentView setBackgroundColor:KKRoAContentViewBackground];

        [windowContentView setPostsFrameChangedNotifications:YES];
		
      //  contentView = [theWindow contentView];

    var label = [[CPTextField alloc] initWithFrame:CGRectMakeZero()];

    [label setStringValue:@"Hello World!"];
    [label setFont:[CPFont boldSystemFontOfSize:24.0]];

    [label sizeToFit];

    [label setAutoresizingMask:CPViewMinXMargin | CPViewMaxXMargin | CPViewMinYMargin | CPViewMaxYMargin];
    [label setCenter:[windowContentView center]];

       

        var element = windowContentView._DOMElement;

        element.addEventListener("touchstart", touchStart, false);

        element.addEventListener("touchmove", touchMove, false);

       

        verticalScrollView = [[CPScrollView alloc] initWithFrame:[windowContentView frame]];

        [verticalScrollView setHasVerticalScroller:YES];

        [verticalScrollView setHasHorizontalScroller:NO];

        [verticalScrollView setAutohidesScrollers:NO];

        [verticalScrollView setAutoresizingMask:CPViewWidthSizable | CPViewHeightSizable];

        verticalContentView = [[CPView alloc] initWithFrame:CGRectMake(0.0, 0.0, [windowContentView frame].size.width, 1060.0)];

        [verticalContentView setAutoresizingMask:CPViewWidthSizable | CPViewMaxYMargin];

        [verticalContentView setBackgroundColor:[CPColor greenColor]];

        [verticalScrollView setDocumentView:verticalContentView];
		
		[[verticalScrollView contentView] addSubview:label];


        horizontalScrollView = [[CPScrollView alloc] initWithFrame:CGRectMake(0.0, 0.0, [windowContentView frame].size.width, [verticalContentView frame].size.height - 0.0- 0.0)];

        [horizontalScrollView setHasVerticalScroller:NO];

        [horizontalScrollView setHasHorizontalScroller:YES];

        [horizontalScrollView setBackgroundColor:[CPColor redColor]];

        [horizontalScrollView setAutoresizingMask:CPViewWidthSizable | CPViewHeightSizable];

        contentView = [[CPView alloc] initWithFrame:CGRectMake(0.0, 0.0, 1800.0, [horizontalScrollView frame].size.height)];

        [contentView setAutoresizingMask:CPViewWidthSizable | CPViewMaxYMargin];

        [horizontalScrollView setDocumentView:contentView];

        

        [windowContentView addSubview:verticalScrollView];

        [verticalContentView addSubview:horizontalScrollView];
}

function touchStart(event) {

    touchStartingPointX = event.touches[0].pageX;

    touchStartingPointY = event.touches[0].pageY;

}

function touchMove(event) {

    var deltaX = event.touches[0].pageX - touchStartingPointX;

    var deltaY = event.touches[0].pageY - touchStartingPointY;

    [verticalScrollView  moveByOffset:CGSizeMake(deltaX, deltaY)];

    [horizontalScrollView  moveByOffset:CGSizeMake(deltaX, deltaY)];

    touchStartingPointX = event.touches[0].pageX;

    touchStartingPointY = event.touches[0].pageY;

}

@end
