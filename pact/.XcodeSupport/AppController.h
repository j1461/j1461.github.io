#import <Cocoa/Cocoa.h>
#import "xcc_general_include.h"

@interface AppController : NSObject

@property (assign) IBOutlet NSWindow* theWindow;
@property (assign) IBOutlet NSScrollView* myScrollView;
@property (assign) IBOutlet NSView* myView;

@end
