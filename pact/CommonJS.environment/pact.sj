@STATIC;1.0;p;15;AppController.jt;12296;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.ji;17;TouchScrollView.jt;12206;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);objj_executeFile("TouchScrollView.j", YES);{var the_class = objj_allocateClassPair(CPObject, "AppController"),
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
    self.xPosition = ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).origin.x;
    CPLog.info("scrollViewDidScroll - xPosition - [[aScrollView contentView] bounds].origin.x: " + self.xPosition);
    self.xdocumentViewWidth = ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    self.xdocumentViewWidthScreenPortion = self.xdocumentViewWidth / 3;
    self.xdocumentViewWidthScreenPortion = self.xdocumentViewWidthScreenPortion - 30;
    CPLog.info("scrollViewDidScroll-xdocumentViewWidthScreenPortion: " + self.xdocumentViewWidthScreenPortion);
    self.xdocumentVisibleRectOriginX = self.xPosition + 900;
    CPLog.info("scrollViewDidScroll-xdocumentVisibleRectOriginX: " + self.xdocumentVisibleRectOriginX);
    CPLog.info("scrollViewDidScroll - imgViewWhoDet.frame : " + CGStringFromRect(((___r1 = self.imgViewWhoDet), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    CPLog.info("scrollViewDidScroll - imgViewWhoDet2.frame : " + CGStringFromRect(((___r1 = self.imgViewWhoDet2), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    if (self.xdocumentVisibleRectOriginX < self.xdocumentViewWidthScreenPortion)
    {
        CPLog.info("Screen1 boundaires");
        ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "scrollRectToVisible:", CGRectMake(0.0, 0.0, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.width, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.height)));
    }
    else
    {
        if (self.xdocumentVisibleRectOriginX > self.xdocumentViewWidthScreenPortion)
        {
            if (self.xdocumentVisibleRectOriginX < 2 * self.xdocumentViewWidthScreenPortion)
            {
                CPLog.info("Screen2 boundaires");
                ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "scrollRectToVisible:", CGRectMake(1 * self.xdocumentViewWidthScreenPortion + 5.0, 0.0, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.width, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.height)));
            }
            else
            {
                CPLog.info("Screen3 boundaires");
                ((___r1 = (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "scrollRectToVisible:", CGRectMake(2 * self.xdocumentViewWidthScreenPortion + 85.0, 0.0, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.width, (aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect")).size.height)));
            }
        }
    }
    ((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "frame"))));
    ((___r1 = self.btnTest), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewWho2), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "frame")).origin.x + ((___r2 = self.imgViewWho2), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "frame")).size.width * (200 / 1600), ((___r2 = self.imgViewWho2), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "frame")).size.height * (720 / 1200), 123.0, 21.0)));
    ((___r1 = self.imgViewWhoDet2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "frame"))));
    CPLog.info("scrollViewDidScroll - imgViewWho.frame : " + CGStringFromRect(((___r1 = self.imgViewWho), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    CPLog.info("scrollViewDidScroll - imgViewWho2.frame : " + CGStringFromRect(((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    CPLog.info("scrollViewDidScroll - btnTest.frame : " + CGStringFromRect(((___r1 = self.btnTest), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    var ___r1, ___r2;
}
,["void","CPScrollView"]), new objj_method(sel_getUid("boundsDidChangeNotification:"), function $AppController__boundsDidChangeNotification_(self, _cmd, notification)
{
    self.xPosition = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).origin.x;
    self.xcontentViewWidth = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    self.xdocumentViewWidth = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    self.xdocumentViewOriginX = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).origin.x;
    CPLog.trace("boundsDidChangeNotification - documentVisibleRect : " + CGStringFromRect(((___r1 = self.myScrollView), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "documentVisibleRect"))));
    CPLog.trace("boundsDidChangeNotification - xPosition : " + self.xPosition);
    CPLog.trace("xcontentViewWidth : " + self.xcontentViewWidth);
    CPLog.trace("xdocumentViewWidth : " + self.xdocumentViewWidth);
    CPLog.trace("xdocumentViewOriginX : " + self.xdocumentViewOriginX);
    ((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 1800.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 + 313.0 - ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    ((___r1 = self.imgViewWhoDet2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 1800.0 + 1800.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 + 100.0 - ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    ((___r1 = self.imgViewLogo2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 0.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 - ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    CPLog.trace("imgViewLogo1.frame : " + CGStringFromRect(((___r1 = self.imgViewLogo1), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    CPLog.trace("imgViewLogo2.frame : " + CGStringFromRect(((___r1 = self.imgViewLogo2), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
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
p;17;TouchScrollView.jt;2506;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.jt;2439;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);{var the_class = objj_allocateClassPair(CPScrollView, "TouchScrollView"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("touchStartingPointX"), new objj_ivar("touchStartingPointY")]);objj_registerClassPair(the_class);
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
    if ("ontouchstart" in document.documentElement)
    {
        var element = self._DOMElement;
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
    var deltaX = (event.touches[0].pageX - self.touchStartingPointX) * 10;
    var deltaY = (event.touches[0].pageY - self.touchStartingPointY) * 10;
    self.isa.objj_msgSend1(self, "moveByOffset:", CGSizeMake(-deltaX, -deltaY));
    self.touchStartingPointX = event.touches[0].pageX;
    self.touchStartingPointY = event.touches[0].pageY;
    event.stopPropagation();
}
,["void","id"])]);
}e;