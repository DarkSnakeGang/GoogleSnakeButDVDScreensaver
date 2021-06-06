window.snake.dvd = function(settings = {}) {
  if(settings.walls === undefined)
    settings.walls = settings.dark ? '#101010' : '#578A34';
  if(settings.borders === undefined)
    settings.borders = settings.dark ? '#2E2933' : '#578A34';
  if(settings.lightSquares === undefined)
    settings.lightSquares = settings.dark ? '#47404F' : '#AAD751';
  if(settings.darkSquares === undefined)
    settings.darkSquares = settings.dark ? '#423C49' : '#A2D149';
  
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const c = this.responseText;
      if(c.indexOf('#A2') === -1)
        return 'you\'re a failure';
      
      console.log('hi');
      eval('var type = 0, _mode = 0;');
      eval(`
        logos = [];
        let i;

        i = new Image;
        i.src = 'https://i.postimg.cc/D01kHgNB/dvd-00.png';
        logos.push(i);

        i = new Image;
        i.src = 'https://i.postimg.cc/T2b6KdPg/dvd-01.png';
        logos.push(i);

        i = new Image;
        i.src = 'https://i.postimg.cc/pXYMBszd/dvd-02.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/Qd8GYcJJ/dvd-03.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/XYsMRX2S/dvd-04.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/dtKKdb7X/dvd-05.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/Pq7gq9sS/dvd-06.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/TPh8fGSy/dvd-07.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/XJyTBLn4/dvd-08.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/d3Pg2C0d/dvd-09.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/ryxB8fh9/dvd-10.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/VvqpDNSh/dvd-11.png';
        logos.push(i);
        
        i = new Image;
        i.src = 'https://i.postimg.cc/PrHBN19n/dvd-12.png';
        logos.push(i);
        
        
      `);


      
      eval(
        c.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a,b\){var c={};0>=b\.[a-zA-Z0-9_$]{1,6}\.x\?c\.left=!0:[^]*?=0\)}}/
        )[0].replace(
          '?c.left=!0:',
          '?(c.left=!0,type = (1 + type) % 13):'
        ).replace(
          '(c.right=!0)',
          '(c.right=!0,type = (1 + type) % 13)'
        ).replace(
          '?c.top=!0:',
          '?(c.top=!0,type = (1 + type) % 13):'
        ).replace(
          '(c.bottom=!0)',
          '(c.bottom=!0,type = (1 + type) % 13)'
        )
      );
      
      const coolCatClasspbalsfkjsd = c.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(\){if\(!this\.[a-zA-Z0-9_$]{1,6}&&!this\.[a-zA-Z0-9_$]{1,6}\)return [a-zA-Z0-9_$]{1,6}\(\);this\.[a-zA-Z0-9_$]{1,6}=this\.[a-zA-Z0-9_$]{1,6}[^]*?}}\);[^]?return [a-zA-Z0-9_$]{1,6}\(this\)}/
      )[0];
      const line = coolCatClasspbalsfkjsd.match(
        /this\.[a-zA-Z0-9_$]{1,6}=this\.[a-zA-Z0-9_$]{1,6};/g
      )[1];
      const Fe = line.match(/this\.[a-zA-Z0-9_$]{1,6}/)[0];
      let mode = coolCatClasspbalsfkjsd.match(
        /this\.[a-zA-Z0-9_$]{1,6}=this\.[a-zA-Z0-9_$]{1,6};/g
      )[2].match(/this\.[a-zA-Z0-9_$]{1,6}/g)[1];
      
      eval(
        coolCatClasspbalsfkjsd.replace(
          line, 
          line + `type = ${Fe} === 13 ? ~~(Math.random() * 13) : ${Fe};_mode = ${mode};`
        )
      );
      

      eval(`var boxImage = new Image; boxImage.src = 'https://i.postimg.cc/GppCGFKQ/box.png';`);
      setTimeout(function() {
        

        const box = c.match(
          /this\.[a-zA-Z0-9_$]{1,6}=new [a-zA-Z0-9_$]{1,6}\([^)}]*?box\.png[^})]*?\);/
        )[0].replace('this.', '').replace(/=new[^]*/g, '');

        const containee = c.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a,b,c\){this\.[a-zA-Z0-9_$]{1,6}=new Image;[^}]*?this\)}/
        )[0].match(/this\.[a-zA-Z0-9_$]{1,6}=document/)[0].replace('this.', '').replace('=document', '');

        eval(
          `
          var boxCanvas = document.createElement('canvas');
          boxCanvas.width = 896;boxCanvas.height = 128;
          var bctx = boxCanvas.getContext('2d');

          bctx.drawImage(boxImage, 0, 0);
    
          bctx.fillStyle = '${settings.lightGoal}';
          bctx.fillRect(128, 0, 128, 128);

          bctx.fillStyle = '${settings.darkGoal}';
          bctx.fillRect(149, 21, 85, 85);

          bctx.fillStyle = '${settings.lightGoal}';
          bctx.fillRect(171, 43, 41, 41);

          bctx.fillStyle = '${settings.darkGoal}';
          bctx.fillRect(256, 0, 128, 128);

          bctx.fillStyle = '${settings.lightGoal}';
          bctx.fillRect(277, 21, 85, 85);

          bctx.fillStyle = '${settings.darkGoal}';
          bctx.fillRect(299, 43, 41, 41);

          bctx.fillStyle = '${settings.lightGoal}';
          bctx.fillRect(384, 0, 128, 128);

          bctx.fillStyle = '${settings.darkGoal}';
          bctx.fillRect(405, 21, 85, 85);

          bctx.fillStyle = '${settings.lightGoal}';
          bctx.fillRect(427, 43, 41, 41);

          bctx.fillStyle = '${settings.darkGoal}';
          bctx.fillRect(512, 0, 128, 128);

          bctx.fillStyle = '${settings.lightGoal}';
          bctx.fillRect(533, 21, 85, 85);

          bctx.fillStyle = '${settings.darkGoal}';
          bctx.fillRect(555, 43, 41, 41);



          `
        );


        const func = c.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a,b\){return a\.[a-zA-Z0-9_$]{1,6}===b}/
        )[0].match(/[a-zA-Z0-9_$]{1,6}=/)[0].replace('=', '');

        const ffjdkasemicolonLOL = c.match(
          /[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(a\){if\(this\.[a-zA-Z0-9_$]{1,6}&&!this\.[a-zA-Z0-9_$]{1,6}\){if\(0<[^]*?#578A34[^]*?}}}/  
        )[0];
        const thatoneline = ffjdkasemicolonLOL.match(
          /this\.[a-zA-Z0-9_$]{1,6}\.drawImage\([a-zA-Z0-9_$]{1,6}\(this\.[a-zA-Z0-9_$]{1,6}\[0<p\.type[^\]})]*?0\]\),0,0,128,128[^)]*?v,v\)/
        )[0];


        eval(
          ffjdkasemicolonLOL.replace(
            '{',
            `{
              this\.${box}\.${containee} = { canvas: boxCanvas, };
            `
          ).replace(
            '#578A34',
            settings.borders
          ).replaceAll(
            '#578A34',
            settings.walls
          ).replaceAll(
            '#A2D149',
            settings.lightSquares
          ).replaceAll(
            '#AAD751',
            settings.darkSquares
          ).replace(
            thatoneline,
            '_mode === 6 && (p.type = type);' + (settings.logo ? thatoneline.replace(
              /drawImage\(/,
              `drawImage(_mode === 6 ? logos[p.type] : `
            ) : thatoneline)
          )
        );
      }, 500); 
    };
    req.send();
  }
};