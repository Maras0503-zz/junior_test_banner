// JavaScript Document
window.onload = function () {
  console.log('Junior developer test.');
  // declare your variables here.
  var background;
  var deezer;
  var ms;
  var skyLogo;
  var whenSwitch;
  var chooseYourReward;
  var oneYearFree;
  var lineRental;
  var twelveMonthsFree;
  var whenYouJoin;
  var findOutMore;
  var whenJoinFrame3;
  var lineRentalFrame3;
  var limitedOffer;

  // store a reference to the canvas which we will draw on.
  var stage = new createjs.Stage('stage');

  // register the stage to handle mouse events.
  stage.enableMouseOver(10);

  // register the Ticker to listen for the tick event.
  createjs.Ticker.addEventListener('tick', handleTick, false);

  // redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
  function handleTick(event) {
      stage.update();
  };

  // create a preloader to load the images.
  var loader = new createjs.LoadQueue(false);

  // when all images are loaded call the handleAllImageLoaded function.
  loader.on('complete', handleAllImagesLoaded, this);

  // provide a manifest of files and ids to be loaded.
  loader.loadManifest([
      {id: 'background', src: 'images/background.png'},
      {id: 'deezer', src: 'images/deezer_reward.png'},
      {id: 'ms', src: 'images/m&s_reward.png'},
      {id: 'skyLogo', src: 'images/sky_logo.png'},
      {id: 'whenSwitch', src: 'images/whenSwitch.png'},
      {id: 'chooseYourReward', src: 'images/choose_your_reward.png'},
      {id: 'oneYearFree', src: 'images/1yearFree.png'},
      {id: 'whenYouJoin', src: 'images/whenYouJoin.png'},
      {id: 'lineRental', src: 'images/lineRental.png'},
      {id: 'twelveMonthsFree', src: 'images/12monthsFree.png'},
      {id: 'findOutMore', src: 'images/findOutMore.png'},
      {id: 'whenJoinFrame3', src: 'images/whenJoinFrame3.png'},
      {id: 'lineRentalFrame3', src: 'images/lineRentalFrame3.png'},
      {id: 'limitedOffer', src: 'images/limited_offer.png'}
  ]);

  /**
   *  Start animation after load all images
   */
  function handleAllImagesLoaded() {
      console.log('All the images have loaded.');
      drawTheBannerBackground();
  };

  /**
   * Show background
   */
  function drawTheBannerBackground() {
      console.log('draw and animate the background.');

      // provide the loader result for the item with id == 'background'
      // as a bitmap which will be stored in our background variable.
      background = new createjs.Bitmap(loader.getResult('background'));

      // set the background bitmap alpha to zero.
      background.alpha = 0;

      // add background to the display list.
      stage.addChild(background);

      // animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
      createjs.Tween.get(background).to({alpha: 1}, 1000);

      // after the background is drawn on the canvas draw and animate the content for frame 1.
      setTimeout(frame1, 100);
  };

  /**
   * Display frame 1
   */
  function frame1() {
      // Assign result from loader to variables
      deezer = new createjs.Bitmap(loader.getResult('deezer'));
      ms = new createjs.Bitmap(loader.getResult('ms'));
      skyLogo = new createjs.Bitmap(loader.getResult('skyLogo'));
      whenSwitch = new createjs.Bitmap(loader.getResult('whenSwitch'));
      chooseYourReward = new createjs.Bitmap(loader.getResult('chooseYourReward'));

      // Changing visibility to hide elements
      whenSwitch.alpha = 0;
      chooseYourReward.alpha = 0;
      // Adding elements to stage
      stage.addChild(deezer, ms, skyLogo, whenSwitch, chooseYourReward);

      // Making animations for frame 1
      _animationFactory(chooseYourReward, {alpha: 1}, 0, 1000, false, false);
      _animationFactory(whenSwitch, {alpha: 1}, 1000, 1000, false, false)
          .call(_animationFactory, [[deezer, ms, whenSwitch, chooseYourReward], {alpha: 0}, 2000, 1000, false, frame2]);
  };

  /**
   * Display frame 2
   */
  function frame2() {
      // Assign result from loader to variables
      whenYouJoin = new createjs.Bitmap(loader.getResult('whenYouJoin'));
      lineRental = new createjs.Bitmap(loader.getResult('lineRental'));
      twelveMonthsFree = new createjs.Bitmap(loader.getResult('twelveMonthsFree'));

      // Changing visability to hide elements
      lineRental.alpha = 0;
      whenYouJoin.alpha = 0;

      // Adding elements to stage
      stage.addChild(lineRental, whenYouJoin, twelveMonthsFree);

      // Move element out of border
      twelveMonthsFree.y = -250;

      // Making animations for frame 2
      _animationFactory(whenYouJoin, {alpha: 1}, 0, 2000, false, false);
      _animationFactory(lineRental, {alpha: 1}, 1000, 1000, false, false);
      createjs.Tween.get(twelveMonthsFree).wait(1000).to({x: 0, y: 0}, 1500, createjs.Ease.bounceOut)
          .call(_animationFactory, [[whenYouJoin, lineRental, twelveMonthsFree], {alpha: 0}, 2000, 1000, false, frame3]);
  };

  /**
   * Display frame 3
   */
  function frame3() {
      // Assign result from loader to variables
      findOutMore = new createjs.Bitmap(loader.getResult('findOutMore'));
      oneYearFree = new createjs.Bitmap(loader.getResult('oneYearFree'));
      lineRentalFrame3 = new createjs.Bitmap(loader.getResult('lineRentalFrame3'));
      whenJoinFrame3 = new createjs.Bitmap(loader.getResult('whenJoinFrame3'));
      limitedOffer = new createjs.Bitmap(loader.getResult('limitedOffer'));

      // Changing visibility to hide elements
      findOutMore.alpha = 0;
      oneYearFree.alpha = 0;
      lineRentalFrame3.alpha = 0;
      whenJoinFrame3.alpha = 0;
      limitedOffer.alpha = 0;

      // Adding elements to stage
      stage.addChild(findOutMore, oneYearFree, lineRentalFrame3, whenJoinFrame3, limitedOffer);

      // Making animations for frame 3
      _animationFactory(findOutMore, {alpha: 1}, 0, 500)
          .call(_animationFactory, [[oneYearFree, whenJoinFrame3, limitedOffer, lineRentalFrame3], {alpha: 1}, 600, 1000, true, blink]);
  };

  /**
   * Functions to create sheen effect on button
   */
  function blink() {
      var shape = new createjs.Shape().set({x: 120, y: 190});
      shape.graphics.beginFill('white').drawRoundRect(0, 0, 30, 50, 0, 0, 100, 0);
      shape.rotation = 30;
      var blurFilter = new createjs.BlurFilter(30, 30, 20);
      shape.filters = [blurFilter];
      var bounds = blurFilter.getBounds();
      shape.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
      shape.alpha = 0;
      stage.addChild(shape);

      _animationFactory(shape, {alpha: 1}, 0, 0, false, false);
      _animationFactory(shape, {x: 280, y: 190}, 0, 600, false, false)
          .call(_animationFactory, [shape, {alpha: 0}, 0, 0, false]);
  };

  /**
   * Function to simplify animations sets
   *
   * @param {Object | array} element - elements that animation will be used on
   * @param {Object} animation - animation properties
   * @param {Number} wait - delay of animation
   * @param {Number} duration - duration time of animation
   * @param {boolean} sequence - specify if animation elements displayed in sequence
   * @param {Function | boolean} callback - function that will be executed after animation
   */
  function _animationFactory(element, animation, wait, duration, sequence, callback) {
      var totalTime = wait;

      if (element instanceof Array) {
          element.forEach(function (el, idx) {
              if (idx !== element.length - 1) {
                  createjs.Tween.get(el).wait(totalTime).to(animation, duration);
                  if (sequence === true) {
                      totalTime += wait;
                  }
              } else {
                  return createjs.Tween.get(el).wait(totalTime).to(animation, duration).call(callback ? callback : eval);
              }
          })
      } else {
          return createjs.Tween.get(element).wait(totalTime).to(animation, duration).call(callback ? callback : eval);
      }
  };
}
