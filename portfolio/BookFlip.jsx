/* ============================================================
   BookFlip — the reference hardcover sample, used verbatim,
   with our images swapped in (cover 00, pages 01–05).
   The only change vs. the raw sample is that every selector is
   scoped under .book3d so the sample's global resets don't leak
   into the rest of the site. All values are identical.
   ============================================================ */

function BookFlip() {
  return (
    <div className="book3d">
      <BookFlipStyles />
      <ul className="align">
        <li>
          <figure className="book">
            {/* Front */}
            <ul className="hardcover_front">
              <li>
                <div className="coverDesign blue">
                  <img src="images/00.png" alt="The Rise of Superintelligence" width="360" />
                </div>
              </li>
              <li></li>
              <li></li>
            </ul>
            {/* Pages */}
            <ul className="page">
              <li></li>
              <li><img src="images/05.png" alt="" width="355" height="490" style={{ transform: 'translateZ(.1px)' }} /></li>
              <li><img src="images/s02.png" alt="" width="355" height="490" style={{ transform: 'translateZ(.1px)' }} /><img src="images/04.png" alt="" width="355" height="490" style={{ position: 'absolute', transform: 'translateZ(-.1px) translateX(-355px) rotateY(180deg)' }} /></li>
              <li><img src="images/01.png" alt="" width="355" height="490" style={{ transform: 'translateZ(.1px)' }} /><img src="images/s01.png" alt="" width="355" height="490" style={{ position: 'absolute', transform: 'translateZ(-.1px) translateX(-355px) rotateY(180deg)' }} /></li>
            </ul>
            {/* Back */}
            <ul className="hardcover_back">
              <li></li>
              <li></li>
            </ul>
            <ul className="book_spine">
              <li></li>
              <li></li>
            </ul>
          </figure>
        </li>
      </ul>
    </div>
  );
}

function BookFlipStyles() {
  return (
    <style>{`
    /* mini-reset + pseudo-element content, scoped to the book only */
    .book3d *::before, .book3d *::after { content: ""; }
    .book3d ul { margin: 0; padding: 0; list-style: none; }

    .book3d { perspective-origin: center; }

    .book3d .align {
      clear: both; margin: 0; width: 100%;
      display: flex; justify-content: flex-end;
    }
    .book3d .align > li {
      width: 360px; min-height: 500px; display: inline-block;
      margin: 0; vertical-align: top;
    }

    /* 1. container */
    .book3d .book {
      position: relative; width: 360px; height: 500px;
      perspective: 1000px; transform-style: preserve-3d;
    }

    /* 2. background & color */
    .book3d .hardcover_front li:first-child { background-color: #eee; backface-visibility: hidden; }
    .book3d .hardcover_front li:last-child { background: #fffbec; }
    .book3d .hardcover_back li:first-child { background: #fffbec; }
    .book3d .hardcover_back li:last-child { background: #fffbec; }
    .book3d .book_spine li:first-child { background: #eee; }
    .book3d .book_spine li:last-child { background: #333; }

    /* thickness of cover */
    .book3d .hardcover_front li:first-child:after,
    .book3d .hardcover_front li:first-child:before,
    .book3d .hardcover_front li:last-child:after,
    .book3d .hardcover_front li:last-child:before,
    .book3d .hardcover_back li:first-child:after,
    .book3d .hardcover_back li:first-child:before,
    .book3d .hardcover_back li:last-child:after,
    .book3d .hardcover_back li:last-child:before,
    .book3d .book_spine li:first-child:after,
    .book3d .book_spine li:first-child:before,
    .book3d .book_spine li:last-child:after,
    .book3d .book_spine li:last-child:before { background: #95c3e7; width: 8px; }

    /* page */
    .book3d .page > li {
      background: linear-gradient(to right, #e1ddd8 0%, #fffbf6 100%);
      box-shadow: inset 0px -1px 2px rgba(50,50,50,.1), inset -1px 0px 1px rgba(150,150,150,.2);
      border-radius: 0px 5px 5px 0px;
    }

    /* 3. opening cover, back cover and pages */
    .book3d .hardcover_front { transform: rotateY(-34deg) translateZ(8px); z-index: 100; }
    .book3d .hardcover_back { transform: rotateY(-15deg) translateZ(-8px); }
    .book3d .page li:nth-child(1) { transform: rotateY(-28deg); }
    .book3d .page li:nth-child(2) { transform: rotateY(-30deg); }
    .book3d .page li:nth-child(3) { transform: rotateY(-32deg); }
    .book3d .page li:nth-child(4) { transform: rotateY(-34deg); }
    .book3d .page li:nth-child(5) { transform: rotateY(-36deg); }

    /* 4. position, transform & transition */
    .book3d .hardcover_front,
    .book3d .hardcover_back,
    .book3d .book_spine,
    .book3d .hardcover_front li,
    .book3d .hardcover_back li,
    .book3d .book_spine li {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      transform-style: preserve-3d;
    }
    .book3d .hardcover_front,
    .book3d .hardcover_back { transform-origin: 0% 100%; }
    .book3d .hardcover_front { transition: all .8s ease, z-index .6s; }

    .book3d .hardcover_front li:first-child { cursor: default; user-select: none; transform: translateZ(2px); }
    .book3d .hardcover_front li:last-child { transform: rotateY(180deg) translateZ(2px); }
    .book3d .hardcover_back li:first-child { transform: translateZ(2px); }
    .book3d .hardcover_back li:last-child { transform: translateZ(-2px); }

    .book3d .hardcover_front li:first-child:after,
    .book3d .hardcover_front li:first-child:before,
    .book3d .hardcover_front li:last-child:after,
    .book3d .hardcover_front li:last-child:before,
    .book3d .hardcover_back li:first-child:after,
    .book3d .hardcover_back li:first-child:before,
    .book3d .hardcover_back li:last-child:after,
    .book3d .hardcover_back li:last-child:before,
    .book3d .book_spine li:first-child:after,
    .book3d .book_spine li:first-child:before,
    .book3d .book_spine li:last-child:after,
    .book3d .book_spine li:last-child:before { position: absolute; top: 0; left: 0; }

    .book3d .hardcover_front li:first-child:after,
    .book3d .hardcover_front li:first-child:before { width: 4px; height: 100%; }
    .book3d .hardcover_front li:first-child:after { transform: rotateY(90deg) translateZ(-2px) translateX(2px); }
    .book3d .hardcover_front li:first-child:before { transform: rotateY(90deg) translateZ(158px) translateX(2px); }
    .book3d .hardcover_front li:last-child:after { width: 4px; height: 160px; }
    .book3d .hardcover_front li:last-child:before { width: 4px; height: 360px; }
    .book3d .hardcover_front li:last-child:after { transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px); }
    .book3d .hardcover_front li:last-child:before {
      box-shadow: 0px 0px 70px 5px #666;
      transform: rotateX(90deg) rotateZ(90deg) translateZ(-320px) translateX(-2px) translateY(-180px);
    }

    .book3d .hardcover_back li:first-child:after,
    .book3d .hardcover_back li:first-child:before { width: 4px; height: 100%; }
    .book3d .hardcover_back li:first-child:after { transform: rotateY(90deg) translateZ(-2px) translateX(2px); }
    .book3d .hardcover_back li:first-child:before { transform: rotateY(90deg) translateZ(158px) translateX(2px); }
    .book3d .hardcover_back li:last-child:after { width: 4px; height: 160px; }
    .book3d .hardcover_back li:last-child:before { width: 4px; height: 360px; }
    .book3d .hardcover_back li:last-child:after { transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px); }
    .book3d .hardcover_back li:last-child:before {
      box-shadow: 0px 0px 70px 5px #666;
      transform: rotateX(90deg) rotateZ(90deg) translateZ(-320px) translateX(-2px) translateY(-170px);
    }

    /* BOOK SPINE */
    .book3d .book_spine {
      transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
      width: 16px; z-index: 0;
    }
    .book3d .book_spine li:first-child { transform: translateZ(2px); }
    .book3d .book_spine li:last-child { transform: translateZ(-2px); }
    .book3d .book_spine li:first-child:after,
    .book3d .book_spine li:first-child:before { width: 4px; height: 100%; }
    .book3d .book_spine li:first-child:after { transform: rotateY(90deg) translateZ(-2px) translateX(2px); }
    .book3d .book_spine li:first-child:before { transform: rotateY(-90deg) translateZ(-12px); }
    .book3d .book_spine li:last-child:after,
    .book3d .book_spine li:last-child:before { width: 4px; height: 16px; }
    .book3d .book_spine li:last-child:after { transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px); }
    .book3d .book_spine li:last-child:before {
      box-shadow: 5px -1px 100px 20px rgba(0,0,0,.2);
      transform: rotateX(90deg) rotateZ(90deg) translateZ(-490px) translateX(3px) translateY(-6px);
    }

    .book3d .page,
    .book3d .page > li { position: absolute; top: 0; left: 0; transform-style: preserve-3d; }
    .book3d .page { width: 99%; height: 98%; top: 1%; left: 3%; z-index: 10; }
    .book3d .page > li {
      width: 100%; height: 100%; transform-origin: left center;
      transition-property: transform; transition-timing-function: ease;
    }
    .book3d .page > li:nth-child(1) { transition-duration: .6s; }
    .book3d .page > li:nth-child(2) { transition-duration: .6s; }
    .book3d .page > li:nth-child(3) { transition-duration: .4s; }
    .book3d .page > li:nth-child(4) { transition-duration: .5s; }
    .book3d .page > li:nth-child(5) { transition-duration: .6s; }

    /* 5. events */
    .book3d .book:hover > .hardcover_front { transform: rotateY(-145deg) translateZ(0); z-index: 0; }
    .book3d .book:hover > .page li:nth-child(1) { transform: rotateY(-30deg); transition-duration: 1.5s; }
    .book3d .book:hover > .page li:nth-child(2) { transform: rotateY(-35deg); transition-duration: 1.8s; }
    .book3d .book:hover > .page li:nth-child(3) { transform: rotateY(-118deg); transition-duration: 1.6s; }
    .book3d .book:hover > .page li:nth-child(4) { transform: rotateY(-130deg); transition-duration: 1.4s; }
    .book3d .book:hover > .page li:nth-child(5) { transform: rotateY(-140deg); transition-duration: 1.2s; }

    /* cover CSS */
    .book3d .coverDesign {
      position: absolute; top: 0; left: 0; bottom: 0; right: 0;
      overflow: hidden; backface-visibility: hidden;
    }
    .book3d .coverDesign img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .book3d .coverDesign::after {
      background-image: linear-gradient(-135deg, rgba(255,255,255,.45) 0%, transparent 100%);
      position: absolute; top: 0; left: 0; bottom: 0; right: 0;
    }
    .book3d .blue {
      background-color: #3498db;
      background-image: linear-gradient(to bottom, #3498db 58%, #2a90d4 0%);
    }

    @media screen and (max-width: 37.8125em) {
      .book3d .align > li { width: 100%; min-height: 440px; height: auto; padding: 0; margin: 0 0 30px 0; }
      .book3d .book { margin: 0 auto; }
    }
    `}</style>
  );
}

Object.assign(window, { BookFlip });
