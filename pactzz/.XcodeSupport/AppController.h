#import <Cocoa/Cocoa.h>
#import "xcc_general_include.h"

@interface AppController : NSObject

@property (assign) IBOutlet NSWindow* theWindow;
@property (assign) IBOutlet NSScrollView* myScrollView;
@property (assign) IBOutlet NSView* myView;
@property (assign) IBOutlet NSImageView* imgViewLogo1;
@property (assign) IBOutlet NSImageView* imgViewLogo2;
@property (assign) IBOutlet NSImageView* imgViewWho;
@property (assign) IBOutlet NSImageView* imgViewWho2;
@property (assign) IBOutlet NSImageView* imgViewWhoDet;
@property (assign) IBOutlet NSImageView* imgViewWhoDet2;
@property (assign) IBOutlet CPLabel* lblTest;

@end
