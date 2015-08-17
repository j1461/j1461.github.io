/*
 * AppController.j
 * pact
 *
 * Created by You on August 14, 2015.
 * Copyright 2015, Your Company All rights reserved.
 */

@import <Foundation/Foundation.j>
@import <AppKit/AppKit.j>

/*150816function touchStart(event) {

    CPLog.info("touchStart event");

    touchStartingPointX = event.touches[0].pageX;

    touchStartingPointY = event.touches[0].pageY;

}
*/

/*150816function touchMove(event) {

    CPLog.info("touchMove event");

    var deltaX = event.touches[0].pageX - touchStartingPointX;

    var deltaY = event.touches[0].pageY - touchStartingPointY;

//150816    [verticalScrollView  moveByOffset:CGSizeMake(deltaX, deltaY)];

//150816[horizontalScrollView  moveByOffset:CGSizeMake(deltaX, deltaY)];
    [self.myScrollView  moveByOffset:CGSizeMake(deltaX, deltaY)];

    touchStartingPointX = event.touches[0].pageX;

    touchStartingPointY = event.touches[0].pageY;

}
*/
@implementation AppController : CPObject
{
    @outlet CPWindow    theWindow;

    @outlet CPScrollView myScrollView;
	@outlet CPView myView;

    @outlet CPImageView imgViewLogo1;
    @outlet CPImageView imgViewLogo2;

    @outlet CPImageView imgViewWho;
    @outlet CPImageView imgViewWho2;

    @outlet CPImageView imgViewWhoDet;
    @outlet CPImageView imgViewWhoDet2;

@outlet CPLabel lblTest;

    float xPosition;
    float xPositionWidth;
    float xPositionImage;

    float xscrollerWidth;
    float xcontentViewWidth;
    float xdocumentViewWidth;

    float lastContentOffset;

//150816    float touchStartingPointX;
//150816    float touchStartingPointY;

//150816    float touchStartingPointX;

//150816    float touchStartingPointY;

float touchStartingPointX;
float touchStartingPointY;

}

- (void)applicationDidFinishLaunching:(CPNotification)aNotification
{

//150816    touchStartingPointX = 0.0;

//150816    touchStartingPointY = 0.0;

//150816   theWindow setAcceptsMouseMovedEvents:YES]

//150816    [theWindow setAutorecalculatesKeyViewLoop:YES];

//150816    windowContentView = [theWindow contentView];

//150816    [windowContentView setPostsFrameChangedNotifications:YES];



//150816var element = windowContentView._DOMElement;
//150816var element = [myScrollView contentView]._DOMElement;

//150816element.addEventListener("touchstart", touchStart, false);

//150816    element.addEventListener("touchmove", touchMove, false);

    [self addTouchListeners];

    lastContentOffset = 1.0;

    // This is called when the application is done loading.
    // Uncomment the following line to turn on the standard menu bar.
   // [CPMenu setMenuBarVisible:NO];

    [myScrollView setDelegate:self];

//150815-1   [[myScrollView contentView] setBackgroundColor:[CPColor colorWithRed:213.0 / 255.0 green:221.0 / 255.0 blue:230.0 / 255.0 alpha:1.0]];
//150815-1 	[[myScrollView contentView] setBackgroundColor:[CPColor yellowColor]];
//150815-2    [[myScrollView contentView] setBackgroundColor:[CPColor clearColor]];
//[[myScrollView contentView] setBackgroundColor:[CPColor yellowColor]];
    [[myScrollView contentView] setBackgroundColor:[CPColor clearColor]];

//150815    [myScrollView setHidden:YES];
   // [myScrollView setHidden:YES];
  //  [myView setHidden:YES];
    [myView setBackgroundColor:[CPColor greenColor]];

   // [imgViewWho2 setHidden:YES];
	
//150815-1	[myView setBackgroundColor:[CPColor redColor]];
	[myScrollView setBackgroundColor:[CPColor yellowColor]];

  //  [myScrollView setHorizontalPageScroll:0.0];
  //  [myScrollView setHorizontalLineScroll:1.0];

	[myScrollView setAutohidesScrollers:NO];
	
	//[myScrollView setContentSize:CGSizeMake(100.0, 100.0)];
	
	//[myScrollView setHorizontalScroller:[[CPScroller alloc] initWithFrame:CGRectMake(0.0, 0.0, MAX(CGRectGetWidth(bounds), [CPScroller scrollerWidthInStyle:_scrollerStyle] + 1), [CPScroller scrollerWidthInStyle:_scrollerStyle])]];
	//[[myScrollView horizontalScroller] setFrameSize:CGSizeMake(CGRectGetWidth(bounds), [CPScroller scrollerWidthInStyle:_scrollerStyle])];
	
//	[myScrollView setDocumentView:myView];

    // log the content of the label
    //CPLog.info("The content of the label is: " + [label stringValue]);

    [[myScrollView contentView] setPostsBoundsChangedNotifications:YES];

  //  [myScrollView setDrawsBackground:NO];

  //  objj_msgSend(CachedNotificationCenter, "postNotificationName:object:", CPViewBoundsDidChangeNotification, self);

    [[CPNotificationCenter defaultCenter]
        addObserver:self
        selector:@selector(boundsDidChangeNotification:)
        name:CPViewBoundsDidChangeNotification
        object:[myScrollView contentView]];
}

- (void)awakeFromCib
{
    // This is called when the cib is done loading.
    // You can implement this method on any object instantiated from a Cib.
    // It's a useful hook for setting up current UI values, and other things.

    // In this case, we want the window from Cib to become our full browser window
    [theWindow setFullPlatformWindow:YES];
}

/*- (void)scrollViewWillScroll:(CPScrollView)aScrollView
{
   // CPLogConsole(_cmd+aScrollView);

    CPLog.trace("scrollViewWillScroll - documentVisibleRect : "+CGStringFromRect([aScrollView documentVisibleRect]));
}
*/

/*- (void)scrollViewDidScroll:(CPScrollView)aScrollView
{
  //  CPLogConsole(_cmd+aScrollView);

  //  CPLog.info("The content of the label is: " + aScrollView);


 //   CPLog.trace("scrollView frame    : "+CGStringFromRect([aScrollView frame]));

 //   CPLog.trace("documentView frame  : "+CGStringFromRect([[aScrollView documentView]  frame]));

  //  CPLog.trace("clipView frame      : "+CGStringFromRect([clipView frame]));

    CPLog.trace("scrollViewDidScroll - documentVisibleRect : "+CGStringFromRect([aScrollView documentVisibleRect]));

    CPLog.info("lastContentOffset: " + lastContentOffset);
    xPosition = [[myScrollView contentView] bounds].origin.x;
    CPLog.info("[[myScrollView contentView] bounds].origin.x: " + xPosition);

  //  if (lastContentOffset > myScrollView.contentOffset.x)
    if (lastContentOffset > [[myScrollView contentView] bounds].origin.x)
    {
        CPLog.info("ScrollDirectionRight");

        //scrollDirection = ScrollDirectionRight;
        //deltax,deltay
        [myScrollView  moveByOffset:CGSizeMake(400.0, 0.0)];

        lastContentOffset = [[myScrollView contentView] bounds].origin.x +1;
    }
 //   else if (lastContentOffset < myScrollView.contentOffset.x)
    else if (lastContentOffset < [[myScrollView contentView] bounds].origin.x)
    {
        CPLog.info("ScrollDirectionLeft");

        //scrollDirection = ScrollDirectionLeft;

        //deltax,deltay
        [myScrollView  moveByOffset:CGSizeMake(-400.0, 0.0)];

        lastContentOffset = [[myScrollView contentView] bounds].origin.x -1;
    }

    if (lastContentOffset >= 1517)
    {
        //Reaced end of right side
        lastContentOffset = 1516.0;
    }

    if (lastContentOffset == -1)
    {
        //Reaced end of right side
        lastContentOffset = 1.0;
    }

   // lastContentOffset = myScrollView.contentOffset.x;
 ///   lastContentOffset = [[myScrollView contentView] bounds].origin.x +1;

    //deltax,deltay
//150816    [myScrollView  moveByOffset:CGSizeMake(400.0, 0.0)];
}
*/
/*
- (void)horizontalScrollerDidScroll:(CPScroller)aScroller
{
    //CPLog.trace("documentVisibleRect:");
}
*/

- (void)boundsDidChangeNotification:(CPNotification)notification
{
    //For testing
//150815    return;

    //var scrollPoint = [[myScrollView contentView] bounds].origin;
    xPosition = [[myScrollView contentView] bounds].origin.x;
////    xPositionWidth = [[myScrollView contentView] bounds].size.width;
    xcontentViewWidth = [[myScrollView contentView] bounds].size.width;

   // xscrollerWidth = [CPScroller scrollerWidth];
 //   xscrollerWidth = [myScrollView contentSize].width;

  //  var xCPView = [myScrollView bottomCornerView];
  //  xscrollerWidth = [xCPView bounds].size.width;

    //xscrollerWidth = [[myScrollView documentView] bounds].size.width;

////    xscrollerWidth = [[myScrollView documentView] bounds].size.width;
    xdocumentViewWidth = [[myScrollView documentView] bounds].size.width;


    CPLog.trace("boundsDidChangeNotification - documentVisibleRect : "+CGStringFromRect([myScrollView documentVisibleRect]));

    CPLog.trace("xPosition : " + xPosition);

////    CPLog.trace("xPositionWidth : " + xPositionWidth);

    CPLog.trace("xcontentViewWidth : " + xcontentViewWidth);

////    CPLog.trace("xscrollerWidth : " + xscrollerWidth);

    CPLog.trace("xdocumentViewWidth : " + xdocumentViewWidth);

//150815    [imgViewWho2 setFrame:CGRectMake(1850.0 -xPosition +1181.0,0.0,1550.0,1000.0)];

//150815-2    [imgViewWho setFrame:CGRectMake(1550.0,0.0,1550.0,1000.0)];

 //   [imgViewWho2 setFrame:CGRectMake(3023 -xPosition +8 ,0.0,1550.0,1000.0)];

    //Note: 1480 is where documentVisibleRect.x ends when we scrolled fully to the left
//150815    [imgViewWho2 setFrame:CGRectMake(1600 -(xPosition/(1480/(1600.0-1550.0))),0.0,1550.0,1000.0)];
//150815    [imgViewWho2 setFrame:CGRectMake(1600 -(xPosition/(1480/(1600.0-1550.0))),0.0,1550.0,1000.0)];
//150815    [imgViewWho2 setFrame:CGRectMake(1600 -(xPosition/(1480/(1600.0-1550.0))),0.0,1550.0,1000.0)];
//150815-1    [imgViewWho2 setFrame:CGRectMake(2050.0 -(xPosition/(1480/(2050.0-1550.0))),0.0,1550.0,1000.0)];

//150815-2    [imgViewWho2 setFrame:CGRectMake(2050.0 -(xPosition/([myScrollView bounds].size.width/(2050.0-1550.0)) +80.0),0.0,1550.0,1000.0)];
 //   [imgViewWho2 setFrame:CGRectMake([imgViewWho2 bounds].origin.x -(xPosition/([myScrollView bounds].size.width/([imgViewWho2 bounds].origin.x-[imgViewWho bounds].size.width)) +80.0),0.0,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];
   // [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].size.width +50.0 -(xPosition/([myScrollView bounds].size.width/([imgViewWho2 bounds].origin.x-[imgViewWho bounds].size.width)) +80.0),0.0,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];
//    [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].size.width +50.0 -(xPosition/([myScrollView bounds].size.width/([imgViewWho2 bounds].origin.x-[imgViewWho bounds].size.width)) +80.0),0.0,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];
//    [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].origin.x +50.0,[imgViewWho bounds].origin.y,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];
    //[imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].origin.x +50.0 -(xPosition/((xPosition+1)/([imgViewWho bounds].origin.x +0.0-[imgViewWho bounds].size.width))),[imgViewWho bounds].origin.y,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];
//    [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].origin.x +50.0 -(xPosition/(217/([imgViewWho bounds].origin.x +50.0-1550.0))),0.0,1550.0,1000.0)];


//150815-888    [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].origin.x +50.0 -(xPosition/((xdocumentViewWidth-xcontentViewWidth)/([imgViewWho bounds].origin.x +50.0-[imgViewWho bounds].origin.x))),0.0,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];
//150815    [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].origin.x +260.0 -(xPosition/((xdocumentViewWidth-xcontentViewWidth)/([imgViewWho bounds].origin.x +260.0-[imgViewWho bounds].origin.x))),0.0,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];

//150816    [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].origin.x +1800.0 -(xPosition/((xdocumentViewWidth-xcontentViewWidth)/([imgViewWho bounds].origin.x +300.0-[imgViewWho bounds].origin.x))),0.0,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];

    [imgViewWho2 setFrame:CGRectMake([imgViewWho bounds].origin.x +1800.0 -(xPosition/((xdocumentViewWidth-xcontentViewWidth)/([imgViewWho bounds].origin.x +300.0 +313.0 -[imgViewWho bounds].origin.x))),0.0,[imgViewWho bounds].size.width,[imgViewWho bounds].size.height)];

    [imgViewWhoDet2 setFrame:CGRectMake([imgViewWhoDet bounds].origin.x +1800.0 +1800.0 -(xPosition/((xdocumentViewWidth-xcontentViewWidth)/([imgViewWhoDet bounds].origin.x +300.0 +100.0 -[imgViewWhoDet bounds].origin.x))),0.0,[imgViewWhoDet bounds].size.width,[imgViewWhoDet bounds].size.height)];




    [imgViewLogo2 setFrame:CGRectMake([imgViewLogo1 bounds].origin.x +0.0 -(xPosition/((xdocumentViewWidth-xcontentViewWidth)/([imgViewLogo1 bounds].origin.x +300.0-[imgViewLogo1 bounds].origin.x))),0.0,[imgViewLogo1 bounds].size.width,[imgViewLogo1 bounds].size.height)];

    CPLog.trace("imgViewLogo1.frame : "+CGStringFromRect([imgViewLogo1 frame]));
    CPLog.trace("imgViewLogo2.frame : "+CGStringFromRect([imgViewLogo2 frame]));

    CPLog.trace("imgViewWho.frame : "+CGStringFromRect([imgViewWho frame]));
    CPLog.trace("imgViewWho2.frame : "+CGStringFromRect([imgViewWho2 frame]));

   // CPPoint curOffset = [[myScrollView contentView] bounds].origin;

   // NSRect visibleRect = [[_scrollView contentView] documentVisibleRect];
   // NSLog(@"Visible rect:%@", NSStringFromRect(visibleRect));
   // NSPoint currentScrollPosition = visibleRect.origin;

  //  CPLog.info("Scroll notification received");

    ///[imgViewWho2 setFrame:CGRectMake(1550.0,0.0,1550.0,1000.0)];



  //  xPositionImage = imgViewWho2.bounds.origin.x;

  //  CPLog.trace("xPositionImage : " + xPositionImage);

   // var frame = imgViewWho2.frame;

  //  CPLog.trace("imgViewWho2.frame : "+CGStringFromRect([imgViewWho2 imageRect]));
}

/*150816- (void)scrollWheel:(CPEvent)anEvent
{
    CPLog.info("scrollWheel event");

}
*/
- (void)addTouchListeners
{
    CPLog.info("addTouchListeners");

    if("ontouchstart" in document.documentElement)  // Works fine on iOS and Android
    {
        CPLog.info("addTouchListeners - ontouchstart");

        var element = myScrollView._DOMElement;

        element.addEventListener("touchstart", function (event) {[self performTouchStart:event]}, false);
        element.addEventListener("touchmove", function (event) {[self performTouchMove:event]}, false);
    }
}


- (void)performTouchStart:(id)event
{
    CPLog.info("performTouchStart");

    myScrollView.touchStartingPointX = event.touches[0].pageX;
    myScrollView.touchStartingPointY = event.touches[0].pageY;
}

- (void)performTouchMove:(id)event
{
    CPLog.info("performTouchMove");

    var deltaX = event.touches[0].pageX - touchStartingPointX;
    var deltaY = event.touches[0].pageY - touchStartingPointY;

    [myScrollView moveByOffset:CGSizeMake(-deltaX, -deltaY)];

    touchStartingPointX = event.touches[0].pageX;
    touchStartingPointY = event.touches[0].pageY;

    event.stopPropagation();
}

@end
