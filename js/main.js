TweenMax.from("body", .5, {
				scale: 1.5,
				opacity: .5,
				delay: .5,
				ease:  SlowMo.ease.config(0.7, 0.7, false)
	});

// 
function nk() {
	TweenMax.from(".footer1", .5, {
				scale: 1.5,
				opacity: 0,
				delay: .2,
				ease:  SlowMo.ease.config(0.7, 0.7, false)
	});
};