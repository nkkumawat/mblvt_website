TweenMax.from(".footer", 1, {
				scale: 1.2,
				opacity: .2,
				delay: .2,
				ease:  SlowMo.ease.config(0.7, 0.7, false)
				// // ease: Bounce.easeOut, y: -500
				// ease: Elastic.easeOut.config(1, 0.3), y: -500
	});

function nk() {
	TweenMax.from(".footer1", .5, {
				scale: 1.5,
				opacity: 0,
				delay: .2,
				ease:  SlowMo.ease.config(0.7, 0.7, false)
	});
};