@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.jt;7994;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);{var the_class = objj_allocateClassPair(CPObject, "AppController"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("theWindow"), new objj_ivar("myScrollView"), new objj_ivar("myView"), new objj_ivar("imgViewLogo1"), new objj_ivar("imgViewLogo2"), new objj_ivar("imgViewWho"), new objj_ivar("imgViewWho2"), new objj_ivar("imgViewWhoDet"), new objj_ivar("imgViewWhoDet2"), new objj_ivar("xPosition"), new objj_ivar("xPositionWidth"), new objj_ivar("xPositionImage"), new objj_ivar("xscrollerWidth"), new objj_ivar("xcontentViewWidth"), new objj_ivar("xdocumentViewWidth"), new objj_ivar("lastContentOffset"), new objj_ivar("touchStartingPointX"), new objj_ivar("touchStartingPointY")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("applicationDidFinishLaunching:"), function $AppController__applicationDidFinishLaunching_(self, _cmd, aNotification)
{
    self.isa.objj_msgSend0(self, "addTouchListeners");
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
,["void"]), new objj_method(sel_getUid("boundsDidChangeNotification:"), function $AppController__boundsDidChangeNotification_(self, _cmd, notification)
{
    self.xPosition = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).origin.x;
    self.xcontentViewWidth = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    self.xdocumentViewWidth = ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "documentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "bounds")).size.width;
    CPLog.trace("boundsDidChangeNotification - documentVisibleRect : " + CGStringFromRect(((___r1 = self.myScrollView), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "documentVisibleRect"))));
    CPLog.trace("xPosition : " + self.xPosition);
    CPLog.trace("xcontentViewWidth : " + self.xcontentViewWidth);
    CPLog.trace("xdocumentViewWidth : " + self.xdocumentViewWidth);
    ((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 1800.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 + 313.0 - ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewWho), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    ((___r1 = self.imgViewWhoDet2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 1800.0 + 1800.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 + 100.0 - ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewWhoDet), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    ((___r1 = self.imgViewLogo2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 0.0 - self.xPosition / ((self.xdocumentViewWidth - self.xcontentViewWidth) / (((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x + 300.0 - ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).origin.x)), 0.0, ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.width, ((___r2 = self.imgViewLogo1), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "bounds")).size.height)));
    CPLog.trace("imgViewLogo1.frame : " + CGStringFromRect(((___r1 = self.imgViewLogo1), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    CPLog.trace("imgViewLogo2.frame : " + CGStringFromRect(((___r1 = self.imgViewLogo2), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    CPLog.trace("imgViewWho.frame : " + CGStringFromRect(((___r1 = self.imgViewWho), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    CPLog.trace("imgViewWho2.frame : " + CGStringFromRect(((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend0(___r1, "frame"))));
    var ___r1, ___r2;
}
,["void","CPNotification"]), new objj_method(sel_getUid("addTouchListeners"), function $AppController__addTouchListeners(self, _cmd)
{
    CPLog.info("addTouchListeners");
    if ("ontouchstart" in document.documentElement)
    {
        CPLog.info("addTouchListeners - ontouchstart");
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
,["void"]), new objj_method(sel_getUid("performTouchStart:"), function $AppController__performTouchStart_(self, _cmd, event)
{
    CPLog.info("performTouchStart");
    self.touchStartingPointX = event.touches[0].pageX;
    self.touchStartingPointY = event.touches[0].pageY;
}
,["void","id"]), new objj_method(sel_getUid("performTouchMove:"), function $AppController__performTouchMove_(self, _cmd, event)
{
    CPLog.info("performTouchMove");
    var deltaX = event.touches[0].pageX - self.touchStartingPointX;
    var deltaY = event.touches[0].pageY - self.touchStartingPointY;
    self.isa.objj_msgSend1(self, "moveByOffset:", CGSizeMake(-deltaX, -deltaY));
    self.touchStartingPointX = event.touches[0].pageX;
    self.touchStartingPointY = event.touches[0].pageY;
    event.stopPropagation();
}
,["void","id"])]);
}