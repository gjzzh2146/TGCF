$(document).ready(function() {
    $('#Whitewhite').click(function() {
        $('#initial_option').append(`
            <div class="option1-initial">
                <h4><b>你選擇成為白無相。<br>你是一名初代鬼王，發動了人面疫，將仙樂逼上絕路。你最想看到的就是謝憐照著你的心意行動，可偏偏他總是與你唱反調。<br>
					如今你看到謝憐從戰場上收集怨魂的行動了，你很開心他終於做了一件你想要他做的事。<br>但在這時，你聽到他對身邊的無名小鬼說：延後三日吧。<br>你意識到謝憐還是心軟了，很不開心。</b></h4>
                <button type="button" class="btn btn-lg option1A-btn">A.用言語刺激他:難道你到了國破家亡的地步，竟然連復仇的魄力沒有嗎？</button>
				<button type="button" class="btn btn-lg option1B-btn">B.馬上就把怨魂從劍裡放出來，讓謝憐不得不發動人面疫</button>
            </div>
        `);
        $('#Whitewhite').prop('disabled', true).addClass('disabled');
        $('#Goodman').prop('disabled', true).addClass('disabled');
        $('#Wuming').prop('disabled', true).addClass('disabled');
    });

    $('#Goodman').click(function() {
        $('#initial_option').append(`
            <div class="option2-initial">
                <h4><b>你選擇成為一位路過的大漢。今日你到市集購了一籮筐的貨品，正準備再走走逛逛之時，忽地天降傾盆大雨。<br>街上行人無不匆忙奔走，回家避雨，你也跟著大家一起。<br>
					就在跑到最繁華的大街上時，你被絆了一大跤，貨物也散了一地。<br>回頭一看，竟然是個全身髒兮兮的白衣人坐在大坑裡面。於是你...</b></h4>
                <button type="button" class="btn btn-lg option2A-btn">A.抓著這人破口大罵，罵他犯什麼病，大雨天躺在路上不回家！</button>
				<button type="button" class="btn btn-lg option2B-btn">B.抱怨幾句自認倒霉，趕快撿起貨物跑回去</button>
            </div>
        `);
        $('#Whitewhite').prop('disabled', true).addClass('disabled');
        $('#Goodman').prop('disabled', true).addClass('disabled');
        $('#Wuming').prop('disabled', true).addClass('disabled');
    });

    $('#Wuming').click(function() {
        $('#initial_option').append(`
            <div class="option3-initial">
                <h4><b>你選擇成為玄衣小鬼-無名。你名叫紅紅兒，曾經被太子殿下所救，及多次施恩。<br>後來決定追隨於他，加入仙樂皇軍。卻不幸戰死沙場，成為鬼魂。<br>
				你的魂魄時常跟著太子殿下飄盪，他去哪你便去哪，看過他落魄受難，看過他苦苦掙扎，你將殿下這些遭遇都看在眼裡，心中悲慟不已。<br>
				一天，殿下決定向永安報復，發動第二次人面疫，你修練已有所成就，便凝實魂體，向太子殿下毛遂自薦，成為他這次的助手。<br>
				你非常恨帶給殿下苦難的永安國人，聽到殿下決定延後三天發動人面疫，你會...</b></h4>
                <button type="button" class="btn btn-lg option3A-btn">A.向殿下問出自己的疑問。但無論殿下作何決定都支持他。</button>
				<button type="button" class="btn btn-lg option3B-btn">B.苦苦勸說殿下復仇。 (不，你不會選這個)</button>
            </div>
        `);
        $('#Whitewhite').prop('disabled', true).addClass('disabled');
        $('#Goodman').prop('disabled', true).addClass('disabled');
        $('#Wuming').prop('disabled', true).addClass('disabled');
		$('.option3B-btn').prop('disabled', true).addClass('disabled');
    });

    // 動態生成的按鈕需要使用事件代理來綁定事件
///////////////////////////////////////////////////白無相劇本////////////////////////////////////////
    $('#initial_option').on('click', '.option1A-btn', function() {
        $('#initial_option').append(`
            <div class="option1A">
                <h4><b>你選的是A.<br>怨魂的尖叫加上你的刺激，謝憐頭痛欲裂，並不回應你的言語。你隱去身形，繼續在一旁觀察。<br>沒想到，他刺了自己一劍，躺到永安大街上，期望有人能給他一點善意。<br>
					你對他的行為嗤之以鼻。<br>蒼生啊，都是自私自利的，升米恩，斗米仇。<br>他躺了一天一夜，果真沒有人前去幫忙。你現身，止不住的笑：你當初逆天為永安求來降水，如今他們連一杯水都不給你。<br>
					我說過的，不會有人幫你。</b></h4>
                <button type="button" class="btn btn-lg option1C-btn">C.幫他把劍拔出來，憐憫的說："沒關係，他們不幫，我幫你"</button>
				<button type="button" class="btn btn-lg option1D-btn">D.扮成一個路人去幫助謝憐，看他到底會如何做。</button>
            </div>
        `);
        $('.option1A-btn').prop('disabled', true).addClass('disabled');
        $('.option1B-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1B-btn', function() {
        $('#initial_option').append(`
            <div class="option1B">
                <h4><b>你選的是B.<br>謝憐不屈服於你的威脅，他提起劍走進人群，告訴他們只要拿劍刺他就不會得人面疫，且他是神官，受了傷也不會死。<br>你覺得謝憐簡直瘋了。不可置信地看著事態發展。<br>
					人們爭吵著要不要接受謝憐的提議，而怨靈已經等不及，烏壓壓地朝他聚集過去。<br>謝憐正要拿起劍，卻發現無名已經先他一步，吸引了怨魂，被徹底吞沒，魂消魄散。<br>
					而你知道這個無名，便是謝憐在人間最後的信徒...</b></h4>
                <button type="button" class="btn btn-lg option1E-btn">E.愉快地告訴謝憐這個殘酷的事實：你在這世上，最後一個信徒，沒了。</button>
				<button type="button" class="btn btn-lg option1F-btn">F.略帶憐憫的看他一眼，為事情不在自己預期中惋惜。飄然離去。</button>
            </div>
        `);
        $('.option1A-btn').prop('disabled', true).addClass('disabled');
        $('.option1B-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1C-btn', function() {
        $('#initial_option').append(`
            <div class="option1C">
                <h4><b>你選的是C.<br>你將黑劍拔起來後，遭到了一頓痛罵，你饒有興味地繼續看著謝憐還抱著可笑的希望，做那無用功，想看看他究竟何時才會認清。<br>蒼生，不配！<br>
					卻在此時，出現了一位趕路的大漢，他被謝憐絆倒，一頓臭罵之後，居然還回來給謝憐戴了頂斗笠！ <br>你意識到不妙....</b></h4>
                <button type="button" class="btn btn-lg option1G-btn">G.現身警告他：你忘記你的信徒、你的國民如何背叛你的了嗎？<br>就為一個小小路人，把這些全忘了？！值得嗎？為這些人，承受萬世詛咒？</button>
                <button type="button" class="btn btn-lg option1H-btn">H.不再執著讓謝憐自己做，你把怨魂從劍裡放出來，逼他不得不發動人面疫</button>
            </div>
        `);
        $('.option1C-btn').prop('disabled', true).addClass('disabled');
        $('.option1D-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1D-btn', function() {
        $('#initial_option').append(`
            <div class="option1D">
                <h4><b>你選的是D.<br>謝憐識破了你的伎倆，痛罵並嘲諷你一頓。繼續在坑裡等待他所謂的善意。<br>你冷眼繼續看著謝憐還抱著可笑的希望，做那無用功。<br>
					卻在此時，出現了一位趕路的大漢，他被謝憐絆倒，一頓臭罵之後，居然還回來給謝憐戴了頂斗笠！ 你意識到不妙....</b></h4>
                <button type="button" class="btn btn-lg option1G-btn">G.現身警告他：你忘記你的信徒、你的國民如何背叛你的了嗎？<br>就為一個小小路人，把這些全忘了？！值得嗎？為這些人，承受萬世詛咒？</button>
                <button type="button" class="btn btn-lg option1H-btn">H.不再執著讓謝憐自己做，你把怨魂從劍裡放出來，逼他不得不發動人面疫</button>
            </div>
        `);
        $('.option1C-btn').prop('disabled', true).addClass('disabled');
        $('.option1D-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1E-btn', function() {
        $('#initial_option').append(`
            <div class="option1E">
                <h4><b>你選的是E.<br>謝憐聽了你的話後，愣了好一會，才艱難地一字一頓道：什麼，叫，沒了？<br>
					你悠悠回答： 魂飛魄散了。 並且繼續往他的心裡扎刀：他代替你被詛咒，你召回來的亡靈，把他吃得渣都不剩了。<br>
					謝憐似乎被這消息震傻了，你仍不依不饒地繼續： 他生前是你麾下士兵，死後是追隨你的亡靈。<br>中元節、花燈夜、鬼火魂。跟著你這樣可悲可笑的神，這位信徒也正是可悲可笑到了極點。<br>
					謝憐聽到自己的信徒被如此評價，忽然一陣無可抑制的暴怒，提劍上來砍你。<br>你們打架引來了天庭的神武大帝。你可打不過那君吾，還是先溜為上好。<br>END.<br>引謝憐毀滅蒼生(0/1) 任務失敗！！！</b></h4>   
			</div>
        `);
        $('.option1E-btn').prop('disabled', true).addClass('disabled');
        $('.option1F-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1F-btn', function() {
        $('#initial_option').append(`
            <div class="option1F">
                <h4><b>你選的是F.<br>！OOC警告！OOC警告！OOC警告！
					你的鬼生樂趣就是看謝憐朝你設定的方向走，沒照你意思的話就要告訴他世界有多殘忍，摧毀他的信念！怎能在最精彩時提前離去！！！<br>END.<br>引謝憐毀滅蒼生(0/1) 任務失敗！！！</b></h4>
			</div>
        `);
        $('.option1E-btn').prop('disabled', true).addClass('disabled');
        $('.option1F-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1G-btn', function() {
        $('#initial_option').append(`
            <div class="option1G">
                <h4><b>你選的是G.<br>謝憐不理會你的說法，揮劍迎上前來，他當然不是你的對手，馬上就被打倒在地。<br>但他眼中的火焰卻是越燒越旺，怒吼著:你少自以為是了！我不需要你教我，我自己會學。
					如果你代表的就是天命，那麼，天命這種東西，就應該被摧毀！<br>你被他激怒，直接放出的劍中的怨魂！<br>
					謝憐不屈服於你的威脅，他提起劍走進人群，告訴他們只要拿劍刺他就不會得人面疫，且他是神官，受了傷也不會死。<br>你覺得謝憐簡直瘋了。不可置信地看著事態發展。<br>
					人們爭吵著要不要接受謝憐的提議，而怨靈已經等不及，烏壓壓地朝他聚集過去。<br>謝憐正要拿起劍，卻發現無名已經先他一步，吸引了怨魂，被徹底吞沒，魂消魄散。<br>
					而你知道這個無名，便是謝憐在人間最後的信徒...</b></h4>
                <button type="button" class="btn btn-lg option1I-btn">I.愉快地告訴謝憐這個殘酷的事實：你在這世上，最後一個信徒，沒了。</button>
                <button type="button" class="btn btn-lg option1J-btn">J.略帶憐憫的看他一眼，為事情不在自己預期中惋惜。飄然離去。</button>
            </div>
        `);
        $('.option1G-btn').prop('disabled', true).addClass('disabled');
        $('.option1H-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1H-btn', function() {
        $('#initial_option').append(`
            <div class="option1H">
                <h4><b>你選的是H.<br>謝憐不屈服於你的威脅，他提起劍走進人群，告訴他們只要拿劍刺他就不會得人面疫，且他是神官，受了傷也不會死。<br>你覺得謝憐簡直瘋了。不可置信地看著事態發展。<br>
				人們爭吵著要不要接受謝憐的提議，而怨靈已經等不及，烏壓壓地朝他聚集過去。<br>謝憐正要拿起劍，卻發現無名已經先他一步，吸引了怨魂，被徹底吞沒，魂消魄散。<br>
				而你知道這個無名，便是謝憐在人間最後的信徒...</b></h4>
                <button type="button" class="btn btn-lg option1I-btn">I.愉快地告訴謝憐這個殘酷的事實：你在這世上，最後一個信徒，沒了。</button>
                <button type="button" class="btn btn-lg option1J-btn">J.略帶憐憫的看他一眼，為事情不在自己預期中惋惜。飄然離去。</button>
            </div>
        `);
        $('.option1G-btn').prop('disabled', true).addClass('disabled');
        $('.option1H-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1I-btn', function() {
        $('#initial_option').append(`
            <div class="option1I">
                <h4><b>你選的是I.<br>謝憐聽了你的話後，愣了好一會，才艱難地一字一頓道：什麼，叫，沒了？<br>
					你悠悠回答： 魂飛魄散了。 並且繼續往他的心裡扎刀：他代替你被詛咒，你召回來的亡靈，把他吃得渣都不剩了。<br>
					謝憐似乎被這消息震傻了，你仍不依不饒地繼續： 他生前是你麾下士兵，死後是追隨你的亡靈。<br>中元節、花燈夜、鬼火魂。跟著你這樣可悲可笑的神，這位信徒也張是可悲可笑到了極點。<br>
					謝憐聽到自己的信徒被如此評價，忽然一陣無可抑制的暴怒，提劍上來砍你。<br>你們打架引來了天庭的神武大帝。你可打不過那君吾，還是先溜為上好。<br>END.<br>引謝憐毀滅蒼生(0/1) 任務失敗！！！</b></h4>   
			</div>
        `);
        $('.option1I-btn').prop('disabled', true).addClass('disabled');
        $('.option1J-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option1J-btn', function() {
        $('#initial_option').append(`
            <div class="option1J">
                <h4><b>你選的是J.<br>！OOC警告！OOC警告！OOC警告！<br>
					你的鬼生樂趣就是看謝憐朝你設定的方向走，沒照你意思的話就要告訴他世界有多殘忍，摧毀他的信念！怎能在最精彩時提前離去！！！<br>END.<br>引謝憐毀滅蒼生(0/1) 任務失敗！！！</b></h4>
			</div>
        `);
        $('.option1I-btn').prop('disabled', true).addClass('disabled');
        $('.option1J-btn').prop('disabled', true).addClass('disabled');
    });
//////////////////////////////////////////////////////////////////////////路過大漢劇本///////////////////////////////////
    $('#initial_option').on('click', '.option2A-btn', function() {
        $('#initial_option').append(`
            <div class="option2A">
                <h4><b>你選的是A.<br>你抓著這個瘋子的衣領搖晃洩憤，但他完全沒反應，任由你怎麼罵都不還嘴。<br>終於你心中的鬱氣罵散了，你把他扔回坑裡，回頭撿起剛剛買的貨品。臨走之時，覺得有些愧疚...</b></h4>
                <button type="button" class="btn btn-lg option2C-btn">C.罷了，何必道歉，那瘋子下雨了還躺在路中央擋路，可不就是他的問題麼！</button>
				<button type="button" class="btn btn-lg option2D-btn">D. 剛剛確實罵得狠了，回去勸他趕快回家，順便將身上的斗笠給他擋擋雨。</button>
            </div>
        `);
        $('.option2A-btn').prop('disabled', true).addClass('disabled');
        $('.option2B-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option2B-btn', function() {
        $('#initial_option').append(`
            <div class="option2B">
                <h4><b>你選的是B.<br>你回家後沒多久，便看到遠方大片烏雲奔騰呼嘯而來。<br>不！不是烏雲！竟然是一群形容可怖的亡魂！你逃跑不及，世界頓時一片漆黑。<br>
					喚回謝憐理智(0/1)<br>淵中人得一雨中笠(0/1)<br> 拯救蒼生任務失敗！！！<br>END.</b></h4>
            </div>
        `);
        $('.option2A-btn').prop('disabled', true).addClass('disabled');
        $('.option2B-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option2C-btn', function() {
        $('#initial_option').append(`
            <div class="option2C">
                <h4><b>你選的是C.<br>你走了幾步，想想自己方才確實有些過份，往身上看了看，就只有一頂斗笠堪堪可用，要將他贈給那白衣人嗎？</b></h4>
                <button type="button" class="btn btn-lg option2E-btn">E. 唉，一頂斗笠不算什麼，就送吧！這人怪可憐的！</button>
                <button type="button" class="btn btn-lg option2F-btn">F.送了我還怎麼擋雨，算了，反正那人也早已溼透了。</button>
            </div>
        `);
        $('.option2C-btn').prop('disabled', true).addClass('disabled');
        $('.option2D-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option2D-btn', function() {
        $('#initial_option').append(`
            <div class="option2D">
                <h4><b>你選的是D.<br>恭喜你，平安到家後，又是安全快樂的一天。<br>喚回謝憐理智(1/1)<br>淵中人得一雨中笠(1/1)<br> 拯救蒼生任務成功！！！ <br> END.</b></h4>
            </div>
        `);
        $('.option2C-btn').prop('disabled', true).addClass('disabled');
        $('.option2D-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option2E-btn', function() {
        $('#initial_option').append(`
            <div class="option2E">
                <h4><b>你選的是E.<br>恭喜你，平安到家後，又是安全快樂的一天。<br>喚回謝憐理智(1/1)<br>淵中人得一雨中笠(1/1)<br> 拯救蒼生任務成功！！！<br>  END.</b></h4>   
			</div>
        `);
        $('.option2E-btn').prop('disabled', true).addClass('disabled');
        $('.option2F-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option2F-btn', function() {
        $('#initial_option').append(`
            <div class="option2F">
                <h4><b>你選的是F.<br>你回家後沒多久，便看到遠方大片烏雲奔騰呼嘯而來。<br>不！不是烏雲！竟然是一群形容可怖的亡魂！你逃跑不及，世界頓時一片漆黑。<br>
					喚回謝憐理智(0/1)<br>淵中人得一雨中笠(0/1)<br> 拯救蒼生任務失敗！！！<br>END.</b></h4></div>
        `);
        $('.option2E-btn').prop('disabled', true).addClass('disabled');
        $('.option2F-btn').prop('disabled', true).addClass('disabled');
    });
	
//////////////////////////////////////////////////////////////無名選項劇本////////////////////////////

    $('#initial_option').on('click', '.option3A-btn', function() {
        $('#initial_option').append(`
            <div class="option3A">
                <h4><b>你選的是A.<br>你不希望太子殿下把罪責都擔在自己身上，於是向殿下請求能否代替他發動人面疫。<br>
				但殿下看不出你身上的怨氣，不相信你對永安真有什麼深仇大恨，還是決定自己發動。<br>殿下忽然就將封存有數萬亡魂的劍尖刺入自己身體，你來不及阻止，在一旁目眥欲裂。
				<br>你知道殿下對他們心軟了...</b></h4>
                <button type="button" class="btn btn-lg option3C-btn">C.既然殿下吩咐不到三天後就不准出現，那便尊重殿下的做法。</button>
				<button type="button" class="btn btn-lg option3D-btn">D.盡力勸說殿下不要對敵人仁慈 (不，你不會選這個)</button>
            </div>
        `);
        $('.option3A-btn').prop('disabled', true).addClass('disabled');
        $('.option3B-btn').prop('disabled', true).addClass('disabled');
		$('.option3D-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option3C-btn', function() {
        $('#initial_option').append(`
            <div class="option3C">
                <h4><b>你選的是C.<br>你躲在一旁，看到路人對殿下不理不睬、看到罪魁禍首白無相前來對殿下冷嘲熱諷，你握緊了雙拳，極力克制自己不要違背殿下的吩咐。<br>
				因為有人給了殿下一頂斗笠，殿下不願再發動人面疫，但白無相將數萬亡魂放出，<br>你看到殿下又想用那種極度傷害自己的方式來救眾生，你...</b></h4>
                <button type="button" class="btn btn-lg option3E-btn">E.尊重殿下一切決定。</button>
                <button type="button" class="btn btn-lg option3F-btn">F.趁殿下不注意將劍拿走，將亡魂全數吸引過來</button>
            </div>
        `);
        $('.option3C-btn').prop('disabled', true).addClass('disabled');
        $('.option3D-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option3E-btn', function() {
        $('#initial_option').append(`
            <h4><b>你選的是E.<br>這可不是尊重的問題，你不可能眼睜睜看著這件事再發生一次！重選。</b></h4>
                <button type="button" class="btn btn-lg option3G-btn">E.尊重殿下一切決定。</button>
                <button type="button" class="btn btn-lg option3H-btn">F.趁殿下不注意將劍拿走，將亡魂全數吸引過來</button>
        `);
        $('.option3E-btn').prop('disabled', true).addClass('disabled');
        $('.option3F-btn').prop('disabled', true).addClass('disabled');
		$('.option3G-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option3F-btn', function() {
        $('#initial_option').append(`
            <div class="option3F">
                <h4><b>你選的是F.<br>數萬亡魂聚成洪流穿過了你的魂體，你感覺到自己漸漸消散，餘光看到殿下震驚的神情，嘴角微笑，心想，終於能為他承擔一次了。<br>
				但殿下好像很難過。別難過啊，我很開心的。<br><br>
				漫長一段黑暗後，漸漸有了亮光。<br>你睜開眼，原來自己並沒有完全消散。你決心要變得更強，繼續保護殿下，於是飄向銅爐山，開啟屬於你真正的歷練。<br>END.</b></h4>
			</div>
        `);
        $('.option3G-btn').prop('disabled', true).addClass('disabled');
        $('.option3H-btn').prop('disabled', true).addClass('disabled');
		$('.option3E-btn').prop('disabled', true).addClass('disabled');
        $('.option3F-btn').prop('disabled', true).addClass('disabled');
    });
	$('#initial_option').on('click', '.option3H-btn', function() {
        $('#initial_option').append(`
            <div class="option3H">
                <h4><b>你選的是F.<br>數萬亡魂聚成洪流穿過了你的魂體，你感覺到自己漸漸消散，餘光看到殿下震驚的神情，嘴角微笑，心想，終於能為他承擔一次了。<br>
				但殿下好像很難過。別難過啊，我很開心的。<br><br>
				漫長一段黑暗後，漸漸有了亮光。<br>你睜開眼，原來自己並沒有完全消散。你決心要變得更強，繼續保護殿下，於是飄向銅爐山，開啟屬於你真正的歷練。<br>END.</b></h4>
			</div>
        `);
        $('.option3G-btn').prop('disabled', true).addClass('disabled');
        $('.option3H-btn').prop('disabled', true).addClass('disabled');
		$('.option3E-btn').prop('disabled', true).addClass('disabled');
        $('.option3F-btn').prop('disabled', true).addClass('disabled');
    });
});

