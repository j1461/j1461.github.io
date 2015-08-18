/*
 * TouchScrollView.j
 * iPadScrolling
 *
 * Created by Benjamin FROLICHER
 on December 8, 2013.
 * Copyright 2013, Benjamin FROLICHER All rights reserved.
 */

@import <Foundation/Foundation.j>
@import <AppKit/AppKit.j>


@implementation TouchScrollView : CPScrollView
{
    float touchStartingPointX;
    float touchStartingPointY;
}

- (id)initWithFrame:(CGRect)frame
{

	self = [super initWithFrame:frame];
	if(self)
	{
		[self addTouchListeners];
	}

	return self;
}

- (id)initWithCoder:(CPCoder)aCoder
{
	self = [super initWithCoder:aCoder];
	if(self)
	{
		[self addTouchListeners];
	}
    return self;
}

- (void)addTouchListeners
{
	if("ontouchstart" in document.documentElement)  // Works fine on iOS and Android
	{ 
		var element = self._DOMElement;
		element.addEventListener("touchstart", function (event) {[self performTouchStart:event]}, false);
    	element.addEventListener("touchmove", function (event) {[self performTouchMove:event]}, false);
	}
}

- (void)performTouchStart:(id)event
{
	self.touchStartingPointX = event.touches[0].pageX;
	self.touchStartingPointY = event.touches[0].pageY;
}

- (void)performTouchMove:(id)event
{
//150818	var deltaX = event.touches[0].pageX - touchStartingPointX;
//150818    var deltaY = event.touches[0].pageY - touchStartingPointY;
    var deltaX = (event.touches[0].pageX - touchStartingPointX)*25;
    var deltaY = (event.touches[0].pageY - touchStartingPointY)*25;

    [self moveByOffset:CGSizeMake(-deltaX, -deltaY)];
    touchStartingPointX = event.touches[0].pageX;
    touchStartingPointY = event.touches[0].pageY;
    event.stopPropagation();
}

@end