@STATIC;1.0;p;15;AppController.jt;9719;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.ji;17;TouchScrollView.jt;9630;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);objj_executeFile("TouchScrollView.j", YES);{var the_class = objj_allocateClassPair(CPObject, "AppController"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("theWindow"), new objj_ivar("myScrollView"), new objj_ivar("myView"), new objj_ivar("imgViewLogo1"), new objj_ivar("imgViewLogo2"), new objj_ivar("imgViewWho"), new objj_ivar("imgViewWho2"), new objj_ivar("imgViewWhoDet"), new objj_ivar("imgViewWhoDet2"), new objj_ivar("btnTest"), new objj_ivar("myLabel"), new objj_ivar("xPosition"), new objj_ivar("xPositionWidth"), new objj_ivar("xPositionImage"), new objj_ivar("xscrollerWidth"), new objj_ivar("xcontentViewWidth"), new objj_ivar("xdocumentViewWidth"), new objj_ivar("xdocumentViewWidthScreenPortion"), new objj_ivar("xdocumentViewOriginX"), new objj_ivar("xdocumentVisibleRectOriginX"), new objj_ivar("xdocumentVisibleRectOriginXVar"), new objj_ivar("lastContentOffset")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("applicationDidFinishLaunching:"), function $AppController__applicationDidFinishLaunching_(self, _cmd, aNotification)
{
    self.lastContentOffset = 1.0;
    ((___r1 = self.myScrollView), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setDelegate:", self));
    ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setBackgroundColor:", CPColor.isa.objj_msgSend0(CPColor, "clearColor")));
    ((___r1 = self.myScrollView), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setAutohidesScrollers:", NO));
    ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setPostsBoundsChangedNotifications:", YES));
    ((___r1 = CPNotificationCenter.isa.objj_msgSend0(CPNotificationCenter, "defaultCenter")), ___r1 == null ? null : ___r1.isa.objj_msgSend(___r1, "addObserver:selector:name:object:", self, sel_getUid("boundsDidChangeNotification:"), CPViewBoundsDidChangeNotification, ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))));
    var ___r1, ___r2;
}
,["void","CPNotification"]), new objj_method(sel_getUid("awakeFromCib"), function $AppController__awakeFromCib(self, _cmd)
{
    ((___r1 = self.theWindow), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFullPlatformWindow:", YES));
    var ___r1;
}
,["void"]), new objj_method(sel_getUid("scrollViewDidScroll:"), function $AppController__scrollViewDidScroll_(self, _cmd, aScrollView)
{
    CPLog.trace("scrollViewDidScroll");
    self.xPosition = ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).origin.x;
    self.xdocumentViewWidth = ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    self.xdocumentViewWidthScreenPortion = self.xdocumentViewWidth / 3;
    self.xdocumentViewWidthScreenPortion = self.xdocumentViewWidthScreenPortion - 30;
    self.xdocumentVisibleRectOriginX = self.xPosition + 900;
    if (self.xdocumentVisibleRectOriginX < self.xdocumentViewWidthScreenPortion)
    {
        ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "scrollRectToVisible:", CGRectMake(0.0, 0.0, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.width, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.height)));
    }
    else
    {
        if (self.xdocumentVisibleRectOriginX > self.xdocumentViewWidthScreenPortion)
        {
            if (self.xdocumentVisibleRectOriginX < 2 * self.xdocumentViewWidthScreenPortion)
            {
                ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "scrollRectToVisible:", CGRectMake(1 * self.xdocumentViewWidthScreenPortion + 5.0, 0.0, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.width, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.height)));
            }
            else
            {
                ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "scrollRectToVisible:", CGRectMake(2 * self.xdocumentViewWidthScreenPortion + 85.0, 0.0, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.width, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.height)));
            }
        }
    }
    ((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "frame"))));
    ((___r1 = self.imgViewWhoDet2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "frame"))));
    var ___r1, ___r2;
}
,["void","CPScrollView"]), new objj_method(sel_getUid("boundsDidChangeNotification:"), function $AppController__boundsDidChangeNotification_(self, _cmd, notification)
{
    self.xPosition = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).origin.x;
    self.xcontentViewWidth = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    self.xdocumentViewWidth = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    self.xdocumentViewOriginX = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).origin.x;
    ((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 1800.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 + 313.0 - ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    ((___r1 = self.imgViewWhoDet2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 1800.0 + 1800.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 + 100.0 - ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    ((___r1 = self.imgViewLogo2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 0.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 - ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    var ___r1, ___r2;
}
,["void","CPNotification"]), new objj_method(sel_getUid("scrollWheel:"), function $AppController__scrollWheel_(self, _cmd, anEvent)
{
    CPLog.info("scrollWheel event");
}
,["void","CPEvent"]), new objj_method(sel_getUid("swap:"), function $AppController__swap_(self, _cmd, sender)
{
    CPLog.info("Button clicked");
    if (((___r1 = self.myLabel), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "stringValue")) == "Hello World!")
        ((___r1 = self.myLabel), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setStringValue:", "Goodbye!"));
    else
        ((___r1 = self.myLabel), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setStringValue:", "Hello World!"));
    var ___r1;
}
,["void","id"])]);
}p;6;main.jt;292;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.ji;15;AppController.jt;206;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);objj_executeFile("AppController.j", YES);main = function(args, namedArgs)
{
    CPApplicationMain(args, namedArgs);
}
p;17;TouchScrollView.jt;4395;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.jI;21;Foundation/CPObject.jI;16;AppKit/CPEvent.jt;4281;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);objj_executeFile("Foundation/CPObject.j", NO);objj_executeFile("AppKit/CPEvent.j", NO);_DOMWindow = window;
{var the_class = objj_allocateClassPair(CPScrollView, "TouchScrollView"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("touchStartingPointX"), new objj_ivar("touchStartingPointY"), new objj_ivar("comingFromMousewheel")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("initWithFrame:"), function $TouchScrollView__initWithFrame_(self, _cmd, frame)
{
    self = objj_msgSendSuper({ receiver:self, super_class:objj_getClass("TouchScrollView").super_class }, "initWithFrame:", frame);
    if (self)
    {
        (self == null ? null : self.isa.objj_msgSend0(self, "addTouchListeners"));
    }
    return self;
}
,["id","CGRect"]), new objj_method(sel_getUid("initWithCoder:"), function $TouchScrollView__initWithCoder_(self, _cmd, aCoder)
{
    self = objj_msgSendSuper({ receiver:self, super_class:objj_getClass("TouchScrollView").super_class }, "initWithCoder:", aCoder);
    if (self)
    {
        (self == null ? null : self.isa.objj_msgSend0(self, "addTouchListeners"));
    }
    return self;
}
,["id","CPCoder"]), new objj_method(sel_getUid("addTouchListeners"), function $TouchScrollView__addTouchListeners(self, _cmd)
{
    var element = self._DOMElement;
    if ("ontouchstart" in document.documentElement)
    {
        element.addEventListener("touchstart", function(event)
        {
            self.isa.objj_msgSend1(self, "performTouchStart:", event);
        }, false);
        element.addEventListener("touchmove", function(event)
        {
            self.isa.objj_msgSend1(self, "performTouchMove:", event);
        }, false);
    }
}
,["void"]), new objj_method(sel_getUid("performTouchStart:"), function $TouchScrollView__performTouchStart_(self, _cmd, event)
{
    self.touchStartingPointX = event.touches[0].pageX;
    self.touchStartingPointY = event.touches[0].pageY;
}
,["void","id"]), new objj_method(sel_getUid("performTouchMove:"), function $TouchScrollView__performTouchMove_(self, _cmd, event)
{
    var deltaX = event.touches[0].pageX - self.touchStartingPointX;
    var deltaY = event.touches[0].pageY - self.touchStartingPointY;
    self.isa.objj_msgSend1(self, "moveByOffset:", CGSizeMake(-deltaX, -deltaY));
    self.touchStartingPointX = event.touches[0].pageX * 10;
    self.touchStartingPointY = event.touches[0].pageY * 10;
    event.stopPropagation();
}
,["void","id"]), new objj_method(sel_getUid("performMousewheelStart:"), function $TouchScrollView__performMousewheelStart_(self, _cmd, event)
{
    CPLog.info("");
    var aDOMEvent = window.event;
    var theDocument = _DOMWindow.document;
    var _DOMScrollingElement = theDocument.createElement("div");
    var deltaX = _DOMScrollingElement.scrollLeft - 500 || aDOMEvent.deltaX || 0;
    CPLog("MouseScrollWheel:deltaX   " + deltaX);
    CPLog("MouseScrollWheel:scrollingDeltaX  " + (event == null ? null : event.isa.objj_msgSend0(event, "scrollingDeltaX")));
    var deltaY = _DOMScrollingElement.scrollTop - 500 || aDOMEvent.deltaY || 0;
    CPLog("MouseScrollWheel:deltaY   " + deltaY);
    CPLog("MouseScrollWheel:scrollingDeltaY  " + (event == null ? null : event.isa.objj_msgSend0(event, "scrollingDeltaY")));
    var windowNumber = 0;
    var timestamp = CPEvent.isa.objj_msgSend0(CPEvent, "currentTimestamp");
    var modifierFlags = (aDOMEvent.shiftKey ? CPShiftKeyMask : 0) | (aDOMEvent.ctrlKey ? CPControlKeyMask : 0) | (aDOMEvent.altKey ? CPAlternateKeyMask : 0) | (aDOMEvent.metaKey ? CPCommandKeyMask : 0);
    var event = CPEvent.isa.objj_msgSend(CPEvent, "mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:", CPScrollWheel, location, modifierFlags, timestamp, windowNumber, nil, -1, 1, 0);
    if (deltaX || deltaY)
    {
        (CPApp == null ? null : CPApp.isa.objj_msgSend1(CPApp, "sendEvent:", event));
        self.comingFromMousewheel = 999.0;
        self.isa.objj_msgSend1(self, "moveByOffset:", CGSizeMake(-deltaX, -deltaY));
    }
    _DOMScrollingElement.scrollLeft = 500;
    _DOMScrollingElement.scrollTop = 500;
}
,["void","id"])]);
}e;