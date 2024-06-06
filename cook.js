
$(document).ready(function(){

    $( "#mantao" ).draggable();$( "#whiteVeg" ).draggable();$( "#purpleVeg" ).draggable();
	$( "#redFruit" ).draggable();$( "#peanut" ).draggable();$( "#guiyun" ).draggable();
	$( "#liangzi" ).draggable();$( "#egg" ).draggable();$( "#flour" ).draggable();
	$( "#carrot" ).draggable();$( "#ginger" ).draggable();$( "#meat" ).draggable();
	$( "#chili" ).draggable();$( "#sugar" ).draggable();$( "#salt" ).draggable();
	$( "#soy-sauce" ).draggable();$( "#water" ).draggable();$( "#chu" ).draggable();
	$( "#yellowgua" ).draggable();$( "#fish" ).draggable();
	
	// 用來存儲放入鍋子中的食材 ID 的陣列
    var ingredientsInPot = [];
	
    $( "#pot" ).droppable({
      drop: function( event, ui ) {
		$( this )
			.addClass( "ui-state-highlight" )
			var $item = $(ui.draggable);
            var ingredientId = $item.attr("id");

            // 添加食材 ID 到陣列
            if (!ingredientsInPot.includes(ingredientId)) {
                ingredientsInPot.push(ingredientId);
            }
        }
    });
	function showDialog(){
		$("#changeRole_dialog").dialog({
            modal: true,
			buttons: {
                "花城": function() {
                    $(".pink-screen").fadeIn(300, function() {
                        $('#happy_dialog').dialog({
                            modal: true,
                            open: function(event, ui) {
                                $(".ui-dialog-titlebar").hide(); // 隱藏標題欄（包含關閉按鈕）
                                setTimeout(function() {
                                    $('#happy_dialog').dialog('close');
                                }, 2000); // 3秒後自動關閉對話框
                            },
                            close: function() {
                                $(".pink-screen").fadeOut(500); // 關閉對話框時恢復背景顏色
                            }
                        });
                    });
                    $(this).dialog("close");
                },
                "我不是花城": function() {
                    $(".black-screen").fadeIn(200, function() {
                        $('#die_dialog').dialog({
                            modal: true,
                            open: function(event, ui) {
                                $(".ui-dialog-titlebar").hide(); // 隱藏標題欄（包含關閉按鈕）
                                setTimeout(function() {
                                    $('#die_dialog').dialog('close');
                                }, 2000); // 3秒後自動關閉對話框
                            },
                            close: function() {
                                $(".black-screen").fadeOut(500); // 關閉對話框時恢復背景顏色
                            }
                        });
                    });
                    $(this).dialog("close");
                }
            }        
		});
	}
	function qqDialog(){
		$('#qq_dialog').dialog({
            modal: true,
            open: function(event, ui) {
                $(".ui-dialog-titlebar").hide(); // 隱藏標題欄（包含關閉按鈕）
                setTimeout(function() {
                    $('#qq_dialog').dialog('close');
                }, 2000); // 3秒後自動關閉對話框
            },                   
        });
	}
	// 點擊開始煮飯按鈕時的行為
    $("#start").click(function() {
        //百年好合羹
		if (ingredientsInPot.includes("redFruit") && ingredientsInPot.includes("peanut") && ingredientsInPot.includes("guiyun") && ingredientsInPot.includes("liangzi")
			&& ingredientsInPot.includes("ginger") && ingredientsInPot.includes("sugar") && ingredientsInPot.includes("water") ) {
			$(".BNHHG").fadeIn(200, function() {
				// 图片显示后，等待 5000 毫秒再开始 fadeOut
				setTimeout(function() {
					$(".BNHHG").fadeOut(200);
				}, 2000);
			});
			$('#BNHHG_dialog').dialog({
				modal: true,
				buttons: {
					"嗯...還是算了吧": function() {
						qqDialog();
						$(this).dialog("close");
					},
					"找誰呢？": function() {
						showDialog();
						$(this).dialog("close");
					}
				}  
			});
        } 
		//玉潔冰清丸
		else if (ingredientsInPot.includes("egg") && ingredientsInPot.includes("flour") && ingredientsInPot.includes("whiteVeg") && ingredientsInPot.includes("carrot")
			&& ingredientsInPot.includes("ginger") && ingredientsInPot.includes("sugar") && ingredientsInPot.includes("water")  && ingredientsInPot.includes("salt")  && ingredientsInPot.includes("chu")) {
			$(".YJBQW").fadeIn(200, function() {
				// 图片显示后，等待 5000 毫秒再开始 fadeOut
				setTimeout(function() {
					$(".YJBQW").fadeOut(200);
				}, 2000);
			});
			$('#YJBQW_dialog').dialog({
				modal: true,
				buttons: {
					"嗯...還是算了吧": function() {
						qqDialog();
						$(this).dialog("close");
					},
					"找誰呢？": function() {
						showDialog();
						$(this).dialog("close");
					}
				}  
			});
        } 
		//萬紫千紅小炒肉
		else if (ingredientsInPot.includes("meat") && ingredientsInPot.includes("purpleVeg") && ingredientsInPot.includes("carrot") && ingredientsInPot.includes("soy-sauce")
			&& ingredientsInPot.includes("ginger") && ingredientsInPot.includes("sugar") && ingredientsInPot.includes("chili")) {
			$(".WZQHXCR").fadeIn(200, function() {
				// 图片显示后，等待 5000 毫秒再开始 fadeOut
				setTimeout(function() {
					$(".WZQHXCR").fadeOut(200);
				}, 2000);
			});
			$('#WZQHXCR_dialog').dialog({
				modal: true,
				buttons: {
					"嗯...還是算了吧": function() {
						qqDialog();
						$(this).dialog("close");
					},
					"找誰呢？": function() {
						showDialog();
						$(this).dialog("close");
					}
				}  
			});
        } 
		//TEST:饅頭
		else if (ingredientsInPot.includes("mantao")) {
			$(".BNHHG").fadeIn(200, function() {
				// 图片显示后，等待 5000 毫秒再开始 fadeOut
				setTimeout(function() {
					$(".BNHHG").fadeOut(200);
				}, 2000);
			});
			$('#mantao_dialog').dialog({
				modal: true,
				buttons: {
					"嗯...還是算了吧": function() {
						qqDialog();
						$(this).dialog("close");
					},
					"找誰呢？": function() {
						showDialog();
						$(this).dialog("close");
					}
				}  
			});
        } 
		else {  //自創料理
          var result = prompt('殿下，幫新料理取個好名字吧~', ''); // message, default
          if (result){
            var result2 = confirm('哇~原來是 ' + result + '　啊！\n這麼棒的料理，要不要找人試吃呢？');
			if(result2){
				showDialog();
			}
			else{
				qqDialog();
			}
          }
		  else{
            var result3 = confirm('行吧，不取就不取。\n那殿下要不要找人試吃看看呢？');
			if(result3){
				showDialog();
			}
			else{
				qqDialog();
			}
          }
        }
    });
	
	$('#restart').click(function() {
		location.reload();
	});
});