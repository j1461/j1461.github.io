#import <Cocoa/Cocoa.h>
#import "xcc_general_include.h"

@interface AppController : NSObject

@property (assign) IBOutlet NSWindow* theWindow;
@property (assign) IBOutlet NSView* viewContainerView;
@property (assign) IBOutlet NSView* viewInsideScrollView;
@property (assign) IBOutlet TouchScrollView* myScrollView;

@end
