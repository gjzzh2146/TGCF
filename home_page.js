//////////////////////////////////////////故事簡介////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const storyText = document.querySelector('.story_text');
  const text = storyText.innerHTML;
  storyText.innerHTML = '';

  let index = 0;
  let displayStarted = false; // 新增的变量，用于跟踪是否已经开始显示文本

  // 点击事件处理程序，开始显示文本
  document.querySelector('.story').addEventListener('click', () => {
    if (!displayStarted) {
      displayStarted = true;
      write();
    }
  });

  function write() {
    if (index < text.length) {
      let char = text[index];

      // 处理 HTML 标签
      if (char === '<') {
        const endIndex = text.indexOf('>', index);
        if (endIndex !== -1) {
          char = text.substring(index, endIndex + 1);
          index = endIndex + 1;
        }
      } else {
        index++;
      }

      const span = document.createElement('span');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      storyText.appendChild(span);

      let opc = 0;
      const fade = setInterval(() => {
        opc += 0.1;
        span.style.opacity = opc;
        if (opc >= 1) clearInterval(fade);
      }, 50);

      setTimeout(write, 50);
    }
  }
});
//黑暗料理//
document.addEventListener('DOMContentLoaded', (event) => {
            const triggerBtn = document.getElementById('cook');
            const overlay = document.getElementById('overlay');
            const customDialog = document.getElementById('cook_dialog');
            const acceptBtn = document.getElementById('cook_accept');
            const declineBtn = document.getElementById('cook_decline');
			const acceptDialog = document.getElementById('cook_decline_dialog');

            triggerBtn.addEventListener('click', () => {
                overlay.style.display = 'block';
                customDialog.style.display = 'block';
            });

            acceptBtn.addEventListener('click', () => {
                window.open("cook_Page.html", '_blank'); // 在新標籤頁中打開
				overlay.style.display = 'none';
                customDialog.style.display = 'none';
            });

            declineBtn.addEventListener('click', () => {
				customDialog.style.display = 'none';
				acceptDialog.style.display = 'block';
				setTimeout(() => {
					acceptDialog.style.display = 'none';
					overlay.style.display = 'none';
				}, 1500); // 1.5秒後關閉
			});

            overlay.addEventListener('click', () => {
                overlay.style.display = 'none';
                customDialog.style.display = 'none';
				acceptDialog.style.display = 'none';
            });
        });
//拯救蒼生//
document.addEventListener('DOMContentLoaded', (event) => {
            const triggerBtn = document.getElementById('roleplay');
            const overlay = document.getElementById('overlay');
            const customDialog = document.getElementById('roleplay_dialog');
            const acceptBtn = document.getElementById('roleplay_accept');
            const declineBtn = document.getElementById('roleplay_decline');

            triggerBtn.addEventListener('click', () => {
                overlay.style.display = 'block';
                customDialog.style.display = 'block';
            });

            acceptBtn.addEventListener('click', () => {
                window.open('roleplay_Page.html', '_blank'); // 在新標籤頁中打開
				overlay.style.display = 'none';
                customDialog.style.display = 'none';
            });

            declineBtn.addEventListener('click', () => {
                overlay.style.display = 'none';
                customDialog.style.display = 'none';
            });

            overlay.addEventListener('click', () => {
                overlay.style.display = 'none';
                customDialog.style.display = 'none';
            });
        });
//萬神窟//
document.addEventListener('DOMContentLoaded', (event) => {
            const triggerBtn = document.getElementById('pazzle');
            const overlay = document.getElementById('overlay');
            const customDialog = document.getElementById('pazzle_dialog');
            const acceptBtn = document.getElementById('pazzle_accept');
            const declineBtn = document.getElementById('pazzle_decline');
			const declineDialog = document.getElementById('pazzle_decline_dialog');

            triggerBtn.addEventListener('click', () => {
                overlay.style.display = 'block';
                customDialog.style.display = 'block';
            });

            acceptBtn.addEventListener('click', () => {
                window.open("pazzle_Page.html", '_blank'); // 在新標籤頁中打開
				overlay.style.display = 'none';
                customDialog.style.display = 'none';
            });

            declineBtn.addEventListener('click', () => {
                customDialog.style.display = 'none';
				declineDialog.style.display = 'block';
				setTimeout(() => {
					declineDialog.style.display = 'none';
					overlay.style.display = 'none';
				}, 1500); // 1.5秒後關閉
            });

            overlay.addEventListener('click', () => {
                overlay.style.display = 'none';
                customDialog.style.display = 'none';
            });
        });
//打戚容//
document.addEventListener('DOMContentLoaded', (event) => {
            const triggerBtn = document.getElementById('badman');
            const overlay = document.getElementById('overlay');
            const customDialog = document.getElementById('badman_dialog');
            const acceptBtn = document.getElementById('badman_accept');
            const declineBtn = document.getElementById('badman_decline');
			const acceptDialog = document.getElementById('badman_accept_dialog');
			const okBtn = document.getElementById('badman_accept_ok');
			const runBtn = document.getElementById('badman_run');
			const runDialog = document.getElementById('badman_run_dialog');
			let hoverTimer;

			triggerBtn.addEventListener('mouseenter', () => {
				hoverTimer = setTimeout(() => {
				overlay.style.display = 'block';
				customDialog.style.display = 'block';
				}, 2000); // 2秒後顯示對話框
			});

			triggerBtn.addEventListener('mouseleave', () => {
				clearTimeout(hoverTimer);
			});

            acceptBtn.addEventListener('click', () => {
                //customDialog.style.display = 'none';
				acceptDialog.style.display = 'block';
            });
			okBtn.addEventListener('click', () => {
				acceptDialog.style.display = 'none';
            });

            declineBtn.addEventListener('click', () => {
				window.open("badman_Page.html", '_blank'); // 在新標籤頁中打開
				overlay.style.display = 'none';
                customDialog.style.display = 'none';
			});
			runBtn.addEventListener('click', () => {
				customDialog.style.display = 'none';
				runDialog.style.display = 'block';
				setTimeout(() => {
					runDialog.style.display = 'none';
					overlay.style.display = 'none';
				}, 1500); // 1.5秒後關閉
            });
			

            overlay.addEventListener('click', () => {
                overlay.style.display = 'none';
                customDialog.style.display = 'none';
				acceptDialog.style.display = 'none';
            });
        });
		
//////////////////////////////////JQuery///////////////////////////////////////////////
$(document).ready(function(){
	
////////////////////////////初始對話框////////////////////////////////////////////////////
		// 選取對話框和關閉按鈕
		var $dialog = $('#initial_dialog');
		var $closeButton = $('#initial_button');
		// 顯示對話框
		$dialog[0].showModal();
		// 關閉對話框的事件監聽
		$closeButton.on('click', function() {
        $dialog[0].close();
		});
///////////////////////////////////人物介紹/////////////////////////////////////////////
        //交替滑動
        $("#Xieliang").click(function(){ 
			$("#text_Xieliang").slideToggle ( ) ;
        });
		$("#Huacheng").click(function(){ 
            $("#text_Huacheng").slideToggle ( ) ;
        });
		// Paths to the images
            const image1 = "img_hua_cheng.png";
            const image2 = "img_sanran.png";

            // Reference to the image element
            const imgElement = $('#Huacheng-img');

            // Click event to toggle the image
            $('#sanran').click(function() {
                // Check the current image source and toggle it
                const currentSrc = imgElement.attr('src');
                imgElement.attr('src', currentSrc === image1 ? image2 : image1);
            });
			$('#Huacheng-img').click(function() {
                // Check the current image source and toggle it
                const currentSrc = imgElement.attr('src');
                imgElement.attr('src', currentSrc === image1 ? image2 : image1);
            });
		//////////////////////////////////////////////////////////////////444444444
		$("#Redred").click(function(){ 
            $("#text_Redred").slideToggle ( ) ;
        });
		$("#Whitewhite").click(function(){ 
            $("#text_Whitewhite").slideToggle ( ) ;
        });
		$("#Blackblack").click(function(){ 
            $("#text_Blackblack").slideToggle ( ) ;
        });
		$("#Greengreen").click(function(){ 
            $("#text_Greengreen").slideToggle ( ) ;
        });
		/////////////////////////////////////////////////////////////////333333333
		$("#Fengxing").click(function(){ 
			$("#text_Fengxing").slideToggle ( ) ;
        });
		$("#Muqing").click(function(){ 
			$("#text_Muqing").slideToggle ( ) ;
        });
		$("#Taizi").click(function(){ 
			$("#text_Taizi").slideToggle ( ) ;
        });
		///////////////////////////////////////////////////////////////////other1
		$("#Junwu").click(function(){ 
			$("#text_Junwu").slideToggle ( ) ;
        });
		$("#Lingwen").click(function(){ 
			$("#text_Lingwen").slideToggle ( ) ;
        });
		$("#Qingxuan").click(function(){ 
			$("#text_Qingxuan").slideToggle ( ) ;
        });
		// Paths to the images
            const image3 = "FS-2.png";
            const image4 = "girl_FS.png";

            // Reference to the image element
            const imgElement2 = $('#Qingxuan-img');

            // Click event to toggle the image
            $('#FSNN').click(function() {
                // Check the current image source and toggle it
                const currentSrc2 = imgElement2.attr('src');
                imgElement2.attr('src', currentSrc2 === image3 ? image4 : image3);
            });
			$('#Qingxuan-img').click(function() {
                // Check the current image source and toggle it
                const currentSrc2 = imgElement2.attr('src');
                imgElement2.attr('src', currentSrc2 === image3 ? image4 : image3);
            });
		$("#Mingyi").click(function(){ 
			$("#text_Mingyi").slideToggle ( ) ;
        });
		///////////////////////////////////////////////////////////////////other2
		$("#Wudo").click(function(){ 
			$("#text_Wudo").slideToggle ( ) ;
        });
		$("#RainGod").click(function(){ 
			$("#text_RainGod").slideToggle ( ) ;
        });
		$("#Payming").click(function(){ 
			$("#text_Payming").slideToggle ( ) ;
        });
		$("#Xiaopay").click(function(){ 
			$("#text_Xiaopay").slideToggle ( ) ;
        });
		//////////////////////////////////////////////////////////////////other3
		$("#Mayniangqing").click(function(){ 
			$("#text_Mayniangqing").slideToggle ( ) ;
        });
		$("#Langqianqu").click(function(){ 
			$("#text_Langqianqu").slideToggle ( ) ;
        });
		$("#Quanyizen").click(function(){ 
			$("#text_Quanyizen").slideToggle ( ) ;
        });
		$("#Bangyue").click(function(){ 
			$("#text_Bangyue").slideToggle ( ) ;
        });
//////////////////////////////////////////名場面回顧/////////////////////////////////////////////////
		let hoverTimeout;
        let fadeOutTimeout;
		$(".shanwudajie").hover(
                function() {
                    hoverTimeout = setTimeout(function() {
                        $(".shanwudajie-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".shanwudajie-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
		);
		// Hide the image when clicking anywhere on it
            $(".shanwudajie-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
			
		$(".yinianqiao").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".yinianqiao-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".yinianqiao-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".yinianqiao-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
			
			
		$(".sandanxianjing").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".sandanxianjing-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".sandanxianjing-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".sandanxianjing-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
		$(".yujunshan").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".yujunshan-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".yujunshan-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".yujunshan-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
		$(".firstmeet").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".firstmeet-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".firstmeet-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".firstmeet-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
		$(".jilefun").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".jilefun-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".jilefun-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".jilefun-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
		$(".light3000").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".light3000-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".light3000-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".light3000-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
		$(".rainflower").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".rainflower-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".rainflower-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".rainflower-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });
		$(".wanshenku").hover(
            function() {
                    hoverTimeout = setTimeout(function() {
                        $(".wanshenku-image").fadeIn(200, function() {
                            fadeOutTimeout = setTimeout(function() {
                                $(".wanshenku-image").fadeOut(200);
                            }, 2000); // 1 second delay before auto-hide
                        });
                    }, 1500); // 1 second delay before showing
                },
                function() {
                    clearTimeout(hoverTimeout);
                    clearTimeout(fadeOutTimeout);
                }
        );
		// Hide the image when clicking anywhere on it
            $(".wanshenku-image").click(function() {
                clearTimeout(fadeOutTimeout);
                $(this).fadeOut(200);
            });


});