#import <Cocoa/Cocoa.h>
#import "xcc_general_include.h"

@interface AppController : NSObject

@property (assign) IBOutlet NSWindow* theWindow;
@property (assign) IBOutlet NSTextField* myTextField;
@property (assign) IBOutlet NSTextField* myLabel;

- (IBAction)sayHello:(id)aSender;

@end
