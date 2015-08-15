@STATIC;1.0;p;15;AppController.jt;3281;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.jt;3214;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);{var the_class = objj_allocateClassPair(CPObject, "AppController"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("theWindow"), new objj_ivar("myScrollView"), new objj_ivar("myView"), new objj_ivar("imgViewWho2")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("applicationDidFinishLaunching:"), function $AppController__applicationDidFinishLaunching_(self, _cmd, aNotification)
{
    ((___r1 = self.myScrollView), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setDelegate:", self));
    ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setBackgroundColor:", CPColor.isa.objj_msgSend(CPColor, "colorWithRed:green:blue:alpha:", 213.0 / 255.0, 221.0 / 255.0, 230.0 / 255.0, 1.0)));
    ((___r1 = ((___r2 = self.myScrollView), ___r2 == null ? null : ___r2.isa.objj_msgSend0(___r2, "contentView"))), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setBackgroundColor:", CPColor.isa.objj_msgSend0(CPColor, "yellowColor")));
    ((___r1 = self.myView), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setBackgroundColor:", CPColor.isa.objj_msgSend0(CPColor, "redColor")));
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
,["void"]), new objj_method(sel_getUid("scrollViewWillScroll:"), function $AppController__scrollViewWillScroll_(self, _cmd, aScrollView)
{
}
,["void","CPScrollView"]), new objj_method(sel_getUid("scrollViewDidScroll:"), function $AppController__scrollViewDidScroll_(self, _cmd, aScrollView)
{
    CPLog.trace("documentVisibleRect : " + CGStringFromRect((aScrollView == null ? null : aScrollView.isa.objj_msgSend0(aScrollView, "documentVisibleRect"))));
}
,["void","CPScrollView"]), new objj_method(sel_getUid("boundsDidChangeNotification:"), function $AppController__boundsDidChangeNotification_(self, _cmd, notification)
{
    CPLog.info("Scroll notification received");
    ((___r1 = self.imgViewWho2), ___r1 == null ? null : ___r1.isa.objj_msgSend1(___r1, "setFrame:", CGRectMake(0.0, 0.0, 500.0, 500.0)));
    var ___r1;
}
,["void","CPNotification"])]);
}p;6;main.jt;292;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.ji;15;AppController.jt;206;objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);objj_executeFile("AppController.j", YES);main = function(args, namedArgs)
{
    CPApplicationMain(args, namedArgs);
}
e;