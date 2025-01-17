PULSE.app.templates.filter_dropdown=_.template('<div class="drop-down js-drop-down"> <div class="drop-down__clickzone js-dropdown-trigger" tabindex="0" role="button"></div> <div class="drop-down__label js-drop-down-label"><%= label %></div> <div class="drop-down__current js-drop-down-current"><%= current %></div> <ul class="drop-down__dropdown-list js-drop-down-options"> <% options.forEach( function( item, key ) {  %> <li tabindex="0" role="button" class="drop-down__dropdown-list__option" role="button" data-option="<%= item.key %>"><%= item.value %></li> <% }); %> </ul> </div>'),PULSE.app.templates["picture-element"]=_.template(""),PULSE.app.templates["social-share"]=_.template('<div class="social-share <%= typeof cssClass !== \'undefined\' ? cssClass : \'\' %>" data-widget="<%= typeof dataWidget !== \'undefined\' ? dataWidget: \'\' %>"> <button class="btn btn--social-share js-btn-social-share"></button> <ul class="social-share__icons js-social-icons"> <li><a href="//www.facebook.com/sharer.php?u=https://iplt20.com<%= config.url %>&amp;t=<%= config.text || \'\' %>" target="_blank" class="js-share facebook"></a></li> <li><a href="//twitter.com/share?url=https://iplt20.com<%= config.url %>&amp;text=<%= config.text || \'\' %>&amp;hashtags=<%= config.hashtags.join(\',\') || \'\' %>&amp;via=ipl" target="_blank" class="js-share twitter"></a></li> <li class="u-show-tablet"><a href="whatsapp://send?text=https://iplt20.com<%= config.url %>" data-action="share/whatsapp/share" target="_blank" class="js-share whatsapp"></a></li> <li><a href="mailto:?subject=<%= config.url %>&amp;body=<%= config.text || \'\' %>" class="envelope"></a></li> </ul> </div>'),PULSE.app.templates["gallery-slider"]=_.template('<section class="gallery-slider <%= typeof cssClass !== \'undefined\' ? cssClass : \'\' %>" data-widget="gallery-slider" data-script="ipl_gallery-slider" data-gallery-items="<%= playlist.playlistItems.length %>" data-playlist-id="<%= playlist.id %>"> <div class="gallery-slider__content"> <div class="gallery-slider__controls"> <div class="gallery-slider__nav gallery-slider__nav--prev js-nav-prev"> <span class="icn-chevron-left"></span> </div> <div class="gallery-slider__nav gallery-slider__nav--next js-nav-next"> <span class="icn-chevron-right"></span> </div> <div class="gallery-slider__expand js-expand"> <span class="icon icn-expand expand"></span> <span class="icon icn-close"></span> </div> </div> <div class="gallery-slider__slides-container js-viewport"> <ul class="slider-viewport__list"> <li class="gallery-slider__slide"> <picture class="js-item-image <%= playlist.playlistItems[0].isPortrait ? \'is-portrait\' : \'\' %>"> <source class="" srcset="<%= playlist.playlistItems[0].variantUrls.fullWidth %>" media="(min-width: 640px)"> <source class="" srcset="<%= playlist.playlistItems[0].variantUrls.fullWidthMobile %>, <%= playlist.playlistItems[0].variantUrls.fullWidthMobileRetina %> 2x" media="(min-width: 640px)"> <img class="photo-gallery__image" src="<%= playlist.playlistItems[0].variantUrls.fullWidth %>"> </picture> </li> </ul> </div> <div class="gallery-slider__details js-details-target"></div> </div> <ul class="gallery-slider__slides js-slide-list u-hide"> <% playlist.playlistItems.forEach( function( item ) { %> <li class="gallery-slider__slide js-image-container" data-index="<%= item.index %>"> <picture class="js-item-image <%= item.isPortrait ? \'is-portrait\' : \'\' %>"> <source class="" srcset="<%= item.variantUrls.fullWidth %>" media="(min-width: 640px)"> <source class="" srcset="<%= item.variantUrls.fullWidthMobile %>, <%= item.variantUrls.fullWidthMobileRetina %> 2x" media="(min-width: 640px)"> <img class="photo-gallery__image" src="<%= item.variantUrls.fullWidth %>"> </picture> <div class="u-hide js-details-source"> <p class="gallery-slider__photo-number"><span class="u-hide-desktop">Photo <%= item.index + 1 %> of <%= playlist.playlistItems.length %></span><span class="u-show-desktop"><%= item.index + 1 %> / <%= playlist.playlistItems.length %></span></p> <p class="gallery-slider__photo-summary"><%= item.description || \'\' %></p> <p class="gallery-slider__photo-date js-date"><%= helper.dateAge( item.publishFrom ) %></p> <% var config = {\n                    url: item.link,\n                    text: item.description,\n                    hashtags: []\n                } %> <%= PULSE.app.templating.render( {\n                    cssClass: \'gallery-slider__photo-sharing u-hide-phablet\',\n                    config: config,\n                    dataWidget: \'photo-sharing\'\n                }, \'social-share\' ) %> <%= PULSE.app.templating.render( {\n                    cssClass: \'social-share--horizontal social-share--right gallery-slider__photo-sharing u-show-phablet\',\n                    config: config,\n                    dataWidget: \'photo-sharing\'\n                }, \'social-share\' ) %> </div></li> <% } ); %> </ul> <div class="gallery-slider__thumbnails-container js-thumbs-wrap"> <div class="gallery-slider__thumb-nav gallery-slider__thumb-nav--left js-thumb-nav-left"> <span class="icn-chevron-left"></span> </div> <div class="gallery-slider__thumb-nav gallery-slider__thumb-nav--right js-thumb-nav-right"> <span class="icn-chevron-right"></span> </div> <ul class="gallery-slider__thumbnails js-thumbs"> <% playlist.playlistItems.forEach( function( item ) { %> <li class="gallery-slider__thumbnail"> <picture class="js-item-image <%= item.isPortrait ? \'is-portrait\' : \'\' %>"> <source class="" srcset="<%= item.variantUrls.thumbnail %>" media="(min-width: 640px)"> <source class="" srcset="<%= item.variantUrls.thumbnailMobile %>, <%= item.variantUrls.thumbnailMobileRetina %> 2x" media="(min-width: 640px)"> <img class="" src="<%= item.variantUrls.thumbnail %>"> </picture> </li> <% } ); %> </ul> </div> <div class="gallery-slider__info"> <div class="gallery-slider__title"><%= playlist.title %></div> <div class="gallery-slider__date"><%= playlist.playlistItems.length %><span class="gallery-slider__bullet">&bull;</span><%= helper.dateAge( playlist.publishFrom ) %></div> </div> </section>'),PULSE.app.templates.trendingItem=_.template('<% _.each( entries, function( entry, index ) { %> <div class="trendingItem"> <div class="tLogo50x <%= entry.abbr %>"></div> <div class="barContainer"> <div class="bar" style="width:<%= entry.percentage %>"></div> <div class="team"><%= entry.label %></div> <div class="count"><%= entry.count %></div> </div> </div> <% }) %>'),PULSE.app.templates.twitterMirrorCard=_.template('<% _.each(tweets, function(twt, index) { %> <div class="twitterMirrorCard"> <% if( typeof twt.photo !== \'undefined\' && twt.photo !== \'//www.iplt20.com/twittermirror\' ) { %> <img src="<%= twt.photo %>" class="photo" alt="#"> <% } %> <p class="message"> <%= twt.text %> </p> <a href="#" class="time"><span class="icon"></span><%= twt.timestamp %></a> </div> <% }); %>'),PULSE.app.templates["twitter-mirror-card"]=_.template('<% _.each( tweets, function( tweet, index ) { %> <% if( typeof tweet.photo !== \'undefined\' ) { %> <li class="twitter-mirror__card masonry-brick" data-id="<%= tweet.id %>" style="position: absolute; left: 0px; top: 0px"> <div class="cardContent"> <img src="<%= tweet.photo %>" class="photo" alt="#"> <div class="userContent"> <div class="user"><%= tweet.user.name %></div> <a href="//twitter.com/<%= tweet.user.account %>" target="_blank" class="handle">@<%= tweet.user.account %></a> </div> <div class="intents"> <div class="time"><%= tweet.text %></div> <div class="icons"> <a class="social-item__intent social-item__intent--reply" onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'tweet\',{in_reply_to:\'<%= tweet.id %>\'}); return false" href="#"></a> <a class="social-item__intent social-item__intent--retweet" onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'retweet\',{tweet_id:\'<%= tweet.id %>\'}); return false" href="#"></a> <a class="social-item__intent social-item__intent--favourite" onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'favorite\',{tweet_id:\'<%= tweet.id %>\'}); return false" href="#"></a> </div> </div> </div> </li> <% } %> <% }); %>'),PULSE.app.templates.fow=_.template('<% _.each( fow, function( wkt, index ) { %> <li data-ball-class="wicket" data-over-no="<%= wkt.bp.over %>" data-ball-no="<%= wkt.bp.ball %>" data-innings-no="<%= wkt.bp.innings %>"> <h3 class="batBowl"><%= wkt.score %></h3> <div class="name"><%= wkt.player %></div> <p class="overs">(<%= wkt.over %> Overs)</p> <div class="fallPlayer" data-player-id="<%= wkt.playerId %>"></div> <div class="modalContainer" style="position:absolute; top:0"></div> </li> <% } ); %>'),PULSE.app.templates["over-modal"]=_.template('<div class="ballInfo"> <div class="commentary"> <div class="icon"></div> <% if( comms ) { %> <p> <%= comms.autoText %> </p> <% } else { %> <p> Commentary not available </p> <% } %> </div> <% if( video ) { %> <%= PULSE.app.templating.render( {\n            item: video,\n            modifier: \'media-item--no-tag show-in-modal\'\n        }, \'video-thumbnail\' ) %> <% } %> <% if( hawkeye ) { %> <a href="#" class="hawkeye"> <p>Hawk-Eye Replay</p> <span class="icon"></span> </a> <% } %> </div>'),PULSE.app.templates.snippet=_.template('<div class="mobile-banner"> <div class="banner-content"> <div class="left-content"> <div> <p class="header">Pepsi IPL on the go</p> <p class="subHeader">Now get all the IPL action at your fingertips</p> </div> <div class="buttons"> <a href="https://itunes.apple.com/in/app/iplt20/id509837419?ls=1&mt=8" class="button apple"></a> <a href="https://play.google.com/store/apps/details?id=com.pulselive.bcci.android&hl=en" class="button android"></a> <a href="//www.iplt20.com/mobile" class="button mobile"></a> </div> </div> <div class="right-content"> <div class="close"> <p>Close</p> </div> </div> </div> </div>'),PULSE.app.templates.nostats=_.template('<div class="playerStats"> <h1>Batting and Fielding</h1> <table cellspacing="0" cellpadding="0" border="0"> <tr class="header"> <td>&nbsp;</td> <td>Mat</td> <td>NO</td> <td>Runs</td> <td>HS</td> <td>Ave</td> <td>BF</td> <td>SR</td> <td>100</td> <td>50</td> <td>4s</td> <td>6s</td> <td>Ct</td> <td>St</td> </tr> <tr class="odd"> <td class="label">Career</td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> </tr> </table> <h1> Bowling </h1> <table cellspacing="0" cellpadding="0" border="0"> <tr class="header"> <td>&nbsp;</td> <td>Mat</td> <td>Balls</td> <td>Runs</td> <td>Wkts</td> <td>BBM</td> <td>Ave</td> <td>Econ</td> <td>SR</td> <td>4w</td> <td>5w</td> </tr> <tr class="odd"> <td class="label">Career</td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> <td> - </td> </tr> </table> </div>'),PULSE.app.templates.overview=_.template('<div class="playerStats"> <h3>Batting and Fielding</h3> <table cellspacing="0" cellpadding="0" border="0"> <tr class="header"> <td class="label">&nbsp;</td> <td>Mat</td> <td>NO</td> <td>Runs</td> <td>HS</td> <td>Ave</td> <td>BF</td> <td>SR</td> <td>100</td> <td>50</td> <td>4s</td> <td>6s</td> <td>Ct</td> <td>St</td> </tr> <tr class="odd"> <td class="label">Career</td> <td> <%= careerStats.battingStats.m %> </td> <td> <%= careerStats.battingStats.no %> </td> <td> <%= careerStats.battingStats.r %> </td> <td> <%= careerStats.battingStats.hs %> </td> <td> <%= careerStats.battingStats.a %> </td> <td> <%= careerStats.battingStats.b %> </td> <td> <%= careerStats.battingStats.sr %> </td> <td> <%= careerStats.battingStats[\'100s\'] %> </td> <td> <%= careerStats.battingStats[\'50s\'] %> </td> <td> <%= careerStats.battingStats[\'4s\'] %> </td> <td> <%= careerStats.battingStats[\'6s\'] %> </td> <td> <%= careerStats.fieldingStats.c %> </td> <td> <%= careerStats.fieldingStats.s %> </td> </tr> <% _.each(stats, function(stat, index) {\n\n      \t\tvar year = stat.tournamentId.name.replace(\'ipl\', \'\');\n\n      \t\tif (index%2 == 0) { %> <tr> <% } else { %> </tr><tr class="odd"> <% } %> <td class="label"><%= year %></td> <td> <%= stat.battingStats.m %> </td> <td> <%= stat.battingStats.no %> </td> <td> <%= stat.battingStats.r %> </td> <td> <%= stat.battingStats.hs %> </td> <td> <%= stat.battingStats.a %> </td> <td> <%= stat.battingStats.b %> </td> <td> <%= stat.battingStats.sr %> </td> <td> <%= stat.battingStats[\'100s\'] %> </td> <td> <%= stat.battingStats[\'50s\'] %> </td> <td> <%= stat.battingStats[\'4s\'] %> </td> <td> <%= stat.battingStats[\'6s\'] %> </td> <td> <%= stat.fieldingStats.c %> </td> <td> <%= stat.fieldingStats.s %> </td> </tr> <% }); %> </table> <h3> Bowling </h3> <table cellspacing="0" cellpadding="0" border="0"> <tr class="header"> <td class="label">&nbsp;</td> <td>Mat</td> <td>Balls</td> <td>Runs</td> <td>Wkts</td> <td>BBM</td> <td>Ave</td> <td>Econ</td> <td>SR</td> <td>4w</td> <td>5w</td> </tr> <tr class="odd"> <td class="label">Career</td> <td><%= careerStats.bowlingStats.m %></td> <td><%= careerStats.bowlingStats.b %></td> <td><%= careerStats.bowlingStats.r %></td> <td><%= careerStats.bowlingStats.w %></td> <td><%= careerStats.bowlingStats.bbiw %>/<%= careerStats.bowlingStats.bbir %></td> <td><%= careerStats.bowlingStats.a %></td> <td><%= careerStats.bowlingStats.e %></td> <td><%= careerStats.bowlingStats.sr %></td> <td><%= careerStats.bowlingStats[\'4w\'] %></td> <td><%= careerStats.bowlingStats[\'5w\'] %></td> </tr> <% _.each(stats, function(stat, index) {\n\n      \t\tvar year = stat.tournamentId.name.replace(\'ipl\', \'\');\n\n      \t\tif (index%2 == 0) { %> <tr> <% } else { %> </tr><tr class="odd"> <% } %> <td class="label"> <%= year %></td> <td><%= stat.bowlingStats.m %></td> <td><%= stat.bowlingStats.b %></td> <td><%= stat.bowlingStats.r %></td> <td><%= stat.bowlingStats.w %></td> <td><%= stat.bowlingStats.bbiw %>/<%= stat.bowlingStats.bbir %></td> <td><%= stat.bowlingStats.a %></td> <td><%= stat.bowlingStats.e %></td> <td><%= stat.bowlingStats.sr %></td> <td><%= stat.bowlingStats[\'4w\'] %></td> <td><%= stat.bowlingStats[\'5w\'] %></td> </tr> <% }); %> </table> </div>'),PULSE.app.templates["results-list"]=_.template('<ul class="xiResults"> <% _.each( xi, function( player ) { %> <li class="player"> <div class="playerPhoto" data-player-id="<%= player.id %>"></div> <div class="barContainer"><div class="bar" style="width: <%= player.percentage %>%"></div></div> <p class="name"><%= player.shortName %> <%= player.captain ? \'(C)\' : \'\' %><%= player.wicketKeeper ? \'(W)\' : \'\' %></p> <p class="percent"><%= player.formattedPercentage %>%</p> </li> <% } ); %> </ul> <p class="resultsTitle">Not Selected</p> <ul class="xiResults notSelected"> <% _.each( others, function( player ) { %> <li class="player"> <div class="barContainer"><div class="bar" style="width: <%= player.percentage %>%"></div></div> <p class="name"><%= player.shortName %> <%= player.captain ? \'(C)\' : \'\' %><%= player.wicketKeeper ? \'(W)\' : \'\' %></p> <p class="percent"><%= player.formattedPercentage %>%</p> </li> <% } ); %> </ul>'),PULSE.app.templates["team-vote-hero"]=_.template('<section class="teamXIVote teamXIVoteHero"> <div class="voteXIContent" id="emptyView" style="display:none"> <p class="message">Voting will commence soon.</p> </div> <div class="voteXIContent" id="voteView" style="display:none"> <div class="xiOverlay introScreen"> <h3>Vote for your<span>XI</span></h3> <p>Vote for who you think should be in the starting XIs for today\'s match.</p> <h5>Select A Team</h5> <div class="teamContainer"> <a href="#" class="tLogo100x"></a> <a href="#" class="tLogo100x"></a> </div> </div> <div class="votingContainer"> <h6>Select up to 11 <span class="team"></span> players</h6> <ul class="teamList"> <li class="team"> <ul class="players"></ul> </li> <li class="team"> <ul class="players"></ul> </li> </ul> <p class="legend">Overseas Players</p> <div class="infoBox"> <div class="playerCount"><span>0</span> of 11 players selected</div> <div class="overseasLimit">You have exceeded the maximum limit of 4 overseas players</div> </div> <a href="#" class="submit">Submit</a> </div> <div class="xiOverlay voteSubmitted"> <p class="thankYou"><span>Thank you</span>for your vote</p> <p>Results can be seen on the match broadcast or by checking back here later</p> <div class="socialShareContainer"> <div class="socialShareBtn">Share my XI</div> <ul class="socialLinks"> <li><a href="#" class="twitter">Share to Twitter</a></li> <li><a href="#" class="facebook">Share to Facebook</a></li> <li><a href="#" class="google">Share to Google +</a></li> <li><a href="#" class="email">Email</a></li> </ul> </div> <a href="#" class="voteAgain button">Vote Again</a> <a href="#" class="voteForOtherTeam button">Vote <span class="otherTeam"></span> XI</a> <div class="broadcastInfo" style="display:none"> <h6>Official Broadcasters</h6> <p>UK - SkySports AUS - FoxSports IND - StarSports UK - SkySports AUS - FoxSports IND - StarSports</p> </div> </div> </div> <div class="voteXIContent" id="closedView" style="display:none"> <div class="teamContainer static"> <div class="tLogo100x"></div> <div class="tLogo100x"></div> </div> <div class="notification">Voting is now closed</div> <div class="xiOverlay voteClosed"> <p>Please check back later or watch the live broadcast for the results</p> </div> </div> <div class="voteXIContent" id="resultsView" style="display:none"> <div class="voteXIResults"> <div class="voteToggle"> <a href="#"></a> <a href="#"></a> </div> <div class="resultsContainer"> <div class="resultsTab xitab0"> <ul class="xiResults"></ul> <p class="resultsTitle">Not Selected</p> <ul class="xiResults notSelected"></ul> </div> <div class="resultsTab xitab1"> <ul class="xiResults"></ul> <p class="resultsTitle">Not Selected</p> <ul class="xiResults notSelected"></ul> </div> </div> </div> </div> <button class="modal-close"><span></span></button> </section>'),PULSE.app.templates["total-votes"]=_.template('<% _.each( matches, function( match, index ) { %> <tr> <td rowspan="2"><%= match.matchId %></td> <td><%= match.team1abbr %></td> <td class="<%= match.matchId %>-<%= match.team1id %> number"></td> <td rowspan="2" data-match-id="<%= match.matchId %>" class="number"></td> </tr> <tr> <td><%= match.team2abbr %></td> <td class="<%= match.matchId %>-<%= match.team2id %> number"></td> </tr> <% } ); %>'),PULSE.app.templates["voting-list"]=_.template('<% _.each( players, function( player ) { %> <li><a class="<%= player.nationality !== \'Indian\' ? \'overseas\' : \'\' %>" data-player-id="<%= player.id %>"> <%= player.shortName %> <%= player.captain ? "(C)" : \'\' %><%= player.wicketKeeper ? "(W)" : "" %> </a></li> <% } ); %>'),PULSE.app.templates["question-breakdown"]=_.template('<div class="title"><%= text %></div> <ul class="questionList"> <% _.each( options, function( o, i ) { %> <li> <a class="button"> <p><%= o.option %></p> <span class="bar" style="width:0%"></span> <span class="vote-result"><span id="result1"><%= o.percentage %></span></span> </a> </li> <% } ); %> </ul> <% if( totalVotes > 0 ) { %> <div class="votes"><%= PULSE.CLIENT.Util.commafy( totalVotes ) %> Votes</div> <% } %>'),PULSE.app.templates["question-list"]=_.template('<% _.each( questions, function( q, i ) { %> <li><a data-question-id="<%= q.id %>" href="#" class="button arrow"><%= q.text %><span class="arrow-icon"></span></a></li> <% } ); %>'),PULSE.app.templates.question=_.template('<div class="title"><%= text %></div> <ul class="questionList"> <% _.each( options, function( o, i ) { %> <li> <a data-question-id="<%= id %>" data-option-index="<%= i %>" href="#" class="button"> <p><%= o.option %></p> <span class="tick"></span> </a> </li> <% } ); %> </ul>'),PULSE.app.templates["twitter-buzz"]=_.template('<h1 class="subHeader">Today\'s Social Buzz</h1> <ul> <% _.each( topics, function( topic ) { %> <li> <span class="hashtagLabel"><a href="<%= topic.link %>" target="_blank">#<%= topic.label %></a></span> <span class="hashtagCount"><%= topic.count %></span> <div style="width:<%= topic.percent %>%">Bar</div> </li> <% } ); %> </ul>'),PULSE.app.templates["twitter-feed"]=_.template('<% _.each( tweets, function( tweet, index ) { %> <li class="<%= index === 0 ? "first" : "" %>"> <div class="avatar"> <a href="<%= tweet.user.link %>"> <img class="avatar size73" alt="<%= tweet.user.name %>" src="<%= tweet.user.avatarUrl %>"> </a> </div> <div class="body"> <span class="time"><i>bird</i><%= tweet.timestamp %></span> <div class="intents"> <a onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'tweet\',{in_reply_to:\'<%= tweet.id %>\'})" class="reply">Reply</a> <a onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'retweet\',{tweet_id:\'<%= tweet.id %>\'})" class="retweet">Retweet</a> <a onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'favorite\',{tweet_id:\'<%= tweet.id %>\'})" class="favourite">Favourite</a> </div> <a href="<%= tweet.user.link %>" class="fullName" target="_blank"><%= tweet.user.name %></a> <h2>@<%= tweet.user.account %></h2> <p><%= tweet.text %></p> </div> </li> <% } ); %>'),PULSE.app.templates["twitter-support"]=_.template('<h1>I\'m supporting</h1> <div class="inputCntr"> <select class="squadSelect"> <% _.each( teams, function( team, index ) { %> <option value="<%= team.abbreviation %>" data-team-id="<%= team.id %>"><%= team.fullName %></option> <% } ); %> </select> </div> <a class="tweetButton">Tweet</a>'),PULSE.app.templates["squad-list"]=_.template('<% if( captain ) { %> <li><a href="<%= captain.url %>"><%= captain.fullName %> (C)<%= captain.wicketKeeper ? " (W)" : "" %></a></li> <% } %> <% _.each( players, function( player, index ) { %> <li><a href="<%= player.url %>"><%= player.fullName %><%= player.wicketKeeper ? " (W)" : "" %></a></li> <% } ); %>'),PULSE.app.templates.overview=_.template('<% _.each( players, function( player ) { %> <li> <a href="<%= player.url %>" class="squadPlayerCard"> <div class="backdrop <%= team.abbreviation %>"> <div class="playerPhoto" data-player-id="<%= player.id %>"></div> <div class="badges"> <%= player.captain ? \'<span class="captain"></span>\' : \'\' %> <%= player.wicketKeeper ? \'<span class="wicket-keeper"></span>\' : \'\' %> <%= player.nationality !== \'Indian\' ? \'<span class="overseas-player"></span>\' : \'\' %> </div> </div> <div class="details"> <p class="player-name"><%= player.lastName ? player.firstName : \'\' %> <strong><%= player.lastName || player.firstName %></strong></p> <div class="badges"> <%= player.captain ? \'<span class="captain"></span>\' : \'\' %> <%= player.wicketKeeper ? \'<span class="wicket-keeper"></span>\' : \'\' %> <%= player.nationality !== \'Indian\' ? \'<span class="overseas-player"></span>\' : \'\' %> </div> <span class="season">IPL <%= year %></span> <% if( player.stats && ( player.stats.battingStats || player.stats.bowlingStats ) ) { %> <ul class="stats"> <li> <span class="label">Matches</span> <span class="value"><%= player.stats.battingStats ? player.stats.battingStats.m : 0 %></span> </li> <li> <span class="label">Runs</span> <span class="value"><%= player.stats.battingStats ? player.stats.battingStats.r : 0 %></span> </li> <li> <span class="label">Wickets</span> <span class="value"><%= player.stats.bowlingStats ? player.stats.bowlingStats.w : 0 %></span> </li> </ul> <% } else { %> <ul class="stats"> <li> <span class="label">Matches</span> <span class="value">0</span> </li> <li> <span class="label">Runs</span> <span class="value">0</span> </li> <li> <span class="label">Wickets</span> <span class="value">0</span> </li> </ul> <% } %> <button class="button secondary">View Profile</button> </div> </a> </li> <% } ); %>'),PULSE.app.templates["season-filter"]=_.template('<a class="selection">IPL Squad <%= tournament.year %></a> <ul> <% _.each( years, function( year ) { %> <li data-season="ipl<%= year %>" class="option <%= year === tournament.year ? \'active\' : \'\' %>">IPL Squad <%= year %></li> <% } ); %> </ul>'),PULSE.app.templates.playoffs=_.template('<% _.each( matches, function( match, i ) { %> <div class="match"> <header class="matchHeader"> <div class="stage"><%= match.matchDescription %></div> <div class="date"><%= match.formattedMatchDate %></div> </header> <% if( i + 1 < matches.length ) { %> <a class="result" href="<%= match.matchLink %>"> <div class="runs first <%= match.team1won ? \'winner\' : \'\' %>"><%= match.team1innings.join(\' & \') %></div> <div class="tLogo16x30 <%= match.team1abbr %> <%= match.team1won ? \'winner\' : \'\' %>"></div> <div class="vs">vs</div> <div class="tLogo16x30 <%= match.team2abbr %> <%= match.team2won ? \'winner\' : \'\' %>"></div> <div class="runs <%= match.team2won ? \'winner\' : \'\' %>"><%= match.team2innings.join(\' & \') %></div> </a> <% } else { %> <a class="result final" href="<%= match.matchLink %>"> <div class="scores first <%= match.team1won ? \'winner\' : \'\' %>"> <div class="tLogo50x <%= match.team1abbr %> <%= match.team1won ? \'winner\' : \'\' %>"></div> <div class="runs"><%= match.team1innings.join(\' & \') %></div> <div class="overs"><%= match.team1overProgress %></div> </div> <div class="vs">vs</div> <div class="scores <%= match.team2won ? \'winner\' : \'\' %>"> <div class="tLogo50x <%= match.team2abbr %> <%= match.team2won ? \'winner\' : \'\' %>"></div> <div class="runs"><%= match.team2innings.join(\' & \') %></div> <div class="overs"><%= match.team2overProgress %></div> </div> </a> <% } %> </div> <% } ); %>'),PULSE.app.templates["standings-table-abridged"]=_.template("<% _.each( groups, function( group, index ) { %> <table class=\"table standings standingsTableSmall\"> <tbody> <tr> <th>Pos</th> <th>Team</th> <th>Pld</th> <th>Pts</th> <th>Form</th> </tr> <% _.each(group.standings, function(team, index) { %> <tr> <td class=\"<%= team.label === 'Q' ? 'highlighted' : '' %>\"><%= team.label %></td> <td> <% if( team.team.link ) { %><a href=\"<%= team.team.link %>\"><% } %> <div class=\"tLogo16x30 <%= team.team.abbreviation %>\"></div><%= team.team.abbreviation %></a></td> <% if( team.team.link ) { %> <% } %> <td><%= team.played %></td> <td><%= team.points %></td> <td> <ul class=\"win-list\"> <% var form = team.recentForm; %> <% _.each( form.length > 3 ? form.slice( 0, 3 ) : form, function( outcome ) { %> <li class=\"<%= outcome === 'win' ? 'won' : outcome === 'lose' ? 'lost' : 'nr' %>\"> <%= outcome === 'win' ? 'W' : outcome === 'lose' ? 'L' : 'N' %> </li> <% } ); %> </ul> </td> </tr> <% }); %> </tbody> </table> <% } ); %>"),PULSE.app.templates["standings-table-full"]=_.template('<% _.each( groups, function( group, index ) { %> <table cellspacing="0" cellpadding="0" border="0" class=""> <tbody> <tr class="header"> <td class="pos">Pos</td> <td class="team">Team</td> <td class="mat">Mat</td> <td class="mat">Won</td> <td class="mat">Lost</td> <td class="mat">Tied</td> <td class="mat">N/R</td> <td class="netrr">Net RR</td> <td class="forAgainst">For</td> <td class="forAgainst">Against</td> <td class="points">Pts</td> <td class="lastFive">Last 5</td> </tr> <% _.each( group.standings, function( standingModel, index ) { %> <tr class="<%= index % 2 === 0 ? \'\' : \'rowColour\' %>"> <td class="pos"><%= standingModel.label %></td> <td class="team"> <% if( standingModel.team.link ) { %> <a href="<%= standingModel.team.link %>"><div class="tLogo16x30 <%= standingModel.team.abbreviation %>"></div><%= standingModel.team.abbreviation %></a> <% } else { %> <div class="tLogo16x30 <%= standingModel.team.abbreviation %>"></div><%= standingModel.team.abbreviation %> <% } %> </td> <td class="mat"><%= standingModel.played %></td> <td class="mat"><%= standingModel.won %></td> <td class="mat"><%= standingModel.lost %></td> <td class="mat"><%= standingModel.drawn %></td> <td class="mat"><%= standingModel.noResult %></td> <td class="netrr"><%= standingModel.netRunRate %></td> <td class="forAgainst"><%= standingModel._for %></td> <td class="forAgainst"><%= standingModel._against %></td> <td class="points"><%= standingModel.points %></td> <td class="lastFive"> <div> <% _.each( standingModel.recentForm, function( outcome ) { %> <span class="<%= outcome %>"></span> <% } ); %> </div> </td> </tr> <% } ); %> </tbody> </table> <% } ); %>'),PULSE.app.templates["emerging-player-text"]=_.template("<p>This award will be given by BCCI to the player who has best demonstrated, through his performances during the season, his potential to be a future star of international cricket. In order to be eligible for the Emerging Player award, a player must meet all four of the following criteria:</p> <ol> <li>be born after 1 April 1991;</li> <li>have played 5 or less Test matches / 10 or less ODI or T20 internationals for his country;</li> <li>have played in 25 or less IPL matches (as of the start of the season); and</li> <li>have not previously won the Emerging Player Award.</li> </ol> <p>Winner to be decided through a combination of commentators’ choice and public voting.</p>"),PULSE.app.templates["mobile-leader-card"]=_.template('<% switch( cardType )\n{\n  case "MostRuns":\n    cardColourCssClass = "orange";\n    title = "Orange Cap";\n    label = "Runs";\n    includeInList = true;\n    break;\n\n  case "MostSixes":\n    cardColourCssClass = "orange";\n    title = "Maximum Sixes";\n    label = "Sixes";\n    includeInList = false;\n    break;\n\n  case "HighestScores":\n    cardColourCssClass = "green";\n    title = "Highest Individual Score";\n    label = "Runs";\n    includeInList = true;\n    break;\n\n  case "BestBattingStrikeRate":\n    cardColourCssClass = "lime";\n    title = "Highest Strike Rate";\n    label = "Strike-Rate";\n    includeInList = false;\n    break;\n\n  case "MostWickets":\n    cardColourCssClass = "purple";\n    title = "Purple Cap";\n    label = "Wickets";\n    includeInList = true;\n    break;\n\n  case "BestBowling":\n    cardColourCssClass = "violet";\n    title = "Best Bowling Figures";\n    label = "Wickets/Runs";\n    includeInList = false;\n    break;\n\n  case "BowlingAverage":\n    cardColourCssClass = "pink";\n    title = "Best Averages";\n    label = "Average";\n    includeInList = false;\n    break;\n\n  case "BestEconomy":\n    cardColourCssClass = "red";\n    title = "Best Economy Rates";\n    label = "Econ";\n    includeInList = false;\n    break;\n\n  case "PlayerPoints":\n    cardColourCssClass = "red";\n    title = "Most Valuable Player";\n    label = "Pts";\n    includeInList = true;\n    break;\n\n  case "EmergingPlayerPoints":\n    cardColourCssClass = "orange";\n    title = "Pepsi Emerging Player";\n    label = "Pts";\n    includeInList = true;\n    break;\n} %> <div class="leaderCard <%= cardColourCssClass %>"> <% _.each( statsArray, function( player, index ) { %> <% if( index === 0 ) { %> <div class="leaderHeader" style="padding-left:10px"><h4> <%= title %> </h4></div> <div class="leaderBackdrop"> <div class="leaderStat <%= cardColourCssClass %>"> <span class="digits"><%= player.stat %></span> <span class="statLabel"><%= label %></span> </div> <div class="imageContainer" data-player-id="<%= player.player.id %>"> <img> </div> </div> <div class="leaderChart" data-player-id="<%= player.player.id %>"> <% if( player.player.url ) { %> <h1><a href="<%= player.player.url %>"><%= player.firstName %> <%= player.player.lastName %></a></h1> <% } else { %> <h1><%= player.player.firstName %> <%= player.player.lastName %></h1> <% } %> <h2><%= PULSE.CLIENT.getUserFacingAbbr(player.team.abbreviation) %></h2> <span><%= index + 1 %></span> </div> <% } else { %> <div class="leaderChart" data-player-id="<%= player.player.id %>"> <% if( player.player.url ) { %> <h1><a href="<%= player.player.url %>"><%= player.firstName %> <%= player.player.lastName %></a></h1> <% } else { %> <h1><%= player.player.firstName %> <%= player.player.lastName %></h1> <% } %> <h2><%= PULSE.CLIENT.getUserFacingAbbr(player.team.abbreviation) %> <i>|</i> <%= player.stat %> <%= includeInList ? label : "" %></h2> <span><%= index + 1 %></span> </div> <% } %> <% } ); %> </div>'),PULSE.app.templates["season-numbers"]=_.template('<div class="seasonNumbers"> <h1 class="subHeader"><%= year %> in Numbers</h1> <div class="seasonNumbersHeader"> <div class="seasonNumbersHeaderContent"> <div class="dyKnow"> <h1>Did you know?</h1> <p><%= didYouKnow %></p> </div><div class="statHero"></div> </div> </div> <div class="seasonNumbersContent"> <table cellspacing="0" cellpadding="0" border="0"> <tbody><tr> <td> <div class="card"> <a href="/stats/<%= year %>/most-runs" class="cardContent iplCoral"><span class="digits"><%= runs %></span><span class="statLabel">Runs</span></a> </div> </td> <td> <div class="card"> <div class="cardPhoto photoOne"></div> </div> </td> <td> <div class="card"> <a href="/stats/<%= year %>/most-wickets" class="cardContent iplPurple"><span class="digits"><%= wickets %></span><span class="statLabel">Wickets</span></a> </div> </td> <td colspan="2"> <div class="card"> <a href="https://twitter.com/#!/search/realtime/%23ipl" class="cardContent tweets" target="_blank"> <span class="digits"><%= tweetCount %></span><span class="statLabel">#IPL Tweets</span><span class="bird">bird</span> </a> </div> </td> </tr> <tr> <td> <div class="card"> <a href="/stats/<%= year %>/most-dot-balls-bowled" class="cardContent iplGreen"><span class="digits"><%= dotBalls %></span><span class="statLabel">Dot Balls</span></a> </div> </td> <td> <div class="card"> <a href="/stats/<%= year %>/most-sixes" class="cardContent iplOrange"><span class="digits"><%= sixes %></span><span class="statLabel">Sixes</span></a> </div> </td> <td> <div class="card"> <div class="cardPhoto photoFive"></div> </div> </td> <td> <div class="card"> <a href="/stats/<%= year %>/most-fours" class="cardContent iplViolet"><span class="digits"><%= runsFromBoundaries %></span><span class="statLabel">Runs from Boundaries</span></a> </div> </td> <td> <div class="card"> <div class="cardPhoto photoFour"></div> </div> </td> </tr> <tr> <td> <div class="card"> <div class="cardContent iplRed"><span class="digits"><%= sixDistance %>m</span><span class="statLabel">Longest Six</span></div> </div> </td> <td> <div class="card"> <div class="cardPhoto photoTwo"></div> </div> </td> <td> <div class="card"> <a href="/stats/<%= year %>/most-fifties" class="cardContent iplLime"><span class="digits"><%= fifties %></span><span class="statLabel">Half Centuries</span></a> </div> </td> <td> <div class="card"> <div class="cardPhoto photoThree"></div> </div> </td> <td> <div class="card"> <a href="/stats/<%= year %>/fastest-ball" class="cardContent iplPink"><span class="digits"><%= fastestBallKmh %><i> kph</i></span><span class="statLabel">Fastest Ball</span></a> </div> </td> </tr></tbody> </table> </div> </div>'),
PULSE.app.templates.competition=_.template('<div class="unitCntr"> <div class="unitContent"> <div class="captionContent"> <div class="captionHeader"> <div class="number"><%= number %></div> <p><% if( caption && caption.length > 0 ) { %> <%= caption %> <% } %> </p> </div> <div class="captionContainer"> <div class="playerContainer show-in-modal" data-publish-date="<%= video.publish_date %>" data-title="<%= video.title %>" data-media-id="<%= video.media_id %>"> <a href="#" onclick="return false"> <span class="play"><i>Play</i></span> <img src="<%= video.thumbnails[1].url %>" alt=""> </a> </div> <% if( !stopped ) { %> <div class="tweetContainer"> <textarea placeholder="Tweet us your name for the play >>"></textarea> <a href="#" class="tweetButton"><span></span>Tweet</a> </div> <% } else { %> <div class="winnerContainer"> <div class="tag">Winner</div> <div class="profileName"><%= winner.name %></div> <a href="//www.twitter.com/<%= winner.handle %>" class="handle"> <%= winner.handle %> </a> <p class="caption"> <%= winner.message %> </p> </div> <% } %> </div> </div> </div> </div>'),PULSE.app.templates["tweet-list"]=_.template('<% _.each(tweets, function(tweet, index) { %> <li> <a href="<%= tweet.link %>" target="_BLANK" class="time"><div class="icon"></div><%= tweet.timestamp %></a> <a href="<%= tweet.user.link %>" target="_BLANK"> <img class="avatar js-action-profile-avatar" src="<%= tweet.user.avatarUrl %>" alt="avatar"> </a> <a class="name" href="<%= tweet.user.link %>" target="_BLANK"><%= tweet.user.name %></a> <div class="handle">@<%= tweet.user.account %></div> <p><%= tweet.text %></p> <div class="intents"> <a onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'tweet\',{in_reply_to:\'<%= tweet.id %>\'})" class="reply">Reply</a> <a onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'retweet\',{tweet_id:\'<%= tweet.id %>\'})" class="retweet">Retweet</a> <a onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'favorite\',{tweet_id:\'<%= tweet.id %>\'})" class="favourite">Favourite</a> </div> </li> <% }); %>'),PULSE.app.templates.mirror=_.template('<% _.each(tweets, function(twt, index) { %> <li class="card" data-id="<%= twt.id %>"> <div class="cardContent"> <% if( typeof twt.photo !== \'undefined\' && twt.photo !== \'//www.iplt20.com/twittermirror\' ) { %> <img src="<%= twt.photo %>" class="photo" alt="#"> <% } %> <p><%= twt.text %></p> <div class="intents"> <div class="time"><i>bird</i><%= twt.timestamp %></div> <div class="icons"> <a class="reply" onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'tweet\',{in_reply_to:\'<%= twt.id %>\'}); return false" href="#">Reply</a> <a class="retweet" onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'retweet\',{tweet_id:\'<%= twt.id %>\'}); return false" href="#">Retweet</a> <a class="favourite" onclick="PULSE.CLIENT.TwitterController.tweetEvent(\'favorite\',{tweet_id:\'<%= twt.id %>\'}); return false" href="#">Favourite</a> </div> </div> </div> </li> <% }); %>'),PULSE.app.templates["article-thumbnail"]=_.template('<a href="<%= item.link %>"> <article class="media-item <%= typeof modifier !==\'undefined\' ? modifier : \'\' %>"> <div class="media-item__img-container"> <% if( item.leadMediaUrls.thumbnail ) { %> <picture class="media-item__picture"> <source srcset="<%= item.leadMediaUrls.thumbnail %>, <%= item.leadMediaUrls.thumbnailRetina %> 2x" media="(min-width: 640px)"> <source srcset="<%= item.leadMediaUrls.thumbnailMobile %>, <%= item.leadMediaUrls.thumbnailMobileRetina %> 2x" media="(max-width: 640px)"> <img class="media-item__img" src="<%= item.leadMediaUrls.thumbnail %>"> </picture> <% } %> </div> <div class="media-item__txt-container"> <header> <span class="media-item__tag"><%= item.subtitle || \'Article\' %></span> <h1 class="media-item__heading"><%= item.title %></h1> </header> <p class="media-item__preview"><%= item.summary %></p> <time class="media-item__date"><%= helper.dateAge( item.publishFrom ) %></time> </div> </article> </a>'),PULSE.app.templates["gallery-thumbnail"]=_.template('<a href="<%= item.link %>"> <article class="media-item <%= typeof modifier !== \'undefined\' ? modifier : \'media-item--centred-marker\' %>"> <div class="media-item__img-container"> <% if( item.leadMediaUrls.thumbnail ) { %> <picture class="media-item__picture"> <source srcset="<%= item.leadMediaUrls.thumbnail %>, <%= item.leadMediaUrls.thumbnailRetina %> 2x" media="(min-width: 640px)"> <source srcset="<%= item.leadMediaUrls.thumbnailMobile %>, <%= item.leadMediaUrls.thumbnailMobileRetina %> 2x" media="(max-width: 640px)"> <img class="media-item__img" src="<%= item.leadMediaUrls.thumbnail %>"> </picture> <% } %> <span class="marker marker--gallery"><%= item.items.length %></span> </div> <div class="media-item__txt-container"> <header> <span class="media-item__tag"><%= item.subtitle || \'Gallery\' %></span> <h1 class="media-item__heading"><%= item.title %></h1> </header> <p class="media-item__preview"><%= item.summary %></p> <time class="media-item__date"><%= helper.dateAge( item.publishFrom ) %></time> </div> </article> </a>'),PULSE.app.templates["video-thumbnail"]=_.template('<a href="<%= item.link %>"> <article class="media-item <%= typeof modifier !== \'undefined\' ? modifier : \'\' %>" data-id="<%= item.id %>"> <div class="media-item__img-container"> <% if( item.leadMediaUrls.thumbnail ) { %> <picture class="media-item__picture"> <source srcset="<%= item.leadMediaUrls.thumbnail %>, <%= item.leadMediaUrls.thumbnailRetina %> 2x" media="(min-width: 640px)"> <source srcset="<%= item.leadMediaUrls.thumbnailMobile %>, <%= item.leadMediaUrls.thumbnailMobileRetina %> 2x" media="(max-width: 640px)"> <img class="media-item__img" src="<%= item.leadMediaUrls.thumbnail %>"> </picture> <% } %> <span class="marker marker--video"><%= helper.durationToTime( item.duration ) %></span> </div> <div class="media-item__txt-container"> <header> <span class="media-item__tag"><%= item.subtitle || \'Video\' %></span> <h1 class="media-item__heading"><%= item.title %></h1> </header> <p class="media-item__preview"><%= item.summary %></p> <time class="media-item__date"><%= helper.dateAge( item.publishFrom ) %></time> </div> </article> </a>'),PULSE.app.templates["horizontal-picture-items"]=_.template("<%\nvar modifier = \"media-item--picture-bg media__item--small-picture\";\nif( typeof hasTags === 'undefined' || hasTags === false ) {\n    modifier += \" media-item--no-tag\";\n}\n_.each( items, function( item ) {\n    switch( item.type ) {\n        case 'text':\n            modifier += + new Date() - item.publishFrom < 86400000 ? ' media-item--new' : '';\n%> <li><%= PULSE.app.templating.render( {\n            item: item,\n            modifier: modifier\n        }, 'article-thumbnail' ) %></li> <%\n        break;\n        case 'playlist':\n%> <li><%= PULSE.app.templating.render( {\n            item: item,\n            modifier: modifier\n        }, 'gallery-thumbnail' ) %></li> <%\n        break;\n        case 'video':\n%> <li><%= PULSE.app.templating.render( {\n            item: item,\n            modifier: modifier\n        }, 'video-thumbnail' ) %></li> <%\n        break;\n    }\n} );\n%>"),PULSE.app.templates["horizontal-thumbnails"]=_.template("<%\n_.each( items, function( item ) {\n    switch( item.type ) {\n        case 'text':\n%> <li><%= PULSE.app.templating.render( { item: item }, 'article-thumbnail' ) %></li> <%\n        break;\n        case 'playlist':\n%> <li><%= PULSE.app.templating.render( { item: item }, 'gallery-thumbnail' ) %></li> <%\n        break;\n        case 'video':\n%> <li><%= PULSE.app.templating.render( { item: item }, 'video-thumbnail' ) %></li> <%\n        break;\n    }\n} );\n%>"),PULSE.app.templates["news-index"]=_.template("<%\n_.each( items, function( item, index ) {\n    var liClass = \"content-grid__item col-3 col-4-tab col-12-phab\";\n    if( index < 2 ) {\n        liClass = \"content-grid__item col-6 col-6-tab col-12-phab\"\n    }\n    var modifier = index < 2 ? 'media-item--picture-bg' : '';\n    switch( item.type ) {\n        case 'text':\n            modifier += + new Date() - item.publishFrom < 86400000 ? ' media-item--new' : '';\n%> <li class=\"<%= liClass %>\"><%= PULSE.app.templating.render( {\n            item: item,\n            modifier: modifier\n        }, 'article-thumbnail' ) %></li> <%\n        break;\n        case 'playlist':\n%> <li class=\"<%= liClass %>\"><%= PULSE.app.templating.render( {\n            item: item,\n            modifier: modifier\n        }, 'gallery-thumbnail' ) %></li> <%\n        break;\n        case 'video':\n%> <li class=\"<%= liClass %>\"><%= PULSE.app.templating.render( {\n            item: item,\n            modifier: modifier\n        }, 'video-thumbnail' ) %></li> <%\n        break;\n    }\n} );\n%>"),PULSE.app.templates["vertical-list-items"]=_.template("<%\n_.each( items, function( item ) {\n    switch( item.type ) {\n        case 'text':\n%> <li><%= PULSE.app.templating.render( { item: item, modifier: 'media-item--vertical-list-item' }, 'article-thumbnail' ) %></li> <%\n        break;\n        case 'playlist':\n%> <li><%= PULSE.app.templating.render( { item: item, modifier: 'media-item--vertical-list-item' }, 'gallery-thumbnail' ) %></li> <%\n        break;\n        case 'video':\n%> <li><%= PULSE.app.templating.render( { item: item, modifier: 'media-item--vertical-list-item' }, 'video-thumbnail' ) %></li> <%\n        break;\n    }\n} );\n%>"),PULSE.app.templates.overview=_.template('<ul class="stats"> <li><span class="label">Matches</span> <span class="value"><%= matches %></span></li> <li><span class="label">Runs</span> <span class="value"><%= runs %></span></li> <li><span class="label">Wickets</span> <span class="value"><%= wickets %></span></li> </ul>'),PULSE.app.templates.complete=_.template('<div class="statsOverviewItem"> <div class="header"> <div class="matchType">Previous Result</div> <div class="matchInfo"> <%= lastMatch.scheduleData.description %>, <%= getDate( lastMatch.scheduleData ) %> </div> </div> <div class="itemContent"> <div class="teamBadges"> <div class="badge"> <div class="tLogo50x <%= lastMatch.scheduleData.team1.team.abbreviation %>"></div> <div class="teamScore"> <div class="score"> <%= getScore( lastMatch.scheduleData.team1.innings[ 0 ] ) %> </div> <div class="overs"> <%= getOvers( lastMatch.scheduleData.team1.innings[ 0 ] ) %> </div> </div> </div> <div class="versus">V</div> <div class="badge"> <div class="tLogo50x <%= lastMatch.scheduleData.team2.team.abbreviation %>"></div> <div class="teamScore"> <div class="score"> <%= getScore( lastMatch.scheduleData.team2.innings[ 0 ] ) %> </div> <div class="overs"> <%= getOvers( lastMatch.scheduleData.team2.innings[ 0 ] ) %> </div> </div> </div> </div> <div class="teamInfo"> <% var wt = winningTeam( liveMatch.scheduleData ) %> <% if( wt && wt.length === 1 ) { %> <div class="teamName"><%= winningTeam( lastMatch.scheduleData )[ 0 ].team.fullName %></div> <% } %> <div class="resultText"><%= lastMatch.scheduleData.matchStatus.text %></div> <div class="venueName"><%= lastMatch.scheduleData.venue.fullName %>, <%= lastMatch.scheduleData.venue.city %></div> </div> </div> </div>'),PULSE.app.templates.live=_.template('<div class="statsOverviewItem"> <div class="header"> <div class="matchType">Live Now</div> <div class="matchInfo"> <%= liveMatch.scheduleData.description %>, <%= getDate( liveMatch.scheduleData ) %> </div> </div> <div class="itemContent"> <div class="teamBadges"> <div class="badge"> <div class="tLogo50x <%= liveMatch.scheduleData.team1.team.abbreviation %>"></div> <div class="teamScore"> <div class="score"> <%= getScore( liveMatch.scheduleData.team1.innings[ 0 ] ) %> </div> <div class="overs"> <%= getOvers( liveMatch.scheduleData.team1.innings[ 0 ] ) %> </div> </div> </div> <div class="versus">V</div> <div class="badge"> <div class="tLogo50x <%= liveMatch.scheduleData.team2.team.abbreviation %>"></div> <div class="teamScore"> <div class="score"> <%= getScore( liveMatch.scheduleData.team2.innings[ 0 ] ) %> </div> <div class="overs"> <%= getOvers( liveMatch.scheduleData.team2.innings[ 0 ] ) %> </div> </div> </div> </div> <div class="teamInfo"> <div class="resultText"><%= liveMatch.scheduleData.matchStatus.text %></div> <div class="venueName"><%= liveMatch.scheduleData.venue.fullName %>, <%= liveMatch.scheduleData.venue.city %></div> </div> </div> </div>'),PULSE.app.templates.upcoming=_.template('<div class="statsOverviewItem"> <div class="header"> <div class="matchType">Next Match</div> <div class="matchInfo"> <%= nextMatch.scheduleData.description %>, <%= getDate( nextMatch.scheduleData ) %> </div> </div> <div class="itemContent"> <div class="teamBadges"> <div class="badge"> <div class="tLogo50x <%= nextMatch.scheduleData.team1.team.abbreviation %>"></div> </div> <div class="versus">V</div> <div class="badge"> <div class="tLogo50x <%= nextMatch.scheduleData.team2.team.abbreviation %>"></div> </div> </div> <div class="teamInfo"> <div class="teamName"><%= winningTeam( nextMatch.scheduleData )[ 0 ].team.fullName %></div> <div class="resultText"><%= nextMatch.scheduleData.matchStatus.text %></div> <div class="venueName"><%= nextMatch.scheduleData.venue.fullName %>, <%= nextMatch.scheduleData.venue.city %></div> </div> </div> </div>'),PULSE.app.templates["player-card"]=_.template('<div class="unitCntr"> <div class="unitHeader"> <h1><%= firstName %> <%= lastName %></h1> <a class="removePlayerLink" data-player-id="<%= playerId %>" data-index="<%= index %>">Remove</a> </div> <div class="unitContent"> <div class="player <%= index === 0 ? \'blue\' : \'red\' %>"> <div class="playerPhoto"> <img> </div> <div class="playerInfo"> <table cellspacing="0" cellpadding="0" border="0"> <tbody><tr> <th>Team :</th> <td><%= teamFullName %></td> </tr> <tr> <th>D.O.B :</th> <td><%= dob %></td> </tr> <tr> <th>Matches :</th> <td><%= matchesPlayed %></td> </tr> </tbody></table> </div> <div class="tLogo100x <%= teamAbbr %>"></div> <div class="cl"></div> </div> </div> </div>'),PULSE.app.templates["search-card"]=_.template('<div class="unitCntr"> <div class="unitHeader"> <h1>Select Player</h1> </div> <div class="unitContent"> <div class="player <%= index === 0 ? \'blue\' : \'red\' %>"> <div class="playerPhoto"> <img src="<%= shadowManUrl %>"> </div> <div class="selectPlayer"> <p>Please enter player name.</p> <input id="playerDropdown" type="text" name="playerName" data-index="<%= index %>"> </div> <div class="cl"></div> </div> </div> </div>'),PULSE.app.templates["default"]=_.template('<div class="sectionHeader"> <h2>More Statistics</h2> </div> <div class="sectionHeader"> <h3>Batting Statistics</h3> </div> <div class="statList320"> <ul> <li><a href="./most-runs">Orange Cap / most runs</a></li> <li><a href="./most-runs-over">Most runs (over)</a></li> <li><a href="./most-sixes">Most sixes</a></li> <li><a href="./most-sixes-innings">Most sixes (innings)</a></li> <li><a href="./highest-scores">Highest individual score</a></li> <li><a href="./highest-strikerate">Highest strike-rates</a></li> <li><a href="./highest-strikerate-innings">Highest strike-rates (innings)</a></li> <li><a href="./highest-averages">Highest averages</a></li> <li><a href="./most-fifties">Most fifties</a></li> <li><a href="./most-centuries">Most Centuries</a></li> <li><a href="./most-fours">Most fours</a></li> <li><a href="./most-fours-innings">Most fours (innings)</a></li> <li><a href="./fastest-fifties-innings">Fastest Fifties (innings)</a></li> <li><a href="./fastest-centuries-innings">Fastest Centuries (innings)</a></li> </ul> </div> <div class="sectionHeader"> <h3>Bowling Statistics</h3> </div> <div class="statList320"> <ul> <li><a href="./most-wickets">Purple Cap / most wickets</a></li> <li><a href="./best-bowling-figures">Best bowling figures</a></li> <li><a href="./best-averages">Best averages</a></li> <li><a href="./best-economy">Best economy rates</a></li> <li><a href="./best-strikerates">Best strike-rates</a></li> <li><a href="./best-strikerates-innings">Best strike-rates (innings)</a></li> <li><a href="./best-economy-innings">Best Economy rates (innings)</a></li> <li><a href="./most-runs-conceded-innings">Most runs conceded (innings)</a></li> <li><a href="./most-runs-conceded-over">Most runs conceded (over)</a></li> <li><a href="./fastest-ball">Fastest balls delivered</a></li> <li><a href="./most-hat-tricks">Most hat-tricks</a></li> <li><a href="./most-dot-balls-bowled-innings">Most dot balls bowled (innings)</a></li> <li><a href="./most-dot-balls-bowled">Most dot balls bowled (tournament)</a></li> <li><a href="./most-maiden-overs-bowled">Most number of maiden overs bowled</a></li> <li><a href="./most-four-wickets-innings">Most four wickets in an innings</a></li> </ul> </div>'),PULSE.app.templates["ipl-all-time"]=_.template('<div class="sectionHeader"> <h2>More Statistics</h2> </div> <div class="sectionHeader"> <h3>Batting Statistics</h3> </div> <div class="statList320"> <ul> <li><a href="./most-runs">Orange Cap / most runs</a></li> <li><a href="./most-sixes">Most sixes</a></li> <li><a href="./most-sixes-innings">Most sixes (innings)</a></li> <li><a href="./highest-scores">Highest individual score</a></li> <li><a href="./highest-strikerate">Highest strike-rates</a></li> <li><a href="./highest-strikerate-innings">Highest strike-rates (innings)</a></li> <li><a href="./highest-averages">Highest averages</a></li> <li><a href="./most-fifties">Most fifties</a></li> <li><a href="./most-centuries">Most Centuries</a></li> <li><a href="./most-fours">Most fours</a></li> <li><a href="./most-fours-innings">Most fours (innings)</a></li> <li><a href="./fastest-fifties-innings">Fastest Fifties (innings)</a></li> <li><a href="./fastest-centuries-innings">Fastest Centuries (innings)</a></li> </ul> </div> <div class="sectionHeader"> <h3>Bowling Statistics</h3> </div> <div class="statList320"> <ul> <li><a href="./most-wickets">Purple Cap / most wickets</a></li> <li><a href="./best-bowling-figures">Best bowling figures</a></li> <li><a href="./best-averages">Best averages</a></li> <li><a href="./best-economy">Best economy rates</a></li> <li><a href="./best-strikerates">Best strike-rates</a></li> <li><a href="./best-strikerates-innings">Best strike-rates (innings)</a></li> <li><a href="./best-economy-innings">Best Economy rates (innings)</a></li> <li><a href="./most-runs-conceded-innings">Most runs conceded (innings)</a></li> <li><a href="./fastest-ball">Fastest balls delivered</a></li> <li><a href="./most-hat-tricks">Most hat-tricks</a></li> <li><a href="./most-dot-balls-bowled-innings">Most dot balls bowled (innings)</a></li> <li><a href="./most-dot-balls-bowled">Most dot balls bowled (tournament)</a></li> <li><a href="./most-maiden-overs-bowled">Most number of maiden overs bowled</a></li> <li><a href="./most-four-wickets-innings">Most four wickets in an innings</a></li> </ul> </div>');
if (!PULSE)
{
    var PULSE = {};
}
if (!PULSE.CLIENT)
{
    PULSE.CLIENT = {};
}
if (!PULSE.CLIENT.CRICKET)
{
    PULSE.CLIENT.CRICKET = {};
}
if (!PULSE.CLIENT.CRICKET.IPL)
{
    PULSE.CLIENT.CRICKET.IPL = {};
}
if (!PULSE.CLIENT.CRICKET.IPL.CANARY)
{
    PULSE.CLIENT.CRICKET.IPL.CANARY = {};
}

PULSE.CLIENT.CRICKET.IPL.CANARY.TRENDING = 'ipl2013buzz';
PULSE.CLIENT.CRICKET.IPL.CANARY.TALLY = 'ipl2013count';
PULSE.CLIENT.CRICKET.IPL.CANARY.LIST = 'ipl_list';
PULSE.CLIENT.CRICKET.IPL.INSTAGRAM = 'ipl';
PULSE.CLIENT.CRICKET.IPL.ACCOUNTS = {
    facebook: 'IPL',
    instagram: 'ipl',
    twitter: 'IPL'
};

PULSE.CLIENT.CRICKET.IPL.FIVEHUNDRETH = 'ipl2015-36';
PULSE.CLIENT.CRICKET.IPL.EventStructure = [ "Round Robin", "Eliminator", "Qualifiers", "Runner-up", "Winner" ];

PULSE.CLIENT.CRICKET.IPL.getSupportedYears = function()
{
    return $.map( $.grep( PULSE.CLIENT.CRICKET.Metadata, function( t )
        {
            return !t.isGroup;
        } ), function( tourn, i )
    {
        return tourn.year;
    } );
};

PULSE.CLIENT.CRICKET.Metadata = [

    {
        "tournamentName"    : "ipl2018",
        "year"              : "2018",
        "fullName"          : "Indian Premier League 2018",
        "shortName"         : "IPL 2018",
        "dateRange"         : "",
        "country"           : "India",

        "playerImageUrl"    : "//iplstatic.s3.amazonaws.com/players/",
        "matchTypes"        : ["IPLT20"],

        "supportsTwitterBattles" : true,
        "supportsPlayerLinks" : true,
        "supportsVideoInCommentary" : true,

        "tweetUser"         : {
            "list": "ipl",
            "account": "IPL",
            "hash": "VIVOIPL"
        },
        "teams"             : {
            "1": {
                "abbreviation": "CSK",
                "fullName": "Chennai Super Kings",
                "twitter": "ChennaiIPL",
                "primaryColor": "#FDB913",
                "secondaryColor": "#0081e5",
                "hash": "CSK",
                "accounts": {
                    "facebook": "TheChennaiSuperKings",
                    "twitter": "ChennaiIPL",
                    "instagram": ""
                }
            },
            "3":    {
                "abbreviation": "DD",
                "fullName": "Delhi Daredevils",
                "twitter": "DelhiDaredevils",
                "primaryColor": "#ba282e",
                "secondaryColor": "#fdb515",
                "hash": "DD",
                "accounts": {
                    "facebook": "delhidaredevils",
                    "twitter": "DelhiDaredevils",
                    "instagram": "officialdaredevils"
                }
            },
            "4":    {
                "abbreviation": "KXIP",
                "fullName": "Kings XI Punjab",
                "twitter": "lionsdenkxip",
                "primaryColor": "#af1e23",
                "secondaryColor": "#c7c8ca",
                "hash": "KXIP",
                "accounts": {
                    "facebook": "KingsXIPunjab",
                    "twitter": "lionsdenkxip",
                    "instagram": "kxipofficial"
                }
            },
            "5":    {
                "abbreviation": "KKR",
                "fullName": "Kolkata Knight Riders",
                "twitter": "KKRiders",
                "primaryColor": "#3a225d",
                "secondaryColor": "#efb04c",
                "hash": "KKR",
                "accounts": {
                    "facebook": "KolkataKnightRiders",
                    "twitter": "KKRiders",
                    "instagram": "kkriders"
                }
            },
            "6":    {
                "abbreviation": "MI",
                "fullName": "Mumbai Indians",
                "twitter": "mipaltan",
                "primaryColor": "#005ea0",
                "secondaryColor": "#aa9a7f",
                "hash": "MI",
                "accounts": {
                    "facebook": "mumbaiindians",
                    "twitter": "mipaltan",
                    "instagram": "mumbaiindians"
                }
            },
            "8": {
                "abbreviation": "RR",
                "fullName": "Rajasthan Royals",
                "twitter": "rajasthanroyals",
                "primaryColor": "#004B8C",
                "secondaryColor": "#d5ab4b",
                "hash": "RR",
                "accounts": {
                    "facebook": "RajasthanRoyals",
                    "twitter": "rajasthanroyals",
                    "instagram": "rajasthanroyals"
                }
            },
            "9":    {
                "abbreviation": "RCB",
                "fullName": "Royal Challengers Bangalore",
                "twitter": "RCBTweets",
                "primaryColor": "#d23d44",
                "secondaryColor": "#262729",
                "hash": "RCB",
                "accounts": {
                    "facebook": "RoyalChallengersBangalore",
                    "twitter": "RCBTweets",
                    "instagram": "royalchallengersbangalore"
                }
            },
            "62":   {
                "abbreviation": "SRH",
                "fullName": "Sunrisers Hyderabad",
                "twitter": "SunRisersIPL",
                "primaryColor": "#f26536",
                "secondaryColor": "#fdb913",
                "hash": "SRH",
                "accounts": {
                    "facebook": "sunrisershyderabad",
                    "twitter": "SunRisersIPL",
                    "instagram": "sunrisershyderabad"
                }
            }
        },

        "ticketsOverride"   : {
            // DD
            // 'ipl2018-11': { "ticketsLink": '' }

        },
        // Playoffs
        "playoffs"          : {
            "ipl2018-57": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "ticketsLink": '',
                "progressionIndex": 2
            },
            "ipl2018-58": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "ticketsLink":  '',
                "progressionIndex": 1
            },
            "ipl2018-59": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "ticketsLink":  '',
                "progressionIndex": 2
            },
            "ipl2018-60": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "ticketsLink":  '',
                "progressionIndex": 3
            }
        },

        "supportsMC"        : true,
        "commentaryFilter"  : true,
        "standingsMessage"  : ""
    },

    {
        "tournamentName"    : "ipl2017",
        "year"              : "2017",
        "fullName"          : "Indian Premier League 2017",
        "shortName"         : "IPL 2017",
        "dateRange"         : "",
        "country"           : "India",

        "playerImageUrl"    : "//iplstatic.s3.amazonaws.com/players/",
        "matchTypes"        : ["IPLT20"],

        "supportsTwitterBattles" : true,
        "supportsPlayerLinks" : true,
        "supportsVideoInCommentary" : true,

        "tweetUser"         : {
            "list": "ipl",
            "account": "IPL",
            "hash": "VIVOIPL"
        },
        "teams"             : {
            "3":    {
                "abbreviation": "DD",
                "fullName": "Delhi Daredevils",
                "twitter": "DelhiDaredevils",
                "primaryColor": "#ba282e",
                "secondaryColor": "#fdb515",
                "hash": "DD",
                "accounts": {
                    "facebook": "delhidaredevils",
                    "twitter": "DelhiDaredevils",
                    "instagram": "officialdaredevils"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-dd/"
            },
            "433":  {
                "abbreviation": "GL",
                "fullName": "Gajarat Lions",
                "twitter": "TheGujaratLions",
                "primaryColor": "#e86e25",
                "secondaryColor": "#fff200",
                "hash": "GL",
                "accounts": {
                    "facebook": "TheGujaratLions",
                    "twitter": "TheGujaratLions",
                    "instagram": ""
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-gl/"
            },
            "4":    {
                "abbreviation": "KXIP",
                "fullName": "Kings XI Punjab",
                "twitter": "lionsdenkxip",
                "primaryColor": "#af1e23",
                "secondaryColor": "#c7c8ca",
                "hash": "KXIP",
                "accounts": {
                    "facebook": "KingsXIPunjab",
                    "twitter": "lionsdenkxip",
                    "instagram": "kxipofficial"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-kxip/"
            },
            "5":    {
                "abbreviation": "KKR",
                "fullName": "Kolkata Knight Riders",
                "twitter": "KKRiders",
                "primaryColor": "#3a225d",
                "secondaryColor": "#efb04c",
                "hash": "KKR",
                "accounts": {
                    "facebook": "KolkataKnightRiders",
                    "twitter": "KKRiders",
                    "instagram": "kkriders"
                },
                "ticketsLink": "//ticketgenie.in/kKR-2016"
            },
            "6":    {
                "abbreviation": "MI",
                "fullName": "Mumbai Indians",
                "twitter": "mipaltan",
                "primaryColor": "#005ea0",
                "secondaryColor": "#aa9a7f",
                "hash": "MI",
                "accounts": {
                    "facebook": "mumbaiindians",
                    "twitter": "mipaltan",
                    "instagram": "mumbaiindians"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-vdca?utm_source=iplt20.com&utm_medium=referral&utm_campaign=bms_iplt20.com_t20-2016-vdca_050516"
            },
            "434":  {
                "abbreviation": "RPS",
                "fullName": "Rising Pune Supergiants",
                "twitter": "RPSupergiants",
                "primaryColor": "#153359",
                "secondaryColor": "#ffcc40",
                "hash": "RPS",
                "accounts": {
                    "facebook": "SupergiantsPune",
                    "twitter": "RPSupergiants",
                    "instagram": ""
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-vdca?utm_source=iplt20.com&utm_medium=referral&utm_campaign=bms_iplt20.com_t20-2016-vdca_050516"
            },
            "9":    {
                "abbreviation": "RCB",
                "fullName": "Royal Challengers Bangalore",
                "twitter": "RCBTweets",
                "primaryColor": "#d23d44",
                "secondaryColor": "#262729",
                "hash": "RCB",
                "accounts": {
                    "facebook": "RoyalChallengersBangalore",
                    "twitter": "RCBTweets",
                    "instagram": "royalchallengersbangalore"
                },
                "ticketsLink": "//www.liveinstyle.com/ipl/2016/book-tickets"
            },
            "62":   {
                "abbreviation": "SRH",
                "fullName": "Sunrisers Hyderabad",
                "twitter": "SunRisersIPL",
                "primaryColor": "#f26536",
                "secondaryColor": "#fdb913",
                "hash": "SRH",
                "accounts": {
                    "facebook": "sunrisershyderabad",
                    "twitter": "SunRisersIPL",
                    "instagram": "sunrisershyderabad"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-srh/"
            }
        },

        "ticketsOverride"   : {
            // DD
            'ipl2017-11': { "ticketsLink": '' },
            'ipl2017-31': { "ticketsLink": '' },
            'ipl2017-52': { "ticketsLink": '' },
            'ipl2017-56': { "ticketsLink": '' },
            // GL
            'ipl2017-51': { "ticketsLink": '' },
            'ipl2017-54': { "ticketsLink": '' },
            // SRH
            'ipl2017-34': { "ticketsLink": '' },
            'ipl2017-42': { "ticketsLink": '' },
            // KXIP
            'ipl2017-36': { "ticketsLink": '' },
            'ipl2017-39': { "ticketsLink": '' }

        },
        // Playoffs
        "playoffs"          : {
            "ipl2017-57": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "ticketsLink": '//in.bookmyshow.com/go/?ref=iplt20.com&med=Referral&camp=iplt20.com_ipl_qualifiers-finals_051216&url=https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals&type=0',
                "progressionIndex": 2
            },
            "ipl2017-58": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "ticketsLink":  'https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals',
                "progressionIndex": 1
            },
            "ipl2017-59": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "ticketsLink":  'https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals',
                "progressionIndex": 2
            },
            "ipl2017-60": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "ticketsLink":  '//in.bookmyshow.com/go/?ref=iplt20.com&med=Referral&camp=iplt20.com_ipl_qualifiers-finals_051216&url=https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals&type=0',
                "progressionIndex": 3
            }
        },

        "supportsMC"        : true,
        "commentaryFilter"  : true,
        "standingsMessage"  : ""
    },

    {
        "tournamentName"    : "ipl2016",
        "year"              : "2016",
        "fullName"          : "Indian Premier League 2016",
        "shortName"         : "IPL 2016",
        "dateRange"         : "",
        "country"           : "India",

        "playerImageUrl"    : "//iplstatic.s3.amazonaws.com/players/",
        "matchTypes"        : ["IPLT20"],

        "supportsTwitterBattles" : true,
        "supportsPlayerLinks" : false,
        "supportsVideoInCommentary" : true, // @TODO change to true before launch

        "tweetUser"         : {
            "list": "ipl",
            "account": "IPL",
            "hash": "VIVOIPL"
        },
        "teams"             : {
            "3":    {
                "abbreviation": "DD",
                "fullName": "Delhi Daredevils",
                "twitter": "DelhiDaredevils",
                "primaryColor": "#ba282e",
                "secondaryColor": "#fdb515",
                "hash": "DD",
                "accounts": {
                    "facebook": "delhidaredevils",
                    "twitter": "DelhiDaredevils",
                    "instagram": "officialdaredevils"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-dd/"
            },
            "433":  {
                "abbreviation": "GL",
                "fullName": "Gajarat Lions",
                "twitter": "TheGujaratLions",
                "primaryColor": "#e86e25",
                "secondaryColor": "#fff200",
                "hash": "GL",
                "accounts": {
                    "facebook": "TheGujaratLions",
                    "twitter": "TheGujaratLions",
                    "instagram": ""
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-gl/"
            },
            "4":    {
                "abbreviation": "KXIP",
                "fullName": "Kings XI Punjab",
                "twitter": "lionsdenkxip",
                "primaryColor": "#af1e23",
                "secondaryColor": "#c7c8ca",
                "hash": "KXIP",
                "accounts": {
                    "facebook": "KingsXIPunjab",
                    "twitter": "lionsdenkxip",
                    "instagram": "kxipofficial"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-kxip/"
            },
            "5":    {
                "abbreviation": "KKR",
                "fullName": "Kolkata Knight Riders",
                "twitter": "KKRiders",
                "primaryColor": "#3a225d",
                "secondaryColor": "#efb04c",
                "hash": "KKR",
                "accounts": {
                    "facebook": "KolkataKnightRiders",
                    "twitter": "KKRiders",
                    "instagram": "kkriders"
                },
                "ticketsLink": "//ticketgenie.in/kKR-2016"
            },
            "6":    {
                "abbreviation": "MI",
                "fullName": "Mumbai Indians",
                "twitter": "mipaltan",
                "primaryColor": "#005ea0",
                "secondaryColor": "#aa9a7f",
                "hash": "MI",
                "accounts": {
                    "facebook": "mumbaiindians",
                    "twitter": "mipaltan",
                    "instagram": "mumbaiindians"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-vdca?utm_source=iplt20.com&utm_medium=referral&utm_campaign=bms_iplt20.com_t20-2016-vdca_050516"
            },
            "434":  {
                "abbreviation": "RPS",
                "fullName": "Rising Pune Supergiants",
                "twitter": "RPSupergiants",
                "primaryColor": "#153359",
                "secondaryColor": "#ffcc40",
                "hash": "RPS",
                "accounts": {
                    "facebook": "SupergiantsPune",
                    "twitter": "RPSupergiants",
                    "instagram": ""
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-vdca?utm_source=iplt20.com&utm_medium=referral&utm_campaign=bms_iplt20.com_t20-2016-vdca_050516"
            },
            "9":    {
                "abbreviation": "RCB",
                "fullName": "Royal Challengers Bangalore",
                "twitter": "RCBTweets",
                "primaryColor": "#d23d44",
                "secondaryColor": "#262729",
                "hash": "RCB",
                "accounts": {
                    "facebook": "RoyalChallengersBangalore",
                    "twitter": "RCBTweets",
                    "instagram": "royalchallengersbangalore"
                },
                "ticketsLink": "//www.liveinstyle.com/ipl/2016/book-tickets"
            },
            "62":   {
                "abbreviation": "SRH",
                "fullName": "Sunrisers Hyderabad",
                "twitter": "SunRisersIPL",
                "primaryColor": "#f26536",
                "secondaryColor": "#fdb913",
                "hash": "SRH",
                "accounts": {
                    "facebook": "sunrisershyderabad",
                    "twitter": "SunRisersIPL",
                    "instagram": "sunrisershyderabad"
                },
                "ticketsLink": "https://in.bookmyshow.com/sports/cricket/t20-2016-srh/"
            }
        },

        "ticketsOverride"   : {
            // DD
            'ipl2016-11': { "ticketsLink": '' },
            'ipl2016-31': { "ticketsLink": '' },
            'ipl2016-52': { "ticketsLink": '' },
            'ipl2016-56': { "ticketsLink": '' },
            // GL
            'ipl2016-51': { "ticketsLink": '' },
            'ipl2016-54': { "ticketsLink": '' },
            // SRH
            'ipl2016-34': { "ticketsLink": '' },
            'ipl2016-42': { "ticketsLink": '' },
            // KXIP
            'ipl2016-36': { "ticketsLink": '' },
            'ipl2016-39': { "ticketsLink": '' }

        },
        // Playoffs
        "playoffs"          : {
            "ipl2016-57": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "ticketsLink": '//in.bookmyshow.com/go/?ref=iplt20.com&med=Referral&camp=iplt20.com_ipl_qualifiers-finals_051216&url=https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals&type=0',
                "progressionIndex": 2
            },
            "ipl2016-58": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "ticketsLink":  'https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals',
                "progressionIndex": 1
            },
            "ipl2016-59": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "ticketsLink":  'https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals',
                "progressionIndex": 2
            },
            "ipl2016-60": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "ticketsLink":  '//in.bookmyshow.com/go/?ref=iplt20.com&med=Referral&camp=iplt20.com_ipl_qualifiers-finals_051216&url=https://in.bookmyshow.com/sports/cricket/ipl-qualifiers-finals&type=0',
                "progressionIndex": 3
            }
        },

        "supportsMC"        : true,
        "commentaryFilter"  : true,
        "standingsMessage"  : ""
    },

    {
        "tournamentName"    : "ipl2015",
        "year"              : "2015",
        "fullName"          : "Indian Premier League 2015",
        "shortName"         : "IPL 2015",
        "dateRange"         : "",
        "country"           : "India",

        "playerImageUrl"    : "//iplstatic.s3.amazonaws.com/players/",
        "matchTypes"        : ["IPLT20"],

        "supportsTwitterBattles" : true,
        "supportsPlayerLinks" : true,
        "supportsVideoInCommentary" : true,

        "tweetUser"         : {
            "list": "ipl",
            "account": "IPL",
            "hash": "IPL"
        },
        "teams"             : {
            "1":    { "abbreviation": "CSK",    "fullName": "Chennai Super Kings",          "twitter": "ChennaiIPL",        "hash": "CSK",  "ticketsLink": '' },
            "3":    { "abbreviation": "DD",     "fullName": "Delhi Daredevils",             "twitter": "DelhiDaredevils",   "hash": "DD",   "ticketsLink": "" },
            "4":    { "abbreviation": "KXIP",   "fullName": "Kings XI Punjab",              "twitter": "lionsdenkxip",      "hash": "KXIP", "ticketsLink": "" },
            "5":    { "abbreviation": "KKR",    "fullName": "Kolkata Knight Riders",        "twitter": "KKRiders",          "hash": "KKR",  "ticketsLink": "" },
            "6":    { "abbreviation": "MI",     "fullName": "Mumbai Indians",               "twitter": "mipaltan",          "hash": "MI",   "ticketsLink": "" },
            "8":    { "abbreviation": "RR",     "fullName": "Rajasthan Royals",             "twitter": "rajasthanroyals",   "hash": "RR",   "ticketsLink": "" },
            "9":    { "abbreviation": "RCB",    "fullName": "Royal Challengers Bangalore",  "twitter": "RCBTweets",         "hash": "RCB",  "ticketsLink": "" },
            "62":   { "abbreviation": "SRH",    "fullName": "Sunrisers Hyderabad",          "twitter": "SunRisersIPL",      "hash": "SRH",  "ticketsLink": "" }
        },

        "ticketsOverride"   : {},
        // Playoffs
        "playoffs"          : {
            "ipl2015-57": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "ticketsLink": '//in.bookmyshow.com/go/?ref=BMSPLAYOFFSQualifier1&med=PLAYOFFS_WANKHEDE_STADIUM_MUMBAI&camp=IPLMAIN_PLAYOFFS_Qualifier1_2015&cont=ad1&url=https://in.bookmyshow.com/iplt20/?team=Q1&type=0',
                "progressionIndex": 2
            },
            "ipl2015-58": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "ticketsLink":  "//in.bookmyshow.com/go/?ref=BMSPLAYOFFSEliminator&med=PLAYOFFS_MAHARASHTRA_CRICKET_PUNE&camp=IPLMAIN_PLAYOFFS_Eliminator_2015&cont=ad1&url=https://in.bookmyshow.com/iplt20/&type=0",
                "progressionIndex": 1
            },
            "ipl2015-59": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "ticketsLink":  "//in.bookmyshow.com/go/?ref=BMSPLAYOFFSQualifier2&med=PLAYOFFS_JSCA_INTERNATIONAL_RANCHI&camp=IPLMAIN_PLAYOFFS_Qualifier2_2015&cont=ad1&url=https://in.bookmyshow.com/iplt20/?team=Q2&type=0",
                "progressionIndex": 2
            },
            "ipl2015-60": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "ticketsLink":  "https://ticketgenie.in/Cricket/PEPSI-IPL-2015-FINAL",
                "progressionIndex": 3
            }
        },

        "supportsMC"        : true,
        "commentaryFilter"  : true,
        "standingsMessage"  : "All teams play 14 matches. Top 4 advance to Play-offs."
    },
    {
        "tournamentName"    : "ipl2014",
        "year"              : "2014",
        "fullName"          : "Indian Premier League 2014",
        "shortName"         : "IPL 2014",
        "dateRange"         : "April 16th - June 1st",
        "country"           : "India",

        "playerImageUrl"    : "//iplstatic.s3.amazonaws.com/players/",
        "matchTypes"        : ["IPLT20"],

        "supportsTwitterBattles" : true,
        "supportsPlayerLinks" : true,

        "tweetUser"         : {
            "list": "ipl",
            "account": "IPL",
            "hash": "IPL"
        },
        "teams"             : {
            "1":    { "abbreviation": "CSK",    "fullName": "Chennai Super Kings",          "twitter": "ChennaiIPL",        "hash": "CSK",  "ticketsLink": '//in.bookmyshow.com/go/?ref=IPL-CSK-2014&url=https://in.bookmyshow.com/cricket/chennai-super-kings/&type=0' },
            "3":    { "abbreviation": "DD",     "fullName": "Delhi Daredevils",             "twitter": "DelhiDaredevils",   "hash": "DD",   "ticketsLink": "//in.bookmyshow.com/go/?ref=IPL-DD-2014&url=https://in.bookmyshow.com/cricket/delhi-daredevils/&type=0" },
            "4":    { "abbreviation": "KXIP",   "fullName": "Kings XI Punjab",              "twitter": "lionsdenkxip",      "hash": "KXIP", "ticketsLink": "//in.bookmyshow.com/go/?ref=IPL-KXIP-2014&url=https://in.bookmyshow.com/cricket/kings-xi-punjab/&type=0" },
            "5":    { "abbreviation": "KKR",    "fullName": "Kolkata Knight Riders",        "twitter": "KKRiders",          "hash": "KKR",  "ticketsLink": "//tickets.ticketgenie.in/buyTicketsV1.aspx?&companyEventGroupIDUnique=190948475" },
            "6":    { "abbreviation": "MI",     "fullName": "Mumbai Indians",               "twitter": "mipaltan",          "hash": "MI",   "ticketsLink": "//in.bookmyshow.com/cricket/mumbai-indians/?&utm_source=mumb_hpf_sp_mumbai_indians_170414" },
            "8":    { "abbreviation": "RR",     "fullName": "Rajasthan Royals",             "twitter": "rajasthanroyals",   "hash": "RR",   "ticketsLink": "//in.bookmyshow.com/go/?ref=IPL-RR-2014&url=https://in.bookmyshow.com/cricket/rajasthan-royals/&type=0" },
            "9":    { "abbreviation": "RCB",    "fullName": "Royal Challengers Bangalore",  "twitter": "RCBTweets",         "hash": "RCB",  "ticketsLink": "https://rcbtickets.liveinstyle.com/buyTicketsV1.aspx?&companyEventGroupIDUnique=150058029&utm_source=RCB&utm_medium=menu&utm_campaign=tickets" },
            "62":   { "abbreviation": "SRH",    "fullName": "Sunrisers Hyderabad",          "twitter": "SunRisersIPL",      "hash": "SRH",  "ticketsLink": "//in.bookmyshow.com/go/?ref=IPL-SR-2014&url=https://in.bookmyshow.com/cricket/sunrisers-hyderabad/&type=0" }
        },

         "ticketsOverride"   : {
        // Sharjah:
            'ipl2014-02': { ticketsLink: '//www.ticketmaster.ae/event/2263?CL_ORIGIN=2' },
            'ipl2014-07': { ticketsLink: '//www.ticketmaster.ae/event/2267?CL_ORIGIN=2' },
            'ipl2014-09': { ticketsLink: '//www.ticketmaster.ae/event/2269?CL_ORIGIN=2' },
            'ipl2014-11': { ticketsLink: '//www.ticketmaster.ae/event/2271?CL_ORIGIN=2' },
            'ipl2014-16': { ticketsLink: '//www.ticketmaster.ae/event/2265?CL_ORIGIN=2' },
            'ipl2014-17': { ticketsLink: '//www.ticketmaster.ae/event/2265?CL_ORIGIN=2' },
        // Dubai:
            'ipl2014-05': { ticketsLink: '//www.ticketmaster.ae/event/2167?CL_ORIGIN=2' },
            'ipl2014-06': { ticketsLink: '//www.ticketmaster.ae/event/2167?CL_ORIGIN=2' },
            'ipl2014-10': { ticketsLink: '//www.ticketmaster.ae/event/2171?CL_ORIGIN=2' },
            'ipl2014-12': { ticketsLink: '//www.ticketmaster.ae/event/2169?CL_ORIGIN=2' },
            'ipl2014-13': { ticketsLink: '//www.ticketmaster.ae/event/2169?CL_ORIGIN=2' },
            'ipl2014-18': { ticketsLink: '//www.ticketmaster.ae/event/2175?CL_ORIGIN=2' },
            'ipl2014-20': { ticketsLink: '//www.ticketmaster.ae/event/2177?CL_ORIGIN=2' },
        // Abu Dhabi:
            'ipl2014-01': { ticketsLink: '//www.ticketmaster.ae/event/2273?CL_ORIGIN=2' },
            'ipl2014-03': { ticketsLink: '//www.ticketmaster.ae/event/2275?CL_ORIGIN=2' },
            'ipl2014-04': { ticketsLink: '//www.ticketmaster.ae/event/2275?CL_ORIGIN=2' },
            'ipl2014-08': { ticketsLink: '//www.ticketmaster.ae/event/2277?CL_ORIGIN=2' },
            'ipl2014-14': { ticketsLink: '//www.ticketmaster.ae/event/2279?CL_ORIGIN=2' },
            'ipl2014-15': { ticketsLink: '//www.ticketmaster.ae/event/2279?CL_ORIGIN=2' },
            'ipl2014-19': { ticketsLink: '//www.ticketmaster.ae/event/2281?CL_ORIGIN=2' },
        // MI vs KXIP
            'ipl2014-22': { ticketsLink: undefined },
        // KPXI @ Cuttack
            'ipl2014-34': { ticketsLink: '//www.kyazoonga.com/Cricket/Kings_XI_Punjab/981/2#.U2uG6q2Sz_Q ' },
        // CSK @ Chidambaram Stadium
            'ipl2014-42': { ticketsLink: 'https://www.chennaisuperkings.com/index/index.aspx' },
            'ipl2014-50': { ticketsLink: 'https://www.chennaisuperkings.com/index/index.aspx' },
            'ipl2014-58': { ticketsLink: 'https://www.chennaisuperkings.com/index/index.aspx' },
        // KKR vs MI
            'ipl2014-40': { ticketsLink: '//tickets.ticketgenie.in/buyTicketsV1.aspx?&companyEventGroupIDUnique=163773273' }
        },
        // Playoffs
        "playoffs"          : {
            "ipl2014-57": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "ticketsLink":  "//tickets.ticketgenie.in/buyTicketsV1.aspx?&companyEventIDUnique=114&companyEventGroupIDUnique=133357705",
                "progressionIndex": 2
            },
            "ipl2014-58": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "ticketsLink":  "//in.bookmyshow.com/go/?ref=IPL-PLAYOFF-2014&url=https://in.bookmyshow.com/iplt20/&type=0",
                "progressionIndex": 1
            },
            "ipl2014-59": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "ticketsLink":  "//in.bookmyshow.com/go/?ref=IPL-PLAYOFF-2014&url=https://in.bookmyshow.com/iplt20/&type=0",
                "progressionIndex": 2
            },
            "ipl2014-60": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "ticketsLink":  "https://tickets.ticketgenie.in/buyTicketsV1.aspx?companyEventIDUnique=115&companyEventGroupIDUnique=171502717",
                "progressionIndex": 3
            }

        },
        "supportsMC"        : true,
        "commentaryFilter"  : true,
        "standingsMessage"  : "All teams play 14 matches. Top 4 advance to Play-offs."
    },

    {
        "tournamentName"    : "ipl2013",
        "year"              : "2013",
        "fullName"          : "Indian Premier League 2013",
        "shortName"         : "IPL 2013",
        "dateRange"         : "April 3rd - May 26th",
        "country"           : "India",
        "playerImageUrl"    : "//iplstatic.s3.amazonaws.com/players/",

        "matchTypes"        : ["IPLT20"],

        "supportsTwitterBattles" : true,

        "tweetUser"         : { "account": "IPL", "hash": "IPL" },
        "teams"             : {

            "1":    { "abbreviation": "CSK",    "fullName": "Chennai Super Kings",          "twitter": "ChennaiIPL",        "hash": "CSK",  "ticketsLink": { "1": "//www.chennaisuperkings.com/tickets/MatchTicketList.aspx" } },
            "3":    { "abbreviation": "DD",     "fullName": "Delhi Daredevils",             "twitter": "DelhiDaredevils",   "hash": "DD",   "ticketsLink": { "8": "//in.bookmyshow.com/go/?ref=IPL-DD-2013&url=https://in.bookmyshow.com/cricket/delhi-daredevils/&type=0", "59": "//www.kyazoonga.com/Cricket/Delhi_Daredevils/587/2" }       },
            "4":    { "abbreviation": "KXIP",   "fullName": "Kings XI Punjab",              "twitter": "lionsdenkxip",      "hash": "KXIP", "ticketsLink": { "11": undefined, "9": "//in.bookmyshow.com/go/?ref=IPL-KXIP-2013&url=https://in.bookmyshow.com/cricket/kings-xi-punjab/&type=0" }  },
            "5":    { "abbreviation": "KKR",    "fullName": "Kolkata Knight Riders",        "twitter": "KKRiders",          "hash": "KKR",  "ticketsLink": { "2": "//tickets.ticketgenie.in/eventsReservation.aspx?companyEventGroupIDUnique=1", "55": "//tickets.ticketgenie.in/eventsReservation.aspx?companyEventGroupIDUnique=1" }        },
            "6":    { "abbreviation": "MI",     "fullName": "Mumbai Indians",               "twitter": "mipaltan",          "hash": "MI",   "ticketsLink": { "4": "//in.bookmyshow.com/go/?ref=IPL-MI-2013&url=https://in.bookmyshow.com/cricket/mumbai-indians/&type=0" }  },
            "7":    { "abbreviation": "PWI",    "fullName": "Pune Warriors India",          "twitter": "punewarriorsipl",   "hash": "PWI",  "ticketsLink": { "7": "//in.bookmyshow.com/go/?ref=IPL-PWI-2013&url=https://in.bookmyshow.com/cricket/pune-warriors-india/&type=0"}     },
            "8":    { "abbreviation": "RR",     "fullName": "Rajasthan Royals",             "twitter": "rajasthanroyals",   "hash": "RR",   "ticketsLink": { "3": "//in.bookmyshow.com/go/?ref=IPL-RR-2013&url=https://in.bookmyshow.com/cricket/rajasthan-royals/" }       },
            "9":    { "abbreviation": "RCB",    "fullName": "Royal Challengers Bangalore",  "twitter": "RCBTweets",         "hash": "RCB",  "ticketsLink": { "5": "//rcbtickets.liveinstyle.com/rcbTickets.aspx?utm_source=twitter&utm_medium=tweets&utm_content=tweet1&utm_campaign=pepsi-ipl2013-or&companyEventGroupIDUnique=1" }       },
            "62":   { "abbreviation": "SRH",    "fullName": "Sunrisers Hyderabad",          "twitter": "SunRisersIPL",      "hash": "SRH",  "ticketsLink": { "10": "//in.bookmyshow.com/go/?ref=IPL-SR-2013&url=https://in.bookmyshow.com/cricket/sunrisers-hyderabad/&type=0"}     }
        },

        "ticketsOverride"   : {
            "ipl2013-48": { "ticketsLink": undefined },
            "ipl2013-51": { "ticketsLink": undefined },
            "ipl2013-60": { "ticketsLink": '//tickets.ticketgenie.in/eventsReservation.aspx?companyEventGroupIDUnique=6' },
            "ipl2013-64": { "ticketsLink": undefined },
            "ipl2013-65": { "ticketsLink": '//tickets.ticketgenie.in/eventsReservation.aspx?companyEventGroupIDUnique=6' }
        },

        "playoffs"          : {
            "ipl2013-73": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "ticketsLink":  "//in.bookmyshow.com/iplt20/?utm_source=IPL-PLAYOFF-2013&utm_campaign=&utm_content=&utm_medium=",
                "progressionIndex": 2
            },
            "ipl2013-74": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "ticketsLink":  "//in.bookmyshow.com/iplt20/?utm_source=IPL-PLAYOFF-2013&utm_campaign=&utm_content=&utm_medium=",
                "progressionIndex": 1
            },
            "ipl2013-75": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "ticketsLink":  "//in.bookmyshow.com/iplt20/?utm_source=IPL-PLAYOFF-2013&utm_campaign=&utm_content=&utm_medium=",
                "progressionIndex": 2
            },
            "ipl2013-76": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "ticketsLink":  "//in.bookmyshow.com/iplt20/?utm_source=IPL-PLAYOFF-2013&utm_campaign=&utm_content=&utm_medium=",
                "progressionIndex": 3
            }
        },
        "supportsMC"        : true,
        "commentaryFilter"  : false,
        "standingsMessage"  : "All teams play 16 matches. Top 4 advance to Play-offs."
    },

    {
        "tournamentName"    : "ipl2012",
        "year"              : "2012",
        "fullName"          : "Indian Premier League 2012",
        "shortName"         : "IPL 2012",
        "dateRange"         : "April 4th - May 27th",
        "country"           : "India",

        "testPlatform"      : "//datacdn.iplt20.com/dynamic/data/core/cricket/2012/",
        "prodPlatform"      : "//datacdn.iplt20.com/dynamic/data/core/cricket/2012/",

        "canaryDataUrl"     : "//datacdn.iplt20.com/dynamic/data/canary/",
        "customerDataUrl"   : "//datacdn.iplt20.com/dynamic/data/bcci/2012/ipl2012/",

        "matchTypes"        : ["IPLT20"],

         "supportsTwitterBattles" : false,

        "playoffs"          : {
            "ipl2012-73": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "progressionIndex": 2
            },
            "ipl2012-74": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "progressionIndex": 1
            },
            "ipl2012-75": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "progressionIndex": 2
            },
            "ipl2012-76": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "progressionIndex": 3
            }
        },
        "supportsMC"        : true,
        "commentaryFilter"  : false,
        "standingsMessage"  : "All teams played 16 matches. Top 4 advanced to Play-offs."
    },

    {
        "tournamentName"    : "ipl2011",
        "year"              : "2011",
        "fullName"          : "Indian Premier League 2011",
        "shortName"         : "IPL 2011",
        "dateRange"         : "April 8th - May 28th",
        "country"           : "India",

        "canaryDataUrl"     : "//datacdn.iplt20.com/dynamic/data/canary/",
        "twitterDataUrl"    : "//datacdn.iplt20.com/dynamic/data/bcci/2012/ipl2012/",

        "matchTypes"        : ["IPLT20"],

        "playoffs"          : {
            "ipl2011-71": {
                "description":  "Qualifier 1",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "progressionIndex": 2
            },
            "ipl2011-72": {
                "description":  "Eliminator",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "progressionIndex": 1
            },
            "ipl2011-73": {
                "description":  "Qualifier 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "progressionIndex": 2
            },
            "ipl2011-74": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "progressionIndex": 3
            }
        },
        "supportsMC"        : false,
        "standingsMessage"  : "All teams played 14 matches. Top 4 advanced to Play-offs."
    },

    {
        "tournamentName"    : "ipl2010",
        "year"              : "2010",
        "fullName"          : "Indian Premier League 2010",
        "shortName"         : "IPL 2010",
        "dateRange"         : "Match 12th - April 25th",
        "country"           : "India",

        "canaryDataUrl"     : "//datacdn.iplt20.com/dynamic/data/canary/",
        "twitterDataUrl"    : "//datacdn.iplt20.com/dynamic/data/bcci/2012/ipl2012/",

        "matchTypes"        : ["IPLT20"],

        "playoffs"          : {
            "ipl2010-57": {
                "description":  "1st Semi Final",
                "team1name":    "1st Place Group Stage",
                "team2name":    "2nd Place Group Stage",
                "progressionIndex": 2
            },
            "ipl2010-58": {
                "description":  "2nd Semi Final",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "progressionIndex": 2
            },
            "ipl2010-59": {
                "description":  "3rd Place Playoff",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Qualifier 2 Losers",
                "progressionIndex": 2
            },
            "ipl2010-60": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "progressionIndex": 3
            }
        },
        "supportsMC"        : false,
        "standingsMessage"  : "All teams played 14 matches. Top 4 advanced to Knockouts."
    },

    {
        "tournamentName"    : "ipl2009",
        "year"              : "2009",
        "fullName"          : "Indian Premier League 2009",
        "shortName"         : "IPL 2009",
        "dateRange"         : "April 18th - May 24th",
        "country"           : "India",

        "canaryDataUrl"     : "//datacdn.iplt20.com/dynamic/data/canary/",
        "twitterDataUrl"    : "//datacdn.iplt20.com/dynamic/data/bcci/2012/ipl2012/",

        "matchTypes"        : ["IPLT20"],

        "playoffs"          : {
            "ipl2009-57": {
                "description":  "Semi Final 1",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "progressionIndex": 2
            },
            "ipl2009-58": {
                "description":  "Semi Final 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "progressionIndex": 2
            },
            "ipl2009-59": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "progressionIndex": 3
            }
        },
        "supportsMC"        : false,
        "standingsMessage"  : "All teams played 14 matches. Top 4 advanced to Knockouts."
    },

    {
        "tournamentName"    : "ipl2008",
        "year"              : "2008",
        "fullName"          : "Indian Premier League 2008",
        "shortName"         : "IPL 2008",
        "dateRange"         : "April 18th - June 1st",
        "country"           : "India",

        "matchTypes"        : ["IPLT20"],

        "playoffs"          : {
            "ipl2008-57": {
                "description":  "Semi Final 1",
                "team1name":    "3rd Place Group Stage",
                "team2name":    "4th Place Group Stage",
                "progressionIndex": 2
            },
            "ipl2008-58": {
                "description":  "Semi Final 2",
                "team1name":    "Qualifier 1 Losers",
                "team2name":    "Eliminator Winners",
                "progressionIndex": 2
            },
            "ipl2008-59": {
                "description":  "Final",
                "team1name":    "Qualifier 1 Winners",
                "team2name":    "Qualifier 2 Winners",
                "progressionIndex": 3
            }
        },
        "supportsMC"        : false,
        "standingsMessage"  : "All teams played 14 matches. Top 4 advanced to Knockouts."
    },

    {
        "tournamentName"    : "ipl",
        "year"              : "",
        "fullName"          : "Indian Premier League",
        "shortName"         : "IPL",
        "dateRange"         : "2008 - present",
        "country"           : "India",

        "playerImageUrl"    : "//iplstatic.s3.amazonaws.com/players/",
        "matchTypes"        : ["IPLT20"],

        "isGroup"           : true,

        "supportsTwitterBattles" : false,
        "supportsPlayerLinks" : false,
        "supportsVideoInCommentary" : false,

        "tweetUser"         : {
            "list": "ipl",
            "account": "IPL",
            "hash": "IPL"
        },
        "teams"             : {
            "3":    { "abbreviation": "DD",     "fullName": "Delhi Daredevils",             "twitter": "DelhiDaredevils",   "hash": "DD",   "ticketsLink": "" },
            "433":  { "abbreviation": "GL",     "fullName": "Gajarat Lions",                "twitter": "TheGujaratLions",   "hash": "GL",   "ticketsLink": "" },
            "4":    { "abbreviation": "KXIP",   "fullName": "Kings XI Punjab",              "twitter": "lionsdenkxip",      "hash": "KXIP", "ticketsLink": "" },
            "5":    { "abbreviation": "KKR",    "fullName": "Kolkata Knight Riders",        "twitter": "KKRiders",          "hash": "KKR",  "ticketsLink": "" },
            "6":    { "abbreviation": "MI",     "fullName": "Mumbai Indians",               "twitter": "mipaltan",          "hash": "MI",   "ticketsLink": "" },
            "434":  { "abbreviation": "RPS",    "fullName": "Rising Pune Supergiants",      "twitter": "RPSupergiants",     "hash": "RPS",  "ticketsLink": "" },
            "9":    { "abbreviation": "RCB",    "fullName": "Royal Challengers Bangalore",  "twitter": "RCBTweets",         "hash": "RCB",  "ticketsLink": "" },
            "62":   { "abbreviation": "SRH",    "fullName": "Sunrisers Hyderabad",          "twitter": "SunRisersIPL",      "hash": "SRH",  "ticketsLink": "" }
        },

        "ticketsOverride"   : {},
        // Playoffs
        "playoffs"          : {},

        "supportsMC"        : false,
        "commentaryFilter"  : false,
        "standingsMessage"  : ""
    }

];

( function( common ) {

    /*
     * define the events that will be fired at various points on the body element
     * other widgets can interact with the player through these events
     * Must be defined here as is acessed by multiple separate widgets
     */
    common.event = common.event || {};

    /**
     * Events strictly to do with the Flip Clock
     * @type {ClockEvent}
     */
    common.event.FlipClock = {
        // event fired when the clock starts
        START: 'clock/start',
        // event fired when the clock stops
        STOP: 'clock/stop'
    };

}( PULSE.app.common ) );

if (!PULSE) 				{ var PULSE = {}; }
if (!PULSE.CLIENT) 			{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 	{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Utils) 	{ PULSE.CLIENT.CRICKET.Utils = {}; }
/**
 * Generate a user-friendly score from the matchschedule2 team1 or team2 ScoringSummary object
 */
PULSE.CLIENT.CRICKET.Utils.getRunsOverWickets = function( scoringSummary )
{
	if( scoringSummary && scoringSummary.innings )
	{
		if( !scoringSummary.innings[0].allOut )
		{
			return scoringSummary.innings[0].runs + "/" + scoringSummary.innings[0].wkts;
		}
		else
		{
			return scoringSummary.innings[0].runs;
		}
	}
	return "";
};

//returns a score string given runs, wickets and whether the team were all out
//flips runs and wickets if flips === true

PULSE.CLIENT.CRICKET.Utils.getInningsScore = function( runs, wickets, allOut, declared, flip, scoreDelimeter )
{
	var score = "";

	if( wickets !== undefined || runs !== undefined )
	{
		if( flip )
		{
			score = ( !allOut ? ( wickets || 0 ) + ( scoreDelimeter || '/' ) : "" ) + ( runs || 0 ) + ( declared ? 'd' : '' );
		}
		else
		{
			score = ( runs || 0 ) + ( !allOut ? ( scoreDelimeter || '/' ) + ( wickets || 0 ) : '' ) + ( declared ? 'd' : '' );
		}
	}

	return score;
};

//returns latest team batting innings (or undefined) given a team index and batting order

PULSE.CLIENT.CRICKET.Utils.getTeamLatestInnings = function( innings, battingOrder, index )
{
	var lastInnings;

	for( var i = 0; i < innings.length; i++ )
	{
		var inning 		= innings[i],
			battingIdx	= battingOrder[i];

		if( battingIdx === index )
		{
			lastInnings = inning;
		}
	}
	
	return lastInnings;
};

//returns a fake overs fraction given a matchSchedule innings

PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction = function ( innings )
{
	var oversFraction = "";

	if( innings && innings.ballsFaced )
	{
		var completeOvers 	= innings.ballsFaced / 6,
			incompleteOver 	= innings.ballsFaced % 6,
			oversFraction 	= parseInt( completeOvers ) + ( incompleteOver !== 0 ? '.' + incompleteOver : '' );
	}	
	
	return oversFraction;
};
		
PULSE.CLIENT.CRICKET.Utils.getPlayerNameHtml = function( name )
{
	var space = name.indexOf( ' ' );			
	if ( space === -1 )
	{
		space = 0;
	}
	var start = name.substr( 0, space );
	var rest = name.substr( space );
	
	return start + '<span>' + rest + '</span>';
};

PULSE.CLIENT.CRICKET.Utils.formatTeamNameAbbr = function( teamname )
{
	return teamname.split( '&' ).join( '&amp;' );
};

PULSE.CLIENT.CRICKET.Utils.compareRuns = function( stats1, stats2 )
{
	var run1 = stats1 && stats1.stats && stats1.stats.r !== '-' ? +stats1.stats.r : -1;
	var run2 = stats2 && stats2.stats && stats2.stats.r !== '-' ? +stats2.stats.r : -1;
	var sr1 = stats1 && stats1.stats && stats1.stats.sr !== '-' ? +stats1.stats.sr : -1;
	var sr2 = stats2 && stats2.stats && stats2.stats.sr !== '-' ? +stats2.stats.sr : -1;

	var compareOutput;

	if ( run1 < run2 )
	{
		compareOutput = 1;
	}
	else if ( run1 > run2 )
	{
		compareOutput =  -1;
	}
	else
	{
		if ( sr1 || sr2 )
		{
			compareOutput = 0;
		}
		else
		{
			if ( sr1 < sr2 )
			{
				compareOutput = 1;
			}
			else if ( sr1 > sr2 )
			{
				compareOutput = -1;
			}
			else
			{
				compareOutput = 0;
			}
		}
	}

	return compareOutput;
};

PULSE.CLIENT.CRICKET.Utils.compareEconomy = function( stats1, stats2 )
{
	var e1 = stats1 && stats1.stats && typeof stats1.stats.e !== 'undefined' && stats1.stats.e !== '-' ? +stats1.stats.e : -1;
	var e2 = stats2 && stats2.stats && typeof stats1.stats.e !== 'undefined' && stats2.stats.e !== '-' ? +stats2.stats.e : -1;

	var compareOutput;
	
	if( e1 === -1 && e2 !== -1 )
	{
		compareOutput = 1;
	}
	else if( e1 !== -1 && e2 === -1 )
	{
		compareOutput = -1;
	}
	else
	{
	    if ( e1 < e2 )
	    {
	        compareOutput = -1;
	    }
	    else if ( e1 > e2 )
	    {
	        compareOutput = 1;
	    }
	    else
	    {
	        compareOutput = 0;
	    }
	}
    
    return compareOutput;
};

PULSE.CLIENT.CRICKET.Utils.compareWickets = function( stats1, stats2 )
{
	var w1 = stats1 && stats1.stats && typeof stats1.stats.w !== 'undefined' ? +stats1.stats.w : -1;
	var w2 = stats2 && stats2.stats && typeof stats1.stats.w !== 'undefined' ? +stats2.stats.w : -1;
	var r1 = stats1 && stats1.stats && typeof stats1.stats.r !== 'undefined' ? +stats1.stats.r : -1;
	var r2 = stats2 && stats2.stats && typeof stats1.stats.r !== 'undefined' ? +stats2.stats.r : -1;

	var compareOutput = 0;
	
    if ( w1 < w2 )
    {
        compareOutput = 1;
    }
    else if ( w1 > w2 )
    {
        compareOutput = -1;
    }
    else
    {
    	if( w1 > 0 && w2 > 0 )
    	{
	        if ( r1 < r2 )
		    {
		        compareOutput = -1;
		    }
		    else if ( r1 > r2 )
		    {
		        compareOutput = 1;
		    }
		    else
		    {
		    	compareOutput = PULSE.CLIENT.CRICKET.Utils.compareEconomy( stats1, stats2 );
		    }
    	}
	    else
	    {
	    	compareOutput = PULSE.CLIENT.CRICKET.Utils.compareEconomy( stats1, stats2 );
	    }
    }
    
    return compareOutput;
};

PULSE.CLIENT.CRICKET.Utils.mergeBattingStats = function( stats1, stats2 )
{
	var mergedStat =
	{
		playerId : -1,
		b: 0,
		r: 0,
		'4s': 0,
		'6s': 0
	}

	for( var m in mergedStat )
	{
		if( m === 'playerId' )
		{
			mergedStat[m] = stats1[m];
		}
		else
		{
			mergedStat[m] += ( stats1[m] ? stats1[m] : 0 );
			mergedStat[m] += ( stats2[m] ? stats2[m] : 0 );
		}
	}

	return mergedStat;
};

PULSE.CLIENT.CRICKET.Utils.mergeBowlingStats = function( stats1, stats2 )
{
	var mergedStat =
	{
		playerId : -1,
		w: 0,
		d: 0,
		nb: 0,
		r: 0,
		maid: 0,
		wd: 0
	}

	for( var m in mergedStat )
	{
		if( m === 'playerId' )
		{
			mergedStat[m] = stats1[m];
		}
		else
		{
			mergedStat[m] += ( stats1[m] ? stats1[m] : 0 );
			mergedStat[m] += ( stats2[m] ? stats2[m] : 0 );
		}
	}

	return mergedStat;
};

PULSE.CLIENT.CRICKET.Utils.fakeOversFractionToOversDecimal = function( string )
{
	var over = 0;
	var BALLS_IN_OVER = 6;
	
    if ( string != null && string.match( "\\d+(\\.\\d)?" ) )
    {
        var index = string.indexOf( "." );
        if ( index == -1 )
        {
            overs = parseInt( string );
        }
        else
        {
            overs = ( parseInt( string.substring( 0, index ) ) ) +
                	( parseFloat( string.substring( index + 1 ) / BALLS_IN_OVER ) );
        }
    }

    return overs;
};

PULSE.CLIENT.CRICKET.Utils.getBPString = function( bp )
{
	return bp.innings + '.' + bp.over + '.' + bp.ball;
};

PULSE.CLIENT.CRICKET.Utils.convertBallsToOvers = function( balls )
{
	if ( balls > 0 )
	{
		return Math.floor( balls / 6 ) + '.' + ( balls % 6 );
	}
	
	return '';
};

PULSE.CLIENT.CRICKET.Utils.getStandingsForValue = function( standing )
{
	if( standing.totalRunsFor )
	{
		var overs = PULSE.CLIENT.CRICKET.Utils.convertBallsToOvers( standing.totalBallsFor );
		return standing.totalRunsFor + '/' + overs;
	}
	else
	{
		return "";
	}
};

PULSE.CLIENT.CRICKET.Utils.getStandingsAgainstValue = function( standing )
{
	if( standing.totalRunsAgainst )
	{
		var overs = PULSE.CLIENT.CRICKET.Utils.convertBallsToOvers( standing.totalBallsAgainst );
		return standing.totalRunsAgainst + '/' + overs;
	}
	else
	{
		return "";
	}
};

if ( !PULSE )                { var PULSE = {}; }
if ( !PULSE.CLIENT )         { PULSE.CLIENT = {}; }

PULSE.CLIENT.DataManager = function ()
{
	this.timers = {};
	this.callbacks = {};
	this.lastdata = {};
	this.savedTargets = {};
};

/**
 * Note that the interval is in SECONDS, and will be multiplied by 1000 to derive a millisecond
 * value.
 */
PULSE.CLIENT.DataManager.prototype.addFeed = function ( id, url, interval, callback, targets )
{
    var currentTargets = this.savedTargets[id] || [];
    
	// Remove any existing feed with this ID
	this.removeFeed( id );

	// Save the callback name
	this.callbacks[id] = callback;
    
    // Add all the targets to the current targets
    for ( var i = 0, limit = targets.length; i < limit; i++ )
    {
        var needToAdd = true;
        for ( var j = 0, jLimit = currentTargets.length; j < jLimit; j++ )
        {
            if ( targets[ i ] === currentTargets[ j ] )
            {
                needToAdd = false;
                break;
            }
        }
        if ( needToAdd )
        {
            currentTargets.push( targets[ i ] );
        }
    }
    
    this.savedTargets[id] = currentTargets;
	
	// Dynamically create the callback method
	var that = this;
	window[callback] = function ( jsonpData )
	{
		if ( jsonpData )
		{
			var payload = jsonpData;
			
			// Serialise the payload
			var serialised = $.toJSON( payload );
		    if ( that.lastdata[id] !== serialised )
		    {
		    	// Save the new data
		    	that.lastdata[id] = serialised;
				
				// Pass the data to all of the targets...
				for ( var t = 0, tlimit = currentTargets.length; t < tlimit; t++ )
				{
					// ...if they are valid
					var target = currentTargets[t];
					if ( target && target.onData )
					{
						target.onData( payload, id );
					}
				}
		    }
		}
	};
	
	// Create the timer
	this.timers[id] = new PULSE.CLIENT.NewJSONPTimer( url, interval * 1000 );
};

PULSE.CLIENT.DataManager.prototype.startAll = function ()
{
	for ( var id in this.timers )
	{
		this.start( id );
	}
};

PULSE.CLIENT.DataManager.prototype.stopAll = function ()
{
	for ( var id in this.timers )
	{
		this.stop( id );
	}
};

PULSE.CLIENT.DataManager.prototype.start = function ( id )
{
	if ( this.timers[id] )
	{
		this.timers[id].start();
	}
};

PULSE.CLIENT.DataManager.prototype.stop = function ( id )
{
	if ( this.timers[id] )
	{
		this.timers[id].stop();
	}
};

PULSE.CLIENT.DataManager.prototype.removeFeed = function ( id )
{
	this.stop( id );
	
	if ( this.timers[id] )
	{
		this.timers[id] = undefined;
	}
	
	if ( window[ this.callbacks[id] ] )
	{
		window[ this.callbacks[id] ] = undefined;
	}
	
	if ( this.lastdata[id] )
	{
		this.lastdata[id] = undefined;
	}
	
	if ( this.savedTargets[id] )
	{
	    this.savedTargets[id] = undefined;
	}
};
if ( !PULSE )                   { var PULSE = {}; }
if ( !PULSE.CLIENT )            { PULSE.CLIENT = {}; }

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

// This is a utility file that deals with various kinds of date manipulation
PULSE.CLIENT.DateUtil = function() {};

PULSE.CLIENT.DateUtil.DAYS_IN_A_WEEK = 7;
PULSE.CLIENT.DateUtil.MONTHS_IN_A_YEAR = 12;

/**
 * Takes a date string ( supports 'yyyy-mm-dd' & 'yyyy-mm-ddTHH:MM:SS+0100' formats ) as a parameter
 * @param  {String} dateStr - ISO 8601 date string
 * @return {Date}           - JavaScript date object
 */
PULSE.CLIENT.DateUtil.parseDateTime = function( dateStr )
{
    if( !dateStr )
    {
        return;
    }

    var date = new Date( dateStr );

    if( isDateValid( date ) )
    {
        return date;
    }
    else
    {
        var dateTime = dateStr.split('T');
        if ( dateTime.length === 1 )
        {
            return new Date( dateTime[0].replace( /\-/g, '/' ) );
        }
        else if ( dateTime.length === 2 )
        {
            // we only want to replace the hyphens of date bit (there might be hypens(minus) as in GMT-0200)
            var aDate1 = dateTime[0].replace( /\-/g, '/' );
            var aDate2 = dateTime[1];
            var newDate = aDate1 + ' ' + aDate2;

            date = new Date( newDate );
        }

        if( isDateValid( date ) )
        {
            return date;
        }
        else
        {
            window.console.log( 'Invalid Date String ' + dateStr );
        }
    }
};

window.isDateValid = function( date )
{
    if( Object.prototype.toString.call( date ) === "[object Date]" )
    {
        // it is a date
        if( isNaN( date.getTime() ) )
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }
};

// PULSE.CLIENT.DateUtil.parseDateTime

/**
 * Takes a valid date object and returns the month either full name or partial,
 * based on fullName boolean flag
 */
PULSE.CLIENT.DateUtil.getMonth = function( dateObj, fullName )
{
    var monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    var month = dateObj.getMonth();

    if ( fullName )
    {
        month = month + PULSE.CLIENT.DateUtil.MONTHS_IN_A_YEAR;
    }

    return monthNames[ month ];
};

PULSE.CLIENT.DateUtil.getMonthNumber = function(date)
{
    var month = date.getMonth() + 1;

    if (month < 10) {

        return '0' + month;
    }
    return month;
}

PULSE.CLIENT.DateUtil.getDaysAgo = function(stamp)
{
    var timeStamp = parseInt(stamp.toString().replace(/,/g ,'')),
                dateObject = new Date( timeStamp ),
                thisDate = new Date(Date.now()),
                difference = thisDate.getTime() - dateObject.getTime(),
                diffSecs,
                diffMins,
                diffHours,
                diffDays,
                timeAgo = '';

            diffSecs =  Math.round(difference / (1000));
            diffMins = Math.round(difference / (1000 * 60));
            diffHours = Math.round(difference / (1000 * 3600));
            diffDays = Math.round(difference / (1000 * 3600 * 24));

            if (diffSecs < 60)
            {
                if (diffSecs < 1)
                {
                    timeAgo = diffSecs + ' secs ago';
                }
                else
                {
                    timeAgo = diffSecs + ' sec ago';
                }
            }
            else if (diffMins < 60)
            {
                if (diffMins > 1)
                {
                    timeAgo = diffMins + ' mins ago';
                }
                else
                {
                    timeAgo = diffMins  + ' min ago';
                }
            }
            else if (diffHours < 24)
            {
                if (diffHours > 1)
                {
                    timeAgo = diffHours + ' hours ago';
                }
                else
                {
                    timeAgo = diffHours + ' hour ago';
                }
            }
            else
            {
                if (diffDays > 1)
                {
                    timeAgo = diffDays + ' days ago';
                }
                else
                {
                    timeAgo = diffDays + ' day ago';
                }
            }

        return timeAgo;
}


PULSE.CLIENT.DateUtil.getFullMonthFromShort = function(monthShort)
{
    monthFull = '';
        switch(monthShort)
    {
        case ('Jan'):
            monthFull = 'January';
            break;
        case ('Feb'):
            monthFull = 'February';
            break;
        case ('Mar'):
            monthFull = 'March';
            break;
        case ('Apr'):
            monthFull = 'April';
            break;
        case ('May'):
            monthFull = 'May';
            break;
        case ('Jun'):
            monthFull = 'June';
            break;
        case ('Jul'):
            monthFull = 'July';
            break;
        case ('Aug'):
            monthFull = 'August';
            break;
        case ('Sep'):
            monthFull = 'September';
            break;
        case ('Oct'):
            monthFull = 'October';
            break;
        case ('Nov'):
            monthFull = 'November';
            break;
        case ('Dec'):
            monthFull = 'December';
            break;
        default:
            monthFull = undefined;
    }

    return monthFull;

}

/**
 * Takes a valid date object and returns the week day either full name or partial,
 * based on fullName boolean flag
 */
PULSE.CLIENT.DateUtil.getWeekDay = function( dateObj, fullName )
{
    var dayNames = [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    var day = dateObj.getDay();

    if ( fullName )
    {
        day = day + PULSE.CLIENT.DateUtil.DAYS_IN_A_WEEK;
    }

    return dayNames[ day ];
};

PULSE.CLIENT.DateUtil.getDayNumber = function(date)
{
    var day = date.getDate();

    if (day < 10) {

        return '0' + day;
    }

    return day;
}


/**
 * Takes a valid date object and returns the date with or without suffix,
 * based on withSuffix boolean flag
 */
PULSE.CLIENT.DateUtil.getDate = function( dateObj, withSuffix )
{
    var d = dateObj.getDate();

    if ( withSuffix )
    {
        return d + ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10];
    }

    return d;
};

/**
 * Takes a valid date object and returns the date-time string after taking
 * care of timezone offset
 */
PULSE.CLIENT.DateUtil.calcTimeByOffset = function( dateObj, offset )
{
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var localTime       = dateObj.getTime(),
        timezoneOffset  = dateObj.getTimezoneOffset() * 60000;

    var utc = localTime + timezoneOffset;

    // create new Date object for different city
    // using supplied offset
    var utcDate = new Date ( utc );
    var convertedDate = new Date( utc + ( 3600000 * offset ) );

    var time = convertedDate.getHours() + ':' + (convertedDate.getMinutes() + '' < '10' ? '0' : '' ) + convertedDate.getMinutes()

    // return date and time in a object
    return {
        date : convertedDate.toLocaleDateString(),
        time : time
    };
};

/**
 * Gets a date object (corresponding to the local time and date) and returns
 * the UTC date object
 */
PULSE.CLIENT.DateUtil.getUtcDateObject = function convertDateToUTC( date )
{
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
};

PULSE.CLIENT.DateUtil.getUtcTime = function ( dateStr )
{
    // parseDateTime gives you local date-time
    var matchDate   = PULSE.CLIENT.DateUtil.parseDateTime( dateStr );

    if ( matchDate )
    {
        var utcDate                 = PULSE.CLIENT.DateUtil.getUtcDateObject( matchDate ),
            formattedUTCDateTime    = dateFormat( utcDate, 'dddd mmmm dS yyyy|HH:MM| Z' ).split( "|" ),
            utcTime                 = formattedUTCDateTime[1];

        return utcTime;
    }
};

PULSE.CLIENT.DateUtil.getTimeFromTimestamp = function ( dateStr, offset, timeFormat )
{
    // Default values
    if( !offset )
    {
        offset = 0;
    }
    if( !timeFormat )
    {
        timeFormat = "HH:MM";
    }

    // parseDateTime gives you local date-time
    var matchDate   = PULSE.CLIENT.DateUtil.parseDateTime( dateStr ),
        offsetDate  = matchDate ? new Date( matchDate.getTime() + ( 3600000 * offset ) ) : undefined;

    if ( offsetDate )
    {
        var utcDate           = PULSE.CLIENT.DateUtil.getUtcDateObject( offsetDate ),
            formattedDateTime = dateFormat( utcDate, 'dddd mmmm dS yyyy|' + timeFormat + '| Z' ).split( "|" ),
            utcTime           = formattedDateTime[1];

        return utcTime;
    }
};

PULSE.CLIENT.DateUtil.getDateFromTimestamp = function ( dateStr, offset, desiredFormat )
{
    // Default values
    if( !offset )
    {
        offset = 0;
    }
    if( !desiredFormat )
    {
        desiredFormat = 'dd mmmm yyyy';
    }

    // parseDateTime gives you local date-time
    var matchDate   = PULSE.CLIENT.DateUtil.parseDateTime( dateStr ),
        offsetDate  = matchDate ? new Date( matchDate.getTime() + ( 3600000 * offset ) ) : undefined;

    if ( offsetDate )
    {
        var utcDate           = PULSE.CLIENT.DateUtil.getUtcDateObject( offsetDate ),
            formattedDateTime = dateFormat( utcDate, desiredFormat + '|HH:MM| Z' ).split( "|" ),
            formattedDate     = formattedDateTime[0];

        return formattedDate;
    }
};

PULSE.CLIENT.DateUtil.getSinceString = function( date, format )
{
    if( date )
    {
        var now = new Date();

        var diff = Math.floor( ( now - date ) / 1000 );

        if( diff <= 0 )
        {
            return format ? format.justNow : "just now";
        }
        else if( diff < 60 )
        {
            var output = Math.round( diff );
            return output + ( format ? format.seconds : "s" );
        }
        else if( diff < 60 * 60 )
        {
            var output = Math.round( diff / 60 );
            return output + ( format ? format.minutes : "m" );
        }
        else if( diff < 60 * 60 * 24 )
        {
            var output = Math.round( diff / ( 60 * 60 ) );
            return output + ( format ? format.hours : "h" );
        }
        else
        {
            var output = Math.round( diff / ( 60 * 60 * 24 ) );
            return output + ( format ? format.days : "d" );
        }
    }
};

PULSE.CLIENT.DateUtil.getFormattedEventDate = function( dateString, dateFormatString )
{
    var date = PULSE.CLIENT.DateUtil.parseDateTime( dateString ),
        utcDate = PULSE.CLIENT.DateUtil.getUtcDateObject( date );

    if( utcDate )
    {
        var formattedDateString = dateFormat( utcDate, dateFormatString ).split('|')[0];
        return formattedDateString;
    }
};


if ( !PULSE )                { var PULSE = {}; }
if ( !PULSE.CLIENT )         { PULSE.CLIENT = {}; }

PULSE.CLIENT.JqueryJSONPDataManager = function ()
{
	//depricated
	//this.timers = {};
	//this.lastdata = {};
	//this.savedTargets = {};
	
	this.urls = {};
	/**
	 * //proposed object for a given url
	this.urls['scoring-01.js'] = {
		timer: 'new JqueryJSONPTimer'
		savedTargets: [],
		lastData: '',
		callback: '',
		interval: -1,
		url: '',
		id: ''
	}
	*/
};

/**
 * Note that the interval is in SECONDS, and will be multiplied by 1000 to derive a millisecond
 * value.
 */
PULSE.CLIENT.JqueryJSONPDataManager.prototype.addFeed = function ( id, url, interval, callback, targets )
{
    var currentTargets = this.urls[url] && this.urls[url].savedTargets ? this.urls[url].savedTargets : [];
    
	// Remove any existing feed with this ID
	this.removeFeed( url );

	// Save the callback name
	this.urls[url] = { id:id, url:url, interval:interval, callback:callback };
    
    // Add all the targets to the current targets
    for ( var i = 0, limit = targets.length; i < limit; i++ )
    {
        var needToAdd = true;
        for ( var j = 0, jLimit = currentTargets.length; j < jLimit; j++ )
        {
            if ( targets[ i ] === currentTargets[ j ] )
            {
                needToAdd = false;
                break;
            }
        }
        if ( needToAdd )
        {
            currentTargets.push( targets[ i ] );
        }
    }
    
    this.urls[url].savedTargets = currentTargets;
	
	// Dynamically create the callback method
	var that = this;
	var f = function ( jsonpData )
	{
		if ( jsonpData )
		{
			var payload = jsonpData;
			
			// Serialise the payload
			var serialised = $.toJSON( payload );
		    if ( that.urls[url] && that.urls[url].lastData !== serialised )
		    {
		    	// Save the new data
		    	that.urls[url].lastData = serialised;
				// Pass the data to all of the targets...
				for ( var t = 0, tlimit = currentTargets.length; t < tlimit; t++ )
				{
					// ...if they are valid
					var target = currentTargets[t];
					if ( target && target.onData )
					{
						try
						{
							target.onData( payload, id );
						}
						catch(e)
						{
							if( window.console && window.console.log ) console.log(e);
						}
					}
				}
		    }
		}
	};
	
	var e = function ( )
	{
		for ( var t = 0, tlimit = currentTargets.length; t < tlimit; t++ )
		{
			// ...if they are valid
			var target = currentTargets[t];
			if ( target && target.onError )
			{
				target.onError( id );
			}
		}
	};
	
	// Create the timer
	that.urls[url].timer = new PULSE.CLIENT.JqueryJSONPTimer( this.urls[url], f, e );
};

PULSE.CLIENT.JqueryJSONPDataManager.prototype.startAll = function ()
{
	for ( var url in this.urls )
	{
		this.start( url );
	}
};

PULSE.CLIENT.JqueryJSONPDataManager.prototype.stopAll = function ()
{
	for ( var url in this.urls )
	{
		this.stop( url );
	}
};

PULSE.CLIENT.JqueryJSONPDataManager.prototype.start = function ( url )
{
	if ( this.urls[url] && this.urls[url].timer )
	{
		this.urls[url].timer.start();
	}
};

PULSE.CLIENT.JqueryJSONPDataManager.prototype.stop = function ( url )
{
	if ( this.urls[url] && this.urls[url].timer )
	{
		this.urls[url].timer.stop();
	}
};

PULSE.CLIENT.JqueryJSONPDataManager.prototype.removeFeed = function ( url )
{
	this.stop( url );
	
	if ( this.urls[url] )
	{
		this.urls[url] = undefined;
	}
	
};
if ( !PULSE ) { var PULSE = {}; }
if ( !PULSE.CLIENT ) { PULSE.CLIENT = {}; }

// This constructor takes 4 parameters: target ( which is a data model ),
// url, interval( in milliseconds ) and params
PULSE.CLIENT.PollController = function( target, url, interval, params )
{
	this.PLAY2_URL = "//play2.pulselive.com/";
	this.pollModel = target;
	this.lastData = "";
	this.pollTimer = new PULSE.CLIENT.JqueryJSONPTimer( { id: 'poll', url: url, interval: interval, callback: 'onPollCallback' }, this.onData, function(){} );

	this.answeredQuestions = new PULSE.CLIENT.Set();
	var ansCookieValue = PULSE.CLIENT.Cookie.getCookieByKey('pulseAnsCookie')
	if ( ansCookieValue.length > 0 )
	{
		this.answeredQuestions = PULSE.CLIENT.Set.fromString(ansCookieValue);
	}

	var that = this;
	PULSE.CLIENT.PollController.getInstance = function () { return that; };

	this.pollTimer.start();
};

PULSE.CLIENT.PollController.prototype.onData = function( pollData, id )
{
	var thisInstance = PULSE.CLIENT.PollController.getInstance();

	if ( pollData && pollData[0] )
	{
		var payload = pollData[0];

		// Serialise the payload
		var serialised = $.toJSON( payload );

	    if ( thisInstance.lastData !== serialised )
	    {
	    	// Save the new data
	    	thisInstance.lastData = serialised;
	    	thisInstance.pollModel.modelChanged( pollData[0] );
	    }
	}
};

PULSE.CLIENT.PollController.prototype.answerQuestion = function( answerIndex, id )
{
	var that = this;
	/* add this que id to answeredQuestions Set and store that Set in ever expiring cookie */
	this.answeredQuestions.add( id );
	document.cookie =
		'pulseAnsCookie=' + this.answeredQuestions.toString() + ';expires=30/12/2051 00:00:00';
	/* inform CMS about this */
	$.ajax(
	{
		dataType: 'jsonp',
	    url: that.PLAY2_URL + 'cms/answerQuestion',  //?questionId=1&option=0',
	    data: { questionId: id, option: answerIndex }
	} );
};

if ( !PULSE ){var PULSE = {};}
if ( !PULSE.CLIENT ){PULSE.CLIENT = {};}

PULSE.CLIENT.JqueryJSONPTimer = function( params, f, e )
{
	this.initialise( params || {}, f, e );

	this.running = false;
};

PULSE.CLIENT.JqueryJSONPTimer.prototype.initialise = function( params, f, e )
{
	this.url = params.url || '';
	this.interval = params.interval * 1000 || '';
	this.params = params.params || {};
	this.callbackName = params.callback || '';
	this.callback = f;
	this.errorCallback = e;
	this.name = params.id || 'un-named';
};

PULSE.CLIENT.JqueryJSONPTimer.prototype.start = function()
{
	if ( !this.running )
	{
		this.running = true;
		this.fireTimer( );
	}
};

PULSE.CLIENT.JqueryJSONPTimer.prototype.stop = function()
{
	if ( this.running )
	{
		this.running = false;
		this.cancelTimer( );
	}
};

PULSE.CLIENT.JqueryJSONPTimer.prototype.fireTimer = function()
{
	var that = this;

	$.jsonp(
	{
		url : that.url,
		context : document.body,
		callback : that.callbackName,
		processData: false,
		contentType: false,
		cache : true,
		success : function( data )
		{
			that.cancelTimer( );
			if ( that.interval > 0 && that.running )
			{
				that.timer = setTimeout( function()
				{
					that.fireTimer( );
				}, that.interval );
			}
			that.callback( data );
		},
		error : function( xOptions, textStatus )
		{
			that.errorCallback( );
			if ( that.interval > 0 && that.running )
			{
				that.timer = setTimeout( function()
				{
					that.fireTimer( );
				}, that.interval );
			}
		}
	} );
};

PULSE.CLIENT.JqueryJSONPTimer.prototype.cancelTimer = function()
{
	if ( this.timer )
	{
		clearTimeout( this.timer );
	}
};

if ( !PULSE ) { var PULSE = {}; }
if ( !PULSE.CLIENT ) { PULSE.CLIENT = {}; }

// This constructor
PULSE.CLIENT.PollModel = function( parent )
{		
	this.pulse = parent;
	this.popupTimestamp;
};

PULSE.CLIENT.PollModel.prototype.modelChanged = function( data )
{
	if ( this.pulse.pollView )
	{
		this.pulse.pollView.opinion = data.results;		
		this.pulse.pollView.refreshData();
				
		// Further check for timestamp, if changed then only update/show pop-up box
		if ( data.popupQuestionId && data.timestamp && this.popupTimestamp !== data.timestamp )
		{
			this.pulse.pollView.updatePulsePopup( data.popupQuestionId );				
			this.popupTimestamp = data.timestamp;
		}		
	}
};
if (!PULSE) { var PULSE = {}; }
if (!PULSE.CLIENT) { PULSE.CLIENT = {}; }

/**
 * Various functions that are useful for mobile and responsive widgets
 */
if (!PULSE.CLIENT.ResponsiveUtils) { PULSE.CLIENT.ResponsiveUtils = {}; }

/**
 * Detect mobile device via user agent - Does not detect various tablets/ipads
 * @return {boolean} Returns true if the user's device is mobile
 */
PULSE.CLIENT.ResponsiveUtils.detectMobile = function()
{
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
        return true;
    }
    return false;
};

/**
 * Detects touch support on launch - removes and re-adds the touch class to the html tag
 * Removal is required to function correctly when running the application in an iframe
 *
 * REQUIRES MODERNIZR LIB
 */
PULSE.CLIENT.ResponsiveUtils.detectTouchSupport = function()
{
    if( window.Modernizr && Modernizr.touch )
    {
        Modernizr.addTest('overflowscrolling', Modernizr.testAllProps( 'overflowScrolling', 'touch', true ));
        if( Modernizr.overflowscrolling )
        {
            $('html').removeClass('touch');
            //add class to element to enable hardware accelerated scrolling
            document.documentElement.className += "touch";
            $('html').addClass('touch');
        }
    }
};

/**
 * Adds a listener to detect if the browser has been running in the background on a mobile device
 * and refreshes the page if sufficient time has passed
 */
PULSE.CLIENT.ResponsiveUtils.detectWakeFromSleep = function()
{
    var _lastTick = +new Date;

    function detectWakeFromSleep()
    {
        var now = +new Date;
        if( (now - _lastTick) > 240000 )
        {
            if( window.navigator.onLine === false )
            {
                return false; //don't refresh if they are not online
            }

            window.location.href = window.location.href;
        }

        _lastTick = now;
        return true;
    }

    window.setInterval( detectWakeFromSleep, 2000 );
};

/**
 * Detect whether current device supports flash
 * @return {boolean} True if browser supports flash else false
 */
PULSE.CLIENT.ResponsiveUtils.detectFlashSupport = function()
{
    if((typeof navigator.plugins != "undefined" &&
        typeof navigator.plugins["Shockwave Flash"] == "object") ||
        (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false))
    {
        return true;
    }
    else
    {
        return false;
    }
};

/**
 * Detects when the user has stopped resizing the window
 * @param  {Function} callback Callback function to be called on end of resize
 */
PULSE.CLIENT.ResponsiveUtils.detectEndOfWindowResize = function( callback )
{
    var rtime = new Date(1, 1, 2000, 12,00,00),
        timeout = false,
        delta = 200;

    $( window ).resize( function()
    {
        rtime = new Date();
        if( timeout === false )
        {
            timeout = true;
            setTimeout( resizeend, delta );
        }
    });

    function resizeend()
    {
        if( new Date() - rtime < delta )
        {
            setTimeout( resizeend, delta );
        }
        else
        {
            timeout = false;
            if( callback )
            {
                callback();
            }
        }
    }
}

if (!PULSE) { var PULSE = {}; }
if (!PULSE.CLIENT) { PULSE.CLIENT = {}; }

/**
* Handy functions to insert templates into the page
*
*  -  publish: replaces container contents with template
*  -  replace: replaces container with template
*  -  append:  appends template to container
*/
PULSE.CLIENT.Template = {
    publish: function( template, selector, model, callback ) {
    	if( template ) {
	    	$( selector ).html( PULSE.app.templating.render( model, template ) );

	    	if( callback )
	    		callback();
    	}
    },
    replace: function( template, selector, model, callback ) {
    	if( template ) {
    		$( selector ).replaceWith( PULSE.app.templating.render( model, template ) );

	    	if( callback )
	    		callback();
    	}
    },
    append: function( template, selector, model, callback ) {
    	if( template ) {
    		$( selector ).append( PULSE.app.templating.render( model, template ) );

        	if( callback )
        		callback();
    	}
    },
    prepend: function( template, selector, model, callback ) {
        if( template )
        {
    	    $( selector ).prepend( tmpl( PULSE.app.templating.render( model, template ) ) );

	        if( callback )
	            callback();
    	}
    	else {
    		console.warn( "Template url not provided or doesn't exist in the cache" );
    	}
    },
    compareAndPublish: function( template, selector, model, callback ) {
    	if( template ) {
            var renderedTemplate = PULSE.app.templating.render( model, template );
    		if( $( selector ).get(0) !== renderedTemplate ) {
				$( selector ).replaceWith( renderedTemplate );
				if( callback ) {
	    			callback();
	    		}
			}
    	}
    },
    getHtml: function( template, model ) {
        return PULSE.app.templating.render( model, template );
    }
};

if ( !PULSE ){var PULSE = {};}
if ( !PULSE.CLIENT ){PULSE.CLIENT = {};}

PULSE.CLIENT.Timer = function()
{
	this.running = false;
};

PULSE.CLIENT.Timer.prototype.initialise = function( params )
{
	this.callback = params.callback;
	this.interval = params.interval * 1000;
};

PULSE.CLIENT.Timer.prototype.start = function( delay )
{
	if ( !this.running )
	{
		this.running = true;
		this.fireTimer( delay );
	}
};

PULSE.CLIENT.Timer.prototype.stop = function()
{
	if ( this.running )
	{
		this.running = false;
		this.cancelTimer( );
	}
};

PULSE.CLIENT.Timer.prototype.fireTimer = function( delay )
{
	var that = this;

	if( !delay )
	{
		that.callback();
	}

	that.fire();
};

PULSE.CLIENT.Timer.prototype.fire = function()
{
	var that = this;

	that.cancelTimer();

	if ( that.interval > 0 && that.running )
	{
		that.timer = setTimeout( function()
		{
			that.callback();
			that.fireTimer( true );
		}, that.interval );
	}
};

PULSE.CLIENT.Timer.prototype.cancelTimer = function()
{
	if ( this.timer )
	{
		clearTimeout( this.timer );
	}
};

/**
 *     Common library to hold most-used twitter code to handle
 *     click events such as tweeting with custom parameters,
 *     retweeting, favouriting etc.
 */


if (!PULSE)
{
    var PULSE = {};
}
if (!PULSE.CLIENT)
{
    PULSE.CLIENT = {};
}
if (!PULSE.CLIENT.TwitterController)
{
    PULSE.CLIENT.TwitterController = {};
}

/**
 * Creates a new window for a specific twitter event; determines the type of event
 * through the 'intent' parameter
 *
 * More info at: https://dev.twitter.com/docs/intents
 *
 * @param  {String} intent - can be: 'tweet', 'favorite', 'retweet'
 * @param  {Object} params - optional; describes additional tweet params
 * @param  {Number} w      - optional; the width of the pop-up window created
 * @param  {Number} h      - optional; the height of the pop-up window created
 */
PULSE.CLIENT.TwitterController.tweetEvent = function(intent, params, w, h)
{
    var TC = PULSE.CLIENT.TwitterController;

    var width = w || 575,
        height = h || 400,
        left = ($(window).width() - width) / 2,
        top = ($(window).height() - height) / 2,
        options = 'status=1' +
            ',width=' + width +
            ',height=' + height +
            ',top=' + top +
            ',left=' + left;

    var tweetUrl = TC.getIntentUrl(intent, params);

    window.open(tweetUrl, 'twitter', options);
};

/**
 * Returns a URL to call the Twitter API
 * More info at: https://dev.twitter.com/docs/intents
 *
 * @return {String} - the intent URL, complete with added params
 */
PULSE.CLIENT.TwitterController.getIntentUrl = function(intent, params)
{
    var TC = PULSE.CLIENT.TwitterController,
        paramsString = TC.prepareParams(params);

    return "https://twitter.com/intent/" + intent + paramsString;
};

PULSE.CLIENT.TwitterController.getPermalink = function(tweet)
{
    var userName = tweet.user.screen_name;
    var userUrl = PULSE.CLIENT.TwitterController.getUserAccountUrl(userName);

    return userUrl + "/status/" + tweet.id_str;
};

PULSE.CLIENT.TwitterController.prepareParams = function(params)
{
    var paramsArray = [];
    $.each(params, function(key, value)
    {
        var keyValuePair = [key, encodeURIComponent(value)];
        paramsArray.push(keyValuePair.join("="));
    });

    return "?" + paramsArray.join("&");
};

PULSE.CLIENT.TwitterController.getUserAccountUrl = function(screenName)
{
    return "https://twitter.com/" + screenName;
};

PULSE.CLIENT.TwitterController.getSearchTagUrl = function(topic)
{
    return "https://twitter.com/search?q=%23" + topic;
};

/**
 * Utility method to scan the given String for what look like HTTP links,
 * Twitter handles and hashtags (called entities), and mark them up with <a> tags.
 *
 * For URLs and media links, use expanded_url as the title and use the
 * display_url provided by Twitter as the text of the anchor tag
 *
 * See: https://dev.twitter.com/docs/tco-url-wrapper/best-practices
 *
 * @param  {String} string   - the original body of the tweet
 * @param  {Object} entities - mapping of types of entities to an array of entity objects
 * @return {String}          - the processed body of the tweet, with anchor tags
 */
PULSE.CLIENT.TwitterController.markUpLinks = function(string, entities)
{
    // to support the old way of doing things, when entities weren't use
    // to determine links to pages or media and the URL was directly processed
    // from the tweet text body
    if (!entities)
    {
        string = string.replace(/(https{0,1}:\/\/\S+)/g, '<a target="_blank" href="$1">$1</a>')
            .replace(/@(\S+)/g, '<a target="_blank" href="https://twitter.com/$1">@$1</a>')
            .replace(/#(\S+)/g,
                '<a target="_blank" href="https://twitter.com/#!/search?q=%23$1">#$1</a>');

        return string;
    }

    // extrapolate URLs from the identified entities of the tweet
    var entitiesArray = [];

    if (entities.urls)
    {
        for (var i = 0, iLimit = entities.urls.length; i < iLimit; i++)
        {
            var entity = entities.urls[i];

            var html = '<a href="' +
                entity.url +
                '" title="' +
                entity.expanded_url +
                '" target="_blank">' +
                entity.display_url +
                '</a>';

            entitiesArray.push(
            {
                html: html,
                original: entity.url,
                start: entity.indices[0],
                end: entity.indices[1]
            });
        }
    }

    // extrapolate URLs from the identified entities of the tweet
    if (entities.media)
    {
        for (var i = 0, iLimit = entities.media.length; i < iLimit; i++)
        {
            var entity = entities.media[i];

            var html = '<a href="' +
                entity.url +
                '" title="' +
                entity.expanded_url +
                '" target="_blank">' +
                entity.display_url +
                '</a>';

            entitiesArray.push(
            {
                html: html,
                original: entity.url,
                start: entity.indices[0],
                end: entity.indices[1]
            });
        }
    }

    if (entities.user_mentions)
    {
        for (var i = 0, iLimit = entities.user_mentions.length; i < iLimit; i++)
        {
            var entity = entities.user_mentions[i];

            var url = PULSE.CLIENT.TwitterController.getUserAccountUrl(entity.screen_name);

            var html = '<a href="' +
                url +
                '" target="_blank">&#64;' +
                entity.screen_name +
                '</a>';

            entitiesArray.push(
            {
                html: html,
                original: '@' + entity.screen_name,
                start: entity.indices[0],
                end: entity.indices[1]
            });
        }
    }

    if (entities.hashtags)
    {
        for (var i = 0, iLimit = entities.hashtags.length; i < iLimit; i++)
        {
            var entity = entities.hashtags[i];

            var url = PULSE.CLIENT.TwitterController.getSearchTagUrl(entity.text);

            var html = '<a href="' +
                url +
                '" target="_blank">&#35;' +
                entity.text +
                '</a>';

            entitiesArray.push(
            {
                html: html,
                original: '#' + entity.text,
                start: entity.indices[0],
                end: entity.indices[1]
            });
        }
    }

    /**
     * Since the entities are ordered by type, sort the array by their start indice,
     * so they are in the order of appearances
     */
    entitiesArray.sort(function(a, b)
    {
        return a.start - b.start;
    });

    // re-do start/end indices for entities
    // this is a fix accounting for two-byte characters read as ASCII
    for (var i = 0, iLimit = entitiesArray.length; i < iLimit; i++)
    {
        var entity = entitiesArray[i];

        var lowercaseString = string.toLowerCase();
        var lowercaseOriginal = entity.original.toLowerCase();
        entity.start = lowercaseString.search( lowercaseOriginal );
        entity.end = entity.start + entity.original.length;
    }

    /**
     * The new tweet body, with anchor tags rather than just plain text
     * @type {String}
     */
    var newString = '';

    /**
     * Used to determine where in the original tweet body we're last
     * @type {Number}
     */
    var previousIdx = 0;

    /**
     * Go through all entities (if any) and replace their plain text version with
     * their anchor-tag equivalents
     * @type {Number}
     */
    for (var i = 0, iLimit = entitiesArray.length; i < iLimit; i++)
    {
        var entity = entitiesArray[i];
        var length = entity.start - previousIdx;

        newString += string.substr(previousIdx, length);
        newString += entity.html;

        previousIdx = entity.end;
    }

    /**
     * At the end, add what's left of the original string
     */
    newString += string.substr(previousIdx);

    return newString;
};

// pass in the 'created_at' string returned from twitter
// stamp arrives formatted as Tue Apr 07 22:52:51 +0000 2009
PULSE.CLIENT.TwitterController.parseTwitterDate = function(timestamp)
{
    var date = new Date(Date.parse(timestamp));
    if (K.ie)
    {
        date = Date.parse(timestamp.replace(/( \+)/, ' UTC$1'))
    }

    return date;
};

// from http://widgets.twimg.com/j/1/widget.js
var K = function()
{
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();


PULSE.CLIENT.TwitterController.getMediaImg = function(entities, index)
{

    var idx = typeof index === 'undefined' ? 0 : index,
        img;

    for (var type in entities)
    {

        if (entities.hasOwnProperty(type) && type === 'media')
        {

            var media = entities[type],
                entry = media[idx];

            img = entry.media_url;
        }
    }

    return img
}

if ( !PULSE ) { var PULSE = {}; }
if ( !PULSE.CLIENT ) { PULSE.CLIENT = {}; }

//Constructor
PULSE.CLIENT.Util = function()
{};

PULSE.CLIENT.Util.getValueOrBlank = function( value )
{
	if ( value === null )
	{
	    return '';
	}
	else
	{
		return value;
	}
};

PULSE.CLIENT.Util.getValueOrNBSP = function( value )
{
	if ( value === null )
	{
	    return '&nbsp';
	}
	else
	{
		return value;
	}
};

PULSE.CLIENT.Util.CreatePlayerLookup = function( teams, withTeam )
{
	var playerLookup = {};
	for ( var i = 0, ilimit = teams.length; i < ilimit; i++ )
	{
		var team = teams[i];
		var players = team.players;
		if( players )
		{
			for ( var j = 0, jlimit = players.length; j < jlimit; j++ )
			{
				var player = players[j];
				if( withTeam )
				{
					player.teamIds = [ team.team.id ];
				}
				playerLookup[ player.id ] = player;
			}
		}
	}
	return playerLookup;
};

PULSE.CLIENT.Util.CreateSquadToMatchesLookup = function( schedule, tournamentName )
{
	var squadsLookup = {};
	for ( var i = 0, ilimit = schedule.length; i < ilimit; i++ )
	{
		var match = schedule[i],
			team1 = match.team1,
			team2 = match.team2;

		if( team1 && team2
			&& team1.team
			&& team2.team )
		{
			if( !squadsLookup[ team1.team.id ] )
			{
				squadsLookup[ team1.team.id ] = [];
			}
			squadsLookup[ team1.team.id ].push( {
				matchId: match.matchId.name ,
				tournamentName: tournamentName
			} );

			if( !squadsLookup[ team2.team.id ] )
			{
				squadsLookup[ team2.team.id ] = [];
			}
			squadsLookup[ team2.team.id ].push( {
				matchId: match.matchId.name ,
				tournamentName: tournamentName
			} );
		}
	}
	return squadsLookup;
};

PULSE.CLIENT.Util.GetCurrentInnings = function( data )
{
	var innings = null;
	if ( data.innings && data.currentState )
	{
		innings = data.innings[ data.currentState.currentInningsIndex ];
	}
	return innings;
};

PULSE.CLIENT.Util.isInt = function( number )
{
	return typeof(number)=='number'&&parseInt(number)==number;
};

/**
 * Function which determines whether a certain match is upcoming
 * @param match index
 * @return match date OR false
 */
PULSE.CLIENT.Util.isUpcomingMatch = function( index, schedule )
{
	var match = schedule[ index ];
	if( match.matchState === "U" )
	{
		return PULSE.CLIENT.DateUtil.parseDateTime( match.matchDate );
	}
	else
	{
		return false;
	}
}

/**
 * This method retrieves team abbreviation based on the index (0|1) in their original case.
 */
PULSE.CLIENT.Util.GetTeamAbbr = function ( data, index )
{
	var teamObj = data.teams[ index ];
	if ( teamObj )
	{
		return teamObj.team.abbreviation;
	}

	return '';
};

/**
 * Returns an object that wraps batting team related data.
 */
PULSE.CLIENT.Util.GetBattingTeamObject = function( data, inningsIdx )
{
	var teamIdx = data.matchInfo.battingOrder[ inningsIdx ];
	return data.matchInfo.teams[ teamIdx ];
};


// this takes an array of minutes and return the time in format 1h 1m
PULSE.CLIENT.Util.getMatchDuration = function( durations )
{
	if(durations)
	{
		var minutes = 0;
		var formattedTime = '';

		for( var i = 0; i < durations.length; i++ )
		{
			if( !isNaN( parseInt( durations[i] ) ) )
			{
				minutes = minutes + parseInt( durations[i] );
			}
		}

		var hr = Math.floor( minutes / 60 );
		var min = Math.floor( ( minutes % 60 ) );

		if( minutes === 0 )
		{
		    return '';
		}
		else if( hr === 0 && min !== 0 )
		{
		    return min + 'm';
		}
		else if(  hr !== 0 && min === 0 )
		{
		    return hr + 'h';
		}
		else
		{
		    return  hr + 'h ' + min + 'm';
		}
	}
	return '';
};

//this function looks for the given param name in the query string and returns its value
PULSE.CLIENT.Util.getParamValueByName = function( name )
{
	if( name )
	{
		var paramVal = unescape((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);

		return paramVal;
	}

	return 'null';
};

//this function retrieves the params object from a standard jsonCallback where data = [{params:{},success:}]
PULSE.CLIENT.Util.getDataFromJsonCallback = function( data )
{
	var dataObj = data[0];
	if ( dataObj )
	{
		if ( dataObj.success )
		{
			return dataObj.params;
		}
	}

	return null;
};

PULSE.CLIENT.Util.applyActiveClass = function( selector, selectedIndex, className )
{
	$( selector ).removeClass( className );
	$( selector ).eq( selectedIndex ).addClass( className );
};

PULSE.CLIENT.Util.parseUrlParameters = function ()
{
	var url = window.location.href;
	var params = {};
	var idx = url.indexOf( '?' );
	if ( idx > -1 )
	{
		var paramString = url.substr( idx + 1 );
		var paramArray = paramString.split( '&' );
		for ( var i = 0, ilimit = paramArray.length; i < ilimit; i++ )
		{
			var param = paramArray[i];
			var eq = param.indexOf( '=' );

			if ( eq > -1 )
			{
				var key = unescape( param.slice( 0, eq ) );
				var val = param.slice( eq + 1 ).split('#');
				val = unescape( val[0] );
				params[ key ] = val;
			}
			else
			{
				params[ unescape( param ) ] = true;
			}
		}
	}
	return params;
};

PULSE.CLIENT.Util.isEmptyObject = function( obj )
{
	var counter = 0;

	for( var property in obj )
	{
		counter++;
	}

	return counter === 0;
};

// Returns true if given two array are same ( uses jQuery )
PULSE.CLIENT.Util.isSimilarArray = function( arr1, arr2 )
{
	if ( arr1 && arr2 )
	{
		return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
	}

	return false;
};

PULSE.CLIENT.Util.objectFoundById = function ( arr, obj )
{
	for ( var i = 0; i < arr.length; i++ )
	{
		var t = arr[i];
		if ( obj.id === t.id )
		{
			return true;
		}
	}

	return false;
};

PULSE.CLIENT.Util.getFormattedDate = function ( ISO8601DateString, desiredFormat )
{
	var matchDate = PULSE.CLIENT.DateUtil.parseDateTime( ISO8601DateString );
	//console.log(ISO8601DateString + ' ---- ' + matchDate);
	if ( matchDate )
	{
		return matchDate.format( desiredFormat || 'dd mmmm yyyy' );
	}
	return "";
};


PULSE.CLIENT.Util.$hide = function( $element )
{
	$element.css({ position: "absolute", visibility: "hidden", display: "block" });
};

PULSE.CLIENT.Util.$show = function( $element )
{
	$element.css({ position: "", visibility: "", display: "" });
};


/*
String.prototype.trim = function(){return
    (this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, ""))}
*/
String.prototype.startsWith = function(str)
    {return (this.match("^"+str)==str)}

String.prototype.endsWith = function(str)
    {return (this.match(str+"$")==str)}

PULSE.CLIENT.Util.getPlayerNames = function( fullName )
{
	var names 		= fullName.split( ' ' ),
		firstName	= names[0],
		secondName 	= names.slice( 1 ).join( ' ' );

	return {firstName : firstName, secondName : secondName };
};

PULSE.CLIENT.Util.toOrdinal = function( n, $wrap )
{
    var s = ["th","st","nd","rd"],
    	v = n % 100;

    if( typeof $wrap === "undefined" )
    {
    	return n+(s[(v-20)%10]||s[v]||s[0]);
    }
    else
    {
    	return n + $('<div>').append($wrap.text( s[(v-20)%10]||s[v]||s[0] )).html();
    }
};

PULSE.CLIENT.Util.layerIdxInArray = function( array, id )
{
	for( var i = 0; i < array.length; i++ )
	{
		if( array[i].playerId === id )
		{
			return i;
		}
	}
	return -1;
};

PULSE.CLIENT.Util.keyFromValue = function( object, value )
{
	for( var property in object )
	{
		if( object[property] === value )
		{
			return property;
		}
	}
};

/**
 * @deprecated
 * Use commafy instead
 */
PULSE.CLIENT.Util.addCommaForThousands = function( number )
{
	if( number === "0" )
	{
		return "0";
	}

	var output = [],
		remainder = number % 1000,
		result = Math.floor( number / 1000 );

	var normaliseRemainder = function( remainder )
	{
		if( remainder < 100 )
		{
			if( remainder < 10 )
			{
				remainder = "00" + remainder;
			}
			else
			{
				remainder = "0" + remainder;
			}
		}

		return remainder;
	};

	output.push( result ? normaliseRemainder(remainder) : remainder );
	while( result )
	{
		remainder = result % 1000;
		result = Math.floor( result / 1000 );
		output.push( result ? normaliseRemainder(remainder) : remainder );
	}

	return output.reverse().join(',');
};

PULSE.CLIENT.Util.commafy = function ( value )
{
	if ( typeof value === 'undefined' )
	{
		return '';
	}
	return value.toString().replace( /.(?=(?:.{3})+$)/g, '$&,' );
};

PULSE.CLIENT.Util.getArrayFromString = function( string )
{
	if( !string )
	{
		return [];
	}

	var array = string.split(',');
	for( var i = 0; i < array.length; i++ )
	{
		array[i] = $.trim( array[i] );
	}
	return array;
};

PULSE.CLIENT.Util.prepareParams = function( params )
{
	var paramsArray = [];
    $.each( params, function( key, value ) {
    	// only add param if its value exists
    	// if the value's an array, make sure it's not empty
    	if( typeof value !== 'undefined' && ( Object.prototype.toString.call( value ) !== '[object Array]' || value.length ) )
    	{
    		value = [].concat( value ).join(",");
	        var keyValuePair = [ key, encodeURIComponent( value ) ];
	        paramsArray.push( keyValuePair.join("=") );
    	}
    } );

    return "?" + paramsArray.join( "&" );
};

PULSE.CLIENT.Util.getSafeCssClass = function(teamAbbr) {
	return teamAbbr.split('&').join('');
};

PULSE.CLIENT.Util.getKeyValuesFromString = function(string, delimiter)
{
	var parts = string.split(delimiter),
		retObj = {};

	 for (var i=0, length = parts.length; i < length; i++)
	 {
	 	var thisPart = parts[i];
	 	var keyVal = thisPart.split(':');

	 	retObj[keyVal[0]] = keyVal[1];
	 }

	return retObj;
}

PULSE.CLIENT.Util.isScoringID = function(meta)
{
	if (meta.fileName && meta.fileName === 'scoring')
	{
		return true;
	}
};

/**
 * Given a jQuery element, it establishes whether it's empty or not
 * @param  {Object}  $el
 * @return {Boolean} true if the element is empty (or only has spaces), false otherwise
 */
PULSE.CLIENT.Util.isEmpty = function( $el )
{
    return !$.trim( $el.html() );
};

/**
 * Gets the font size of the body; used to do em to px and vice versa conversions
 * @return {Number} the font size, or undefined, if somehow no font size
 */
PULSE.CLIENT.Util.getFontSize = function()
{
	var size = parseFloat( $( 'body' ).css( 'font-size' ) );

	if( !isNaN( size ) )
	{
		return size;
	}
};

/**
 * Converts em to pixels based on the page's font size; it defaults
 * to 16px per em if no font size can be detected
 * @param  {Number} em value in em to be converted
 * @return {Number}    value in pixels
 */
PULSE.CLIENT.Util.emToPx = function( em )
{
	var fontSize = PULSE.CLIENT.Util.getFontSize() || 16;
	return fontSize * em;
};


/**
 * Converts rem to pixels based on the page's font size; it defaults
 * to 16px per rem if no font size can be detected
 * @param  {Number} em value in rem to be converted
 * @return {Number}    value in pixels
 */
PULSE.CLIENT.Util.remToPx = function( rem )
{
   return rem * 10;
};

/**
 * Converts pixels to em based on the page's font size; it defaults
 * to 16px per em if no font size can be detected
 * @param  {Number} px value in em to be converted
 * @return {Number}    value in em
 */
PULSE.CLIENT.Util.pxToEm = function( px )
{
	var fontSize = PULSE.CLIENT.Util.getFontSize() || 16;
	return px / fontSize;
};

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		if (!date) {
			date = new Date;
		}
		else if (date && typeof(date) === "string") {
			var myDateArray = date.split("-");
			date = new Date(myDateArray[0], myDateArray[1]-1, myDateArray[2]);
		}
		else if (Object.prototype.toString.call( date ) !== "[object Date]") {
			date = new Date(date);
		}

		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

//appends pre-loading divs to a container element
//inserts a new image to the container
//default to a backup image if the image doesnt load

(function( $ ){

	$.fn.imgLoader = function( desiredImg, backupImg/*, height, width */ )
	{
		var that = this,
			height = this.height(),
			width = this.width();
		
		//empty the containing element
		this.empty();
		
		//create the preloader 
		var $loadOverlay = 
		$( '<div>' ).addClass( 'loadOverlay' )
		.hide()
		.append(
			$( '<div>' ).addClass( 'loadOverlayContent' )
			.append(
				$( '<div>' ).addClass( 'loadAnimate' )
			)
		);
		
		//create the img element 
		var $img = $( '<img>' );
		
		//append overlay
		$loadOverlay.appendTo( this );

		//append image
		//potentially append once fade in is complete
		$img.appendTo( that );
		
		//fadeIn
		$loadOverlay.fadeIn( 'slow', function()
		{ 
			
			$img
			.attr( 'src', desiredImg )
			.each(function() {
				if( this.complete )
				{
					//if the image was cached, fadeOut straight away
					$loadOverlay.fadeOut();
				}
				else
				{
					$(this).load( function()
					{
						//if the image was not cached, when the image loads, fadeOut
						$(this).data( 'loadAttempted', true );
						$loadOverlay.fadeOut();
					} )
				}
			} )
			.error( function() { if(!$(this).data('loadAttempted')){ $(this).attr( 'src', backupImg ); $loadOverlay.fadeOut(); $(this).data( 'loadAttempted', true ) } } );
		} );
		
		
	};
})( jQuery );
if ( !PULSE )                   { var PULSE = {}; }
if ( !PULSE.CLIENT )            { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    { PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.getAPICaller = function() {
	if( !window.APICaller )
	{
		window.APICaller = new PULSE.CLIENT.CRICKET.APICaller( {
			live: true,
			productionBaseUrl: "//www.iplt20.com/api",
			testBaseUrl: "//testcma.icc-cricket.com/api",
			productionVideoBaseUrl: "//iplt20.com/apiVideo",
			testVideoBaseUrl: "//testcma2.iplt20.com/apiVideo",
			testFeedUrl: '//testcma.icc-cricket.com/feeds',
			playerRankingsUrl : '//ec2-23-22-42-190.compute-1.amazonaws.com:8080/prapi/'
		} );
	}
	return window.APICaller;
};

PULSE.CLIENT.CRICKET.APICaller = function( config ) {
	this.config = config;
	this.live	= config.live;
	this.APIs 	= {
		production: config.productionBaseUrl,
		test: config.testBaseUrl,
		productionVideo: config.productionVideoBaseUrl,
		testVideo: config.testVideoBaseUrl,
		testFeed: config.testFeedUrl,
		playerRankings: config.playerRankingsUrl
	};

	// creates the DM instance if it doesn't already exist
	if( window.datamgr === undefined ) {
		window.datamgr = new PULSE.CLIENT.JqueryJSONPDataManager();
	}

	this.dm = window.datamgr;
};

PULSE.CLIENT.CRICKET.APICaller.prototype.makeFeedUrl = function( type, params ) {
	// Establish the feed depending on whether the API's looking at live or test data
	var feed 	= this.getFeedBaseUrl( type );
	// Prepare the call parameters such as limit, asc/desc and establish callback
	params 	= this.prepareParams( $.extend( params, { callback: 'on' + type } ) );

	// console.log( feed + "/get" + type + params );
	return feed + "/get" + type + params;
};

PULSE.CLIENT.CRICKET.APICaller.prototype.getFeedBaseUrl = function( type ) {
	if( type === "Videos" )
	{
		return !this.live ? this.APIs.testVideo : this.APIs.productionVideo;
	}
	return !this.live ? this.APIs.test : this.APIs.production;
};

/**
 * 	Request videos feed
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - can be order, limit, fields etc.
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getVideos = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'Videos', params );
	this.dm.addFeed( feedId, feedUrl, 600, 'onVideos', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};

/**
 * 	Request photo albums feed
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - can be order, limit, fields etc.
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getPhotoAlbums = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'ImageGalleries', $.extend( params, { withImages: 'yes', imageLimit: 1 } ) );
	this.dm.addFeed( feedId, feedUrl, 600, 'onImageGalleries', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};

/**
 * 	Request photos within an album
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - MUST be albumId
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getPhotos = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'Images', params );
	this.dm.addFeed( feedId, feedUrl, 600, 'onImages', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


PULSE.CLIENT.CRICKET.APICaller.prototype.getPhotosByAlbumName = function(feedId, target, params, start) {

	var feedUrl = this.APIs.testFeed + '/' + 'getPhotosByAlbumName/';

	for (var type in params) {
		if (params.hasOwnProperty(type)) {
			feedUrl = feedUrl + type + '/' + params[type] + '/';
		}
	}

	feedUrl = feedUrl.substring(0, feedUrl.length - 1);

	this.dm.addFeed( feedId, feedUrl, 600, params.callback, [].concat( target ));
	if ( start )
	{
		this.dm.start( feedUrl );
	}
};

/**
 * 	Request news feed
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - can be order, limit, fields etc.
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getNews = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'News', params );
	this.dm.addFeed( feedId, feedUrl, 600, 'onNews', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};

/**
 * 	Request news item, given an id
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - MUST be id!
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getNewsItem = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'News', $.extend( params, { withImages: 'yes', imageLimit: 1 } ) );
	this.dm.addFeed( feedId, feedUrl, 600, 'onNews', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


/**
 * 	Request venues list
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - can be order, limit, fields etc.
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getVenuesList = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'Venues', params );
	this.dm.addFeed( feedId, feedUrl, 600, 'onVenues', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


/**
 * 	Request about pages list
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - can be order, limit, fields etc.
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getAboutPagesList = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'AboutPages', params );
	this.dm.addFeed( feedId, feedUrl, 600, 'onAboutPages', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


/**
 * 	Request about page
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - MUST be pageId
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getAboutPage = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'AboutPageArticles', params );
	this.dm.addFeed( feedId, feedUrl, 600, 'onAboutPageArticles', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


/**
 * 	Request Player Data
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - MUST be id
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getPlayer = function( feedId, target, params, start ) {
	var feedUrl = this.makeFeedUrl( 'PlayerData', params );
	this.dm.addFeed( feedId, feedUrl, 600, 'onPlayerData', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


/**
 * 	Request Rankings Data
 * 	@params
 * 		feedId - string used by the onData method to identify the feed
 * 		target - which onData methods to call
 * 		params - MUST be id
 * 		start  - whether the feed starts itself or not
 */
PULSE.CLIENT.CRICKET.APICaller.prototype.getRankings = function( feedId, target, params, start ) {
    var feedUrl = this.makeFeedUrl('Rankings', { callback : 'onRankings' });
	this.dm.addFeed( feedId, feedUrl, 600, 'onRankings', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


PULSE.CLIENT.CRICKET.APICaller.prototype.getPlayerRankings = function(feed, feedId, target, params, start ) {
	var feedUrl = this.APIs.test + feed;
	this.dm.addFeed( feedId, feedUrl, 600, 'onPlayerRankings', [].concat( target ) );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


PULSE.CLIENT.CRICKET.APICaller.prototype.prepareParams = function( params )
{
	var paramsArray = [];
    $.each( params, function( key, value ) {
    	value = [].concat( value ).join(",");
    	var keyValuePair = [ key, value ];
    	paramsArray.push( keyValuePair.join("=") );
    } );

    return "?" + paramsArray.join( "&" );
};


PULSE.CLIENT.CRICKET.APICaller.prototype.getRankingsPlayersList = function( feedId, target, start )
{
	var feedUrl = this.APIs.playerRankings + 'players' + '?callback=onPlayers';
	this.dm.addFeed( feedId, feedUrl, 600, 'onPlayers', [].concat( target ) );

	if ( start )
	{
		this.dm.start( feedUrl );
	}
};

PULSE.CLIENT.CRICKET.APICaller.prototype.getPlayerRankingsById = function( playerId, scope, feedId, target, start )
{
	var feedUrl = this.APIs.playerRankings + 'data?scope=' + scope + '&pid=' + playerId + '&callback=onPlayerRankings';
	this.dm.addFeed( feedId, feedUrl, 600, 'onPlayerRankings', [].concat( target ));

	if ( start )
	{
		this.dm.start( feedUrl );
	}
};

if( !PULSE ) PULSE = {};
if( !PULSE.CLIENT ) PULSE.CLIENT = {};
if( !PULSE.CLIENT.FacebookController ) PULSE.CLIENT.FacebookController = {};

/*
 * Creates a new window for a specific fb share;
 *
 * @param  {String} page 	- page u want to share
 * @param  {Number} w      	- optional; the width of the pop-up window created
 * @param  {Number} h      	- optional; the height of the pop-up window created
 */
PULSE.CLIENT.FacebookController.publishEvent = function( page, w, h )
{
    var FC = PULSE.CLIENT.FacebookController,
        width = w || 575,
        height = h || 400,
        left = ( $( window ).width() - width ) / 2,
        top = ( $( window ).height() - height ) / 2,
        fbUrl = FC.getShareUrl( page ),
        options = 'status=1' +
                  ',width=' + width +
                  ',height=' + height +
                  ',top=' + top +
                  ',left=' + left;

    window.open( fbUrl, 'facebook', options );
};

PULSE.CLIENT.FacebookController.getShareUrl = function( temp_page )
{
    return "https://www.facebook.com/sharer/sharer.php?u=" + temp_page;
  	// <!-- for Google -->
    // <meta name="description" content="" />
    // <meta name="keywords" content="" />

    // <meta name="author" content="" />
    // <meta name="copyright" content="" />
    // <meta name="application-name" content="" />

    // <!-- for Facebook -->
    // <meta property="og:title" content="" />
    // <meta property="og:type" content="article" />
    // <meta property="og:image" content="" />
    // <meta property="og:url" content="" />
    // <meta property="og:description" content="" />

    // <!-- for Twitter -->
    // <meta name="twitter:card" content="summary" />
    // <meta name="twitter:title" content="" />
    // <meta name="twitter:description" content="" />
    // <meta name="twitter:image" content="" />
};

if( !PULSE ) PULSE = {};
if( !PULSE.CLIENT ) PULSE.CLIENT = {};
if( !PULSE.CLIENT.GooglePlusController ) PULSE.CLIENT.GooglePlusController = {};

PULSE.CLIENT.GooglePlusController.publishEvent = function( page, w, h )
{
  var GC = PULSE.CLIENT.GooglePlusController,
        width = w || 575,
        height = h || 400,
        left = ( $( window ).width() - width ) / 2,
        top = ( $( window ).height() - height ) / 2,
        gplusUrl = GC.getShareUrl( page ),
        options = 'status=1' +
                  ',width=' + width +
                  ',height=' + height +
                  ',top=' + top +
                  ',left=' + left;

    window.open( gplusUrl, 'google plus', options );
};

PULSE.CLIENT.GooglePlusController.getShareUrl = function( tmp_page )
{
    return "https://plus.google.com/share?url=" + tmp_page;
    //language
};
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.STATS) 	{ PULSE.CLIENT.CRICKET.STATS = {}; }

PULSE.CLIENT.CRICKET.STATS.supportedStats = {
		batting: [ 'a', 'r', '4s', '6s', 'no', '50s', '100s', 'inns', 'sr' ],
		bowling: [ 'a', 'e', 'r', 'w', 'd', 'sr', 'inns' ]
};

PULSE.CLIENT.CRICKET.STATS.averages = {
		batting: [ 'a', 'sr' ],
		bowling: [ 'a', 'e', 'sr' ]
};

PULSE.CLIENT.CRICKET.STATS.inverseProportional = {
		batting: [],
		bowling: [ 'e', 'r', 'sr' ]
};

/**
 *	Returns the percentages of stats in relation to each other
 */
PULSE.CLIENT.CRICKET.STATS.getRelativePercentages = function( stat1, stat2 )
{
	stat1 = stat1 === '-' ? 0 : parseInt( stat1 ),
	stat2 = stat2 === '-' ? 0 : parseInt( stat2 );

	if (stat1 === 0 && stat2 === 0) {
	  return { stat1: 50, stat2: 50 };
	}

	var total 	 = stat1 + stat2,
		percent1 = ( stat1 * 100 ) / total,
		percent2 = ( stat2 * 100 ) / total;

	return { stat1: percent1, stat2: percent2 };
};

/**
 *	Returns the percentage of a stat in relation to a max and a min
 */
PULSE.CLIENT.CRICKET.STATS.getPercentageFromBoundaries = function( stat1, stat2, max, min )
{
	stat1 = stat1 === '-' ? 0 : parseInt( stat1 ),
	stat2 = stat2 === '-' ? 0 : parseInt( stat2 );

	if( min )
	{
		stat1 = stat1 - min;
		stat2 = stat2 - min;
	}
	else
	{
		min = 0;
	}
	max = max ? max - min : ( Math.max( stat1, stat2 ) + ( Math.max( stat1, stat2 ) / 10 ) );

	var percent1 = ( stat1 * 100 ) / max,
		percent2 = ( stat2 * 100 ) / max;

	return { stat1: percent1, stat2: percent2 };
};


PULSE.CLIENT.CRICKET.STATS.getAverageFromMatches = function(stat1, stat2)
{

	stat1.s = stat1.s == '-' ? 0 : parseInt( stat1.s );
	stat2.s = stat2.s == '-' ? 0 : parseInt( stat2.s );

	var arr = [stat1, stat2],
		results = [];

	for (var i=0; i < arr.length; i++)
	{
		var stat = arr[i],
			ave = Math.round(stat.s / stat.m);

		results.push(ave);
	}

	return results;
};














if ( !PULSE )                   { var PULSE = {}; }
if ( !PULSE.CLIENT )            { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.Tracking )   { PULSE.CLIENT.Tracking = {}; }

PULSE.CLIENT.Tracking.pageview = function( page, title )
{
	if( window.ga )
	{
		ga( 'send', 'pageview', { 
			page:  page, 
			title: title 
		} );
	}
	else
	{
		console.log( 'Track: PAGEVIEW ' + page );
	}
};

PULSE.CLIENT.Tracking.event = function( category, action, label )
{
	if( window.ga )
	{
		ga( 'send', 'event', category, action, label );
	}
	else
	{
		console.log( 'Track: EVENT ' + category + ' | ' + action + ( label ? ' | ' + label : '' ) );
	}
};
if ( !PULSE )                   { var PULSE = {}; }
if ( !PULSE.CLIENT )            { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    { PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.getUrlGenerator = function( config )
{
	if( config )
	{
		return new PULSE.CLIENT.CRICKET.UrlGenerator( config );
	}
	if( window.urlGenerator === undefined )
	{
		var metadata = PULSE.CLIENT.CRICKET.Metadata;
		window.urlGenerator = new PULSE.CLIENT.CRICKET.UrlGenerator( metadata[0] );
	}

	return window.urlGenerator;
};

PULSE.CLIENT.CRICKET.UrlGenerator = function( config )
{
	this.config = config;
	this.production = true; // default to production data, just in case
	this.config.prodPlatform  = this.config.prodPlatform  || this.getProdDataRoot();
	this.config.testPlatform  = this.config.testPlatform  || this.getTestDataRoot();
	this.playerImageUrl = this.config.playerImageUrl || "//iplstatic.s3.amazonaws.com/players/";
	this.canaryDataUrl = this.config.canaryDataUrl || "//datacdn.iplt20.com/dynamic/data/canary/";

	var params = PULSE.CLIENT.Util.parseUrlParameters();
	this.production = params[ "test" ] === 'true' ? false : true;

	this.statsURLs = {
		'MostRuns'				: 'most-runs',
		'MostSixes'				: 'most-sixes',
		'MostFours'				: 'most-fours',
		'HighestScores'			: 'highest-scores',
		'BestBattingStrikeRate'	: 'highest-strikerate',

		'MostWickets'			: 'most-wickets',
		'BestBowling'			: 'best-bowling-figures',
		'BowlingAverage'		: 'best-averages',
		'BestEconomy'			: 'best-economy',

		'AllFairplay'			: 'all-fairplay',
        'PlayerPoints'          : 'player-points',
        'EmergingPlayerPoints' 	: 'emerging-players'
	};

	this.updateCoreDataUrl();
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getProdDataRoot = function()
{
	if( this.config.isGroup )
	{
		return "//datacdn.iplt20.com/dynamic/data/core/cricket/TournamentGroups/";
	}
	else
	{
		return "//datacdn.iplt20.com/dynamic/data/core/cricket/2012/";
		// return "http://datacdn.iplt20.com/dynamic/data/core/cricket/2012/";
	}
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getTestDataRoot = function()
{
	if( this.config.isGroup )
	{
		return "//datacdn.iplt20.com/dynamic/data/core/cricket/TournamentGroups/";
	}
	else
	{
		// return "http://datacdn.iplt20.com/test/data/core/cricket/2012-alina/";
		return "//datacdn.iplt20.com/dynamic/data/core/cricket/2012/";
	}
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.setProduction = function( bool )
{
	this.production = bool;
	this.updateCoreDataUrl();
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.updateCoreDataUrl = function()
{
	this.config.coreDataUrl = this.production ? this.config.prodPlatform : ( this.config.customDataUrl || this.config.testPlatform );
};

/**
 *	Site navigation
 */
PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getMatchURL = function( matchId, tab )
{
	if( !matchId )
	{
		return;
	}

	var array = matchId.split( '-' );
	var string = array[array.length-1];
	var number = parseInt( string, 10 );
	if( !isNaN( number ) )
	{
		if( this.config.supportsMC )
		{
			return "/match/" + this.config.year + "/" + number + ( tab ? '?tab=' + tab : '' );
		}
		else
		{
			return "/archive/" + this.config.year + "/" + number;
		}
	}
};

// team page URL
PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getTeamURL = function ( teamId, teamFullName)
{
	if( !teamId || !teamFullName )
	{
		return;
	}

	if( this.config.teams && this.config.teams[ teamId ] )
	{
		teamFullName = teamFullName.toLowerCase();
		if( !this.config.urlRoot )
		{
			return "/teams/" + teamFullName.replace(/\s/g, "-").split('&').join('and') + "/";
		}
		else
		{
			return "/" + this.config.urlRoot + "/teams/" + teamFullName.replace(/\s/g, "-").split('&').join('and') + "/";
		}
	}
};

// player page URL
PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getPlayerURL = function( playerId, playerFullName, teamId, teamFullName )
{
	if( !this.config.supportsPlayerLinks || !teamId || !teamFullName || !playerId || !playerFullName )
	{
		return;
	}

	var teamURL = this.getTeamURL( teamId, teamFullName);

	if( teamURL )
	{
		return teamURL + 'squad/' + playerId + "/" + playerFullName.replace(/\s/g, "-") + "/";
	}
};


PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getVenueUrl = function ( venueId, venueName)
{
	if( !venueId || !venueName )
	{
		return;
	}


	return "/" + this.config.urlRoot + "/venues/" + venueId + "/" + venueName.replace(/\s/g, "-").toLowerCase() + "/overview";
};



// full stats of type URL
PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getStatsUrlFor = function( type, year )
{
	if( !type || !this.statsURLs[type] ) {
		return;
	}

	return "/stats/" + ( year || this.config.year || 'all-time' ) + "/" + this.statsURLs[type];
};


/**
 *	Resources
 */
PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeImgUrl = function( url )
{
	return this.config.staticUrl + url;
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getPlayerImg = function ( playerId, size, extension )
{
	return this.playerImageUrl + size + "/" + playerId + ( "." + ( extension || "png" ) );
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getShadowPlayerImg = function( imgSize )
{
	return this.getPlayerImg( 'Photo-Missing', imgSize );
}

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.setShadowPlayerImg = function( imgSize, $imageWrapper )
{
	var shadowImage = this.getShadowPlayerImg( imgSize );
	$( $imageWrapper ).imgLoader( shadowImage, shadowImage );
}

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.setPlayerImageLoader = function( playerId, imgSize, $imageWrapper, imgExt )
{
	var playerImg	= this.getPlayerImg( playerId, imgSize, imgExt ),
		noImage		= this.getPlayerImg( 'Photo-Missing', imgSize );

	$( $imageWrapper ).imgLoader( playerImg, noImage );
};

/**
 * 	News articles and other Hit-API-related
 */
PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getArticleURL = function( articleId, articleTitle, year )
{
	if( !articleId || !articleTitle )
	{
		return;
	}

	if( !year )
	{
		year = this.config.year;
	}
	articleTitle.toLowerCase().replace(/\s/g, "-").split('&').join('and');
	return "/news/" + year + "/features/" + articleId + "/" + articleTitle;
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getVideoURL = function( videoId, videoTitle )
{
	if( !videoId || !videoTitle )
	{
		return;
	}

	videoTitle.toLowerCase().replace(/\s/g, "-").split('&').join('and');
	return "/videos/media/id/" + videoId;
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.getPhotoAlbumURL = function( albumId, albumTitle )
{
	if( !albumId || !albumTitle )
	{
		return;
	}

	albumTitle.toLowerCase().replace(/\s/g, "-").split('&').join('and');
	return "/photos/" + albumId + "/" + albumTitle;
};


/**
 *	Data urls
 */

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeDataUrl = function ( fileName, matchId )
{
	return this.config.coreDataUrl + this.config.tournamentName + "/" + ( matchId ? matchId + '/' : '' ) + fileName + '.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeICCDataUrl = function ( fileName )
{
	return this.config.iccDataUrl + fileName + '.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makePollDataUrl = function ( customer )
{
	if( this.config.customerDataUrl )
	{
		return this.config.customerDataUrl + 'poll.js';
	}
	else
	{
		var year = this.config.year || new Date().getFullYear();
		return '//datacdn.iplt20.com/dynamic/data/' + ( customer || 'bcci' ) + '/' + year + '/' + this.config.tournamentName + '/poll.js';
	}
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeCustomTweetMessageUrl = function ( fileName )
{
	return this.config.customerDataUrl + ( fileName || 'customTweet' ) + '.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeTwitterDataUrl = function ( fileName )
{
	return this.canaryDataUrl + fileName + ".js";
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeInstagramAccountUrl = function( fileName )
{
	return '//datacdn.iplt20.com/dynamic/data/bcci/instagram/' + fileName + '/media.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeAbridgedStatsDataUrl = function( fileName )
{
	return this.config.coreDataUrl + this.config.tournamentName + '/stats/player/abridged/' + fileName + '.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeFullStatsDataUrl = function( fileName )
{
	return this.config.coreDataUrl + this.config.tournamentName + '/stats/player/full/' + fileName + '.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeTeamTournamentStatsDataUrl = function( teamId )
{
	return this.config.coreDataUrl + this.config.tournamentName + '/stats/team/' + teamId + '_tournamentStats.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeTeamCareerStatsDataUrl = function( teamId )
{
	return this.config.coreDataUrl + this.config.tournamentName + '/stats/team/' + teamId + '_teamCareerStats.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makePlayerCareerStatsDataUrl = function( playerId )
{
	return '//datacdn.iplt20.com/dynamic/data/core/cricket/careerStats/' + playerId + '_careerStats.js';
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeCustomerDataUrl = function ( fileName )
{
	return this.config.customerDataUrl + fileName + '.js';
};

/**
 * Get match related videos using the Brightcove API
 */
PULSE.CLIENT.CRICKET.UrlGenerator.prototype.makeMatchVideosUrl = function( feedId, params )
{
    if( params )
    {
    	if (!window.location.origin) {
		  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
		}
        //var baseUrl = window.location.origin + '/apiVideo/getVideos',
         var baseUrl = '//iplt20.com/apiVideo/getVideos',
            feedUrl = baseUrl + this.prepareParams( $.extend( params, { callback: 'onMatchVideos' } ) );

        return feedUrl;
    }
};

PULSE.CLIENT.CRICKET.UrlGenerator.prototype.prepareParams = function( params )
{
    var paramsArray = [];
    $.each( params, function( key, value ) {
        value = [].concat( value ).join(",");
        var keyValuePair = [ key, value ];
        paramsArray.push( keyValuePair.join("=") );
    } );

    return "?" + paramsArray.join( "&" );
};


// notifies all subscribed components of a certain event
PULSE.CLIENT.notify = function( messageType, params )
{
	$('body').trigger( messageType, params );
};

// retrieves (or creates if it doesn't exist) the data manager object instance
PULSE.CLIENT.getDataManager = function()
{
	if( window.datamgr === undefined ) {
		window.datamgr = new PULSE.CLIENT.JqueryJSONPDataManager();
	}

	return window.datamgr;
};

PULSE.CLIENT.isTest = function()
{
	try
	{
		this.domain = document.domain;
	}
	catch ( err )
	{
		this.domain = 'iplt20.com';
	}

	if( this.domain.search('iplt20.com') > -1 && this.domain.search('testcma') === -1 )
	{
		return false;
	}
	return true;
};

PULSE.CLIENT.pluralise = function( number, singularString, pluralString )
{
	if( number == 1 )
	{
		return singularString;
	}
	else
	{
		return pluralString || singularString + "s";
	}
};

/**
 * Method to take a team abbreviation and work out whether it needs sanitising.
 * Mantis issue #0003238
 * JIRA issue number BWP-1
 */
PULSE.CLIENT.getUserFacingAbbr = function( abbr )
{
	var result = abbr;
    return result;
};

PULSE.CLIENT.getBallClass = function( ballText )
{
	switch( ballText )
	{
	case "6":
		return 'six';
		break;
	case "4":
		return 'four';
		break;
	case "W":
		return 'wicket';
		break;
	default:
		// find any W (except when they're a wide - Wd)
		if( ballText.match(/W(?!d)/) )
		{
			return 'wicket';
		}
		return '';
		break;
	}
};

PULSE.CLIENT.getMatchInfoFromUrl = function()
{
	var url 		= window.location.href;
	var urlSplit	= url.split("/");

	if( urlSplit.length > 1 )
	{
		var matchNumber = urlSplit[ urlSplit.length - 1 ];
		var tournament 	= urlSplit[ urlSplit.length - 2 ];
		var number 		= parseInt( matchNumber, 10 );

		var matchId = tournament + '-' + ( number < 10 ? '0' + number : number );

		return {
			matchId: matchId,
			tournamentName: tournament
		};
	}

	return {
		matchId: undefined,
		tournamentName: undefined
	};
};

PULSE.CLIENT.getFormattedTimeZoneDate = function( date, dateFormatString, timezoneOffset )
{
    var offsetDate = new Date( date.getTime() + ( 3600000 * timezoneOffset ) ),
        utcDate = PULSE.CLIENT.DateUtil.getUtcDateObject( offsetDate );

    if( utcDate )
    {
        dateFormatString = dateFormatString || 'dddd mmmm dS yyyy';
        var formattedDateString = dateFormat( utcDate, dateFormatString + '| HH:MM | Z' ).split('|')[0];
        return formattedDateString;
    }
};

/*globals PULSE, PULSE.app, PULSE.app.common */
( function( app, common ) {

    common.content = {};

    /**
     * Works out whether the content item is tagged with the given tag label
     * @param {ContentResponse} contentItem
     * @param {String} tagLabel
     * @return {Boolean}
     */
    common.content.hasTag = function( contentItem, tagLabel ) {
        if ( contentItem.tags.length > 0 ) {
            contentItem.tags.forEach( function( item, key ) {
                if ( item.label !== undefined && item.label == tagLabel ) {
                    return true;
                }
            } );
        }
        return false;
    };

    /**
     * Pre-processing function before using a content response in an underscore template
     * @param {ContentResponse} contentItem The API content response
     * @param {VariantSpecification} variantSpec Spec on the required variants for the template
     * @param {contentType} restriction Playlist restricted content type, if any
     * @return {ContentResponse} (extended)
     */
    common.content.getContentModel = function( contentItem, variantSpec, restriction ) {
        if( contentItem.type !== 'photo' ) {
            contentItem.leadMediaUrls = getLeadMediaUrls( contentItem, variantSpec );
            contentItem.link = common.generateUrl( contentItem.type, contentItem, restriction );
        }
        else {
            contentItem.variantUrls = common.content.getVariantUrls( contentItem.variants, variantSpec );
            if( contentItem.playlist ) {
                contentItem.link = common.generateUrl( contentItem.playlist.type, contentItem.playlist, "PHOTO" );
                contentItem.link += common.generateUrl( contentItem.type, contentItem, restriction );
            }
            else {
                contentItem.link = '';
            }
            var desiredTags = [];
            for( var name in variantSpec ) {
                desiredTags.push( variantSpec[ name ] );
            }
            contentItem.isPortrait = common.image.isPortrait( contentItem, desiredTags );
        }

        // special case for featured articles to go to a different URL
        // if( contentItem.type === 'text' && common.content.hasTag( contentItem, 'Featured' ) ) {
        //     contentItem.link = common.generateUrl( 'text', contentItem, 'featured' );
        //     contentItem.isFeatured = true;
        // }
        return contentItem;
    };

    /**
     * @typedef {Object} VariantSpecification
     * @property {TagLabel} tagLabel
     * @property {Number} preferredWidth
     * @property {Number} preferredHeight
     */

    /**
     * Given a map of variable names (as properties) and variant tags, it will try to retrieve the URLs for the matching variants from the given variants array
     * @param {Array<Variant>} variants
     * @param {VariantSpecification} spec (please note preferredHeight and preferredWidth are not yet supported by the image helper)
     * @return {Object}
     */
    common.content.getVariantUrls = function( variants, spec ) {
        var urls = {}, property;
        if( variants.length ) {
            for( property in spec ) {
                var variant = common.image.getVariantByTag( variants, spec[ property ] );
                if( variant ) {
                    urls[ property ] = variant.url;
                }
            }
        }
        return urls;
    };

    /**
     * Retrieves the array of photo variants of a content item
     * @param {ContentResponse} contentItem
     * @return {Array<Variant>}
     */
    common.content.getVariants = function( contentItem ) {
        var variants = [];
        var leadMedia = contentItem.leadMedia || contentItem.coverItem || contentItem.thumbnail;
        if ( leadMedia ) {
            if ( leadMedia.type === 'video' ) {
                if (leadMedia.thumbnail !== null) {
                    if ( leadMedia.thumbnail.variants !== null && leadMedia.thumbnail.variants.length > 0 ) {
                        return leadMedia.thumbnail.variants;
                    }
                }
            }
            else {
                if ( leadMedia.variants !== null || leadMedia.variants.length > 0 ) {
                    return leadMedia.variants;
                }
            }
        }
        return variants;
    };

    //////////////////////////////
    // Private
    //////

    /**
     * @private
     * Helper for retrieving the correct variants for any item's lead media
     * @param {ContentResponse} contentItem
     * @param {VariantSpecification} variantSpec
     * @return {Object}
     */
    var getLeadMediaUrls = function( contentItem, variantSpec ) {
        var variants = common.content.getVariants( contentItem );
        var leadMediaUrls = common.content.getVariantUrls( variants, variantSpec );

        // special case for media items with no variants; use imageUrl if available
        if( variants.length === 0 || Object.keys( leadMediaUrls ).length === 0 ) {
            for( var property in variantSpec ) {
                leadMediaUrls[ property ] = contentItem.imageUrl;
            }
        }
        return leadMediaUrls;
    };

}( PULSE.app, PULSE.app.common ) );

/**
 * Coupled set of date string and moment object
 * @typedef {object} momentCouple
 * @property {moment|Date} date the moment Object
 * @property {string} string the generated string
 * @property {string} std locale independent date string ( DD-MM-YYYY )
 */

( function( common, app, core, moment ) {

	var oneDay = ( ( 60 * 60 ) * 24 ) * 1000;

	/**
	 * Use momentJS to get a locale-observant string with a specified format
	 * will return moment object as well as string
	 *
	 * @param start
	 * @param end
	 * @param format
	 * @param {boolean} inclusive if true will include start  day in response
	 * @returns {momentCouple[]} array of days with moment day and string included in each index position
	 */
	common.momentGetDaysFromRange = function( start, end, format, inclusive ) {

		var startAsDate = start instanceof Date ? start : new Date( start );
		var endAsDate = end instanceof Date ? end : new Date( end );

		var startTime = startAsDate.getTime();
		var endTime = endAsDate.getTime();

		var days = [];

		var current = startTime;

		if( inclusive && ( startAsDate.toLocaleDateString() !== endAsDate.toLocaleDateString() ) ) {

			days.push( {
				date: startAsDate,
				string: moment && format ? moment( startAsDate ).locale( app.language ).format( format ) : startAsDate.toLocaleDateString(),
				std: moment ? moment( startAsDate ).format( "DD-MM-YYYY" ) : false
			} )
		}

		// add a day until the date reaches the end date
		do{

			current = current + oneDay;
			var asDate = new Date( current );

			days.push( {
				date: asDate,
				string: moment && format ? moment( asDate ).locale( app.language ).format( format ) : asDate.toLocaleDateString(),
				std: moment ? moment( asDate ).format( "DD-MM-YYYY" ) : false
			} )

		} while ( current < endAsDate.getTime() );

		return days;

	}

    /**
	 * get the time from a date
	 *
	 * @param {String} date date string
	 */
	common.getTime = function( date ) {

        if (date) {
            var obj = typeof date === 'string' ? new Date(date) : date;
            var hours   = obj.getHours();
            var minutes = obj.getMinutes();
            
            if (hours   < 10) { hours   = "0" + hours; }
            if (minutes < 10) { minutes = "0" + minutes; }

            return hours + ':' + minutes;
        }

        return null;
	};

	/**
	 * Get the time since a specific date
	 *
	 * @param {Date} date Date to be calculated from now
	 * @param {Object} Optional format for output
	 * @returns {String} output Amount of time since date
	 */
	common.getSinceString = function( date, format )
	{
	    if( date )
	    {
	        var now = new Date();

	        var diff = Math.floor( ( now - date ) / 1000 );

	        if( diff <= 0 )
	        {
	            return format ? format.justNow : "just now";
	        }
	        else if( diff < 60 )
	        {
	            var output = Math.round( diff );
	            return output + ( format ? format.seconds : "s" );
	        }
	        else if( diff < 60 * 60 )
	        {
	            var output = Math.round( diff / 60 );
	            return output + ( format ? format.minutes : "m" );
	        }
	        else if( diff < 60 * 60 * 24 )
	        {
	            var output = Math.round( diff / ( 60 * 60 ) );
	            return output + ( format ? format.hours : "h" );
	        }
	        else
	        {
	            var output = Math.round( diff / ( 60 * 60 * 24 ) );
	            return output + ( format ? format.days : "d" );
	        }
	    }
	};

	/**
	 * Get duration in time format mm:ss
	 *
	 * @param {Int} number of seconds
	 * @returns {String} output duration in format mm:ss
	 */
	common.durationToTime = function( duration ) {
        var sec_num = parseInt(duration, 10);

        if (sec_num) {
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) { hours   = "0" + hours; }
            if (minutes < 10) { minutes = "0" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }

            var minSec = minutes + ':' + seconds;

            return hours > 0 ? hours + ':' + minSec : minSec;
        }

        return '00:00';
    };

} )( PULSE.app.common, PULSE.app, PULSE.core, moment );

( function( common, core ) {

    common.event = common.event || {};

    /**
     * Generate a new custom event and fire it on the given element
     *
     * @param {String}     name    the name of the event
     * @param {Object}     data    the data to pass to the event
     * @param {DOMElement} element the element where we should fire the event
     * @param {Object}     options Event-specific options: blubbles, cancelable etc.
     */
    common.event.dispatch = function( name, data, element, options ) {
        options = core.object.extend( {
            bubbles: true,
            cancelable: true
        }, options || {} );

        ( element || document.body ).dispatchEvent( new CustomEvent( name, {
            detail: data || {},
            bubbles: options.bubbles,
            cancelable: options.cancelable
        } ) );
    };

} )( PULSE.app.common, PULSE.core );

(function( app, common ){

    common.image = {};

    var images = document.querySelectorAll('.preload-img'),
        i, highRes;

    /**
     * Will return the appropriate variant from a photo, given a tag
     * @param {Array<Variant>} variants
     * @param {String} tagLabel
     * @return {Variant}
     */
    common.image.getVariantByTag = function( variants, tagLabel, preferredWidth, preferredHeight ) {

        for ( var i = 0; i < variants.length; i++ ) {
			if ( variants[ i ].tag.label === tagLabel ) {
                return variants[ i ];
            }
		}
        return null;
    };

    common.image.setPlayerImageLoader = function( playerId, imgSize, imageWrapper, imgExtension, matchType ) {
        var main = common.image.getPlayerImg( playerId, imgSize, imgExtension, matchType ),
            missing = common.image.getDefaultPlayerImg( imgSize ),
            profileImg = new Image();

        profileImg.onload = function() {
            imageWrapper.setAttribute( 'src', main );
        };

        profileImg.onerror = function() {
            if ( ! imageWrapper.getAttribute( 'data-error' ) ) {
                imageWrapper.setAttribute( 'data-error', true );
                imageWrapper.setAttribute( 'src', missing );
            }
        };

        profileImg.setAttribute( 'src', main );
    };

    common.image.getDefaultPlayerImg = function( imgSize ) {
		return common.image.getPlayerImg( 'Photo-Missing', imgSize );
	};

    common.image.getPlayerImg = function ( playerId, size, extension ) {
        return app.environment.playerImagePath + size + "/" + playerId + ( "." + ( extension || "png" ) );
    };

    common.image.isPortrait = function( photo, variantTags ) {
        for( var i = 0, iLimit = photo.variants.length; i < iLimit; i++ ) {
            var variant = photo.variants[ i ];
            if( variantTags.indexOf( variant.tag.label ) > -1 ) {
                if( variant.height > variant.width ) {
                    return true;
                }
            }
        }
        return false;
    };

}( PULSE.app, PULSE.app.common ));

/*globals PULSE, PULSE.app, PULSE.app.common */

( function( core, app, common ) {

    /**
     * creates content path based on the type and parameters
     * @param {String} type Type of content
     * @param {Object} params
     * @returns {String} url Content url
     */
    common.createContentPath = function( type, params, lang, id ) {
        type = type ? type.toLowerCase() + '/' : '';
        var url = app.environment.api + 'content/' + app.account + '/' + type + ( lang ? lang : app.defaultLanguage ) + '/' + ( id ? id : '' );

        if( params ) {
            url += '?' + core.url.buildQueryString( params );
        }

        return url;
    };
	
	/**
	 * creates canary stream path
	 * @param {String} feedName Name of feed
	 * @param {String} type Type of feed
	 * @returns {String} url Canary url
	 */
	common.createCanaryStreamPath = function ( config ) {
		var url = app.environment.canary,
            params = '';

        if (config && config.pageSize) {
            params += '?pageSize=' + config.pageSize;
        }

		if (config && config.network) {
            params += ( params ? '&' : '?' )  + 'network=' + config.network;
        }

		if (app.environment.label === 'local') {
			return url + params;
		}

		if (config && config.references) {
			return url + 'account/' + PULSE.app.environment.cmsAccount + '/contentref/' + config.references + '/posts' + params;
		}

		if (config && config.streamId) {
			return url + '/stream/' + config.streamId + '/posts' + params;
		}

		return url + 'stream/combinedstream/posts' + params;
	};

	/**
	 * creates canary path based a strean id
	 * @param {int} id Stream id
	 * @returns {String} url Canary url
	 */
	common.createCanaryPathFromId = function ( id )
	{
		var url = app.environment.canary + 'stream/' + id + '/posts';

		return url;
	};

	common.createPollQuestionUrl = function( pollName )
	{
		var url = app.environment.pollQuestions + '/' + pollName + '/poll.js';

		return url;
	};

	common.createPollAnswerUrl = function( questionId, optionId )
	{
		var url = app.environment.pollAnswer + '?id=' + questionId + '&option=' + optionId + '&callback=JSON_CALLBACK';

		return url;
	};

	/**
	 * creates API path based on a string and parameters
	 * @param {String} path Object path for the API object
	 * @param {Object} params Url parameters
	 * @returns {String} url API url
	 */
	common.createApiPath = function ( path, params )
	{
		var thisPath = core.object.objectByString( app.apiPath, path );
		var paramArray = [];
		for ( var key in params )
		{
			if ( thisPath.indexOf( '{' + key + '}' ) > -1 )
			{
				thisPath = thisPath.replace( '{' + key + '}', params[ key ] );
			}
			else if ( params[key] !== undefined )
			{
				paramArray.push( key + '=' + params[key] );
			}
		}
		var url = thisPath;
		if ( paramArray.length > 0 )
		{
			url += '?' + paramArray.join( '&' );
		}
		return url;
	};

	/**
	 * generate a url for a some content
	 * @param {String} type Type of content
	 * @param {int} id Id of content
	 * @returns {String} url Link to content
	 */
	common.generateUrl = function( type, id, restriction )
	{
		var base = '//' + app.environment.domain;
		type = ( type || "" ).toLowerCase();
        var contentResponse, url;

        // this is ugly
        if( typeof id === 'object' && id.id ) {
            contentResponse = id;
            id = id.id;
        }

		restriction = restriction ? restriction.toLowerCase() : "";

		switch ( type )
		{
			case 'text':
                var url = base + '/news/' + id;
                if( contentResponse && contentResponse.title ) {
                    return url + '/' + urlify( contentResponse.title );
                }
                else {
                    return url;
                }
			case 'video':
				var url = base + '/video/' + id;
                if( contentResponse && contentResponse.title ) {
                    return url + '/' + urlify( contentResponse.title );
                }
                else {
                    return url;
                }
			case 'playlist':
				if( restriction == 'photo' ) {
					url = base + '/photos/' + id;
                    if( contentResponse && contentResponse.title ) {
                        return url + '/' + urlify( contentResponse.title );
                    }
                    else {
                        return url;
                    }
				}
				else if( restriction == 'video' ) {
					return base + '/video/categories/' + id;
				}
				return '';
            case 'photo':
				url = '/' + id;
                if( contentResponse && contentResponse.description ) {
                    return url + '/' + urlify( contentResponse.description );
                }
                else {
                    return url;
                }
				return '';
			case 'cricket_team':
				return base + '/teams/' + id;
			case 'cricket_player':
				return base + '/players/' + id;
			case 'cricket_match':
				return base + '/match/' + id;
			default:
				return base + "/" + type + "/" + id;
		}
		return '';
	};

    var urlify = function( string ) {
        if( string ) {
            return string.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, '-');
        }
        return '';
    };

} )( PULSE.core, PULSE.app, PULSE.app.common );

/*globals PULSE, PULSE.app, PULSE.app.common */
( function( app, common, cricket ) {

    common.widget = {};

    /**
     * Map of widget attribute names to content types
     * @type {Object}
     */
    WIDGET_ATTRIBUTES = {
        // cricket references
        'data-tournament-id': 'CRICKET_TOURNAMENT',
        'data-team-id': 'CRICKET_TEAM',
        'data-venue-id': 'CRICKET_VENUE',
        'data-match-id': 'CRICKET_MATCH',
        'data-tournament-group-id': 'CRICKET_TOURNAMENTGROUP'
    };

    /**
     * Gets a data attribute of a DOM element and converts it to a number
     *
     * @param  {string}     attribute     The attribute name
     * @param  {DOMElement} element       The element
     * @return {Number}                   The number attribute.
     */
    common.widget.getNumberAttribute = function( attribute, element ) {
        var value = parseInt( element.getAttribute( attribute ), 10 );
        if( isNaN( value ) === false ) {
            return value;
        }
    };

    /**
     * Gets the data attribute of a DOM element and converts it into an array
     *
     * @param  {string}        attribute  The attribute name
     * @param  {DOMElement}    element    The element
     * @return {Array<String>}            The array attribute.
     */
    common.widget.getArrayAttribute = function( attribute, element ) {
        var value = element.getAttribute( attribute );
        if( value ) {
            return value.split( ',' ).map( function( item ) {
                return item.trim();
            } ).filter( function( item ) {
                return typeof item !== 'undefined' && item !== '';
            } );
        }
        return [];
    };

    /**
     * Retrieves hash map of content references from a widget container's attributes
     * @param  {DOMElement} element - The widget container
     * @return {Object}             - Hash of content type to array of reference IDs
     */
    common.widget.retrieveReferences = function( element ) {
        var references = {};
        if( element ) {
            for( var attr in WIDGET_ATTRIBUTES ) {
                references[ WIDGET_ATTRIBUTES[ attr ] ] = common.widget.getArrayAttribute( attr, element );
            }
        }
        return references;
    };

    /**
     * Given a map of content references, it converts it to a {@link PULSE.cricket.MatchListFilter}
     *
     * @param  {Object} referencesMap          - The references map
     * @return {PULSE.cricket.MatchListFilter} - The filter for the match list
     */
    common.widget.convertToFilter = function( referencesMap ) {
        var filter = {};
        for( var contentType in referencesMap ) {
            switch( contentType ) {
                case 'CRICKET_TOURNAMENT':
                    filter[ 'tournamentIds' ] = referencesMap[ contentType ];
                    break;
                case 'CRICKET_TEAM':
                    filter[ 'teamIds' ] = referencesMap[ contentType ];
                    break;
                case 'CRICKET_VENUE':
                    filter[ 'venueIds' ] = referencesMap[ contentType ];
                    break;
                case 'CRICKET_TOURNAMENTGROUP':
                    filter[ 'tournamentGroupIds' ] = referencesMap[ contentType ];
                    break;
                }
        }
        return filter;
    };

    /**
     * Retrieves match information from a widget container's data attributes and retrieves/creates
     * the appropriate cricket.Match instance so it can be used inside a widget
     *
     * @param  {DOMElement} container - the widget container
     * @return {cricket.Match}        - the instance of the match
     */
    common.widget.getMatchFromContainer = function( container ) {
        var matchId = common.widget.getNumberAttribute( 'data-match-id', container );
        var tournamentId = common.widget.getNumberAttribute( 'data-tournament-id', container );
        var store = cricket.Store.getInstance();

        return store.getMatch( matchId, tournamentId );
    };

} )( PULSE.app, PULSE.app.common, PULSE.cricket );

/*globals PULSE, PULSE.app, PULSE.ui */

(function (app, core, common) {

    var FilterTypes = [
        {
            name: 'CRICKET_TEAM',
            label: 'Filter by Team',
            current: 'All Teams',
            options: [
                {
                    key: 'ALL',
                    value: 'All Teams'
                }
            ]
        },
        {
            name: 'NATIONALITY',
            label: 'Filter by Player',
            current: 'All Players',
            options: [
                {
                    key: 'All Players',
                    value: 'All Players'
                }
            ]
        },
        {
            name: 'CRICKET_TOURNAMENT',
            label: 'Filter by Season',
            current: 'All Seasons',
            options: [
                {
                    key: 'ALL',
                    value: 'All Seasons'
                }
            ]
        },
    ];

    var labelToTypeMap = {
        'Filter by Team': 'CRICKET_TEAM',
        'Filter by Player': 'NATIONALITY',
        'Filter by Venue': 'CRICKET_VENUE',
        'Filter by Season': 'CRICKET_TOURNAMENT'
    };

    var replaceAll = function (target, search, replacement) {
        return target.replace(new RegExp(search, 'g'), replacement);
    };

    /**
	 * filterDropDown
     * Common module that should be called in content list module for filtering
     * @param {object} targetObject - widget element
     * @param {object} filterTarget - section element which should hold a update function and where data gets loaded in.
	 */
    common.filterDropDown = function (targetObject, filterTarget) {

        var _self = this;

        _self.targetObject = targetObject;
        _self.container = filterTarget;
        _self.currentOption = {
            type: '',
            title: '',
            key: ''
        };

        _self.filterDropDownTemplate = "filter_dropdown";

        _self.dataFilters = [];

        if (typeof _self.targetObject.filter !== 'undefined') {

            if (typeof _self.targetObject.filter === "string") {
                _self.targetObject.filter = [_self.targetObject.filter]; // backward compatibility
            }

            _self.dataFilters = _self.targetObject.filter;
        }

        //TODO: check if there are duplicates in dataFilters array and deduplicate it
        _self.dataFilters.forEach(function (filter, idx) {
            FilterTypes.forEach(function ( type ) {
                if ( filter === type.name ) {
                    _self.render( type );
                }
            });
        });

        _self.buildDropdown();
    };

    common.filterDropDown.prototype.renderTeams = function (model, src) {
        var _self = this;

        var newOptions = [];

        for( var i=0; i < src.length; i++ ) {
            newOptions.push({
                key: src[i].id,
                value: src[i].fullName
            });
        };
        newOptions.sort(function (a, b) {
            if (a.value < b.value) return -1;
            if (b.value < a.value) return 1;
            return 0;
        });

        model.options = model.options.concat( newOptions );
        _self.container.innerHTML += app.common.templating.render(model, _self.filterDropDownTemplate);
    };

    common.filterDropDown.prototype.renderFormats = function (model, src) {
        var _self = this;

        Array.prototype.forEach.call(src, function (item, index) {
            model.options.push({
                key: item,
                value: replaceAll(item, '_', ' ')
            });
        });
        _self.container.innerHTML += app.common.templating.render(model, _self.filterDropDownTemplate);
    };

    /**
     * render dropdown widget
     * @param {object} dropdown
     */
    common.filterDropDown.prototype.render = function ( type ) {

        var _self = this;

        switch ( type.name ) {
            case 'CRICKET_TEAM':
                _self.renderTeams( type, app.teams.mens.concat( app.teams.womens ) );
                break;
            case 'FORMAT':
                _self.renderFormats( type, app.formats );
                break;
            default:
                console.log('Unknown filter type');
                break;
        }
    };

    /**
     * updateCurrent
     * Helper function to update current dropdown option
     * This function also calls the update function of the target object.
     * @param {object} data
     */
    common.filterDropDown.prototype.updateCurrent = function (data) {

        var _self = this;

        _self.currentOption.type = typeof data.type !== undefined ? data.type : '';
        _self.currentOption.title = typeof data.title !== undefined ? data.title : '';
        _self.currentOption.key = typeof data.key !== undefined ? data.key : '';

        // send data to target list
        _self.targetObject.update(_self.getCurrent());
    };

    common.filterDropDown.prototype.getCurrent = function () {
        var _self = this;
        return _self.currentOption;
    }

    /**
     * Dropdown
     * creates a custom dropdown
     * turns dom element with js-drop-down class into a custom dropdown and keeps track of selected option
     */
    common.filterDropDown.prototype.buildDropdown = function () {
        var _self = this;
        _self.dropDown = _self.container.querySelectorAll('.js-drop-down');

        Array.prototype.forEach.call(_self.dropDown, function (el, index) {
            el.querySelector('.js-dropdown-trigger').addEventListener('click', function (e) {
                e.preventDefault();

                // toggle dropdown
                core.style.toggleClass(el, 'is-open');
            });

            el.querySelector('.js-dropdown-trigger').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    core.style.toggleClass(el, 'is-open');
                }
            });

            // get option click
            var options = el.querySelector('.js-drop-down-options');
            var current = el.querySelector('.js-drop-down-current');
            var label = el.querySelector('.js-drop-down-label');

            var onOptionSelect = function (optionEl) {
                // save selected option as current option
                _self.updateCurrent({
                    type: labelToTypeMap[label.innerHTML],
                    title: optionEl.innerHTML,
                    key: optionEl.getAttribute('data-option')
                });

                // toggle dropdown
                core.style.toggleClass(el, 'is-open');

                current.innerHTML = _self.currentOption.title;
            };

            Array.prototype.forEach.call(options.querySelectorAll('[data-option]'), function (optionEl, optionIndex) {
                optionEl.addEventListener('click', function (e) {
                    onOptionSelect(optionEl);
                });
                optionEl.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        onOptionSelect(optionEl);
                    }
                });
            });
        });
    };


})(PULSE.app, PULSE.core, PULSE.app.common);

/*globals PULSE, PULSE.app, PULSE.ui */

( function( app, core, common ) {

    /**
	 * LinkList
     * Common module that build a dropdown which contains links as items
     * @param {object} element - widget element
	 */
    common.LinkList = function( element ) {

        var _self = this;

        _self.element = element;

        _self.buildDropdown();
    };

    /**
     * LinkList
     * creates a custom dropdown with all event handlers
     */
    common.LinkList.prototype.buildDropdown = function() {
        var _self = this;

        _self.element.querySelector('.js-dropdown-trigger').addEventListener('click', function(e) {
            e.preventDefault();

            // toggle dropdown
            core.style.toggleClass( _self.element, 'is-open' );
        });

        _self.element.querySelector('.js-dropdown-trigger').addEventListener('keypress', function(e) {
            if ( e.key === 'Enter' ) {
                core.style.toggleClass( _self.element, 'is-open' );
            }
        });

    };

    var widgets = document.querySelectorAll( '[data-widget="linklist-dropdown"]' );
    for( var i = 0; i < widgets.length; i++ ) {
        new common.LinkList( widgets[ i ] );
    }

} )( PULSE.app, PULSE.core, PULSE.app.common );

if (!PULSE) { var PULSE = {}; }
if (!PULSE.CLIENT) { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) { PULSE.CLIENT.CRICKET = {}; }


PULSE.CLIENT.CRICKET.AllMatches = function()
{
	this.dm = PULSE.CLIENT.getDataManager();

	// the API links
	this.prodAPI = "//msapi.pulselive.com/msapi/";
	this.testAPI = "//msapi.pulselive.com/msapi/";
	//this.testAPI = "//msapitest.pulselive.com:8080/msapi/";
	// this.prodAPI = "//ec2-23-22-42-190.compute-1.amazonaws.com:8080/msapi/";

	this.feedMetaSchedule = ["data"];

	this.meta = {};
	this.data = {};

	// matches are stored in a this.dates[timestamp][matchId] structure
	this.dates = {};
};



/******************
 *	Data management
 */
PULSE.CLIENT.CRICKET.AllMatches.prototype.onData = function( data, id )
{
	if( id === this.feedMetadata && data.metaResponse )
	{
		this.meta = data.metaResponse;
		PULSE.CLIENT.notify( 'metaSchedule/meta', { success: true } );
	}
	else if( $.inArray( id, this.feedMetaSchedule ) > -1 && data.dataResponse )
	{
		this.data = data.dataResponse;
		this.updateMatches();
		PULSE.CLIENT.notify( 'metaSchedule/data', { success: true, id: id } );
	}
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.onError = function( id )
{
	if( id === this.feedMetadata )
	{
		PULSE.CLIENT.notify( 'metaSchedule/meta', { success: false } );
		console.log('no data');
	}
	else if( $.inArray( id, this.feedMetaSchedule ) > -1 )
	{
		PULSE.CLIENT.notify( 'metaSchedule/data', { success: false, id: id } );
		console.log('no data');
	}
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.updateMatches = function()
{
	var matches = this.data.matches;

	if( !matches )
	{
		return;
	}

	for( var i = 0, iLimit = this.data.matches.length; i < iLimit; i++ )
	{
		var match = matches[i];
		var timestamp = match.timestamp;

		// check if there are any tournaments other than the ones already collected
		// create any new tournaments that aren't already there
		if( !window.tournaments[ match.tournamentId.name ] )
		{
			window.tournaments[ match.tournamentId.name ] = new PULSE.CLIENT.CRICKET.Tournament( {
				tournamentName: match.tournamentId.name
			} );
		}

		// check if the match is new; create it if it doesn't exist already
		if( !this.dates[ timestamp ] || !this.dates[ timestamp ][ match.scheduleEntry.matchId.name ] )
		{
			this.dates[ timestamp ] = this.dates[ timestamp ] || {};
			this.dates[ timestamp ][ match.scheduleEntry.matchId.name ] = new PULSE.CLIENT.CRICKET.Match(
				window.tournaments[ match.tournamentId.name ],
				match.scheduleEntry.matchId.name
			);
		}

		// update the match information
		if( match.timestamp )
		{
			match.scheduleEntry.matchDate = match.timestamp;
		}

        //Add Tournament Data to scheduleEntry object
        match.scheduleEntry.tournamentLabel = match.tournamentLabel;
        match.scheduleEntry.tournamentName = match.tournamentId.name;
        match.scheduleEntry.tournamentId = match.tournamentId.id;

		this.dates[ timestamp ][ match.scheduleEntry.matchId.name ].setScheduleData( match.scheduleEntry );
	}
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getMatchIds = function()
{
	var ids = [];
	for( var timestamp in this.dates )
	{
		var matchIds = $.map( this.dates[timestamp], function( value, key ) {
			return key;
		} );

		ids = ids.concat( matchIds );
	}

	return _.uniq(ids);
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getTournamentIds = function()
{
  var that = this
    , ids = [];

  for (var timestamp in this.dates)
  {

  	var tournamentIds = $.map(this.dates[timestamp], function(value, key) {

      return value.scheduleData.tournamentName;
  	});

  	ids = ids.concat(tournamentIds);
  }

  return _.uniq(ids);
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getMatch = function( matchId )
{
	var match, firstMatch;
	for( var timestamp in this.dates )
	{
		if( this.dates[timestamp][matchId] )
		{
			match = this.dates[timestamp][matchId];
			// there's only one instance of non-test matches
			if( match.getMatchType() !== "TEST" && match.getMatchType() !== "FIRST_CLASS" )
			{
				return match;
			}
			else
			{
				var date = PULSE.CLIENT.DateUtil.parseDateTime(timestamp),
					now  = new Date();

				// stop if there is a match playing that day
				if( Math.abs( now - date ) < 86400000 )
				{
					break;
				}
				// if not, remember the first instance of the match
				else if( !firstMatch )
				{
					firstMatch = match;
				}
			}
		}
	}

	// if there's a first instance, it means there was no live match
	return firstMatch || match;
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getMatchModel = function( matchId )
{
	var matches = this.data.matches,
		firstMatch,
		liveMatchModel;

	if( !matches )
	{
		return;
	}

	for( var i = 0, iLimit = matches.length; i < iLimit; i++ )
	{
		var id 			= matches[i].scheduleEntry.matchId.name,
			timestamp 	= matches[i].timestamp;

		if( matchId === id )
		{
			var match = this.dates[timestamp][ matchId ];
			var matchModel = match.getFullModel();
			matchModel.label = matches[i].label;
			matchModel.tournamentLabel = matches[i].tournamentLabel;

			// if the metaschedule says this is a result-only match, don't include the match link
			matchModel.matchLink = this.data.matches[i].resultOnly ? "" : matchModel.matchLink;

			if( match.getMatchType() !== "TEST" && match.getMatchType() !== "FIRST_CLASS" )
			{
				return matchModel;
			}
			else
			{
				var date = PULSE.CLIENT.DateUtil.parseDateTime(timestamp),
					now  = new Date();

				// stop if there is a match playing that day
				if( date - now > -43200000 && date - now < 43200000 )
				{
					liveMatchModel = matchModel;
					break;
				}
				// if not, remember the first instance of the match
				else if( !firstMatch )
				{
					firstMatch = matchModel;
				}
			}
		}
	}
	return liveMatchModel || firstMatch;
};

// assuming matches are sorted chronologically, it gets the first upcoming non-live match
PULSE.CLIENT.CRICKET.AllMatches.prototype.getNextMatchKeys = function()
{
	var matches = this.data.matches,
		firstMatch,
		liveMatchModel;

	if( !matches )
	{
		return;
	}

	for( var i = 0, iLimit = matches.length; i < iLimit; i++ )
	{
		var matchId 	= matches[i].scheduleEntry.matchId.name,
			timestamp 	= matches[i].timestamp;

		var match = this.dates[timestamp][ matchId ];

		if( match.getMatchState() === 'U' )
		{
			return { timestamp: timestamp, matchId: matchId };
		}
	}
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getMatchesGroupedByDayModel = function( filterByPresentDay )
{
	var matches = this.data.matches,
		model 	= { days: [] };

	if( !matches )
	{
		return model;
	}

	for( var i = 0, iLimit = this.data.matches.length; i < iLimit; i++ )
	{
		var matchId = matches[i].scheduleEntry.matchId.name,
			timestamp = matches[i].timestamp,
			date = PULSE.CLIENT.DateUtil.parseDateTime( timestamp ),
			now = new Date(),
			match 	= this.dates[timestamp][ matchId ],
			matchModel = match.getFullModel();

		matchModel.label = matches[i].label;
		matchModel.tournamentLabel = matches[i].tournamentLabel;
		matchModel.matchDate = timestamp;

		// if the metaschedule says this is a result-only match, don't include the match link
		matchModel.matchLink = this.data.matches[i].resultOnly ? "" : matchModel.matchLink;

		// for test matches, ignore days which have passed (12 hours cap)
		if( filterByPresentDay && (match.getMatchType() === 'TEST' || match.getMatchType() === "FIRST_CLASS") && date - now < -43200000 )
		{
			continue;
		}
		if( filterByPresentDay && (match.getMatchType() === 'TEST' || match.getMatchType() === "FIRST_CLASS") && date - now > 43200000 )
		{
			matchModel.live = false;
		}

		this.groupByDay( model.days, matchModel );
	}

	return model;
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getResultsGroupedByDayModel = function( filterByPresentDay )
{
	var matches = this.data.matches,
		model 	= { days: [] },
		matchIds = [];

	if( !matches )
	{
		return model;
	}

	for( var i = 0, iLimit = this.data.matches.length; i < iLimit; i++ )
	{
		var matchId = matches[i].scheduleEntry.matchId.name,
			timestamp = matches[i].timestamp,
			date = PULSE.CLIENT.DateUtil.parseDateTime( timestamp ),
			now = new Date(),
			match 	= this.dates[timestamp][ matchId ],
			matchModel = match.getFullModel();

		matchModel.label = matches[i].label;
		matchModel.tournamentLabel = matches[i].tournamentLabel;

		// if the metaschedule says this is a result-only match, don't include the match link
		matchModel.matchLink = this.data.matches[i].resultOnly ? "" : matchModel.matchLink;

		if( $.inArray( matchId, matchIds ) > -1 )
		{
			continue;
		}

		matchIds.push( matchId );
		this.groupByDay( model.days, matchModel );
	}

	return model;
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.groupByDay = function( list, match )
{
	var date 		= PULSE.CLIENT.DateUtil.parseDateTime( match.matchDate );
	var dateString 	= dateFormat( date, 'dddd, dS mmmm' );

	if( list.length === 0 || list[ list.length - 1 ].date !== dateString )
	{
		list.push( {
			date: dateString,
			matches: []
		} );
	}

	list[ list.length - 1 ].matches.push( match );
};


PULSE.CLIENT.CRICKET.AllMatches.prototype.groupMatchesBySeries = function( series )
{
	var matches = this.getMatchesModel(),
		tournamentIds = series || this.getTournamentIds(),
		series = [];

    for( var i = 0, length = matches.matches.length; i < length; i++ )
    {
        var match = matches.matches[i];
        if( -1 < $.inArray( match.tournamentName, tournamentIds ) )
        {
            var hasSeriesIndex = this.arrHasSeriesIndex(series, match.tournamentId);

            if (hasSeriesIndex === 'no-match')
            {
                series.push([ match ])
            }
            else
            {
                series[hasSeriesIndex].push(match);
            }
        }
	}

	return { series : series };
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.arrHasSeriesIndex = function(series, id)
{

	for (var i=0, len = series.length; i < len; i++) {

		var array = series[i];

		for (var m=0, mLength = array.length; m < mLength; m++) {

			var match = array[m];

			if (match.tournamentId === id) {

				return i;
			}
		}
	}

	//String required so index 0 can be returned
	return 'no-match';
}

PULSE.CLIENT.CRICKET.AllMatches.prototype.getMatchesModel = function()
{
	var matches = this.data.matches,
		model  = { matches: [] };

	if( !matches )
	{
		return model;
	}

	for( var i = 0, iLimit = this.data.matches.length; i < iLimit; i++ )
	{
		var matchId = matches[i].scheduleEntry.matchId.name,
	 	timestamp = matches[i].timestamp,
	   	match  = this.dates[timestamp][ matchId ];

	   	var matchModel = match.getFullModel();
	   	matchModel.label = matches[i].label;
	   	matchModel.tournamentName = match.tournament.tournamentName;
		matchModel.tournamentLabel = matches[i].tournamentLabel;

		// if the metaschedule says this is a result-only match, don't include the match link
		matchModel.matchLink = this.data.matches[i].resultOnly ? "" : matchModel.matchLink;

	    model.matches.push( matchModel );
	}

 	return model;
};

/**
 * 	Returns an array of match models
 * 	For test matches, only the first instance (Day 5, if ordered anti-chronological) is returned
 */
PULSE.CLIENT.CRICKET.AllMatches.prototype.getCompleteModel = function()
{
	var matches = this.data.matches,
		model  = { matches: [] },
		matchIds = [];

	if( !matches )
	{
		return model;
	}

	for( var i = 0, iLimit = this.data.matches.length; i < iLimit; i++ )
	{
		var matchId = matches[i].scheduleEntry.matchId.name,
	 	timestamp = matches[i].timestamp,
	   	match = this.dates[timestamp][matchId];

		// there's only one instance of non-test matches
		if( $.inArray( matchId, matchIds ) === -1 )
		{
			var matchModel = match.getFullModel();
			matchModel.label = matches[i].label;
			matchModel.tournamentLabel = matches[i].tournamentLabel;

			// if the metaschedule says this is a result-only match, don't include the match link
			matchModel.matchLink = this.data.matches[i].resultOnly ? "" : matchModel.matchLink;

			model.matches.push( matchModel );

			matchIds.push( matchId );
		}
	}

 	return model;
};

/**
 * 	Returns an array of match models
 * 	For test matches, only the first instance (Day 5, if ordered anti-chronological) is returned
 */
PULSE.CLIENT.CRICKET.AllMatches.prototype.getCompleteModelByTeams = function()
{
	var matches = this.data.matches,
		model  = {},
		matchIds = [];

	if( !matches )
	{
		return model;
	}

	for( var i = 0, iLimit = this.data.matches.length; i < iLimit; i++ )
	{
		var matchId = matches[i].scheduleEntry.matchId.name,
	 	timestamp = matches[i].timestamp,
	   	match = this.dates[timestamp][matchId];

		// there's only one instance of non-test matches
		if( $.inArray( matchId, matchIds ) === -1 )
		{
			var matchModel = match.getFullModel();
			matchModel.label = matches[i].label;
			matchModel.tournamentLabel = matches[i].tournamentLabel;

			// if the metaschedule says this is a result-only match, don't include the match link
			matchModel.matchLink = this.data.matches[i].resultOnly ? "" : matchModel.matchLink;

			if ( matchModel.team1id in model )
			{
				model[ matchModel.team1id ].matches.push( matchModel );
			}
			else
			{
				model[ matchModel.team1id ] = { matches: [ matchModel ],
												team : {
														id : matchModel.team1id,
														fullName : matchModel.team1fullName,
														abbreviation : matchModel.team1abbr
														}
												}
			}

			if ( matchModel.team2id in model )
			{
				model[ matchModel.team2id ].matches.push( matchModel );
			}
			else
			{
				model[ matchModel.team2id ] = { matches: [ matchModel ],
												team : {
														id : matchModel.team2id,
														fullName : matchModel.team2fullName,
														abbreviation : matchModel.team2abbr
														}
												}
			}

			matchIds.push( matchId );
		}
	}

 	return model;
};

/**
 * 	Returns an array of match models
 * 	For test matches, it checks the date and ignores previous day isntances
 */
PULSE.CLIENT.CRICKET.AllMatches.prototype.getUpcomingModel = function( limit )
{
	var matches = this.data.matches,
		model  	= { matches: [] },
		count 	= 0;

	if( !matches )
	{
		return model;
	}

	for( var i = 0, iLimit = this.data.matches.length; i < iLimit; i++ )
	{
		var matchId 	= matches[i].scheduleEntry.matchId.name,
		 	timestamp 	= matches[i].timestamp,
		 	date 		= PULSE.CLIENT.DateUtil.parseDateTime( timestamp ),
			now 		= new Date(),
		   	match 		= this.dates[timestamp][matchId];

		// for test matches, check the date to find out if they're still upcoming
		if( ( (match.getMatchType() === 'TEST' || match.getMatchType() === "FIRST_CLASS") && date - now < 3600000 ) || ( match.getMatchType() !== 'TEST'  && match.getMatchType() !== "FIRST_CLASS" && match.getMatchState() === 'L' ) )
		{
			continue;
		}

		var matchModel = match.getFullModel();

		matchModel.label = matches[i].label;
		matchModel.tournamentLabel = matches[i].tournamentLabel;

		// if the metaschedule says this is a result-only match, don't include the match link
		matchModel.matchLink = this.data.matches[i].resultOnly ? "" : matchModel.matchLink;

		model.matches.push( matchModel );

		count++;
		if( count === limit )
		{
			break;
		}
	}

 	return model;
};

/*
 *	Given a region ID, returns the countries in that region
 */

PULSE.CLIENT.CRICKET.AllMatches.prototype.getCountriesForRegion = function( regionId )
{
	var that  		= this,
		meta  		= this.meta;
	if( regionId && meta )
	{
		for( var i = 0, iLimit = meta.venues.regions.length; i < iLimit; i++ )
		{
			var region = meta.venues.regions[i];
			if( region.id == regionId )
			{
				return region.countries;
			}
		}
	}
	return [];
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getVenuesForCountry = function( regionId, countryId )
{
	var countries = this.getCountriesForRegion( regionId );
	for( var i = 0, iLimit = countries.length; i < iLimit; i++ )
	{
		if( countries[i].id == countryId )
		{
			return countries[i].venues;
		}
	}
	return [];
};




/************
 *	API calls
 */
PULSE.CLIENT.CRICKET.AllMatches.prototype.getAPIUrl = function()
{
	return PULSE.CLIENT.isTest() ? this.testAPI : this.prodAPI;
};

PULSE.CLIENT.CRICKET.AllMatches.prototype.requestMetaScheduleMeta = function( options, start )
{

	this.metadataCallback 	= options.callback || 'onMetaScheduleMetadata';
	var params = options.params ? PULSE.CLIENT.Util.prepareParams( $.extend( options.params || {}, { callback: this.metadataCallback  } ) ) : ""

	this.metadataUrl 		= options.feedUrl  || this.getAPIUrl() + "meta" + params;
	this.feedMetadata 		= options.feedName || "metadata";
	this.metadataInterval 	= options.interval ? options.interval : 0; // don't repeat

	var target = options.target ? [ this ].concat( options.target ) : [ this ];

	this.dm.addFeed( this.feedMetadata, this.metadataUrl,
		this.metadataInterval, this.metadataCallback, target );

	if( start )
	{
		this.dm.start( this.metadataUrl );
	}

};

PULSE.CLIENT.CRICKET.AllMatches.prototype.requestMetaScheduleData = function( options, start )
{
	this.metaScheduleCallback 	= options.callback || 'onMetaScheduleData';
	var params = options.params ? PULSE.CLIENT.Util.prepareParams( $.extend( options.params || {}, { callback: this.metaScheduleCallback  } ) ) : "";

	if( $.inArray( options.feedName, this.feedMetaSchedule ) === -1 )
	{
		this.feedMetaSchedule.push( options.feedName );
	}

	this.metaScheduleUrl 		= options.feedUrl  || this.getAPIUrl() + "data" + params;
	this.metaScheduleInterval 	= options.interval ? options.interval : 0; // don't repeat

	var target = options.target ? [ this ].concat( options.target ) : [ this ];

	this.dm.addFeed( options.feedName || this.feedMetaSchedule[0], this.metaScheduleUrl,
		this.metaScheduleInterval, this.metaScheduleCallback, target );

	if( start )
	{
		this.dm.start( this.metaScheduleUrl );
	}

};

PULSE.CLIENT.CRICKET.AllMatches.prototype.getMatchTypeIdFromType = function(type)
{
  var id;

  if (this.meta.matchTypes ) {

  	var matchTypes = this.meta.matchTypes;

  	for (var _i=0, _length = matchTypes.length; _i < _length; _i++) {

  		var match = matchTypes[_i];
  		if ( match.name.toUpperCase() === type.toUpperCase() ) {

  			id = match.id;
  			break;
  		}
  	}
  }

  return id;
};

if (!PULSE) 				{ var PULSE = {}; }
if (!PULSE.CLIENT) 			{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 	{ PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.MetaSchedule = function( options )
{
	options = options || {};
	this.mdl = new PULSE.CLIENT.CRICKET.AllMatches();
	this.feedMetadata = options.metaFeedName || "metadata";
	this.feedMetaSchedule = options.dataFeedName || "metasched";
	this.currentMetaSchedId = options.metaSchedule || "icc";

	this.setSubscriptions();

    var today = ( new Date() ).format('yyyy-mm-dd'),
        sd = options.widgetConfig === 'metaschedule_widget' ? today : undefined,
        ed = options.widgetConfig === 'metaresults_widget' ? today : undefined;

	// this.mdl.requestMetaScheduleMeta(
	// 	{ // the request options
	// 		params: { ms: this.currentMetaSchedId, sd: sd, ed: ed }, // required parameters by the API
	// 		feedName: this.feedMetadata
	// 	},
	// 	true
	// );
};

PULSE.CLIENT.CRICKET.MetaSchedule.prototype.setSubscriptions = function()
{
	var that = this;
	$('body').on( 'metaSchedule/meta', function( e, params ) {
		if( params.success )
		{
			// that.requestData();
		}
	} );
};

PULSE.CLIENT.CRICKET.MetaSchedule.prototype.onData = function( data, id )
{
	if( id === this.feedMetadata && data.metaResponse )
	{
		this.meta = data.metaResponse;
	}
	else if( id === this.feedMetaSchedule )
	{
		this.data = data.dataResponse;
	}
};

PULSE.CLIENT.CRICKET.MetaSchedule.prototype.requestData = function(params, name)
{
	var defaultParams = { "ms": this.currentMetaSchedId };
	var feedName = name ? name : this.feedMetaSchedule;

	if( params )
	{
		$.extend( defaultParams, params );
	}

	this.mdl.requestMetaScheduleData(
		{
			params: defaultParams,
			feedName: feedName,
			target: this
		},
		true // start it straight away
	);
};
if( !PULSE ) { var PULSE = {}; }
if( !PULSE.CLIENT ) { PULSE.CLIENT = {}; }
if( !PULSE.CLIENT.CRICKET ) { PULSE.CLIENT.CRICKET = {}; }

/**
 * Widget for head to head details between two teams
 */
PULSE.CLIENT.CRICKET.TeamHeadToHead = function ( container, team1, team2, tournament, template, extraFields )
{
    this.extraFields = extraFields;
    this.tournaments = tournament;

    this.template = template;

    this.$container = $( container );

    this.team1 = team1;
    this.team2 = team2;

    this.metaschedule = 'ipl';
    this.initialised = false;

    var options = {
            metaSchedule: this.metaschedule,
            widgetConfig: 'metaresults_widget'
        };

    this.metaSched = new PULSE.CLIENT.CRICKET.MetaSchedule( options );

    this.filters = {
            'mt' : [],          // match types ids
            'te' : [ team1, team2 ],          // team ids
            'to' : [],          // tournaqment ids
            'vr' : [],          // region ids
            'vc' : [],          // country ids
            'v'  : [],          // venue ids
            'tt' : [],          // team types
            's'  : ['C'],       // results requires 'C' matches
            'sd' : undefined,
            'ed' : undefined,
            'p'  : 1,
            'ps' : 50,
            'o'  : ['cd'],
            'se' : true,
            'ta' : true
        };

    this.metaSched.requestData( this.filters );

    this.setSubscriptions();

};

PULSE.CLIENT.CRICKET.TeamHeadToHead.prototype.setSubscriptions = function()
{
    var that = this;

    $('body').on( 'metaSchedule/data', function( e, params ) {
        if( params.success )
        {
            that.teamMatches = that.metaSched.mdl.getCompleteModelByTeams();
            that.renderHeadToHead();
            that.initialised = true;
        }
    } );
}

PULSE.CLIENT.CRICKET.TeamHeadToHead.prototype.getHeadToHead = function( team1, team2 )
{

    var team1Matches = this.teamMatches[ team1 ],
        details = { headToHeadMatches : [],
            teamDraw : 0,
            team1 : {},
            team2 : {}
        },
        infoFound = false;

    details.team1.won = 0;
    details.team1.lost = 0;
    details.team2.won = 0;
    details.team2.lost = 0;

    if ( team1Matches )
    {
        for ( var i = 0; i < team1Matches.matches.length; i++ )
        {
            if ( team1Matches.matches[ i ].team1id == team2 || team1Matches.matches[ i ].team2id == team2 )
            {
                if ( team1Matches.matches[ i ].team1id == team2 )
                {

                    if ( team1Matches.matches[ i ].team1won )
                    {
                        details.team2.won = details.team2.won + 1;
                        details.team1.lost = details.team1.lost + 1;
                    }
                    else if ( team1Matches.matches[ i ].team2won )
                    {
                        details.team1.won = details.team1.won + 1;
                        details.team2.lost = details.team2.lost + 1;
                    }
                    else
                    {
                        details.teamDraw = details.teamDraw + 1;
                    }
                }
                else
                {
                    if ( team1Matches.matches[ i ].team1won )
                    {
                        details.team1.won = details.team1.won + 1;
                        details.team2.lost = details.team2.lost + 1;
                    }
                    else if ( team1Matches.matches[ i ].team2won )
                    {
                        details.team2.won = details.team2.won + 1;
                        details.team1.lost = details.team1.lost + 1;
                    }
                    else
                    {
                        details.teamDraw = details.teamDraw + 1;
                    }
                }
                details.headToHeadMatches.push( team1Matches.matches[ i ] );
            }
        }
    }

    details.team1.headToHeadRate = ( ( details.team1.won / details.headToHeadMatches.length ) * 100 ).toFixed( 0 ) + '%';
    details.team2.headToHeadRate = ( ( details.team2.won / details.headToHeadMatches.length ) * 100 ).toFixed( 0 ) + '%';

    return details;
}

PULSE.CLIENT.CRICKET.TeamHeadToHead.prototype.renderHeadToHead = function()
{

    var details = this.getHeadToHead( this.team1, this.team2 ),
        $useContainer = this.$container,
        useTemplate = this.template;

    if ( this.extraFields )
    {
        for ( var element in this.extraFields )
        {
            details[ element ] = this.extraFields[ element ];
        }
    }

    details.initialised = this.initialised;

    PULSE.CLIENT.Template.publish(
        useTemplate,
        $useContainer,
        details
    );
}
if ( !PULSE )                       { var PULSE = {}; }
if ( !PULSE.CLIENT )                { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )        { PULSE.CLIENT.CRICKET = {}; }

/**
 * Widget for displaying a team stat using the metadata.
 */
PULSE.CLIENT.CRICKET.TeamStat = function ( container, config, tournaments )
{
    this.$container = $( container );

    this.tournament = tournaments;

    this.config = config;

    this.statId = config.statId

    this.teamId = config.teamId;
    this.statClass = config.statClass;

    this.num = config.num || 1;
    this.template =  config.template || 'team-card';
    this.team = config.team;
    this.metaschedule = config.metaschedule || 'ipl';
    this.statsIcon = config.statsIcon || 'statsIcon';
    this.tournaments = [];
    this.url = undefined;

    this.gotMeta = false;
    this.gotData = false;

    if ( ! window[ 'teamStat' + this.metaschedule ] )
    {
        if ( config.url )
        {
            this.url = config.url;
        }

        this.teams = [];
        this.tournaments = [];

        var options = {
            metaSchedule: this.metaschedule,
            widgetConfig: 'metaresults_widget'
        };

        this.metaSched = new PULSE.CLIENT.CRICKET.MetaSchedule( options );

        this.filters = {
            'mt' : [],          // match types ids
            'te' : [],          // team ids
            'to' : this.tournaments,          // tournaqment ids
            'vr' : [],          // region ids
            'vc' : [],          // country ids
            'v'  : [],          // venue ids
            'tt' : [],          // team types
            's'  : ['C'],       // results requires 'C' matches
            'sd' : undefined,
            'ed' : undefined,
            'p'  : 1,
            'ps' : 500,
            'o'  : ['cd'],
            'se' : true
        };

        window[ 'teamStat' + this.metaschedule ] = this.metaSched;

        this.metaSched.requestData( this.filters );

        this.setSubscriptions();
    }
    else
    {
        this.metaSched = window[ 'teamStat' + this.metaschedule ];
        if ( this.metaSched.gotData )
        {
            this.getCompleteMatchModels();
        }
        if ( this.metaSched.gotMeta )
        {
            this.getMetaDataModel();
        }
        if ( ! this.metaSched.gotData || !this.metaSched.gotMeta )
        {
            this.setSubscriptions();
        }
    }
};

PULSE.CLIENT.CRICKET.TeamStat.prototype.setSubscriptions = function()
{
    var that = this;

    $('body').on( 'metaSchedule/data', function( e, params ) {
        if( params.success )
        {
            that.metaSched.gotData = true;
            that.getCompleteMatchModels();
        }
    } );

    $('body').on( 'metaSchedule/meta', function( e, params ) {
        if( params.success )
        {
            that.metaSched.gotMeta = true;
            that.getMetaDataModel();
        }
    } );

};

PULSE.CLIENT.CRICKET.TeamStat.prototype.getCompleteMatchModels = function()
{
    this.teamMatches = this.metaSched.mdl.getCompleteModelByTeams();
    this.allMatches = this.metaSched.mdl.getCompleteModel();

    PULSE.CLIENT.notify( 'teamStats/model', { success: true, statId : this.statId } );
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getTeams = function()
{
    return this.teams;
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getTournaments = function()
{
    return this.tournaments;
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getMetaDataModel = function()
{
    this.tournaments = this.metaSched.mdl.meta.tournaments;

    this.teams = [];
    if ( this.metaSched && this.metaSched.mdl && this.metaSched.mdl.meta && this.metaSched.mdl.meta.teams )
    {
        var teams = this.metaSched.mdl.meta.teams;
        for ( var i = 0; i < teams.length; i++ )
        {
            if ( teams[ i ].members )
            {
                for ( var j = 0; j < teams[ i ].members.length; j++ )
                {
                    this.teams.push( teams[ i ].members[ j ] );
                }
            }
        }
    }

    PULSE.CLIENT.notify( 'teamStats/meta', { success: true } );
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.statTypes = {

    WIN_PERCENTAGE              : 'win-percentage',
    MOST_TROPHIES               : 'most-trophies',
    HIGHEST_TOTAL               : 'highest-total',
    LOWEST_TOTAL                : 'lowest-total',
    BIGGEST_WIN_MARGIN_FIRST    : 'biggest-win-margin-first',
    BIGGEST_WIN_MARGIN_SECOND   : 'biggest-win-margin-second',
    SMALLEST_WIN_MARGIN_FIRST   : 'smallest-win-margin-first',
    SMALLEST_WIN_MARGIN_SECOND  : 'smallest-win-margin-second',
    HIGHEST_MATCH_AGGREGATE     : 'highest-match-aggregate',
    LOWEST_MATCH_AGGREGATE      : 'lowest-match-aggregate'
};

PULSE.CLIENT.CRICKET.TeamStat.prototype.renderStat = function( container, type, config )
{
    var useNum,
        useTemplate,
        useTeam,
        useIcon,
        useHeader,
        $useContainer,
        useUrl;

    switch ( type )
    {
        case this.statTypes.WIN_PERCENTAGE:
            this.stats = this.getWinPercentage();
            this.statName = 'winPercentage';
            this.statHeader = 'Highest Win Percentage';
            this.statCategory = 'overallData';
            break;

        case this.statTypes.MOST_TROPHIES:
            this.stats = this.getMostTrophies();
            this.statName = 'mostTrophies';
            this.statHeader = 'Most Trophies';
            this.statCategory = 'trophy';
            break;

        case this.statTypes.HIGHEST_TOTAL:
            this.stats = this.getTotal( true );
            this.statName = 'highestTotal';
            this.statHeader = 'Highest Total';
            this.statCategory = 'matchData';
            break;

        case this.statTypes.LOWEST_TOTAL:
            this.stats = this.getTotal( false );
            this.statName = 'lowestTotal';
            this.statHeader = 'Lowest Total';
            this.statCategory = 'matchData';
            break;

        case this.statTypes.BIGGEST_WIN_MARGIN_FIRST:
            this.stats = this.getMargin( true, true );
            this.statName = 'biggestWinMarginFirst';
            this.statHeader = 'Biggest Winning Margin Batting 1st';
            this.statCategory = 'matchData';
            break;

        case this.statTypes.BIGGEST_WIN_MARGIN_SECOND:
            this.stats = this.getMargin( true, false );
            this.statName = 'biggestWinMarginSecond';
            this.statHeader = 'Biggest Winning Margin Batting 2nd';
            this.statCategory = 'matchData';
            break;


        case this.statTypes.SMALLEST_WIN_MARGIN_FIRST:
            this.stats = this.getMargin( false, true );
            this.statName = 'smallestWinMarginFirst';
            this.statHeader = 'Smallest Winning Margin Batting 1st';
            this.statCategory = 'matchData';
            break;

        case this.statTypes.SMALLEST_WIN_MARGIN_SECOND:
            this.stats = this.getMargin( false, false );
            this.statName = 'smallestWinMarginSecond';
            this.statHeader = 'Smallest Winning Margin Batting 2nd';
            this.statCategory = 'matchData';
            break;

        case this.statTypes.HIGHEST_MATCH_AGGREGATE:
            this.stats = this.getAggregate( true );
            this.statName = 'highestMatchAggregate';
            this.statHeader = 'Highest Match Aggregate';
            this.statCategory = 'matchData';
            break;

        case this.statTypes.LOWEST_MATCH_AGGREGATE:
            this.stats = this.getAggregate( false );
            this.statName = 'lowestMatchAggregate';
            this.statHeader = 'Lowest Match Aggregate';
            this.statCategory = 'matchData';
            break;

        default:
            this.stats = this.getWinPercentage();
            this.statName = 'winPercentage';
            this.statHeader = 'Win Percentage';
            this.statCategory = 'overallData';
            break;
    }

    if ( container )
    {
        $useContainer = $( container );
    }
    else
    {
        $useContainer = this.$container;
    }

    if ( config )
    {
        if ( config.num )
        {
            useNum = config.num;
        }
        else
        {
            useNum = this.num;
        }

        if ( config.template )
        {
            useTemplate = config.template;
        }
        else
        {
            useTemplate = this.template
        }

        if ( config.teamId )
        {
            useTeam = config.teamId;
        }
        else
        {
            useTeam = this.teamId;
        }

        if ( config.statsIcon )
        {
            useIcon = config.statsIcon
        }
        else
        {
            useIcon = this.statsIcon;
        }

        if ( config.header )
        {
            useHeader = config.header
        }
        else
        {
            useHeader = this.statHeader;
        }

        if ( config.url )
        {
            useUrl = config.url;
        }
        else
        {
            useUrl = this.url;
        }
    }

    if ( useTeam )
    {
        this.stats = this.filterByTeamId( this.stats, useTeam );
    }

    if ( this.stats.length > this.num - 1 )
    {
        PULSE.CLIENT.Template.publish(
            useTemplate,
            $useContainer,
            { stats : this.stats,
              header : useHeader,
              num : this.num,
              icon : useIcon,
              teamId : useTeam,
              url : useUrl }
        );
    }
};

/**
 * Filters team card to players from a given team.
 * @param  {array} stats Filters the array of players to find those in a specific team if this.teamId
 *                       has been set.
 * @return {array}       Returns a team specific filtered array. Returns original array if no team
 *                       has been set.
 */
PULSE.CLIENT.CRICKET.TeamStat.prototype.filterByTeamId = function( stats, teamId )
{
    var filtered = [];

    if ( !teamId ) {
        return stats;
    }

    for (var i=0; i < stats.length; i++) {

        if (stats[i].team.id == teamId) {
            filtered.push(stats[i]);
        }
    }

    return filtered;
};

PULSE.CLIENT.CRICKET.TeamStat.prototype.hasTeam = function( key )
{
    if ( this.teamMatches && this.teamMatches[ key ] )
    {
        return true;
    }
    else
    {
        return false;
    }
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getWinPercentageForTeam = function( key )
{
    if ( this.teamMatches && this.teamMatches[ key ] )
    {
        var amountWon = 0,
                amountLost = 0,
                numMatches = this.teamMatches[ key ].matches.length;
        for ( var i = 0; i < numMatches; i++ )
        {
            if ( this.teamMatches[ key ].matches[ i ].team1id == parseInt( key ) )
            {
                if ( this.teamMatches[ key ].matches[ i ].team1won )
                {
                    amountWon = amountWon + 1;
                }
                else if ( this.teamMatches[ key ].matches[ i ].team2won )
                {
                    amountLost = amountLost + 1;
                }
            }
            else
            {
                if ( this.teamMatches[ key ].matches[ i ].team2won )
                {
                    amountWon = amountWon + 1;
                }
                else if ( this.teamMatches[ key ].matches[ i ].team1won )
                {
                    amountLost = amountLost + 1;
                }
            }
        }
        var extra = 'PLD ' + numMatches + ' WON ' + amountWon + ' LOST ' + amountLost;
        return { extra : extra, stat: (amountWon / this.teamMatches[ key ].matches.length ), team : this.teamMatches[ key ].team };
    }
    else
    {
        return { extra: 'PLD 0 WIN 0 LOSE 0', stat : 0, team : undefined };
    }

}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getWinPercentage = function()
{
    var amountWonArray = [];

    for ( var key in this.teamMatches )
    {
        amountWonArray.push( this.getWinPercentageForTeam( key ) );
    }

    amountWonArray.sort( function( a, b )
    {
        var abbrA = a.stat, abbrB = b.stat;
        if( abbrA < abbrB ) //sort abbreviation ascending
        {
            return 1;
        }
        else
        {
            return -1;
        }
       return 0; //default return value (no sorting)
    } );

    for ( var i = 0; i < amountWonArray.length; i++ )
    {
        amountWonArray[ i ].stat = ( amountWonArray[ i ].stat * 100 ).toFixed( 0 ) + '%';
    }

    return amountWonArray;
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getMostTrophies = function()
{
    var mostTrophiesArray = [];

    for ( var key in this.teamMatches )
    {
        var trophiesWon = 0;
        var tournaments = [];

        for ( var i = 0; i < this.teamMatches[ key ].matches.length; i++ )
        {
            if ( this.teamMatches[ key ].matches[ i ].label && 'Final'.indexOf( this.teamMatches[ key ].matches[ i ].label ) > -1 )
            {
                if ( this.teamMatches[ key ].matches[ i ].team1id == parseInt( key ) )
                {
                    if ( this.teamMatches[ key ].matches[ i ].team1won )
                    {
                        trophiesWon = trophiesWon + 1;
                    }
                }
                else
                {
                    if ( this.teamMatches[ key ].matches[ i ].team2won )
                    {
                        trophiesWon = trophiesWon + 1;
                    }
                }
            }
            if ( tournaments.indexOf( this.teamMatches[ key ].matches[ i ].tournamentLabel ) < 0 )
            {
                tournaments.push( this.teamMatches[ key ].matches[ i ].tournamentLabel );
            }
        }
        var extra = 'Tournaments Played ' + tournaments.length;
        mostTrophiesArray.push( { extra : extra, stat: trophiesWon, team : this.teamMatches[ key ].team } );
    }

    mostTrophiesArray.sort( function( a, b )
    {
        var abbrA = a.stat, abbrB = b.stat;
        if( abbrA < abbrB ) //sort abbreviation ascending
        {
            return 1;
        }
        else
        {
            return -1;
        }
       return 0; //default return value (no sorting)
    } );

    return mostTrophiesArray;
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getTotal = function( highest )
{
    var highestTotal = [];

    for ( var i = 0; i < this.allMatches.matches.length; i++ )
    {
        if ( this.allMatches.matches[ i ].team1innings && this.allMatches.matches[ i ].team2innings && this.allMatches.matches[ i ].team1innings.length > 0 && this.allMatches.matches[ i ].team2innings.length > 0 && ( this.allMatches.matches[ i ].team1won || this.allMatches.matches[ i ].team2won ) )
        {
            for ( var j = 0; j < this.allMatches.matches[ i ].team1innings.length; j++ )
            {
                var extra = 'AGAINST ' + this.allMatches.matches[ i ].team2fullName;
                if ( this.allMatches.matches[ i ].formattedMatchDate )
                {
                    var splitDate = this.allMatches.matches[ i ].formattedMatchDate.split( ' ' );
                    if ( splitDate && splitDate.length > 0 )
                    {
                        extra = extra + ' ( ' + splitDate[ splitDate.length - 1 ] + ' ) ';
                    }
                }
                highestTotal.push( { extra : extra,
                                    stat: this.allMatches.matches[ i ].team1innings[ j ],
                                    team : {
                                            id : this.allMatches.matches[ i ].team1id,
                                            fullName : this.allMatches.matches[ i ].team1fullName,
                                            abbreviation : this.allMatches.matches[ i ].team1abbr
                                            }
                                    } );
            }
            for ( var j = 0; j < this.allMatches.matches[ i ].team2innings.length; j++ )
            {
                var extra = 'AGAINST ' + this.allMatches.matches[ i ].team1fullName;
                if ( this.allMatches.matches[ i ].formattedMatchDate )
                {
                    var splitDate = this.allMatches.matches[ i ].formattedMatchDate.split( ' ' );
                    if ( splitDate && splitDate.length > 0 )
                    {
                        extra = extra + ' ( ' + splitDate[ splitDate.length - 1 ] + ' ) ';
                    }
                }
                highestTotal.push( { extra : extra,
                                    stat: this.allMatches.matches[ i ].team2innings[ j ],
                                    team : {
                                            id : this.allMatches.matches[ i ].team2id,
                                            fullName : this.allMatches.matches[ i ].team2fullName,
                                            abbreviation : this.allMatches.matches[ i ].team2abbr
                                            }
                                    } );
            }
        }
    }

    highestTotal.sort( function( a, b )
    {
        var abbrA = parseInt( a.stat.split( "/" )[ 0 ] ), abbrB = parseInt( b.stat.split( "/" )[ 0 ] );
        if( abbrA < abbrB ) //sort abbreviation ascending
        {
            if ( highest )
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        else
        {
            if ( highest )
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
       return 0; //default return value (no sorting)
    } );

    return highestTotal;
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getScore = function( runs, matchIndex, teamIndex )
{
     var totalScore = 0,
        inningsName = 'team' + ( teamIndex + 1 ) + 'innings';
    for ( var j = 0; j < this.allMatches.matches[ matchIndex ][ inningsName ].length; j++ )
    {
        var splitInnings = this.allMatches.matches[ matchIndex ][ inningsName ][ j ].split( "/" );
        if ( runs )
        {
            totalScore = totalScore + parseInt( splitInnings[ 0 ] );
        }
        else
        {
            if ( splitInnings.length > 1 )
            {
                totalScore = totalScore + parseInt( splitInnings[ 1 ] );
            }
            else
            {
                totalScore = totalScore + 10;
            }
        }
    }

    return totalScore;
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getMargin = function( highest, first )
{
    var margins = [];

    for ( var i = 0; i < this.allMatches.matches.length; i++ )
    {
        if ( this.allMatches.matches[ i ].team1innings && this.allMatches.matches[ i ].team2innings && this.allMatches.matches[ i ].team1innings.length > 0 && this.allMatches.matches[ i ].team2innings.length > 0 )
        {
                var score1 = this.getScore( first, i, 0 ),
                    score2 = this.getScore( first, i, 1 ),
                    diff,
                    opponent,
                    team;

                if ( first )
                {
                    if ( this.allMatches.matches[ i ].team1battingFirst && this.allMatches.matches[ i ].team1won )
                    {
                        diff = score1 - score2;
                    }

                    if ( this.allMatches.matches[ i ].team2battingFirst && this.allMatches.matches[ i ].team2won )
                    {
                        diff = score2 - score1;
                    }
                }
                else
                {
                    if ( this.allMatches.matches[ i ].team2battingFirst && this.allMatches.matches[ i ].team1won )
                    {
                        diff = score2 - score1;
                    }

                    if ( this.allMatches.matches[ i ].team1battingFirst && this.allMatches.matches[ i ].team2won )
                    {
                        diff = score1- score2;
                    }
                }

                if ( diff > 0 )
                {

                    if ( this.allMatches.matches[ i ].team1won )
                    {
                        opponent = {
                                id : this.allMatches.matches[ i ].team2id,
                                fullName : this.allMatches.matches[ i ].team2fullName,
                                abbreviation : this.allMatches.matches[ i ].team2abbr,
                                score : this.allMatches.matches[ i ].team2innings[ 0 ]
                                },
                        team = {
                                id : this.allMatches.matches[ i ].team1id,
                                fullName : this.allMatches.matches[ i ].team1fullName,
                                abbreviation : this.allMatches.matches[ i ].team1abbr,
                                score : this.allMatches.matches[ i ].team1innings[ 0 ]
                                }
                    }
                    else
                    {
                        team = {
                                id : this.allMatches.matches[ i ].team2id,
                                fullName : this.allMatches.matches[ i ].team2fullName,
                                abbreviation : this.allMatches.matches[ i ].team2abbr,
                                score : this.allMatches.matches[ i ].team2innings[ 0 ]
                                },
                        opponent = {
                                id : this.allMatches.matches[ i ].team1id,
                                fullName : this.allMatches.matches[ i ].team1fullName,
                                abbreviation : this.allMatches.matches[ i ].team1abbr,
                                score : this.allMatches.matches[ i ].team1innings[ 0 ]
                                }
                    }

                    
                    // if ( this.allMatches.matches[ i ].formattedMatchDate )
                    // {
                    //     var splitDate = this.allMatches.matches[ i ].formattedMatchDate.split( ' ' );
                    //     if ( splitDate && splitDate.length > 0 )
                    //     {
                    //         extra = extra + ' ( ' + splitDate[ splitDate.length - 1 ] + ' ) ';
                    //     }
                    // }
                    margins.push( { extra : opponent,
                                    stat: diff,
                                    team : team
                                } );
                }
        }
    }

    margins.sort( function( a, b )
    {
        var abbrA = parseInt( a.stat ), abbrB = parseInt( b.stat );
        if( abbrA < abbrB ) //sort abbreviation ascending
        {
            if ( highest )
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        else
        {
            if ( highest )
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
       return 0; //default return value (no sorting)
    } );

    for ( var i = 0; i < margins.length; i++ )
    {
        var suffix = ' Wicket';
        if ( first )
        {
            suffix = ' Run';
        }


        if ( margins[ i ].stat != 1 )
        {
            suffix = suffix + 's';
        }

        margins[ i ].stat = margins[ i ].stat + suffix;
    }

    return margins;
}

PULSE.CLIENT.CRICKET.TeamStat.prototype.getAggregate = function( highest )
{
    var aggregate = [];

    for ( var i = 0; i < this.allMatches.matches.length; i++ )
    {
        if ( this.allMatches.matches[ i ].team1innings && this.allMatches.matches[ i ].team2innings && this.allMatches.matches[ i ].team1innings.length > 0 && this.allMatches.matches[ i ].team2innings.length > 0 )
        {
            var score = this.getScore( true, i, 0 ) + this.getScore( true, i, 1 );

            var extra = '';
            if ( this.allMatches.matches[ i ].formattedMatchDate )
            {
                var splitDate = this.allMatches.matches[ i ].formattedMatchDate.split( ' ' );
                if ( splitDate && splitDate.length > 0 )
                {
                    extra = extra + ' ( ' + splitDate[ splitDate.length - 1 ] + ' ) ';
                }
            }

            aggregate.push( {
                stat: score,
                team1 : {
                        id : this.allMatches.matches[ i ].team1id,
                        fullName : this.allMatches.matches[ i ].team1fullName,
                        abbreviation : this.allMatches.matches[ i ].team1abbr
                        },
                team2 : {
                        id : this.allMatches.matches[ i ].team2id,
                        fullName : this.allMatches.matches[ i ].team2fullName,
                        abbreviation : this.allMatches.matches[ i ].team2abbr
                        },
                extra : extra
                } );
        }
    }

    aggregate.sort( function( a, b )
    {
        var abbrA = parseInt( a.stat ), abbrB = parseInt( b.stat );
        if( abbrA < abbrB ) //sort abbreviation ascending
        {
            if ( highest )
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        else
        {
            if ( highest )
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
       return 0; //default return value (no sorting)
    } );

    for ( var i = 0; i < aggregate.length; i++ )
    {
        var suffix = ' Runs';
        if ( aggregate[ i ].stat == 1 )
        {
            suffix = ' Run';
        }

        aggregate[ i ].stat = aggregate[ i ].stat + suffix;
    }

    return aggregate;
}
if ( !PULSE )                       { var PULSE = {}; }
if ( !PULSE.CLIENT )                { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )        { PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.MatchDetails = function ( container, config, tournament )
{
    this.$container = $( container );
    this.tournament = tournament;
    this.config     = config;
    this.squadsData = false;
    this.scheduleData = false;
    this.standingsData = false;
    this.animate = true;
    this.refershDetails = false;
    this.teamStatsFeed = false;
    this.tournamentGroupId = 'ipl';

    this.urlGenerator = PULSE.CLIENT.CRICKET.getUrlGenerator( this.tournament );

    this.template = 'details-new';

    this.headToHeadTemplate = config.headToHeadTemplate || 'headToHead';

    this.setSubscriptions();

    this.matchId = this.$container.attr('data-match-id');

    if ( this.config )
    {
        if ( this.config.template )
        {
            this.template = this.config.template
        }

        if ( this.config.matchId )
        {
            this.matchId = this.config.matchId;
        }
        if ( this.config.tournamentGroupId )
        {
            this.tournamentGroupId = this.config.tournamentGroupId;
        }
        if ( this.config.noHeadToHead )
        {
            this.noHeadToHead = true;
        }
    }

    if ( !this.tournament.squadsData.length )
    {
        this.tournament.getSquads();
    }
    else
    {
        this.squadsData = true;
    }

    if ( !this.tournament.scheduleData.length )
    {
        this.tournament.getMatchSchedule();
    }
    else
    {
        this.scheduleData = true;
    }

    if ( !this.tournament.standingsData.length )
    {
        this.tournament.getGroupStandings();
    }
    else
    {
        this.standingsData = true;
    }
    this.dateFormat = 'dddd dS mmmm yyyy';

    if ( this.standingsData && this.scheduleData && this.squadsData && this.active )
    {
        this.showMatchDetails( this.$container );
    }
};


PULSE.CLIENT.CRICKET.MatchDetails.prototype.setSubscriptions = function()
{
    var that = this;

    $('body').on( 'schedule/update', function( e, params )
    {
        if( params.success )
        {
            that.scheduleData = true;
            if ( that.standingsData && that.scheduleData && that.squadsData && that.active )
            {
                that.showMatchDetails( that.$container );
            }
        }
    } );

    $('body').on( 'standings/update', function( e, params )
    {
        if( params.success )
        {
            that.standingsData = true;
            if ( that.standingsData && that.scheduleData && that.squadsData && that.active )
            {
                that.showMatchDetails( that.$container );
            }
        }
    } );

    $('body').on( 'squads/update', function( e, params )
    {
        if( params.success )
        {
            that.squadsData = true;
            if ( that.standingsData && that.scheduleData && that.squadsData && that.active )
            {
                that.showMatchDetails( that.$container );
            }
        }
    } );

    this.$container.on( 'click', '.detailTweet', function( e )
    {
        e.preventDefault();
        var matchLink = $( this ).attr( 'data-match-link' );
        var tag = $( this ).attr( 'data-tag' );
        PULSE.CLIENT.TwitterController.tweetEvent('tweet', { hashtags: [ tag ], text: window.location.origin + matchLink + ' @IPL' } );
    } );
};

PULSE.CLIENT.CRICKET.MatchDetails.prototype.showMatchDetails = function( $container )
{
    var that = this;

    this.standingsModel = this.tournament.getStandingsModel( 0 );
    var matchId = $container.attr('data-match-id');

    if ( this.matchId )
    {
        matchId = this.matchId;
    }

    if ( $container.attr('data-loaded') != 1 || $container.attr( 'data-match-id' ) != matchId ) {
        var match = this.tournament.getMatchById(matchId);
        match = match.getFullModel();

        this.team1 = match.team1id;
        this.team2 = match.team2id;

        match.team1Stats = this.getTeamStandings( match.team1id );
        match.team2Stats = this.getTeamStandings( match.team2id );

        var team1CaptainId = this.getTeamCaptain( match.team1id);
        var team2CaptainId = this.getTeamCaptain( match.team2id);

        PULSE.CLIENT.Template.publish(
            this.template,
            $container,
            match,
            function() {
                $container.attr('data-loaded', '1');
                $container.attr( 'data-match-id', matchId )

                if ( team1CaptainId )
                {
                    that.urlGenerator.setPlayerImageLoader(team1CaptainId, '284', $container.find('.captainHome .img') );
                }
                else
                {
                    that.urlGenerator.setShadowPlayerImg( '284', $container.find('.captainHome .img') );
                }

                if ( team2CaptainId )
                {
                    that.urlGenerator.setPlayerImageLoader(team2CaptainId, '284', $container.find('.captainAway .img') );
                }
                else
                {
                    that.urlGenerator.setShadowPlayerImg( '284', $container.find('.captainAway .img') );
                }

                var matchDate = PULSE.CLIENT.DateUtil.parseDateTime( match.matchDate );
                var $matchCountdownContainer = $container.find( '.countdownContainer' + matchId );
                that.initCountdown( $matchCountdownContainer, matchDate.getTime() );

                if (that.tournamentState === 'U') {
                    $('.qsItem').hide();
                }

                if( that.config.setVenueImage ) {
                    $container.addClass( "venue-" + match.venue.id )
                }

                if( match.live === true ) {
                    $container.addClass( "live" );
                } else {
                    $container.removeClass( "live" );
                }

                that.renderedDetails = true;

                that.$headToHeadContainer = $container.find( '.heroRow.previous' );
                // if ( that.teamStatsFeed && $headToHeadContainer )
                if ( that.$headToHeadContainer && ! that.noHeadToHead && !that.headToHead )
                {
                    that.renderMatchHeadToHead();
                }

                /**
                 * check if we have defined a callback and a callback context, invoke if so
                 */
                if( that.config.callback )
                {
                    if( that.config.callbackContext )
                    {
                        that.config.callback.call( that.config.callbackContext );
                    }
                    else
                    {
                        that.config.callback();
                    }
                }
            }
        );
    }
    else
    {
        $container.show();
    }
};

PULSE.CLIENT.CRICKET.MatchDetails.prototype.renderMatchHeadToHead = function()
{
    if ( this.$headToHeadContainer && this.team1 && this.team2 && this.headToHeadTemplate )
    {
        this.headToHead = new PULSE.CLIENT.CRICKET.TeamHeadToHead( this.$headToHeadContainer, this.team1, this.team2, this.tournament, this.headToHeadTemplate );
    }
};

PULSE.CLIENT.CRICKET.MatchDetails.prototype.getOrdinalSuffix = function( i ) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}


PULSE.CLIENT.CRICKET.MatchDetails.prototype.getTeamStandings = function(id)
{

    var details = {};

    for (var i=0; i < this.standingsModel.standings.length; i++) {

        if ( this.standingsModel.standings[i].team.id === id) {

            details.position = this.getOrdinalSuffix( this.standingsModel.standings[i].position ) + ( this.standingsModel.standings[i].qualified ? ' (Q)' : '' );
            details.recentForm = this.setRecentForm( this.standingsModel.standings[i].form, 5 );
        }
    }
    return details;
};


PULSE.CLIENT.CRICKET.MatchDetails.prototype.getTeamCaptain = function(id)
{
    if (id < 0) {

        return false;
    }
    else
    {
        var squad = this.tournament.getSquadWithCaptainModel(id);

        if (squad.captain) {
            return squad.captain.id;
        }
        return false;
    }
};


PULSE.CLIENT.CRICKET.MatchDetails.prototype.setRecentForm = function( form, limit )
{
    var newLimit;
    totalForm = [];

    if ( form )
    {
        form.reverse();
        newLimit = form.length;
        if ( limit && limit < newLimit )
        {
            newLimit = limit;
        }
        for ( var i = 0, iLimit = newLimit; i < iLimit; i++ ) {

            if ( form[ i ].outcome && form[ i ].matchId )
            {
                var matchOutcome;
                switch ( form[i].outcome )
                {
                    case 'W':
                        matchOutcome = 'won';
                        break;
                    case 'L':
                        matchOutcome = 'lost';
                        break;
                    case 'D':
                        matchOutcome = 'drawn'
                        break;
                }
                var match = this.tournament.getMatchById( form[ i ].matchId.name );
                var matchModel;
                if ( match )
                {
                    matchModel = match.getFullModel();
                }
                totalForm.push( { outcome : matchOutcome, match : matchModel } )
            }
        }
    }
    if ( totalForm.length > 0 )
    {
        totalForm.reverse();
    }

    return totalForm;
};


PULSE.CLIENT.CRICKET.MatchDetails.prototype.initCountdown = function( $container, time )
{
    var countdown = new PULSE.CLIENT.CRICKET.CountdownText( $container, time );
};


PULSE.CLIENT.CRICKET.MatchDetails.prototype.appendTeamTwitterNames = function( matches )
{
    for (var i = 0; i < matches.matches.length; i++) {
        var model = this.tournament.getMatchById(matches.matches[i].matchId);
        if (model.scheduleData.team1) {

            var team1id = (typeof model.scheduleData.team1 !== 'undefined' ? model.scheduleData.team1.team.id : '');
            var team2id = (typeof model.scheduleData.team2 !== 'undefined' ? model.scheduleData.team2.team.id : '');

            matches.matches[i].team1Twitter = this.tournament.getTwitterForTeam(team1id);
            matches.matches[i].team2Twitter = this.tournament.getTwitterForTeam(team2id);
        }
        else {
            matches.matches[i].team1Twitter = '';
            matches.matches[i].team2Twitter = '';
        }
    }

    return matches;
};

PULSE.CLIENT.CRICKET.MatchDetails.prototype.activate = function()
{
    if( !this.active )
    {
        if ( this.standingsData && this.scheduleData && this.squadsData )
        {
            this.showMatchDetails( this.$container );
        }
    }
    this.active = true;
};

PULSE.CLIENT.CRICKET.MatchDetails.prototype.deactivate = function()
{
    this.active = false;
    this.$container.hide();
};
if ( !PULSE )                       { var PULSE = {}; }
if ( !PULSE.CLIENT )                { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )        { PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.ScheduleHero = function ( container, config, tournament, matchId )
{
    this.$container = $( container );
    this.tournament = tournament;
    this.config     = config;
    this.matchId = matchId;

    this.template = config.scheduleHeroTemplate || 'scheduleHero';

    this.setHeadToHead = false;

    if ( this.config )
    {
        if ( this.config.template )
        {
            this.template = this.config.template
        }
        if ( this.config.templates && this.config.templates.scheduleHero )
        {
            this.template = this.config.templates.scheduleHero;
        }
    }

    this.config.templates = this.config.templates || {};

    var firstConfig = {
        template : this.template,
        matchId : this.matchId,
        noHeadToHead : this.config.templates.headToHead ? false : true,
        headToHeadTemplate: this.config.templates.headToHead || false,
        callback: this.config.callback || false,
        callbackContext: this.config.callbackContext || false,
        setVenueImage: this.config.setVenueImage || false
    };

    this.firstMatchDetail = new PULSE.CLIENT.CRICKET.MatchDetails( this.$container, firstConfig, this.tournament );

    this.setHeadToHead = true;
};

PULSE.CLIENT.CRICKET.ScheduleHero.prototype.removeListeners = function()
{
    this.$container.unbind( 'click' );
}

PULSE.CLIENT.CRICKET.ScheduleHero.prototype.activate = function()
{
    this.$container.show();
    this.active = true;
    this.firstMatchDetail.activate();
}

PULSE.CLIENT.CRICKET.ScheduleHero.prototype.deactivate = function()
{
    this.$container.hide();
    this.active = false;
    this.firstMatchDetail.deactivate();
}
if (!PULSE) 				{ var PULSE = {}; }
if (!PULSE.CLIENT) 			{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 	{ PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.Tournament = function( data )
{
	//console.log(data);
	this.dm = PULSE.CLIENT.getDataManager();
	this.globalUrlGenerator = PULSE.CLIENT.CRICKET.getUrlGenerator();
	this.tournamentUrlGenerator = PULSE.CLIENT.CRICKET.getUrlGenerator( data );

	this.setData( data );

	this.matches = {};

	this.completeMatches 	= [];
	this.liveMatches 		= [];
	this.upcomingMatches 	= [];

	this.scheduleData 		= [];
	this.squadsData 		= [];
	this.standingsData 		= [];

	this.playerVoteQuestionsData = [];

	this.photosData 			 = {};
	this.twitterTeamUrls 		 = {};
	this.twitterTeamData 		 = {};
	this.teamTournamentStatsData = {};
	this.teamCareerStatsData 	 = {};
	this.playerCareerStatsData 	 = {};
	this.twitterHistData 		 = {};

	this.players = {};
	this.feedPhotos = 'photos';
};

/**
 * Gets a tournament objects and saves its properties as the properties
 * of this tournament object (i.e., this.tournamentName)
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.setData = function( data )
{
	for( var d in data )
	{
		this[d] = data[d];
	}
};

/**
 * Returns the total number of matches this tournament has
 * @return {Number} total matches for this tournament
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.matchCount = function()
{
	return this.upcomingMatches.length +
           this.liveMatches.length +
           this.completeMatches.length;
};



/**
 *
 * TOURNAMENT MATCHES
 *
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.updateMatches = function ()
{
	var schedule = this.scheduleData;
	if( !schedule ) return;

	for( var i = 0, iLimit = schedule.length; i < iLimit; i++ )
	{
		var match 	= schedule[i],
			matchId = match.matchId.name;

		if( !this.matches[ matchId ] )
		{
			this.matches[ matchId ] = new PULSE.CLIENT.CRICKET.Match( this, matchId );
		}
		this.matches[ matchId ].setScheduleData( match );
	};
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMatchById = function( matchId )
{
	return this.matches[matchId];
};

PULSE.CLIENT.CRICKET.Tournament.prototype.totalMatches = function()
{
	if( this.scheduleData )
	{
		return this.scheduleData.length;
	}
	return 0;
};


/*
 * The tournament always keeps track of its matches and their states through
 * the schedule file and the scoring files belonging to live matches
 * @params 'live' / 'upcoming' / 'complete'
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.registerMatchAs = function( type, matchId )
{
	this.unregisterMatchAs( type, matchId );
	this[ type + 'Matches' ].push( matchId );
};
PULSE.CLIENT.CRICKET.Tournament.prototype.hasMatchRegisteredAs = function( type, matchId )
{
	var that = this;
	if( $.inArray( matchId, that[ type + 'Matches' ] ) > -1 )
	{
		return true;
	}
	return false;
};
PULSE.CLIENT.CRICKET.Tournament.prototype.unregisterMatchAs = function( type, matchId )
{
	var that = this;
	this[ type + 'Matches' ] = jQuery.grep( that[ type + 'Matches' ], function( value ) {
  		return value !== matchId;
	} );
};

/*
 * Used to retrieve the match object that's upcoming or complete for a respective team
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getNextMatchForTeam = function( teamId )
{
	for( var i = 0, iLimit = this.upcomingMatches.length; i < iLimit; i++ )
	{
		var matchId = this.upcomingMatches[i],
			match 	= this.getMatchById( matchId );

		if( match.hasTeamWithId( teamId ) )
		{
			return match;
		}
	}
};
PULSE.CLIENT.CRICKET.Tournament.prototype.getLastMatchForTeam = function( teamId )
{
	for( var i = this.completeMatches.length - 1; i >= 0; i-- )
	{
		var matchId = this.completeMatches[i],
			match 	= this.getMatchById( matchId );

		if( match.hasTeamWithId( teamId ) )
		{
			return match;
		}
	}
};



/**
 *
 * 	USEFUL TOURNAMENT FUNCTIONS
 *	for extracting teams, matches, players etc.
 * 	please note: these are not models
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamById = function( id )
{
	if( !this.squadsData || this.squadsData.length === 0 ) return;

	for( var i = 0, iLimit = this.squadsData.length; i < iLimit; i++ )
	{
		var squad = this.squadsData[i];
		if( squad.team.id === +id )
		{
			return squad;
		}
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamByAbbr = function( abbr )
{
	if( !this.squadsData || this.squadsData.length === 0 ) return;

	for( var i = 0, iLimit = this.squadsData.length; i < iLimit; i++ )
	{
		var squad = this.squadsData[i];
		if( squad.team.abbreviation === abbr )
		{
			return squad;
		}
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamByPlayerId = function( playerId )
{
	if( !this.squadsData || this.squadsData.length === 0 ) return;

	for( var i = 0, iLimit = this.squadsData.length; i < iLimit; i++ )
	{
		var squad = this.squadsData[i];
		for( var j = 0, jLimit = squad.players.length; j < jLimit; j++ )
		{
			if( squad.players[j].id === +playerId )
			{
				return squad.team;
			}
		}
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerById = function( playerId )
{
    if( !this.squadsData || this.squadsData.length === 0 ) return;

    for( var i = 0, iLimit = this.squadsData.length; i < iLimit; i++ )
    {
        var squad = this.squadsData[i];
        for( var j = 0, jLimit = squad.players.length; j < jLimit; j++ )
        {
            if( squad.players[j].id === +playerId )
            {
                return squad.players[j];
            }
        }
    }
};

/**
 * Returns an array of team objects, ordered alphabetically; if given a matchState,
 * it only considers teams which have matches in the particular match state; if not,
 * it returns all teams which have matches in the schedule
 * @param  {String} matchState optional, denotes the state of the matches filtered,
 *                             "upcoming", "live", "complete"
 * @param  {Object} filterOptions optional, can contain matchState, venueId
 * @return {Array<TIPSY3.Team>}  Array of TIPSY3 team objects, sorted alphabetically
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamListFromSchedule = function( filterOptions )
{
	if( typeof filterOptions === 'object' )
	{
		var matchState = filterOptions.matchState;
		var venueId = filterOptions.venueId;
	}
	else
	{
		matchState = filterOptions;
	}

	if( matchState && this[ matchState + 'Matches' ].length === 0 )
	{
		return [];
	}

	var data  = this.scheduleData,
		teams = [];

	for ( var i = 0; i < data.length; i++ )
	{
		matchId = data[i].matchId.name;
		var match = this.getMatchById( matchId );

		if( ( !matchState || this.hasMatchRegisteredAs( matchState, matchId ) ) &&
			( !venueId || match.getVenue().id == venueId ) )
		{
			var team1 = data[i].team1;
			var team2 = data[i].team2;

			if ( team1 && team1.team )
			{
				var t1 = team1.team;
				if ( !PULSE.CLIENT.Util.objectFoundById( teams, t1 ) )
				{
					teams.push( t1 );
				}
			}

			if ( team2 && team2.team )
			{
				var t2 = team2.team;
				if ( !PULSE.CLIENT.Util.objectFoundById( teams, t2 ) )
				{
					teams.push( t2 );
				}
			}
		}
	}

	// Sort teams array ( by abbreviation ) alphabetically
	teams.sort( function(a, b)
	{
        var abbrA = a.fullName, abbrB = b.fullName;
        if ( abbrA < abbrB ) //sort abbreviation ascending
        {
        	return -1;
        }
        if ( abbrA > abbrB )
        {
            return 1;
        }
        return 0; //default return value (no sorting)
    } );

	return teams;
};

/**
 * Returns a hash map venue id mapped to venue objects, given a match type (state) and/or team ID
 * Match types (states) = [ "upcoming", "live", "complete" ]
 *
 * See Venue object in Tipsy3 spec
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getVenueListFromSchedule = function( filterOptions )
{
	if( typeof filterOptions === 'object' )
	{
		var matchState = filterOptions.matchState;
		var teamId = filterOptions.teamId;
	}
	else
	{
		matchState = filterOptions;
	}

	if( matchState && this[ matchState + 'Matches' ].length === 0 ) return [];

	var data  = this.scheduleData,
		venues = [];

	for ( var i = 0; i < data.length; i++ )
	{
		matchId = data[i].matchId.name;
		var match = this.getMatchById( matchId );

		if( ( !matchState || this.hasMatchRegisteredAs( matchState, matchId ) ) &&
			( !teamId || teamId == match.getTeamId( 0 ) || teamId == match.getTeamId( 1 ) ) )
		{
			var venue = data[i].venue;
			if ( !PULSE.CLIENT.Util.objectFoundById( venues, venue ) )
			{
				venues.push( venue );
			}
		}
	}

	// Sort teams array ( by abbreviation ) alphabetically
	venues.sort( function(a, b)
	{
        var abbrA = a.shortName, abbrB = b.shortName;
        if ( abbrA < abbrB ) //sort abbreviation ascending
        {
        	return -1;
        }
        if ( abbrA > abbrB )
        {
            return 1;
        }
        return 0; //default return value (no sorting)
    } );

	return venues;
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getGroupListFromSchedule = function( matchState )
{
	if( this[ matchState + 'Matches' ].length === 0 ) return [];

	var data  = this.scheduleData,
		groups = [];

	for ( var i = 0; i < data.length; i++ )
	{
		matchId = data[i].matchId.name;

		if( this.hasMatchRegisteredAs( matchState, matchId ) )
		{
			var group = data[i].groupName;
			if ($.inArray( group, groups ) === - 1 && group !== '')
			{
				groups.push( group );
			}
		}
	}

	return groups;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getLatestDidYouKnowText = function()
{
	if( this.DYK && this.DYK[0] )
	return this.DYK[0].text;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPollModel = function()
{
	if (this.pulsePollData.length === 0) {
		return false;
	}

	var array = [];

	for (var i=0; i < this.pulsePollData.length; i++ )
	{
		var poll = this.pulsePollData[i];

		var model = {
			id 		   : poll.id,
			text 	   : poll.text,
			totalVotes : poll.totalVotes
		}

		for (var x =0; x < poll.options.length; x++)
		{
			var opts = poll.options[x];

			if (opts.option == 'Yes') {

				model.yes = {
					percent: opts.percentage,
					voteOpt: x
				}
			}
			else if (opts.option == 'No') {

				model.no = {
					percent: opts.percentage,
					voteOpt: x
				}
			}
		}

		array.push(model);
	}

	return { polls: array }
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getPollById = function(id)
{
	var polls = this.getPollModel();

	for (var i=0; i < polls.polls.length; i++)
	{
		var poll = polls.polls[i];

		if (poll.id == id) {

			return poll;
		}
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTournamentState = function()
{
	if( this.scheduleData.length )
	{
		var match = this.scheduleData[0];
		if( this.scheduleData.length === this.upcomingMatches.length )
		{
			return "U";
		}

		match = this.scheduleData[ this.scheduleData.length - 1 ];
		if( this.scheduleData.length === this.completeMatches.length )
		{
			return "C";
		}

		return "L";
	}
	else if( this.standingsData.length )
	{
		var groupStage = this.standingsData[0];
		if( groupStage && groupStage.standings[0].played === 0 )
		{
			return "U";
		}

		var knockoutStage = this.standingsData[1];
		if( knockoutStage && knockoutStage.standings )
		{
			var total = 0;
			for( var i = 0, iLimit = knockoutStage.standings.length; i < iLimit; i++ )
			{
				var standing = knockoutStage.standings[i];
				total += standing.played;
			}

			if( total === 8 )
			{
				return "C";
			}
		}

		return "L";
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.isInPlayoffStage = function()
{
	for( var i = this.scheduleData.length - 1; i > 0; i-- )
	{
		var matchData 	= this.scheduleData[ i - 1 ],
			matchId 	= matchData.matchId.name,
			match 		= this.getMatchById( matchId ),
			matchState 	= match.getMatchState();

		// if a playoff match is complete, or if the last group match is complete
		if( this.playoffs[ this.scheduleData[i].matchId.name ] && matchState === "C" )
		{
			return true;
		}
	}
	return false;
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getNextMatchId = function()
{
	if (this.scheduleData) {

		for (var _i = 0, _length = this.scheduleData.length; _i < _length; _i++) {

			var match = this.scheduleData[_i];
			if (match.matchState !== 'C') {

			 	return match.matchId.name
			}
		}
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMCSettings = function()
{
	var MCSettings = this["mcDefaults"] || {};
	return MCSettings;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.supportsSocial = function()
{
	var settings = this.getMCSettings();
	return settings.social;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.supportsProfileLinks = function()
{
	var settings = this.getMCSettings();
	return settings.playerProfiles;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getModalTheatre = function( albumId )
{
	if( !this.photosData[albumId] )
	{
		return;
	}
	var model = this.photosData[albumId].gallery;

	return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPhotoAlbumModel = function( albumId, limit )
{
	if( !this.photosData[albumId] || !this.photosData[albumId].photos )
	{
		return { photos: [] };
	}
	var model = {},
		array = [],
		totalPhotos = this.photosData[albumId].photos.length,
		iLimit = limit ? Math.min( limit, totalPhotos ) : totalPhotos;

	for( var i = totalPhotos - 1; i >= totalPhotos - iLimit; i-- )
	{
		var photo = this.photosData[albumId].photos[i],
			orientation = photo.metadata_orientation;

		if( orientation === "landscape" )
		{
			var thumb = photo[ "size_150x100" ] || photo[ "size_100x67" ] || photo[ "size_229x152" ] || photo[ "size_630x420" ];
		}
		else
		{
			var thumb = photo[ "size_150x100" ] || photo[ "size_100x67" ] || photo[ "size_280x420" ];
		}

		var photoModel = {
			orientation: orientation,
			thumb: thumb,
			idx: i
		};
		array.push( photoModel );
	}
	model.photos = array;

	return model;
};

if (!PULSE) 							{ var PULSE = {}; }
if (!PULSE.CLIENT) 						{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 				{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) 	{ PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 *
 * START TOURNAMENT-SPECIFIC FEEDS
 *
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.getMatchSchedule = function( options )
{
	if ( this.scheduleLoaded )
	{
		return;
	}

	this.scheduleUrl 	 = this.tournamentUrlGenerator.makeDataUrl( 'matchSchedule2' );
	this.feedSchedule 	 = 'matchSchedule2';
	this.scheduleInterval = 60;
	this.scheduleCallback = 'onMatchSchedule';

	var start;
	if( _.isObject( options ) )
	{
		var start = options.start;
		this.scheduleInterval = this.scheduleInterval || options.interval;
	}

	this.dm.addFeed( this.feedSchedule, this.scheduleUrl,
	 	this.scheduleInterval, this.scheduleCallback, [ this ] );

	this.scheduleLoaded = true;

	if( _.isBoolean( options ) || start )
	{
		this.dm.start( this.scheduleUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getSquads = function( start )
{
	if ( this.squadsLoaded )
	{
		return;
	}
	this.squadsUrl		= this.tournamentUrlGenerator.makeDataUrl( 'squads' );
	this.feedSquads		= 'squads';
	this.squadsInterval	= 300;
	this.squadsCallback	= 'onSquads';

	this.dm.addFeed( this.feedSquads, this.squadsUrl,
	 	this.squadsInterval, this.squadsCallback, [ this ] );

	this.squadsLoaded = true;

	if( start )
	{
		this.dm.start( this.squadsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getGroupStandings = function( start )
{
	if ( this.groupStandingsLoaded )
	{
		return;
	}
	this.standingsUrl		= this.tournamentUrlGenerator.makeDataUrl( 'groupStandings' );
	this.feedStandings		= 'groupStandings';
	this.standingsInterval	= 300;
	this.standingsCallback	= 'onGroupStandings';

	this.dm.addFeed( this.feedStandings, this.standingsUrl,
	 	this.standingsInterval, this.standingsCallback, [ this ] );

	this.groupStandingsLoaded = true;

	if( start )
	{
		this.dm.start( this.standingsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayersLookup = function( start )
{
	if( !this.playersLookupLoaded )
	{
		return;
	}

	this.playersMapUrl		= this.tournamentUrlGenerator.makeDataUrl( 'playersMap' );
	this.feedPlayersMap		= 'playersMap';
	this.playersMapInterval	= 0; // doesn't need to refresh
	this.playersMapCallback	= 'onPlayersMap';

	this.dm.addFeed( this.feedPlayersMap, this.playersMapUrl,
	 	this.playersMapInterval, this.playersMapCallback, [ this ] );

	this.playersLookupLoaded = true;

	if( start )
	{
		this.dm.start( this.playersMapUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getAllStats = function( abridged )
{
	if ( this.statsLoaded )
	{
		return;
	}

	this.getMostRunsData( abridged );
	this.getMostWicketsData( abridged );
	this.getMostFoursData( abridged );
	this.getMostSixesData( abridged );

	this.getBestBattingStrikeRateData( abridged );

	this.getMostFiftiesData( abridged );
	this.getMostCenturiesData( abridged );


	this.getHighestScoresData();
	this.getBattingAverageData( abridged );

	this.getBestEconomyData();
	this.getBowlingAverageData( abridged );

	this.statsLoaded = true;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsData = function( abridged, start )
{
	if( abridged )
	{

		this.mostRunsUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostRuns' );
	}
	else
	{
		this.mostRunsUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostRuns' );
	}

	this.feedMostRuns		= 'mostRuns';
	this.mostRunsInterval	= 90;
	this.mostRunsCallback	= 'onMostRuns';

	this.dm.addFeed( this.feedMostRuns, this.mostRunsUrl,
	 	this.mostRunsInterval, this.mostRunsCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.mostRunsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsOverData = function( abridged, start )
{
	this.mostRunsOverUrl	    = this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostRunsOver' );
	this.feedMostRunsOver		= 'mostRunsOver';
	this.mostRunsOverInterval	= 90;
	this.mostRunsOverCallback	= 'onMostRunsOver';

	this.dm.addFeed( this.feedMostRunsOver, this.mostRunsOverUrl,
	 	this.mostRunsOverInterval, this.mostRunsOverCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.mostRunsOverUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostWicketsData = function( abridged, start )
{
	if( abridged )
	{
		this.mostWicketsUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostWickets' );
	}
	else
	{
		this.mostWicketsUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostWickets' );
	}

	this.feedMostWickets		= 'mostWickets';
	this.mostWicketsInterval	= 90;
	this.mostWicketsCallback	= 'onMostWickets';

	this.dm.addFeed( this.feedMostWickets, this.mostWicketsUrl,
	 	this.mostWicketsInterval, this.mostWicketsCallback, [ this ] );

	this.mostWicketsLoaded = true;

	if( start )
	{
		this.dm.start( this.mostWicketsUrl );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFourWicketsData = function( start )
{
	this.mostFourWicketsUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostFourWickets' );

	this.feedMostFourWickets		= 'mostFourWickets';
	this.mostFourWicketsInterval	= 90;
	this.mostFourWicketsCallback	= 'onMostWickets';

	this.dm.addFeed( this.feedMostFourWickets, this.mostFourWicketsUrl,
	 	this.mostFourWicketsInterval, this.mostFourWicketsCallback, [ this ] );

	this.mostFourWicketsLoaded = true;

	if( start )
	{
		this.dm.start( this.mostFourWicketsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsConcededData = function( abridged, start )
{
	if( abridged )
	{
		this.mostRunsConcededUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostRunsConcededInnings' );
	}
	else
	{
		this.mostRunsConcededUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostRunsConcededInnings' );
	}

	this.feedMostRunsConceded	= 'mostRunsConcededInnings';
	this.mostRunsConcededInterval	= 90;
	this.mostRunsConcededCallback	= 'onMostRuns';

	this.dm.addFeed( this.feedMostRunsConceded, this.mostRunsConcededUrl,
	 	this.mostRunsConcededInterval, this.mostRunsConcededCallback, [ this ] );

	this.mostRunsConcededLoaded = true;

	if( start )
	{
		this.dm.start( this.mostRunsConcededUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsConcededOverData = function( abridged, start )
{
	this.mostRunsConcededOverUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostRunsConcededOver' );

	this.feedMostRunsConcededOver	= 'mostRunsConcededOver';
	this.mostRunsConcededOverInterval	= 90;
	this.mostRunsConcededOverCallback	= 'onMostRunsConcededOver';

	this.dm.addFeed( this.feedMostRunsConcededOver, this.mostRunsConcededOverUrl,
	 	this.mostRunsConcededOverInterval, this.mostRunsConcededOverCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.mostRunsConcededUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostSixesData = function( abridged, start )
{
	if( abridged )
	{
		this.mostSixesUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostSixes' );
	}
	else
	{
		this.mostSixesUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostSixes' );
	}

	this.feedMostSixes		= 'mostSixes';
	this.mostSixesInterval	= 90;
	this.mostSixesCallback	= 'onMostSixes';

	this.dm.addFeed( this.feedMostSixes, this.mostSixesUrl,
	 	this.mostSixesInterval, this.mostSixesCallback, [ this ] );

	this.mostSixesLoaded = true;

	if( start )
	{
		this.dm.start( this.mostSixesUrl );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getMostSixesInningsData = function( abridged, start )
{
	if( abridged )
	{
		this.mostSixesInningsUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostSixesInnings' );
	}
	else
	{
		this.mostSixesInningsUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostSixesInnings' );
	}

	this.feedMostSixesInnings		= 'mostSixesInnings';
	this.mostSixesInningsInterval	= 90;
	this.mostSixesInningsCallback	= 'onMostSixes';

	this.dm.addFeed( this.feedMostSixesInnings, this.mostSixesInningsUrl,
	 	this.mostSixesInningsInterval, this.mostSixesInningsCallback, [ this ] );

	this.mostSixesInningsLoaded = true;

	if( start )
	{
		this.dm.start( this.mostSixesInningsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestBattingStrikeRateData = function( abridged, start )
{
	if( abridged )
	{
		this.bestBattingStrikeRateUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'bestBattingStrikeRate' );
	}
	else
	{
		this.bestBattingStrikeRateUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBattingStrikeRate' );
	}

	this.feedBestBattingStrikeRate	= 'bestBattingStrikeRate';
	this.bestBattingStrikeRateInterval	= 90;
	this.bestBattingStrikeRateCallback	= 'onBestBattingStrikeRate';

	this.dm.addFeed( this.feedBestBattingStrikeRate, this.bestBattingStrikeRateUrl,
	 	this.bestBattingStrikeRateInterval, this.bestBattingStrikeRateCallback, [ this ] );

	this.bestBattingStrikeRateLoaded = true;

	if( start )
	{
		this.dm.start( this.bestBattingStrikeRateUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestBattingStrikeRateInningsData = function( abridged, start )
{
	if( abridged )
	{
		this.bestBattingStrikeRateInningsUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'bestBattingStrikeRateInnings' );
	}
	else
	{
		this.bestBattingStrikeRateInningsUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBattingStrikeRateInnings' );
	}

	this.feedBestBattingStrikeInningsRate		= 'bestBattingStrikeRateInnings';
	this.bestBattingStrikeRateInningsInterval	= 90;
	this.bestBattingStrikeRateInningsCallback	= 'onBestBattingStrikeRate';

	this.dm.addFeed( this.feedBestBattingStrikeInningsRate, this.bestBattingStrikeRateInningsUrl,
	 	this.bestBattingStrikeRateInningsInterval, this.bestBattingStrikeRateInningsCallback, [ this ] );

	this.bestBattingStrikeRateInningsLoaded = true;

	if( start )
	{
		this.dm.start( this.bestBattingStrikeRateInningsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFoursData = function( abridged, start )
{
	if( abridged )
	{
		this.mostFoursUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostFours' );
	}
	else
	{
		this.mostFoursUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostFours' );
	}

	this.feedMostFours		= 'mostFours';
	this.mostFoursInterval	= 90;
	this.mostFoursCallback	= 'onMostFours';

	this.dm.addFeed( this.feedMostFours, this.mostFoursUrl,
	 	this.mostFoursInterval, this.mostFoursCallback, [ this ] );

	this.mostFoursLoaded = true;

	if( start )
	{
		this.dm.start( this.mostFoursUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFoursInningsData = function( abridged, start )
{
	if( abridged )
	{
		this.mostFoursInningsUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostFoursInnings' );
	}
	else
	{
		this.mostFoursInningsUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostFoursInnings' );
	}

	this.feedMostFoursInnings		= 'mostFoursInnings';
	this.mostFoursInningsInterval	= 90;
	this.mostFoursInningsCallback	= 'onMostFours';

	this.dm.addFeed( this.feedMostFoursInnings, this.mostFoursInningsUrl,
	 	this.mostFoursInningsInterval, this.mostFoursInningsCallback, [ this ] );

	this.mostFoursInningsLoaded = true;

	if( start )
	{
		this.dm.start( this.mostFoursInningsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFiftiesData = function( abridged, start )
{
	if( abridged )
	{
		this.mostFiftiesUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostFifties' );
	}
	else
	{
		this.mostFiftiesUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostFifties' );
	}

	this.feedMostFifties		= 'mostFifties';
	this.mostFiftiesInterval	= 90;
	this.mostFiftiesCallback		= 'onMostFifties';

	this.dm.addFeed( this.feedMostFifties, this.mostFiftiesUrl,
	 	this.mostFiftiesInterval, this.mostFiftiesCallback, [ this ] );

	this.mostFiftiesLoaded = true;

	if( start )
	{
		this.dm.start( this.mostFiftiesUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostCenturiesData = function( abridged, start )
{
	if( abridged )
	{
		this.mostCenturiesUrl	= this.tournamentUrlGenerator.makeAbridgedStatsDataUrl( 'mostCenturies' );
	}
	else
	{
		this.mostCenturiesUrl	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostCenturies' );
	}

	this.feedMostCenturies		= 'mostCenturies';
	this.mostCenturiesInterval	= 90;
	this.mostCenturiesCallback	= 'onMostCenturies';

	this.dm.addFeed( this.feedMostCenturies, this.mostCenturiesUrl,
	 	this.mostCenturiesInterval, this.mostCenturiesCallback, [ this ] );

	this.mostCenturiesLoaded = true;

	if( start )
	{
		this.dm.start( this.mostCenturiesUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestEconomyData = function( start )
{
	this.bestEconomyUrl			= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBowlingEconomy' );
	this.feedBestEconomy		= 'bestBowlingEconomy';
	this.bestEconomyInterval	= 90;
	this.bestEconomyCallback	= 'onBestEconomy';

	this.dm.addFeed( this.feedBestEconomy, this.bestEconomyUrl,
	 	this.bestEconomyInterval, this.bestEconomyCallback, [ this ] );

	this.bestEconomyLoaded = true;

	if( start )
	{
		this.dm.start( this.bestEconomyUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestEconomyInningsData = function( start )
{
	this.bestEconomyInningsUrl			= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBowlingEconomyInnings' );
	this.feedBestEconomyInnings		= 'bestBowlingEconomyInnings';
	this.bestEconomyInningsInterval	= 90;
	this.bestEconomyInningsCallback	= 'onBestEconomy';

	this.dm.addFeed( this.feedBestEconomyInnings, this.bestEconomyInningsUrl,
	 	this.bestEconomyInningsInterval, this.bestEconomyInningsCallback, [ this ] );

	this.bestEconomyInningsLoaded = true;

	if( start )
	{
		this.dm.start( this.bestEconomyInningsUrl );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getBestBowlingData = function( start )
{
	this.bestBowlingUrl			= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBowlingInnings' );
	this.feedBestBowling		= 'bestBowlingInnings';
	this.bestBowlingInterval	= 90;
	this.bestBowlingCallback	= 'onBestBowlingInnings';

	this.dm.addFeed( this.feedBestBowling, this.bestBowlingUrl,
	 	this.bestBowlingInterval, this.bestBowlingCallback, [ this ] );

	this.bestBowlingLoaded = true;

	if( start )
	{
		this.dm.start( this.bestBowlingUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getFastestBallData = function( start )
{
	this.fastestBallUrl			= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'fastestBall' );
	this.feedFastestBall		= 'fastestBall';
	this.fastestBallInterval	= 90;
	this.fastestBallCallback	= 'onFastestBall';

	this.dm.addFeed( this.feedFastestBall, this.fastestBallUrl,
	 	this.fastestBallInterval, this.fastestBallCallback, [ this ] );

	this.fastestBallLoaded = true;

	if( start )
	{
		this.dm.start( this.fastestBallUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostDotBallsData = function( start )
{
	this.mostDotBallsUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostDotBalls' );
	this.feedMostDotBalls		= 'mostDotBalls';
	this.mostDotBallsInterval	= 90;
	this.mostDotBallsCallback	= 'onMostDotBalls';

	this.dm.addFeed( this.feedMostDotBalls, this.mostDotBallsUrl,
	 	this.mostDotBallsInterval, this.mostDotBallsCallback, [ this ] );

	this.mostDotBallsLoaded = true;

	if( start )
	{
		this.dm.start( this.mostDotBallsUrl );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getMostDotBallsInningsData = function( start )
{
	this.mostDotBallsInningsUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostDotBallsInnings' );
	this.feedMostDotBallsInnings	= 'mostDotBallsInnings';
	this.mostDotBallsInningsInterval	= 90;
	this.mostDotBallsInningsCallback	= 'onMostDotBalls';

	this.dm.addFeed( this.feedMostDotBallsInnings, this.mostDotBallsInningsUrl,
	 	this.mostDotBallsInningsInterval, this.mostDotBallsInningsCallback, [ this ] );

	this.mostDotBallsInningsLoaded = true;

	if( start )
	{
		this.dm.start( this.mostDotBallsInningsUrl );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getBestStrikeRateData = function( start )
{
	this.bestStrikeRateUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBowlingStrikeRate' );
	this.feedBestStrikeRate	= 'bestBowlingStrikeRate';
	this.bestStrikeRateInterval	= 90;
	this.bestStrikeRateCallback	= 'onBestBowlingStrikeRate';

	this.dm.addFeed( this.feedBestStrikeRate, this.bestStrikeRateUrl,
	 	this.bestStrikeRateInterval, this.bestStrikeRateCallback, [ this ] );

	this.bestStrikeRateLoaded = true;

	if( start )
	{
		this.dm.start( this.bestStrikeRateUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestStrikeRateInningsData = function( start )
{
	this.bestStrikeRateInningsUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBowlingStrikeRateInnings' );
	this.feedBestStrikeRateInnings	= 'bestBowlingStrikeRateInnings';
	this.bestStrikeRateInningsInterval	= 90;
	this.bestStrikeRateInningsCallback	= 'onBestBowlingStrikeRate';

	this.dm.addFeed( this.feedBestStrikeRateInnings, this.bestStrikeRateInningsUrl,
	 	this.bestStrikeRateInningsInterval, this.bestStrikeRateInningsCallback, [ this ] );

	this.bestStrikeRateInningsLoaded = true;

	if( start )
	{
		this.dm.start( this.bestStrikeRateInningsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostMaidensData = function( start )
{
	this.mostMaidensUrl			= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostMaidens' );
	this.feedMostMaidens		= 'mostMaidens';
	this.mostMaidensInterval	= 90;
	this.mostMaidensCallback	= 'onMostMaidens';

	this.dm.addFeed( this.feedMostMaidens, this.mostMaidensUrl,
	 	this.mostMaidensInterval, this.mostMaidensCallback, [ this ] );

	this.mostMaidensLoaded = true;

	if( start )
	{
		this.dm.start( this.mostMaidensUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostHatTricksData = function( start )
{
	this.mostHatTricksUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'mostHatTricks' );
	this.feedMostHatTricks		= 'mostHatTricks';
	this.mostHatTricksInterval	= 90;
	this.mostHatTricksCallback	= 'onMostHatTricks';

	this.dm.addFeed( this.feedMostHatTricks, this.mostHatTricksUrl,
	 	this.mostHatTricksInterval, this.mostHatTricksCallback, [ this ] );

	this.mostHatTricksLoaded = true;

	if( start )
	{
		this.dm.start( this.mostHatTricksUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getHighestScoresData = function( start )
{
	if ( this.highestScoresLoaded )
	{
		return;
	}

	this.highestScoresUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'highestScoresInnings' );
	this.feedHighestScores		= 'highestScoresInnings';
	this.highestScoresInterval	= 90;
	this.highestScoresCallback	= 'onHighestScores';

	this.dm.addFeed( this.feedHighestScores, this.highestScoresUrl,
	 	this.highestScoresInterval, this.highestScoresCallback, [ this ] );

	this.highestScoresLoaded = true;

	if( start )
	{
		this.dm.start( this.highestScoresUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBattingAverageData = function( start )
{
	this.battingAverageUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBattingAverage' );
	this.feedBattingAverage		= 'bestBattingAverage';
	this.battingAverageInterval	= 90;
	this.battingAverageCallback	= 'onBestBattingAverage';

	this.dm.addFeed( this.feedBattingAverage, this.battingAverageUrl,
	 	this.battingAverageInterval, this.battingAverageCallback, [ this ] );

	this.battingAverageLoaded = true;

	if( start )
	{
		this.dm.start( this.battingAverageUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBowlingAverageData = function( start )
{
	this.bowlingAverageUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'bestBowlingAverage' );
	this.feedBowlingAverage		= 'bestBowlingAverage';
	this.bowlingAverageInterval	= 90;
	this.bowlingAverageCallback	= 'onBestBowlingAverage';

	this.dm.addFeed( this.feedBowlingAverage, this.bowlingAverageUrl,
	 	this.bowlingAverageInterval, this.bowlingAverageCallback, [ this ] );

	this.bowlingAverageLoaded = true;

	if( start )
	{
		this.dm.start( this.bowlingAverageUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getFastestFiftiesData = function ( start )
{
    this.fastestFiftiesUrl  	= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'fastestFifties' );
    this.feedFastestFifties	    = 'fastestFifties';
    this.fastestFiftiesInterval	= 90;
    this.fastestFiftiesCallback	= 'onFastestFifties';

    this.dm.addFeed( this.feedFastestFifties, this.fastestFiftiesUrl,
        this.fastestFiftiesInterval, this.fastestFiftiesCallback, [ this ] );

    this.fastestFiftiesLoaded = true;

    if( start )
    {
        this.dm.start( this.fastestFiftiesUrl );
    }
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getFastestCenturiesData = function ( start )
{
    this.fastestCenturiesUrl  		= this.tournamentUrlGenerator.makeFullStatsDataUrl( 'fastestCenturies' );
    this.feedFastestCenturies	    = 'fastestCenturies';
    this.fastestCenturiesInterval	= 90;
    this.fastestCenturiesCallback	= 'onFastestCenturies';

    this.dm.addFeed( this.feedFastestCenturies, this.fastestCenturiesUrl,
        this.fastestCenturiesInterval, this.fastestCenturiesCallback, [ this ] );

    this.fastestCenturiesLoaded = true;

    if( start )
    {
        this.dm.start( this.fastestCenturiesUrl );
    }
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamStatsData = function( teamId, start )
{
	var teamStatsUrl = this.tournamentUrlGenerator.makeTeamTournamentStatsDataUrl( teamId );
	var feedName = "teamStats-" + teamId;
	var teamStatsDataInterval = 120;
	var teamStatsCallback = "onTournamentStats";

	this.dm.addFeed( feedName, teamStatsUrl, teamStatsDataInterval, teamStatsCallback, [ this ] );

	if( start )
	{
		this.dm.start( teamStatsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamCareerStatsData = function( teamId, start )
{
	var teamStatsUrl = this.tournamentUrlGenerator.makeTeamCareerStatsDataUrl( teamId );
	var feedName = "teamCareerStats-" + teamId;
	var teamStatsDataInterval = 120;
	var teamStatsCallback = "onTeamCareerStats";

	this.dm.addFeed( feedName, teamStatsUrl, teamStatsDataInterval, teamStatsCallback, [ this ] );

	if( start )
	{
		this.dm.start( teamStatsUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerCareerStatsData = function( playerId, start )
{
	var playerStatsUrl = this.tournamentUrlGenerator.makePlayerCareerStatsDataUrl( playerId );
	var feedName = "playerCareerStats-" + playerId;
	var careerStatsDataInterval = 120;
	var careerStatsCallback = "onPlayerCareerStats";

	this.dm.addFeed( feedName, playerStatsUrl, careerStatsDataInterval, careerStatsCallback, [ this ] );

	if( start )
	{
		this.dm.start( playerStatsUrl );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.stopPlayerCareerStatsData = function( playerId )
{
	var playerStatsUrl = this.tournamentUrlGenerator.makePlayerCareerStatsDataUrl( playerId );
	this.dm.stop( playerStatsUrl );
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTournamentInNumbers = function( start )
{
	this.inNumbersUrl = this.tournamentUrlGenerator.makeDataUrl( 'TournamentInNumbers' );
	this.feedInNumbers = 'inNumbers';
	this.inNumbersInterval = 30;
	this.inNumbersCallback = 'onTournamentInNumbers';

	this.dm.addFeed( this.feedInNumbers, this.inNumbersUrl,
		this.inNumbersInterval, this.inNumbersCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.inNumbersUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getDidYouKnowData = function( start )
{
	this.didYouKnowUrl = this.tournamentUrlGenerator.makeDataUrl( 'didYouKnow' );
	this.feedDidYouKnow = 'didYouKnow';
	this.didYouKnowInterval = 60;
	this.didYouKnowCallback = 'onDidYouKnow';

	this.dm.addFeed( this.feedDidYouKnow, this.didYouKnowUrl,
		this.didYouKnowInterval, this.didYouKnowCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.didYouKnowUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getFairPlayData = function( start )
{
	this.fairPlayUrl			= this.tournamentUrlGenerator.makeDataUrl( "kingfisherPlayAward" );
	this.feedFairPlay			= 'kingfisherPlayAward';
	this.fairPlayInterval		= 300;
	this.fairPlayCallback		= 'onKingfisherPlayAward';

	this.dm.addFeed( this.feedFairPlay, this.fairPlayUrl,
		this.fairPlayInterval, this.fairPlayCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.fairPlayUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerPointsData = function( start )
{
	this.playerPointsUrl		= this.tournamentUrlGenerator.makeFullStatsDataUrl( "playerPoints" );
	this.feedPlayerPoints		= 'playerPoints';
	this.playerPointsInterval	= 300;
	this.playerPointsCallback	= 'onPlayerPoints';

	this.dm.addFeed( this.feedPlayerPoints, this.playerPointsUrl,
		this.playerPointsInterval, this.playerPointsCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.fairPlayUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getCanaryTallyData = function( feedName, start )
{
	this.canaryUrl = this.tournamentUrlGenerator.makeTwitterDataUrl( feedName + '/tally' );
	this.feedCanaryName = 'tallyFor' + feedName;
	this.canaryInterval = 5;
	this.canaryCallback = 'onTweetTotal';

	this.dm.addFeed( this.feedCanaryName, this.canaryUrl,
		this.canaryInterval, this.canaryCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.canaryUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTwitterData = function( start )
{
	var tweetHandle = 'icclist/tweetList';
	//var tweetHandle = 'ipl_list/tweetList';
	this.twitterUrl = this.tournamentUrlGenerator.makeTwitterDataUrl( tweetHandle );
	this.feedTwitterName = 'twitter',
	this.twitterInterval = 20;
	this.twitterCallback = 'onTwitter';

	this.dm.addFeed( this.feedTwitterName, this.twitterUrl,
		this.twitterInterval, this.twitterCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.twitterUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTwitterTeamData = function( teamId, start )
{
	var feedTwitterName = '';
	if( teamId && this.teams && this.teams[teamId] && this.teams[teamId].abbreviation )
	{
		if( !this.twitterTeamUrls )
		{
			this.twitterTeamUrls = {};
		}
		var abbr = this.teams[teamId].abbreviation.toLowerCase();
		this.twitterTeamUrls[ teamId ] = this.tournamentUrlGenerator.makeTwitterDataUrl( abbr + '_list/tweetList' );

		feedTwitterName = 'twitter_' + teamId,
		this.twitterInterval = 20;
		this.twitterCallback = 'onTwitter';

		this.dm.addFeed( feedTwitterName, this.twitterTeamUrls[ teamId ],
			this.twitterInterval, this.twitterCallback, [ this ] );

		if( start )
		{
			this.dm.start( this.twitterTeamUrls[ teamId ] );
		}
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTwitterHistoricalData = function( feedName, start )
{
	this.twitterHistoricalCallback = 'onHistory';
	this.twitterHistoricalInterval = 15;
	var feedURL = this.tournamentUrlGenerator.makeTwitterDataUrl( feedName + "/history" );

	this.dm.addFeed( 'tweetBattle', feedURL,
		this.twitterHistoricalInterval, this.twitterHistoricalCallback, [ this ] );

	if( start )
	{
		this.dm.start( feedURL );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTwitterTopicsRanking = function( feedName, fileName, start )
{
	this.rankingCallback = 'onRanking';
	this.rankingInterval = 10;

	this.dm.addFeed( feedName, this.tournamentUrlGenerator.makeTwitterDataUrl( fileName ),
		this.rankingInterval, this.rankingCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.canaryDataUrl + fileName + '.js' );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getCustomTweetMessageData = function( fileName, start )
{
	var tweetCallback = 'onCustomTweet';
	var tweetInterval = 10;
	var feedName 	  = 'customTweetMessage';
	var feedURL 	  = this.tournamentUrlGenerator.makeCustomTweetMessageUrl(fileName);

	this.dm.addFeed( feedName, feedURL, tweetInterval, tweetCallback, [ this ] );

	if( start )
	{
		this.dm.start( feedURL );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getPollData = function( start )
{

	var feedUrl = this.tournamentUrlGenerator.makePollDataUrl('');
	var feedName = 'pulsePoll';
	this.dm.addFeed( feedName, feedUrl, 30, 'onPollCallback', [ this ] );
	if( start )
	{
		this.dm.start( feedUrl );
	}
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getTwitterMirrorData = function(feed,  start )
{

	this.twitterMirrorUrl = this.tournamentUrlGenerator.makeTwitterDataUrl(feed);
	this.feedTwitterMirror = 'twitterMirror';
	this.twitterMirrorInterval = 30;
	this.twitterMirrorCallback = 'onTwitter';

	this.dm.addFeed(this.feedTwitterMirror, this.twitterMirrorUrl, this.twitterMirrorInterval,
					this.twitterMirrorCallback, [ this ]);

	if (start)
	{
		this.dm.start( feedUrl );
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPhotoAlbumData = function( albumId, start )
{
	/**
     * Returns jsonp - array of photo objects,
     * containing photo metadata (caption and title) and urls to various photo sizes
     * Usage:
     *      call to: //www.iplt20.com/feeds/getAlbumImages/albumId/38/callback/callbackMethod
     * Returns:
     *      1. callbackMethod({"photos":[{},{},{}]}); - array of photo objects, in case there are album images which match get params
     *      2. callbackMethod({"notice":"No album matches given parameters"}); - in case there is no album or there are no images associated with an album
     */

	this.photosCallback = "managePhotos";
	this.photosInterval = 300;
	this.photosUrl = "//www.iplt20.com/feeds/getAlbumImages/albumId/"
				   + albumId
				   + "/callback/"
				   + this.photosCallback;

	this.dm.addFeed( this.feedPhotos + '-' + albumId, this.photosUrl,
		this.photosInterval, this.photosCallback, [ this ] );

	if( start )
	{
		this.dm.start( this.photosUrl )
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerBattlesMetadata = function( start )
{
    var feedUrl = '//datacdn.iplt20.com/dynamic/data/bcci/ipl-player-battles/metadata.js';
    var feedName = 'player-battles-meta';

    this.feedPlayerBattlesMetadata = feedName;
    this.dm.addFeed( feedName, feedUrl, 30, 'onPlayerBattlesMeta', [ this ] );

    if( start )
    {
        this.dm.start( feedUrl );
    }
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getNameThePlayMetadata = function( start )
{
    var feedUrl = '//datacdn.iplt20.com/dynamic/data/bcci/ipl-tweet-the-play/metadata.js';
    var feedName = 'tweet-the-play-meta';

    this.feedNameThePlayMetadata = feedName;
    this.dm.addFeed( feedName, feedUrl, 30, 'onTweetThePlayMeta', [ this ] );

    if( start )
    {
        this.dm.start( feedUrl );
    }
};

/**
 * Get match related videos using the Brightcove API
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getVideosByTag = function( start, video_tag )
{
    this.feedMatchVideo = video_tag + 'videos';

    var params = {
        order: 'desc',
        limit: '100',
        encodingFields: 'url',
        terms: video_tag
    };

    this.matchVideoUrl = this.tournamentUrlGenerator.makeMatchVideosUrl( this.feedMatchVideo, params );

    this.dm.addFeed( this.feedMatchVideo, this.matchVideoUrl, 600, 'onMatchVideos', [].concat( this ) );
    if( start )
    {
        this.dm.start( this.matchVideoUrl );
    }
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTournamentVideos = function( start )
{
    this.feedTournamentVideos = 'tournamentVideos';

    if( !this.APICaller ) this.APICaller = PULSE.CLIENT.CRICKET.getAPICaller();

    this.APICaller.getVideos( 'tournamentVideos', [ this ], { order: 'desc' }, start );
    this.APICaller.getVideos( 'tournamentVideos', [ this ], { order: 'desc', offset: 500 }, start );
    this.APICaller.getVideos( 'tournamentVideos', [ this ], { order: 'desc', offset: 1000 }, start );
};

/**
 * Get team vote questions data for tournament matches
 * @param  {Boolean} start  whether to start the feed right away or not
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerVoteQuestionsData = function( start, interval )
{
    this.feedTeamVoteQuestions = 'teamVoteQuestions';
    this.teamVoteQuestionsUrl = this.tournamentUrlGenerator.makeDataUrl( 'playerVoteConfig' );
    var interval = typeof interval !== 'undefined' ? interval : 60;

    this.dm.addFeed( this.feedTeamVoteQuestions, this.teamVoteQuestionsUrl, interval, 'onPlayerVoteConfig', [ this ] );
    if( start )
    {
        this.dm.start( this.teamVoteQuestionsUrl );
    }
};

PULSE.CLIENT.CRICKET.Tournament.prototype.stopPlayerVoteQuestionsData = function()
{
    if( this.teamVoteQuestionsUrl )
    {
        this.dm.stop( this.teamVoteQuestionsUrl );
    }
};

if (!PULSE) 							{ var PULSE = {}; }
if (!PULSE.CLIENT) 						{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 				{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) 	{ PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 * Returns an array of upcoming match objects (as per Match.js)
 * See matchSchedule2.js and scoring.js in Tipsy3 spec
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getScheduleModel = function( dateFormat ) {
	var matches = [];

	var model = this.getMatchArrayModelForType(
			'upcoming',
			false,
            {
				dateFormat: dateFormat,
				includeTime: true
			}
		);
	return model;
};

/**
 * Finds the index of a match in a schedule model or returns -1
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.scheduleMatchIdx = function( scheduleModel, matchId ) {
	for( var i = 0; i < scheduleModel.length; i++ ) {
		var match = scheduleModel[i];

		if( match.matchId === matchId ) {
			return i;
		}
	}
	return -1;
};

/**
 * Returns an array of match models
 * Match models are generated from PULSE.CLIENT.CRICKET.Match.prototype.getFullModel
 *
 * See Match.js for full model spec
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getAllMatchesModel = function( dateFormat, timeFormat ) {
	var matches = [];
	for( var i = 0, iLimit = this.scheduleData.length; i < iLimit; i++ ) {
		var matchId = this.scheduleData[i].matchId.name,
			match 	= this.getMatchById( matchId ),
			model 	= match.getFullModel( dateFormat, timeFormat );

		matches.push( model );
	}

	return { matches: matches };
};

/**
 * Returns an array of playoff matches
 * Match models are generated from PULSE.CLIENT.CRICKET.Match.prototype.getFullModel
 *
 * See Match.js for full model spec
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayoffsMatchesModels = function() {
	var playoffsArray 	= [];

	for( var i = 0, iLimit = this.scheduleData.length; i < iLimit; i++ ) {
		var match 		= this.scheduleData[i],
			matchId 	= match.matchId.name,
			matchObj	= this.getMatchById( matchId ),
			fixture 	= this.playoffs[ matchId ];

		if( fixture ) {
			var model 	= matchObj.getFullModel( "dddd d mmmm" );

			playoffsArray.push( model );
		}
	}

	return { matches: playoffsArray };
};

/**
 * Returns an array of match models, given a match type (state)
 * Match type = [ "upcoming", "live", "complete" ]
 * Match models are generated from PULSE.CLIENT.CRICKET.Match.prototype.getFullModel
 *
 * See Match.js for full model spec
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getMatchArrayModelForType = function( type, reverse, options ) {

	if( !options ) {
		options = {};
	}

	var matches 		= [],
		storedMatches 	= [].concat( this[ type + 'Matches' ] ),
		limit 			= options.limit ? Math.min( options.limit, storedMatches.length ) : storedMatches.length,
		teamId 			= options.teamId,
		venueId			= options.venueId,
		groupId			= options.groupId,
		startDate 		= options.startDate,
		endDate 		= options.endDate,
		dateFormat 		= options.dateFormat,
		timeFormat	 	= options.timeFormat;

	if( typeof startDate === 'string' ) {
		startDate = PULSE.CLIENT.DateUtil.parseDateTime( startDate );
		if( isNaN( startDate.getTime() ) ) {
			startDate = undefined;
		}
	}
	if( typeof endDate === 'string' ) {
		endDate = PULSE.CLIENT.DateUtil.parseDateTime( endDate );
		if( isNaN( endDate.getTime() ) ) {
			endDate = undefined;
		}
	}

	storedMatches.sort();

	if( reverse ) storedMatches.reverse();

	for( var i = 0; i < limit; i++ ) {
		var matchId = storedMatches[i],
			match 	= this.getMatchById( matchId );

		if( ( !teamId || match.hasTeamWithId( teamId ) ) &&
			( !venueId || match.hasVenueWithId( venueId ) ) &&
			( !groupId || match.hasGroupWithId( groupId ) ) &&
			( !startDate || match.getMatchDateObj() >= startDate ) &&
			( !endDate || match.getMatchDateObj() <= endDate ) ) {
			var model = match.getFullModel( dateFormat, timeFormat );
			matches.push( model );
		}
	}

	return { matches: matches };
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getMatchesGroupedByDate = function(type, options) {
	var matchesObj 		= {},
        storedMatches 	= type ? this[type + 'Matches'] : [].concat( this.completeMatches, this.liveMatches, this.upcomingMatches ),
        venueId 		= options.venueId,
        teamId 			= options.teamId,
        groupId			= options.groupId,
        dateFormat 		= options.dateFormat,
        timeFormat	 	= options.timeFormat;

	for (var i=0, length = storedMatches.length; i < length; i++) {

		var matchId = storedMatches[i],
            match = this.getMatchById(matchId);

		if( ( !teamId || match.hasTeamWithId( teamId ) ) &&
            ( !venueId || match.hasVenueWithId( venueId ) ) &&
            ( !groupId || match.hasGroupWithId( groupId ) ) ) {
			var model = match.getFullModel(dateFormat, timeFormat),
                matchDate = model.matchDate.substring(0, model.matchDate.indexOf('T'));


			if (!matchesObj[matchDate]) {
				matchesObj[matchDate] = [];
			}

            matchesObj[matchDate].push(model);
		}
	}

	return { matches : matchesObj };
};

if (!PULSE) 							{ var PULSE = {}; }
if (!PULSE.CLIENT) 						{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 				{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) 	{ PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 *	Tournament onData
 * 	onData gets called by the data manager when the file called is retrieved and the JSONP's read
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.onData = function( data, id )
{
	var that = this;

	if( id === this.feedSchedule
		&& data
		&& data.schedule )
	{
		this.scheduleData = data.schedule;

		this.updateMatches();

		PULSE.CLIENT.notify( 'schedule/update', {
			tournamentName: that.tournamentName,
			success: true
		} );
	}
	else if ( id === this.feedSquads
			&& data
			&& data.squads )
	{
		this.squadsData = data.squads;

		PULSE.CLIENT.notify( 'squads/update', {
			tournamentName: that.tournamentName,
			success: true
		} );
	}
	else if( id === this.feedStandings
			&& data
			&& data.groups )
	{
		this.standingsData = data.groups;

		PULSE.CLIENT.notify( 'standings/update', {
			tournamentName: that.tournamentName,
			success: true
		} );
	}
	else if( id === this.feedPlayersMap
			&& data
			&& data.players )
	{
		this.playersMap = data.players;

		PULSE.CLIENT.notify( 'playersMap/update', {
			tournamentName: that.tournamentName,
			success: true
		} );
	}
	else if( id.startsWith( this.feedPhotos ) )
	{
		var albumId = id.split('-')[1];
		this.photosData[albumId] = data;
		PULSE.CLIENT.notify( 'album/photos', {
			success: true,
			albumId: albumId,
			tournamentName: this.tournamentName
		} );
	}
	else if ( id.startsWith( 'teamStats-' )
			&& data
			&& data.playersStats
			&& data.team )
	{
		var teamId = id.split('-')[1];
		this.teamTournamentStatsData[ teamId ] = data;

		PULSE.CLIENT.notify( 'teamStats/update', {
			tournamentName: this.tournamentName,
			teamId: teamId,
			success: true
		} );
	}
	else if ( id.startsWith( 'teamCareerStats-' )
			&& data
			&& data.careerStats
			&& data.team )
	{
		var teamId = id.split('-')[1];
		this.teamCareerStatsData[ teamId ] = data;

		PULSE.CLIENT.notify( 'teamCareerStats/update', {
			tournamentName: this.tournamentName,
			teamId: teamId,
			success: true
		} );
	}
	else if ( id.startsWith( 'playerCareerStats-' )
			&& data
			&& data.player
			&& data.stats )
	{
		var playerId = id.split('-')[1];

		for( var i = 0, iLimit = data.stats.length; i < iLimit; i++ )
		{
			var statsGroup = data.stats[i];

			if( !this.playerCareerStatsData[ playerId ] )
			{
				this.playerCareerStatsData[ playerId ] = {};
			}
			this.playerCareerStatsData[ playerId ][ statsGroup.matchType ] = statsGroup;
		}

		this.players[ playerId ] = data.player;

		PULSE.CLIENT.notify( 'playerCareerStats/update', {
			playerId: playerId,
			success: true
		} );
	}
	else if ( id === this.feedMostRuns
			&& data
			&& data.mostRuns )
	{

		for( var i = 0, iLimit = data.mostRuns.length; i < iLimit; i++ )
		{
			if( data.mostRuns[i].matchType === this.matchTypes[0] )
			{
				this.mostRunsData = data.mostRuns[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostRuns',
					url: 'mostRuns',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostRunsStats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostRuns',
					url: 'mostRuns',
					success: true
				} );

				break;
			}
		}
	}
	else if ( id === this.feedMostRunsOver
			&& data
			&& data.mostRunsOver )
	{

		for( var i = 0, iLimit = data.mostRunsOver.length; i < iLimit; i++ )
		{
			if( data.mostRunsOver[i].matchType === this.matchTypes[0] )
			{
				this.mostRunsOverData = data.mostRunsOver[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostRunsOver',
					url: 'mostRunsOver',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostRunsOverStats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostRunsOver',
					url: 'mostRunsOver',
					success: true
				} );

				break;
			}
		}
	}
	else if ( id === this.feedMostWickets
			&& data
			&& data.mostWickets )
	{
		for( var i = 0, iLimit = data.mostWickets.length; i < iLimit; i++ )
		{
			if( data.mostWickets[i].matchType === this.matchTypes[0] )
			{
				this.mostWicketsData = data.mostWickets[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostWickets',
					url: 'mostWickets',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostWicketsStats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostWickets',
					url: 'mostWickets',
					success: true
				} );

				break;
			}
		}
	}
	else if ( id === this.feedMostFourWickets
			&& data
			&& data.mostWickets )
	{
		for( var i = 0, iLimit = data.mostWickets.length; i < iLimit; i++ )
		{
			if( data.mostWickets[i].matchType === this.matchTypes[0] )
			{
				this.mostFourWicketsData = data.mostWickets[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostFourWickets',
					url: 'mostFourWickets',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostFourWicketsStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedMostFours || this.feedMostFoursInnings
			&& data
			&& data.mostFours )
	{
		for( var i = 0, iLimit = data.mostFours.length; i < iLimit; i++ )
		{
			if( data.mostFours[i].matchType === this.matchTypes[0] )
			{
				if (this.feedMostFours)
				{
					this.mostFoursData = data.mostFours[i].topPlayers;
				}
				else if (this.feedMostFoursInnings)
				{
					this.mostFoursInningsData = data.mostFours[i].topPlayers;
				}

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostFours',
					url: 'mostFours',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostFoursStats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostFours',
					url: 'mostFours',
					success: true
				} );

				break;
			}
		}
	}
	else if ( id === this.feedMostSixes || this.feedMostSixesInnings
			&& data
			&& data.mostSixes )
	{
		for( var i = 0, iLimit = data.mostSixes.length; i < iLimit; i++ )
		{
			if( data.mostSixes[i].matchType === this.matchTypes[0] )
			{

				if (this.feedMostSixes)
				{
					this.mostSixesData = data.mostSixes[i].topPlayers;
				}
				else if (this.feedMostSixesInnings)
				{
					this.mostSixesInningsData = data.mostSixes[i].topPlayers;
				}

				this.mostSixesData = data.mostSixes[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostSixes',
					url: 'mostSixes',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostSixesStats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostSixes',
					url: 'mostSixes',
					success: true
				} );

				break;
			}
		}
	}
	else if ( id === this.feedMostFifties
			&& data
			&& data.mostFifties )
	{
		for( var i = 0, iLimit = data.mostFifties.length; i < iLimit; i++ )
		{
			if( data.mostFifties[i].matchType === this.matchTypes[0] )
			{
				this.mostFiftiesData = data.mostFifties[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostFifties',
					url: 'mostFifties',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostFiftiesStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedMostCenturies
			&& data
			&& data.mostCenturies )
	{
		for( var i = 0, iLimit = data.mostCenturies.length; i < iLimit; i++ )
		{
			if( data.mostCenturies[i].matchType === this.matchTypes[0] )
			{
				this.mostCenturiesData = data.mostCenturies[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostCenturies',
					url: 'mostCenturies',
					success: true
				} );
				PULSE.CLIENT.notify( 'mostCenturiesStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedBestBattingStrikeRate || this.feedBestBattingStrikeInningsRate
			&& data
			&& data.bestStrikeRate )
	{
		for( var i = 0, iLimit = data.bestStrikeRate.length; i < iLimit; i++ )
		{
			if( data.bestStrikeRate[i].matchType === this.matchTypes[0] )
			{

				if (this.feedBestBattingStrikeRate)
				{
					this.bestBattingStrikeRateData = data.bestStrikeRate[i].topPlayers;
				}
				else  if (this.feedBestBattingStrikeInningsRate)
				{
					this.bestBattingStrikeRateInningsData = data.bestStrikeRate[i].topPlayers;
				}

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'BestBattingStrikeRate',
					url: 'bestBattingStrikeRate',
					success: true
				} );
				PULSE.CLIENT.notify( 'bestBattingStrikeRate/update' );

				break;
			}
		}
	}
	else if ( id === this.feedBestEconomy || this.feedBestEconomyInnings
			&& data
			&& data.bestEconomy )
	{
		for( var i = 0, iLimit = data.bestEconomy.length; i < iLimit; i++ )
		{
			if( data.bestEconomy[i].matchType === this.matchTypes[0] )
			{

				if (this.feedBestEconomy)
				{
					this.bestEconomyData = data.bestEconomy[i].topPlayers;
				}
				else if (this.feedBestEconomyInnings)
				{
					this.bestEconomyInningsData = data.bestEconomy[i].topPlayers;
				}

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'BestEconomy',
					url: 'bestEconomy',
					success: true
				} );
				PULSE.CLIENT.notify( 'bestEconomyStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedHighestScores
			&& data
			&& data.highestScores )
	{
		for( var i = 0, iLimit = data.highestScores.length; i < iLimit; i++ )
		{
			if( data.highestScores[i].matchType === this.matchTypes[0] )
			{
				this.highestScoresData = data.highestScores[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'HighestScores',
					url: 'highestScores',
					success: true
				} );
				PULSE.CLIENT.notify( 'highestScoreStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedBattingAverage
			&& data
			&& data.bestAverage )
	{
		for( var i = 0, iLimit = data.bestAverage.length; i < iLimit; i++ )
		{
			if( data.bestAverage[i].matchType === this.matchTypes[0] )
			{
				this.battingAverageData = data.bestAverage[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'BattingAverage',
					url: 'battingAverage',
					success: true
				 } );
				PULSE.CLIENT.notify( 'battingAverageStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedBowlingAverage
			&& data
			&& data.bestAverage )
	{
		for( var i = 0, iLimit = data.bestAverage.length; i < iLimit; i++ )
		{
			if( data.bestAverage[i].matchType === this.matchTypes[0] )
			{
				this.bowlingAverageData = data.bestAverage[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'BowlingAverage',
					url: 'bowlingAverage',
					success: true
				 } );
				PULSE.CLIENT.notify( 'bowlingAverageStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedBestBowling
			&& data
			&& data.bestBowling )
	{
		for( var i = 0, iLimit = data.bestBowling.length; i < iLimit; i++ )
		{
			if( data.bestBowling[i].matchType === this.matchTypes[0] )
			{
				this.bestBowlingData = data.bestBowling[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'BestBowling',
					url: 'bestBowling',
					success: true
				 } );
				PULSE.CLIENT.notify( 'bowlingAverageStats/update' );

				break;
			}
		}
	}
	else if ( id === this.feedFastestBall
			&& data
			&& data.fastestBall )
	{

		for( var i = 0, iLimit = data.fastestBall.length; i < iLimit; i++ )
		{
			if( data.fastestBall[i].matchType === this.matchTypes[0] )
			{
				this.fastestBallData = data.fastestBall[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'FastestBall',
					url: 'fastestBall',
					success: true
				 } );
				PULSE.CLIENT.notify( 'FastestBallStats/update' );

				break;
			}
		}
	}
    else if ( id === this.feedFastestFifties
        && data
        && data.fastestFifties)   //pulled from js callback
    {
        for( var i = 0, iLimit = data.fastestFifties.length; i < iLimit; i++ )
        {
            if( data.fastestFifties[i].matchType === this.matchTypes[0] )
            {
                this.fastestFiftiesInningsData = data.fastestFifties[i].topPlayers;

                PULSE.CLIENT.notify( 'stats/update', {
                    tournamentName: that.tournamentName,
                    statName: 'FastestFifties',
                    url: 'fastestFifties',
                    success: true
                } );
                PULSE.CLIENT.notify( 'FastestFiftiesStats/update' );

                break;
            }
        }
    }
    else if ( id === this.feedFastestCenturies
        && data
        && data.fastestCenturies)   //pulled from js callback
    {
        for( var i = 0, iLimit = data.fastestCenturies.length; i < iLimit; i++ )
        {
            if( data.fastestCenturies[i].matchType === this.matchTypes[0] )
            {
                this.fastestCenturiesInningsData = data.fastestCenturies[i].topPlayers;

                PULSE.CLIENT.notify( 'stats/update', {
                    tournamentName: that.tournamentName,
                    statName: 'FastestCenturies',
                    url: 'fastestCenturies',
                    success: true
                } );
                PULSE.CLIENT.notify( 'FastestCenturyStats/update' );

                break;
            }
        }
    }
	else if ( id === this.feedMostRunsConceded
			&& data
			&& data.mostRuns )
	{

		for( var i = 0, iLimit = data.mostRuns.length; i < iLimit; i++ )
		{
			if( data.mostRuns[i].matchType === this.matchTypes[0] )
			{

				this.mostRunsConcededInningsData = data.mostRuns[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostRunsConceded',
					url: 'mostRunsConceded',
					success: true
				 } );
				PULSE.CLIENT.notify( 'MostRunsConceded/update' );

				break;
			}
		}
	}
	else if ( id === this.feedMostRunsConcededOver
			&& data
			&& ( data.mostRunsConcededOver || data.mostRunsOver ) )
	{
		var statsArray = data.mostRunsConcededOver || data.mostRunsOver;
		for( var i = 0, iLimit = statsArray.length; i < iLimit; i++ )
		{
			if( statsArray[i].matchType === this.matchTypes[0] )
			{
				this.mostRunsConcededOverData = statsArray[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostRunsConcededOver',
					url: 'mostRunsConcededOver',
					success: true
				 } );
				PULSE.CLIENT.notify( 'MostRunsConcededOver/update' );

				break;
			}
		}
	}
	else if ( id === this.feedMostDotBalls || this.feedMostDotBallsInnings
			&& data
			&& data.mostDotBalls )
	{

		for( var i = 0, iLimit = data.mostDotBalls.length; i < iLimit; i++ )
		{
			if( data.mostDotBalls[i].matchType === this.matchTypes[0] )
			{

				if (this.feedMostDotBalls)
				{

					this.mostDotBallsData = data.mostDotBalls[i].topPlayers;

				} else if (this.feedMostDotBallsInnings) {

					this.mostDotBallsInningsData = data.mostDotBalls[i].topPlayers;
				}

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostDotBalls',
					url: 'mostDotBalls',
					success: true
				 } );
				PULSE.CLIENT.notify( 'MostDotBalls/update' );

				break;
			}
		}
	}
	else if ( id === this.feedMostMaidens
			&& data
			&& data.mostMaidens )
	{

		for( var i = 0, iLimit = data.mostMaidens.length; i < iLimit; i++ )
		{
			if( data.mostMaidens[i].matchType === this.matchTypes[0] )
			{
				this.mostMaidensData = data.mostMaidens[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostMaidens',
					url: 'mostMaidens',
					success: true
				 } );
				PULSE.CLIENT.notify( 'MostMaidens/update' );

				break;
			}
		}
	}
	else if ( id === this.feedMostHatTricks
			&& data
			&& data.mostHatTricks )
	{

		for( var i = 0, iLimit = data.mostHatTricks.length; i < iLimit; i++ )
		{
			if( data.mostHatTricks[i].matchType === this.matchTypes[0] )
			{
				this.mostHatTricksData = data.mostHatTricks[i].topPlayers;

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'MostHatTricks',
					url: 'mostHatTricks',
					success: true
				 } );
				PULSE.CLIENT.notify( 'MostHatTricks/update' );

				break;
			}
		}
	}
	else if ( id === this.feedBestStrikeRate || this.feedBestStrikeRateInnings
			&& data
			&& data.bestStrikeRate )
	{

		for( var i = 0, iLimit = data.bestStrikeRate.length; i < iLimit; i++ )
		{
			if( data.bestStrikeRate[i].matchType === this.matchTypes[0] )
			{

				if (this.feedBestStrikeRate) {

					this.bestStrikeRateData = data.bestStrikeRate[i].topPlayers;
				}
				else if (this.feedBestStrikeRateInnings) {

					this.bestStrikeRateInningsData = data.bestStrikeRate[i].topPlayers;
				}

				PULSE.CLIENT.notify( 'stats/update', {
					tournamentName: that.tournamentName,
					statName: 'BestStrikeRate',
					url: 'bestStrikeRate',
					success: true
				 } );
				PULSE.CLIENT.notify( 'BestStrikeRate/update' );

				break;
			}
		}
	}
	else if( id === this.feedInNumbers
			&& data )
	{
		if( data.tournamentInNumbers )
		{
			this.tournamentInNumbersData = data.tournamentInNumbers[0];

		}
		PULSE.CLIENT.notify( 'inNumbers/update', { success:true } );
	}
	else if( id === this.feedDidYouKnow
			&& data
			&& data.length )
	{
		this.DYK = data;
		PULSE.CLIENT.notify( 'didYouKnow/update', { success: true, tournamentName: this.tournamentName } );
	}
	else if ( id === this.feedFairPlay
			&& data
			&& data.awardWinners )
	{
		this.fairPlayData = data.awardWinners;
		PULSE.CLIENT.notify( 'fairPlayStats/update', {
			success: true,
			tournamentName: this.tournamentName
		} );
	}
	else if ( id === this.feedPlayerPoints
			&& data
			&& data.playerPoints )
	{
		for( var i = 0, iLimit = data.playerPoints.length; i < iLimit; i++ )
		{
            if( data.playerPoints[i].matchType === this.matchTypes[0] ) {
    			this.playerPointsData = data.playerPoints[i].topPlayers;

    			PULSE.CLIENT.notify( 'stats/update', {
    				tournamentName: that.tournamentName,
    				statName: 'PlayerPoints',
    				url: 'playerPoints',
    				success: true
    			} );
    			PULSE.CLIENT.notify( 'playerPointsStats/update', {
    				tournamentName: that.tournamentName,
    				statName: 'PlayerPoints',
    				url: 'playerPoints',
    				success: true
    			} );

    			break;
            }
		}
	}
	else if( id.startsWith('tallyFor') && data && data.total )
	{
		var feedName = id.substring(8);
		this[ feedName + 'TweetCount' ] = data.total;
		PULSE.CLIENT.notify( 'canary/tally', { feedName: feedName, total: data.total, success: true } );
	}
	else if( id === 'twitter' && data )
	{
		this.twitterData = data.reverse();
		PULSE.CLIENT.notify( 'twitter/update' );
	}
	else if( id.startsWith( 'twitter_' ) && data )
	{
		var teamId = id.split('_')[1];
		this.twitterTeamData[ teamId ] = data.reverse();
		PULSE.CLIENT.notify( 'twitterTeam/update', { teamId: teamId, success: true } );
	}
	else if (id === this.feedTwitterMirror && data)
	{
		this.twitterMirrorData = data;
		PULSE.CLIENT.notify('twitterMirror/update', { success: true });
	}
	else if( id === 'hottest-topics' && data )
	{
		this.hottestTopicsData = data.entries;
		PULSE.CLIENT.notify( 'hottestTopics/update', { success: true } );
	}
	else if( id === 'customTweetMessage' && data && data.text )
	{
		this.customTweetMessage = data.text;
		PULSE.CLIENT.notify( 'customTweetMessage/update', { success: true, text: data.text } );
	}
	else if (id === 'pulsePoll' && data && data[0].results)
	{
		this.pulsePollData = data[0].results;
		PULSE.CLIENT.notify('pulsePoll/update',
		{
			success: true
		});
	}
	else if( id === 'tweetBattle' )
	{
		var feedId = data[0].scope;
		this.twitterHistData[ feedId ] = data[0];
		PULSE.CLIENT.notify('tweetBattle/update',
		{
			success: true
		});
	}
    else if( id === this.feedPlayerBattlesMetadata && data )
    {
        this.playerBattlesMetadata = data;

        PULSE.CLIENT.notify( 'playerBattles/update', { success:true } );
    }
    else if( id === this.feedNameThePlayMetadata && data )
    {
        this.nameThePlayMetadata = data;

        PULSE.CLIENT.notify( 'tweetThePlay/update', { success:true } );
    }
    else if( id === this.feedTournamentVideos && data )
    {
        if( !this.tournamentVideos )
        {
            this.tournamentVideos = data;
        }
        else
        {
            this.tournamentVideos.items = this.tournamentVideos.items.concat( data.items );
        }

        PULSE.CLIENT.notify( 'tournament/videos', { success:true } );
    }
    else if ( id === this.feedMatchVideo )
	{
		this.videosData = data;
		PULSE.CLIENT.notify( 'tag/videos', {
			success: true
		} );
	}
	else if( this.feedTeamVoteQuestions && id === this.feedTeamVoteQuestions )
	{
		this.playerVoteQuestionsData = data;
		this.processPlayerVoteQuestions();
		PULSE.CLIENT.notify( 'player-vote/config', {
			success: true
		} );
	}
};

if (!PULSE) 							{ var PULSE = {}; }
if (!PULSE.CLIENT) 						{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 				{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) 	{ PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 *	Tournament onError
 * 	onError gets called by the data manager when the file that's requested doesn't exist
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.onError = function( id )
{
	var that = this;

	if( id === this.feedSchedule )
	{
		PULSE.CLIENT.notify( 'schedule/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedSquads )
	{
		PULSE.CLIENT.notify( 'squads/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if( id === this.feedStandings )
	{
		PULSE.CLIENT.notify( 'standings/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if( id === this.feedPlayersMap )
	{
		PULSE.CLIENT.notify( 'playersMap/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if( id.startsWith( 'teamStats-' ) )
	{
		var teamId = id.split('-')[1];
		PULSE.CLIENT.notify( 'teamStats/update', {
			tournamentName: that.tournamentName,
			success: false,
			teamId: teamId
		} );
	}
	else if( id.startsWith( 'teamCareerStats-' ) )
	{
		var teamId = id.split('-')[1];
		PULSE.CLIENT.notify( 'teamCareerStats/update', {
			tournamentName: that.tournamentName,
			success: false,
			teamId: teamId
		} );
	}
	else if ( id.startsWith( 'playerCareerStats-' ) )
	{
		var playerId = id.split('-')[1];
		PULSE.CLIENT.notify( 'playerCareerStats/update', {
			playerId: playerId,
			success: false
		} );
	}
	else if ( id === this.feedMostRuns )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostRuns',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostRunsStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostRunsOver )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostRunsOver',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostRunsOverStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostWickets )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostWickets',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostWicketsStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostFours || this.feedMostFoursInnings)
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostFours',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostFoursStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );

	}
	else if ( id === this.feedMostSixes || this.feedMostSixesInnings )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostSixes',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostSixesStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostFifties )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostFifties',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostFiftiesStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostCenturies )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostCenturies',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostCenturiesStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedBestBattingStrikeRateUrl || this.feedBestBattingStrikeRateInningsUrl )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'BestBattingStrikeRate',
			success: false
		} );
		PULSE.CLIENT.notify( 'bestBattingStrikeRate/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedBestEconomy || this.feedBestEconomyInnings)
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'BestEconomy',
			success: false
		} );
		PULSE.CLIENT.notify( 'bestEconomyStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedHighestScores )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'HighestScores',
			success: false
		} );
		PULSE.CLIENT.notify( 'highestScoreStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedBattingAverage )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'BattingAverage',
			success: false
		} );
		PULSE.CLIENT.notify( 'battingAverageStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedBowlingAverage )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'BowlingAverage',
			success: false
		 } );
		PULSE.CLIENT.notify( 'bowlingAverageStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedBestBowling )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'BestBowling',
			success: false
		 } );
		PULSE.CLIENT.notify( 'BestBowlingStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}

	else if ( id === this.feedFastestBall )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'FastestBall',
			success: false
		 } );
		PULSE.CLIENT.notify( 'FastestBallStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostDotBalls || this.feedMostDotBallsInnings)
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostDotBalls',
			success: false
		 } );
		PULSE.CLIENT.notify( 'MostDotBalls/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostMaidens )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostMaidens',
			success: false
		 } );
		PULSE.CLIENT.notify( 'MostMaidens/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostHatTricks )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostHatTricks',
			success: false
		 } );
		PULSE.CLIENT.notify( 'MostHatTricks/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedBestStrikeRate  || this.feedBestStrikeRateInnings)
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'BestBowlingStrikeRate',
			success: false
		 } );
		PULSE.CLIENT.notify( 'BestBowlingStrikeRate/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostRunsConceded )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostRunsConceded',
			success: false
		 } );
		PULSE.CLIENT.notify( 'MostRunsConceded/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostRunsConcededOver )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostRunsConcededOver',
			success: false
		} );
		PULSE.CLIENT.notify( 'mostRunsConcededOverStats/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedMostFourWickets )
	{
		PULSE.CLIENT.notify( 'stats/update', {
			tournamentName: that.tournamentName,
			statName: 'MostFourWickets',
			success: false
		 } );
		PULSE.CLIENT.notify( 'MostFourWickets/update', {
			tournamentName: that.tournamentName,
			success: false
		} );
	}
	else if ( id === this.feedTwitterMirror)
	{
		PULSE.CLIENT.notify('twitterMirror/Update', {
			tournamentName: that.tournamentName,
			success: false
		});
	}
	else if ( id === this.feedFastestFifties)
    {
        PULSE.CLIENT.notify( 'stats/update', {
            tournamentName: that.tournamentName,
            statName: 'FastestFifties',
            success: false
        } );
        PULSE.CLIENT.notify( 'FastestFifties/update', {
            tournamentName: that.tournamentName,
            success: false
        } );
    }
    else if ( id === this.feedFastestCenturies)
    {
        PULSE.CLIENT.notify( 'stats/update', {
            tournamentName: that.tournamentName,
            statName: 'FastestCenturies',
            success: false
        } );
        PULSE.CLIENT.notify( 'FastestCenturies/update', {
            tournamentName: that.tournamentName,
            success: false
        } );
    }
	else if( this.feedTeamVoteQuestions && id === this.feedTeamVoteQuestions )
	{
		PULSE.CLIENT.notify( 'player-vote/config', {
			success: false
		} );
	}
};

/**
 * Returns a player model with a team URL, firstName and lastName as well as imgRoot
 * @param  {DMS.Player} player    the player object as it is pulled in from the DMS JSON feeds
 * @param  {DMS.Team}   team      the team object, as it is pulled in from the DMS JSON feeds
 * @param  {Boolean}    withTeam  whether to include the team object model in the player model or not
 * @return {Object}               returns the player model
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerModel = function( player, team, withTeam )
{
	if( team )
	{
		var url = this.tournamentUrlGenerator.getPlayerURL( player.id, player.fullName, team.id, team.fullName );
	}

	var playerNames = PULSE.CLIENT.Util.getPlayerNames( player.fullName );
	var model = $.extend( 
		true, 
		{ 
			url: 		url,
			imgRoot: 	this.playerImageUrl,
			firstName: 	playerNames.firstName,
			lastName: 	playerNames.secondName
		}, 
		player
	);

	if( team && withTeam )
	{
		model.team = this.getTeamModel( team );
	}

	return model;
};
if (!PULSE) 							{ var PULSE = {}; }
if (!PULSE.CLIENT) 						{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 				{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) 	{ PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 * Set for multi group tournaments
 * Functions under the assumption that the returned array is in order of the group object
 * Returns and object containing groupName and an array of team standings
 *
 * See groupStandings.js in the Tipsy3 spec
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.getStandingsModelByGroupName = function( groupName, limit )
{
	if( this.standingsData.length === 0 ) return { standings: [] };

	for( var i = 0, iLimit = this.standingsData.length; i < iLimit; i++ )
	{
		if( this.standingsData[i].groupName === groupName )
		{
			return this.getStandingsModel( i, limit );
		}
	}
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getStandingsModel = function( groupIndex, limit )
{
	if( this.standingsData.length === 0 ) return { standings: [] };

    // if( !this.standingsData[ groupIndex ].standings ) this.standingsData[ groupIndex ].standings = [];

	var group = this.standingsData[ groupIndex ],
		model = this.getStandingsModelForGroup( group, limit );
	model.year = this.year;
	model.standingsMessage = this.standingsMessage || "";

	return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getStandingsModelForGroup = function( group, limit )
{
	var model 			= {},
		standings 		= group.standings,
    	standingsArray 	= [],
		iLimit			= limit ? Math.min( limit, standings.length ) : standings.length;

	for( var i = 0; i < iLimit; i++ )
	{
		var recentForm = this.makeRecentFormModel( standings[i].recentForm, 5 );
		var standing = {
			position: standings[i].position,
			qualified: this.teamHasQualified( standings[i].team ),
            label: standings[i].positionLabel || standings[i].position,
			team: {
				id: standings[i].team.id,
				link: this.globalUrlGenerator.getTeamURL( standings[i].team.id, standings[i].team.fullName ),
				fullName: standings[i].team.fullName || "",
				shortName: standings[i].team.shortName || "",
				abbreviation: standings[i].team.abbreviation || "",
				type: standings[i].team.type || "m"
			},
			played: standings[i].played || 0,
			won: standings[i].won || 0,
			lost: standings[i].lost || 0,
			noResult: standings[i].noResult || 0,
			drawn: standings[i].tied || 0,
			points: standings[i].points || 0,
			netRunRate: standings[i].netRunRate || '+0.000',
			_for: PULSE.CLIENT.CRICKET.Utils.getStandingsForValue( standings[i] ),
			_against: PULSE.CLIENT.CRICKET.Utils.getStandingsAgainstValue( standings[i] ),
			recentForm: recentForm.form,
			form : standings[i].recentForm
		};

		standingsArray.push( standing );
	}

	model.groupName = group.groupName;
	model.standings = standingsArray;

	return model;
};

/**
 * Helper method to determine whether a team qualified to Playoffs
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.teamHasQualified = function( team )
{
	teamIdToString = team.id + "";

	if( this.qualifiedTeams && $.inArray( teamIdToString, this.qualifiedTeams ) > -1 )
	{
		return true;
	}
	return false;
};

/**
 * Helper method to return an array of match outcomes
 *
 * See recentForm in Tipsy3 spec
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.makeRecentFormModel = function( recentForm, limit )
{
	if( !recentForm ) return [];
	var array = _.clone( recentForm );

	var iLimit = limit ? Math.min( limit, recentForm.length ) : recentForm.length;

	array.reverse();
	var outcomesArray = [];
	for( var i = 0; i < iLimit; i++ )
	{
		var recentResult = array[i];
		if( recentResult.outcome )
		{
			switch( recentResult.outcome )
			{
			case "W":
				outcomesArray.push( "win" );
				break;
			case "L":
				outcomesArray.push( "lose" );
				break;
			case "T":
			case "NR":
			case "D":
			default:
				outcomesArray.push( "draw" );
				break;
			}
		}
	}

	return { form: outcomesArray };
};

// Assumes no groups
PULSE.CLIENT.CRICKET.Tournament.prototype.getStandingsModelForTeam = function( groupIndex, teamId )
{
	var standingsModel = this.getStandingsModel( groupIndex );

	for( var i = 0, iLimit = standingsModel.standings.length; i < iLimit; i++ )
	{
		var standing = standingsModel.standings[i];
		if( standing.team.id === +teamId )
		{
			return standing;
		}
	}
};

if (!PULSE)                             { var PULSE = {}; }
if (!PULSE.CLIENT)                      { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)              { PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament)   { PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 *
 * STATS MODELS
 *
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.getBattingModel = function( statsData )
{
    return {
        player : this.getPlayerModel( statsData.player, statsData.team ),
        team: this.getTeamModel( statsData.team ),
        stats: statsData.battingStats
    };
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBowlingModel = function( statsData )
{
    var stats = statsData.bowlingStats || {};
    if( typeof stats.bbiw !== 'undefined' && typeof stats.bbir !== 'undefined' )
    {
        stats.bbi = stats.bbiw + '/' + stats.bbir;
    }
    return {
        player : this.getPlayerModel( statsData.player, statsData.team ),
        team: this.getTeamModel( statsData.team ),
        stats: stats
    };
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getInningsScopedStatsModel = function( statsData, dateFormat )
{
    if( statsData.battingStats )
    {
        model = this.getBattingModel( statsData );
    }
    else if( statsData.bowlingStats )
    {
        model = this.getBowlingModel( statsData );
    }
    else
    {
        return { stats: {} };
    }

    model.stats.opposition = this.getTeamModel( statsData.opposition );
    model.stats.matchDate = PULSE.CLIENT.Util.getFormattedDate( statsData.matchDate, dateFormat );
    model.stats.venue = statsData.venue; // TODO: replace with getVenueModel to include venue URL

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getOverScopedStatsModel = function( statsData, dateFormat )
{
    if( statsData.battingStats )
    {
        model = this.getBattingModel( statsData );
    }
    else if( statsData.bowlingStats )
    {
        model = this.getBowlingModel( statsData );
    }
    else
    {
        return { stats: {} };
    }

    model.stats.opposition = this.getTeamModel( statsData.opposition );
    model.stats.matchDate = PULSE.CLIENT.Util.getFormattedDate( statsData.matchDate, dateFormat );
    model.stats.venue = statsData.venue; // TODO: replace with getVenueModel to include venue URL
    model.stats.inningsNumber = statsData.inningsNumber;
    model.stats.overNumber = statsData.overNumber;

    var that = this;
    model.stats.oppositionPlayers = $.map( statsData.oppositionPlayers || [], function( player )
    {
        return that.getPlayerModel( player, statsData.opposition );
    } );

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostRunsData[i],
        model = this.getBattingModel( statsData );

    model.title = "Most Runs";
    model.label = 'runs';
    model.stat = statsData ? statsData.battingStats.r : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsOverModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostRunsOverData[i],
        model = this.getOverScopedStatsModel( statsData );

    model.title = "Most Runs (Over)";
    model.label = 'runs';
    model.stat = statsData ? statsData.battingStats.r : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFoursInningsModel = function( index )
{
    return this.getMostFoursModel( index, true );
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFoursModel = function( index, inningsScoped )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = inningsScoped ? this.mostFoursInningsData[i] : this.mostFoursData[i],
        model = inningsScoped ? this.getInningsScopedStatsModel( statsData ) : this.getBattingModel( statsData );

    model.title = "Most Fours" + ( inningsScoped ? ' (Innings)' : '' );
    model.label = 'fours';
    model.stat = statsData ? statsData.battingStats['4s'] : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostSixesInningsModel = function( index )
{
    return this.getMostSixesModel( index, true );
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostSixesModel = function( index, inningsScoped )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = inningsScoped ? this.mostSixesInningsData[i] : this.mostSixesData[i],
        model = inningsScoped ? this.getInningsScopedStatsModel( statsData ) : this.getBattingModel( statsData );

    model.title = "Most Sixes" + ( inningsScoped ? ' (Innings)' : '' );
    model.label = 'sixes';
    model.stat = statsData ? statsData.battingStats['6s'] : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFiftiesModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostFiftiesData[i],
        model = this.getBattingModel( statsData );

    model.title = "Most Fifties";
    model.label = 'fifties';
    model.stat = statsData ? statsData.battingStats['50s'] : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostCenturiesModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostCenturiesData[i],
        model = this.getBattingModel( statsData );

    model.title = "Most Centuries";
    model.label = 'centuries';
    model.stat = statsData ? statsData.battingStats['100s'] : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestBattingStrikeRateInningsModel = function( index )
{
    return this.getBestBattingStrikeRateModel( index, true );
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestBattingStrikeRateModel = function( index, inningsScoped )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = inningsScoped ? this.bestBattingStrikeRateInningsData[i] : this.bestBattingStrikeRateData[i],
        model = inningsScoped ? this.getInningsScopedStatsModel( statsData ) : this.getBattingModel( statsData );

    model.title = "Best Batting Strike Rate" + ( inningsScoped ? ' (Innings)' : '' );
    model.label = '';
    model.stat = statsData ? statsData.battingStats.sr : "-";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBattingAverageModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.battingAverageData[i],
        model = this.getBattingModel( statsData );

    model.title = "Best Batting Average";
    model.label = '';
    model.stat = statsData ? statsData.battingStats.a : "-";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getHighestScoresModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.highestScoresData[i],
        model = this.getInningsScopedStatsModel( statsData );

    model.title = "Highest Score";
    model.label = '';
    model.stat = statsData ? statsData.battingStats.hs : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostWicketsModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostWicketsData[i],
        model = this.getBowlingModel( statsData );

    model.title = "Most Wickets";
    model.label = 'wickets';
    model.stat = statsData ? statsData.bowlingStats.w : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostFourWicketsModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostFourWicketsData[i],
        model = this.getBowlingModel( statsData );

    model.title = "Most Four Wickets";
    model.label = '';
    model.stat = statsData ? statsData.bowlingStats['4w'] : "0";

    return model;
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsConcededModel = function( index )
{
    var inningsScoped = true;
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostRunsConcededInningsData[i],
        model = this.getInningsScopedStatsModel( statsData );

    model.title = "Most Runs Conceded (Innings)";
    model.label = 'runs';
    model.stat = statsData ? statsData.bowlingStats.r : "0";

    return model;
};


PULSE.CLIENT.CRICKET.Tournament.prototype.getMostRunsConcededOverModel = function( index )
{
    var overScoped = true;
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostRunsConcededOverData[i],
        model = this.getOverScopedStatsModel( statsData );

    model.title = "Most Runs Conceded (Over)";
    model.label = 'runs';
    model.stat = statsData ? statsData.bowlingStats.r : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestEconomyInningsModel = function( index )
{
    return this.getBestEconomyModel( index, true );
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestEconomyModel = function( index, inningsScoped )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = inningsScoped ? this.bestEconomyInningsData[i] : this.bestEconomyData[i],
        model = inningsScoped ? this.getInningsScopedStatsModel( statsData ) : this.getBowlingModel( statsData );

    model.title = "Best Economy" + ( inningsScoped ? ' (Innings)' : '' );
    model.label = '';
    model.stat = statsData ? statsData.bowlingStats.e : "-";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBowlingAverageModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.bowlingAverageData[i],
        model = this.getBowlingModel( statsData );

    model.title = "Best Bowling Average";
    model.label = '';
    model.stat = statsData ? statsData.bowlingStats.a : "-";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestBowlingModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.bestBowlingData[i],
        model = this.getInningsScopedStatsModel( statsData );

    model.title = "Best Bowling Figures";
    model.label = '';
    model.stat = statsData ? statsData.bowlingStats.bbi : "-";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostDotBallsInningsModel = function( index )
{
    return this.getMostDotBallsModel( index, true );
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostDotBallsModel = function( index, inningsScoped )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = inningsScoped ? this.mostDotBallsInningsData[i] : this.mostDotBallsData[i],
        model = inningsScoped ? this.getInningsScopedStatsModel( statsData ) : this.getBowlingModel( statsData );

    model.title = "Most Dot Balls" + ( inningsScoped ? ' (Innings)' : '' );
    model.label = 'dots';
    model.stat = statsData ? statsData.bowlingStats.d : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostMaidensModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostMaidensData[i],
        model = this.getBowlingModel( statsData );

    model.title = "Most Maidens";
    model.label = 'maidens';
    model.stat = statsData ? statsData.bowlingStats.maid : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestStrikeRateModel = function( index, inningsScoped )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = inningsScoped ? this.bestStrikeRateInningsData[i] : this.bestStrikeRateData[i],
        model = inningsScoped ? this.getInningsScopedStatsModel( statsData ) : this.getBowlingModel( statsData );

    model.title = "Best Bowling Strike Rate" + ( inningsScoped ? ' (Innings)' : '' );
    model.label = '';
    model.stat = statsData ? statsData.bowlingStats.sr : "-";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getBestStrikeRateInningsModel = function( index )
{
    this.getBestStrikeRateModel( index, true );
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getMostHatTricksModel = function( index )
{
    var i = typeof index === "undefined" ? 0 : index,
        statsData = this.mostHatTricksData[i],
        model = this.getBowlingModel( statsData );

    model.title = "Most Hat Tricks";
    model.label = 'hat tricks';
    model.stat = statsData ? statsData.bowlingStats.hatTricks : "0";

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getFastestBallModel = function( index )
{
    var i           = typeof index === "undefined" ? 0 : index,
        statsData   = this.fastestBallData[i],
        model       = {
            title: "Fastest Balls Delivered",
            player: this.getPlayerModel( statsData.player, statsData.team ),
            team: this.getTeamModel( statsData.team ),
            stats: {
                ballSpeed: statsData.ballSpeed
            },
            label: '',
            stat: statsData.ballSpeed
        };

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getFastestFiftiesModel = function( index, dateFormat )
{
    return this.getFastestBuildModel(index, "fastestFiftiesInningsData");
}

PULSE.CLIENT.CRICKET.Tournament.prototype.getFastestCenturiesModel = function( index, dateFormat )
{
    return this.getFastestBuildModel(index, "fastestCenturiesInningsData");
}

PULSE.CLIENT.CRICKET.Tournament.prototype.getFastestBuildModel = function( index ,statsDataName, dateFormat )
{
    var i           = typeof index === "undefined" ? 0 : index,
        statsData   = this[statsDataName][i]; //allows for fifties and centuries dynamically.

    var model = {
        player: this.getPlayerModel( statsData.player, statsData.team ),
        team: this.getTeamModel( statsData.team ),
        venue: statsData.venue,
        matchDate: PULSE.CLIENT.Util.getFormattedDate( statsData.matchDate, dateFormat ),
        opposition: statsData.opposition,
        stats: statsData.fastestBuild,
        stat: statsData.fastestBuild.balls
    };

    return model;
};


/**
 * Returns an array of stats models
 * @params
 *  statsType - used for calling the model generation function (e.g., getMostRunsData())
 *  statsDataName - used to identify the feed: e.g., mostRuns.js
 *  innings - used to distinguish between innings-scoped feeds and non-innings scoped feeds (e.g., mostSixes.js vs. mostSixesInnings.js)
 *  options - various filters; currently supported: limit (the length of the array) and teamId (filter results by team)
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getModelArrayFor = function( statsType, statsDataName, scope, options )
{
    if( !options )
    {
        options = {};
    }

    var prefix = '';
    if( scope === 'innings' )
    {
        prefix = 'Innings';
    }
    else if( scope === 'over' )
    {
        prefix = 'Over';
    }

    var dataStore = statsDataName + prefix + 'Data';

    var models = [],
        iLimit = options.limit ? Math.min( this[ dataStore ].length, options.limit ) : this[ dataStore ].length;

    var i = 0;
    while( i < this[ dataStore ].length )
    {
        var stat = this[ dataStore ][i];
        if( !options.teamId || ( options.teamId && +options.teamId === stat.team.id ) )
        {
            if( !options.matchFunc || ( _.isFunction( options.matchFunc ) && options.matchFunc( stat ) ) )
            {
                var model = this[ "get" + statsType + "Model" ]( i, scope === 'innings' );
                models.push( model );
            }
        }
        if( models.length === iLimit )
        {
            break;
        }
        i++;
    }

    return { statsArray: models };
};

/**
 * Old model functions still in use
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.getInNumbersModel = function( tallyName )
{
   var model = this.getTotalStatsModel();
   var twitter = PULSE.CLIENT.getTwitterInstance();

   model.tweetCount = twitter.getTweetCount( tallyName );
   model.didYouKnow = this.getLatestDidYouKnowText();
   model.year = this.year;

   return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getInNumbersModelWithoutTW = function()
{
   var model = this.getTotalStatsModel();
   // var twitter = PULSE.CLIENT.getTwitterInstance();

   // model.tweetCount = twitter.getTweetCount( tallyName );
   model.didYouKnow = this.getLatestDidYouKnowText();
   model.year = this.year;

   return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getTotalStatsModel = function()
{
    var data = this.tournamentInNumbersData;

    if( data )
    {
        var model = {
            dotBalls:  PULSE.CLIENT.Util.addCommaForThousands( data.dotBalls ),
            fastestBallMph: data.fastestBallMph,
            fastestBallKmh: data.fastestBallKmh,
            fastestBall: data.fastestBall,
            fifties: PULSE.CLIENT.Util.addCommaForThousands( data.fifties ),
            runs: PULSE.CLIENT.Util.addCommaForThousands( data.runs ),
            runsFromBoundaries: PULSE.CLIENT.Util.addCommaForThousands( data.runsFromBoundaries ),
            sixDistance: parseInt( data.sixDistance || 0, 10 ),
            sixes: PULSE.CLIENT.Util.addCommaForThousands( data.sixes ),
            wickets: PULSE.CLIENT.Util.addCommaForThousands( data.wickets ),
            superOvers: parseInt( data.superOvers || 0, 10 ),
            hatTricks: parseInt( data.hatTricks || 0, 10 ),
            lastBallFinishes: parseInt( data.lastBallFinishes || 0, 10 )
        };
    }
    else
    {
        var model = {
            dotBalls: 0,
            fastestBallMph: "-",
            fastestBallKmh: "-",
            fastestBall: "-",
            fifties: 0,
            runs: 0,
            runsFromBoundaries: 0,
            sixDistance: 0,
            sixes: 0,
            wickets: 0,
            superOvers: 0,
            hatTricks: 0,
            lastBallFinishes: 0
        };
    }

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerPointsModel = function(index)
{
    var i = typeof index === "undefined" ? 0 : index;
    var statsData = typeof statsDataName === 'undefined' ? this.playerPointsData[i] : this[statsDataName][i];
    var team = statsData.team,
        player = statsData.player,
        playerName = PULSE.CLIENT.Util.getPlayerNames( player.fullName ),
        playerPoints = "-";

    if( statsData )
    {
       playerPoints    = statsData.playerPoints.pts;
    }

    var model = {
        title: "Most Valuable Player",
        label: 'Pts',
        player: {
            id: player.id,
            url: this.tournamentUrlGenerator.getPlayerURL( player.id, player.fullName, team.id, team.fullName),
            imgRoot: this.playerImageUrl,
            firstName: playerName.firstName,
            lastName: playerName.secondName,
            fullName: player.fullName,
            nationality: player.nationality
        },
        team: {
            abbreviation: team.abbreviation,
            fullName: team.fullName,
            id: team.id
        },
        stat: playerPoints,
        data: {
            m: statsData.playerPoints.m,
            d: statsData.playerPoints.d,
            c: statsData.playerPoints.c,
            s: statsData.playerPoints.s,
            w: statsData.playerPoints.w,
            '4s': statsData.playerPoints['4s'],
            '6s': statsData.playerPoints['6s']
        }
    };

    return model;
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getFairplayModel = function( limit )
{
    if( !limit || this.fairPlayData.length < limit )
    {
        limit = this.fairPlayData.length;
    }

    var array = [];
    for( var i = 0; i < limit; i++ )
    {
        var squad = this.fairPlayData[i].cricketSquad;
        var model = {
            id: squad.team.id,
            fullName: squad.team.fullName || squad.team.fullname,
            abbreviation: squad.team.abbreviation,
            url : this.tournamentUrlGenerator.getTeamURL( squad.team.id, squad.team.fullName ),
            captainId: squad.captain.id
        };

        array.push( model );
    }

    return { fairPlayArray: array };
};

if (!PULSE) 							{ var PULSE = {}; }
if (!PULSE.CLIENT) 						{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 				{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) 	{ PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 * Given a DMS team object, it returns the same object, more or less, but
 * with a team URL if the tournament supports it
 * @param  {DMS.Team} team  the DMS object for a team
 * @return {Object}         the team model
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamModel = function( team )
{
    return $.extend( {
        url: this.tournamentUrlGenerator.getTeamURL( team.id, team.fullName )
    }, team );
};

/**
 * Returns an array of squad objects, including squad URL
 * See squads.js Tipsy3 specification
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getTeamListModel = function()
{
	if( !this.squadsData ) return { teams: [] };

	var that		= this,
		squads 		= this.squadsData,
		teamsArray 	= $.map( squads, function( squad ) {
			squad.teamUrl = that.tournamentUrlGenerator.getTeamURL( squad.team.id, squad.team.fullName );
			return squad.team;
		} );

	return { teams: teamsArray };
};

/**
 * Returns an array of player objects, captain separately, including player URLs
 * See squads.js Tipsy3 specification
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getSquadWithCaptainModel = function( teamId )
{
    var model = { captain: undefined, players: [] };
    if( !teamId || teamId == -1 )
    {
        return model;
    }

	var squad = this.getTeamById( teamId );

	if( squad )
	{
		var teamName = squad.team.fullName;
		model.team = squad.team;
		model.team.url = this.tournamentUrlGenerator.getTeamURL( squad.team.id, squad.team.fullName );

	    if( squad.players == undefined ) return model;

		for ( var i = 0; i < squad.players.length; i++ )
		{
			var player = squad.players[ i ];
			var url = this.tournamentUrlGenerator.getPlayerURL( player.id, player.fullName, teamId, teamName );
			var stats = {};

			if( this.teamTournamentStatsData[ model.team.id ] && this.matchTypes )
			{
				var statsArray = this.teamTournamentStatsData[ model.team.id ].playersStats;
				for( var j = 0, jLimit = statsArray.length; j < jLimit; j++ )
				{
					if( statsArray[j].stats )
					{
						for( var x = 0, xLimit = statsArray[j].stats.length; x < xLimit; x++ )
						{
							if( statsArray[j].stats[x].matchType === this.matchTypes[0] && statsArray[j].player.id === player.id )
							{
								stats = statsArray[j].stats[x];
							}
						}
					}
				}
			}

			if ( player.id === squad.captainId )
			{
				// Fill in captain model
				var captainName = PULSE.CLIENT.Util.getPlayerNames( player.fullName );
				model.captain = {
					id: player.id,
					fullName: player.fullName,
					firstName: captainName.firstName,
					lastName: captainName.secondName,
					nationality : player.nationality,
					url: url,
					wicketKeeper: squad.wicketKeeperId === player.id,
					stats: stats
				};

			}
			else
			{
				var playerName = PULSE.CLIENT.Util.getPlayerNames( player.fullName );
				var playerModel = {
						id: player.id,
						url: url,
						fullName: player.fullName,
						firstName: playerName.firstName,
						lastName: playerName.secondName,
						nationality : player.nationality,
						wicketKeeper: squad.wicketKeeperId === player.id,
						stats: stats
				};
				model.players.push( playerModel );
			}
		}
	}

	return model;
};



// Given a team abbreviation it will return the team's hashtag or the abbreviation

PULSE.CLIENT.CRICKET.Tournament.prototype.getHashTag = function( abbr )
{
	if( this.hashTags && this.hashTags[abbr] )
	{
		return this.hashTags[abbr];
	}

	return abbr;

};

if (!PULSE) 							{ var PULSE = {}; }
if (!PULSE.CLIENT) 						{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 				{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) 	{ PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 *
 * TWITTER AND CANARY MODELS
 *
 */

PULSE.CLIENT.CRICKET.Tournament.prototype.getTwitterForTeam = function( teamId )
{
	var tweetDetails = this.teams && this.teams[ teamId ] ? this.teams[ teamId ].twitter : undefined;
	if( tweetDetails )
	{	
		return tweetDetails;
	}
	return "";
};

/**
 * DEPRECATE! Add to common/src/js/models/Twitter.js instead!
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.getTwitterHistoricalModel = function( feedId, limit )
{
	var history = this.twitterHistData[ feedId ];
	var model = { total: 0, buckets: [] };

	if( history && history.data )
	{
		var iLimit = limit ? Math.min( limit, history.data.length ) : history.data.length;
		for( var i = 0; i < iLimit; i++ )
		{
			var pool = history.data[i];
			if( pool.resolution && pool.resolution.unit === "MINUTE" )
			{
				model.buckets = $.map( pool.buckets, function( bucket ) {
					return bucket.count;
				} );
				model.buckets = model.buckets.reverse();
			}
			else if( pool.resolution && pool.resolution.unit === "DAY" )
			{
				model.total = pool.buckets[0].count;
			}
		}
	}

	return model;
};


if (!PULSE)                           { var PULSE = {}; }
if (!PULSE.CLIENT)                    { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)            { PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Tournament) { PULSE.CLIENT.CRICKET.Tournament = {}; }

/**
 * Go through all matches in the tournament and update their team voting states
 */
PULSE.CLIENT.CRICKET.Tournament.prototype.processPlayerVoteQuestions = function()
{
    if( this.playerVoteQuestionsData.length )
    {
        for( var i = 0, iLimit = this.playerVoteQuestionsData.length; i < iLimit; i++ )
        {
            var item = this.playerVoteQuestionsData[ i ];
            var match = this.getMatchById( item.matchId.name );
            if( match )
            {
                // for testing only
                // item.votingOpen = true;
                // item.showResults = false;
                match.setPlayerVoting( item.votingOpen, item.showResults );
            }
        }
    }
};

PULSE.CLIENT.CRICKET.Tournament.prototype.getPlayerVoteDataByMatchId = function( matchId )
{
    var match = this.match.getMatchById( matchId );
    if( match && match.playerVoting.votingOpen !== undefined )
    {
        return match.playerVoting;
    }
    else
    {
        for( var i = 0, iLimit = this.playerVoteQuestionsData.length; i < iLimit; i++ )
        {
            var item = this.playerVoteQuestionsData[ i ];
            if( item.matchId.name === matchId )
            {
                return item;
            }
        }
    }
};

if (!PULSE)
{
    var PULSE = {};
}
if (!PULSE.CLIENT)
{
    PULSE.CLIENT = {};
}
if (!PULSE.CLIENT.CRICKET)
{
    PULSE.CLIENT.CRICKET = {};
}

PULSE.CLIENT.CRICKET.Match = function( tournament, matchId )
{
    this.tournament = tournament;
    this.matchId = matchId;

    this.dm = PULSE.CLIENT.getDataManager();
    this.urlGenerator = tournament.tournamentUrlGenerator;

    this.scoringData;
    this.scheduleData;
    this.playerLookup;
    this.commentaryUrls = [];

    this.playerVoting = {
        votingOpen: undefined,
        showResults: undefined,
        results: {}
    };

    this.chunks = {};

    if( this.tournament.tournamentName === "ipl2013" ||
        this.tournament.tournamentName === "ipl2012" ||
        this.tournament.tournamentName === "ipl2011" ||
        this.tournament.tournamentName === "ipl2010" ||
        this.tournament.tournamentName === "ipl2009" ||
        this.tournament.tournamentName === "ipl2008" )
    {
        this.maxBalls = 120;
    }
};

/**
 * Only fired off by schedule data, so won't be used by match-centric pages (i.e., match home)
 */
PULSE.CLIENT.CRICKET.Match.prototype.setScheduleData = function( data )
{
    this.scheduleData = data;
    this.id = data.matchId.id;

    if (this.getMatchState() === 'U')
    {
        // Add the match to the tournament's list of upcoming matches
        this.tournament.registerMatchAs('upcoming', data.matchId.name);
    }

    if (this.getMatchState() === 'L' && !this.scoringLoaded)
    {
        // Remove the match from the tournament's list of upcoming matches
        this.tournament.unregisterMatchAs('upcoming', data.matchId.name);
        // Add the match to the tournament's list of current live matches
        this.tournament.registerMatchAs('live', data.matchId.name);

        this.startScoringFeed(true);
        this.scoringLoaded = true;
    }

    if (this.getMatchState() === 'C' && !this.scoringLoaded)
    {
        // Remove the match from the tournament's list of current live matches
        this.tournament.unregisterMatchAs('live', data.matchId.name);
        // Add the match to the tournament's list of complete matches
        this.tournament.registerMatchAs('complete', data.matchId.name);
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.setScoringData = function(data)
{
    this.scoringData = data;
};

PULSE.CLIENT.CRICKET.Match.prototype.hasScoringData = function()
{
    if (this.scoringData)
    {
        return true;
    }
    return false;
};

/**
 * Given a teamId, returns whether the team is in this match
 */
PULSE.CLIENT.CRICKET.Match.prototype.hasTeamWithId = function(teamId)
{
    if( !teamId || teamId === -1 )
    {
        return;
    }

    if( +teamId === this.getTeamId(0) || +teamId === this.getTeamId(1) )
    {
        return true;
    }
};

/**
 * Given a venueId, returns whether the match is at that venue
 */
PULSE.CLIENT.CRICKET.Match.prototype.hasVenueWithId = function(venueId)
{
    if( !venueId || venueId === -1 )
    {
        return;
    }

    var venue = this.getVenue();

    if( venue && +venueId === venue.id )
    {
        return true;
    }
};


PULSE.CLIENT.CRICKET.Match.prototype.hasGroupWithId = function(groupId)
{
    if ( !groupId || groupId === -1 || !this.scheduleData )
    {
        return;
    }

    if (groupId === this.scheduleData.groupName)
    {
        return true;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getDatabaseId = function()
{
    if( this.scheduleData )
    {
        return this.scheduleData.matchId.id;
    }
    else if( this.scoringData )
    {
        return this.scoringData.matchId.id;
    }
    return;
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchType = function()
{
    if (this.scheduleData)
    {
        return this.scheduleData.matchType;
    }
    else if (this.scoringData)
    {
        return this.scoringData.matchInfo.matchType;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchDate = function()
{
    var dateString = "";

    if (this.scheduleData)
    {
        dateString = this.scheduleData.matchDate;
    }
    else if (this.scoringData)
    {
        dateString = this.scoringData.matchInfo.matchDate;
    }

    return dateString;
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchDateObj = function()
{
    var dateString = this.getMatchDate();
    return PULSE.CLIENT.DateUtil.parseDateTime( dateString );
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchNumberFromId = function()
{
    if (this.matchId)
    {

        var arr = this.matchId.split('-'),
            len = arr.length,
            matchNumber = arr[len - 1];

        return matchNumber;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getFormattedMatchDate = function(dateFormat)
{
    var dateString = this.getMatchDate();
    if (dateString)
    {
        var formattedDate = PULSE.CLIENT.Util.getFormattedDate(dateString, dateFormat);
        //console.log(dateString + ' ' + formattedDate);
        return formattedDate;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getFormattedMatchDateWithOffset = function ( desiredFormat, offset )
{
    var matchDate = PULSE.CLIENT.DateUtil.parseDateTime( this.getMatchDate() );
    if( matchDate )
    {
        var offsetDate = new Date( matchDate.getTime() + ( 3600000 * offset ) )
        if ( offsetDate )
        {
            return offsetDate.format( desiredFormat || 'dd mmmm yyyy' );
        }
    }
    return "";
};

PULSE.CLIENT.CRICKET.Match.prototype.getFormattedTimeZoneDate = function( dateFormatString, timezoneOffset )
{
    var dateString = this.getMatchDate();

    if ( dateString && dateString.length > 0 )
    {
        var date = PULSE.CLIENT.DateUtil.parseDateTime( dateString ),
            offsetDate = new Date( date.getTime() + ( 3600000 * timezoneOffset ) ),
            utcDate = PULSE.CLIENT.DateUtil.getUtcDateObject( offsetDate );

        if( utcDate )
        {
            dateFormatString = dateFormatString || 'dddd mmmm dS yyyy';
            var formattedDateString = dateFormat( utcDate, dateFormatString + '| HH:MM | Z' ).split('|')[0];
            return formattedDateString;
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getFormattedMatchTime = function(timeFormat, timezoneOffset)
{
    var dateString = this.getMatchDate();
    if( dateString )
    {
        var timeString = PULSE.CLIENT.DateUtil.getTimeFromTimestamp(dateString, timezoneOffset,
            timeFormat);
        return timeString;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getDayNight = function()
{
    var matchDate = this.getMatchDate();
    if( matchDate )
    {
        var time = matchDate.substring(11, 16);
        var timeNum = parseInt( time );

        if( isNaN( timeNum ) )
        {
            return 'Day';
        }

        if( timeNum <= 12 )
        {
            return 'Day';
        }

        return 'Day/Night';
    }

    return 'Day';
};

PULSE.CLIENT.CRICKET.Match.prototype.getVenueShortName = function()
{
    var venue = "";

    if (this.scheduleData)
    {
        venue = this.scheduleData.venue.shortName;
    }
    else if (this.scoringData)
    {
        venue = this.scoringData.matchInfo.venue.shortName;
    }

    return venue;
};


PULSE.CLIENT.CRICKET.Match.prototype.getVenueCity = function()
{
    var city = "";

    if (this.scheduleData)
    {
        city = this.scheduleData.venue.city;
    }
    else if (this.scoringData)
    {
        city = this.scoringData.matchInfo.venue.city;
    }

    return city;
};

PULSE.CLIENT.CRICKET.Match.prototype.getVenue = function()
{
    var venue = {};

    if (this.scheduleData)
    {
        venue = this.scheduleData.venue;
    }
    else if (this.scoringData)
    {
        venue = this.scoringData.matchInfo.venue;
    }

    return venue;
};

PULSE.CLIENT.CRICKET.Match.prototype.getVenueUrl = function()
{
    var url;

    if (this.scheduleData)
    {
        url = this.urlGenerator.getVenueUrl(this.scheduleData.venue.id, this.scheduleData.venue.fullName)
    }
    else if (this.scoringData)
    {
        url = this.urlGenerator.getVenueUrl(this.scoringData.matchInfo.venue.id, this.scoringData.matchInfo
            .venue.fullName)
    }

    return url;
};

PULSE.CLIENT.CRICKET.Match.prototype.getVenueLocation = function()
{
    var venue = "",
        shortName = this.getVenueShortName(),
        city = this.getVenueCity();

    if( shortName || city )
    {
        if( shortName )
        {
            venue = venue + shortName;
            if( city )
            {
                venue = venue + ', ';
            }
        }

        if( city )
        {
            venue = venue + city;
        }
    }
    return venue;
};


PULSE.CLIENT.CRICKET.Match.prototype.getMatchDescription = function()
{
    var description = "";

    if (this.scoringData)
    {
        description = this.scoringData.matchInfo.description;
    }

    if (this.scheduleData)
    {
        description = this.scheduleData.description;
    }

    return description;
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchDuration = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['match.duration'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getMatchDay = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['match.day'];
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getGroupName = function()
{
    var groupName = '';

    if (this.scoringDate)
    {
        groupName = this.scoringData.groupName;
    }

    if (this.scheduleData)
    {

        groupName = this.scheduleData.groupName;
    }

    return groupName;
};


PULSE.CLIENT.CRICKET.Match.prototype.getTournamentLabel = function()
{
    var tournamentLabel = "";

    if (this.scoringData)
    {
        tournamentLabel = this.scoringData.matchInfo.tournamentLabel || "";

    }

    return tournamentLabel;
};


PULSE.CLIENT.CRICKET.Match.prototype.getTournamentId = function()
{
    var tournamentId;

    if (this.scheduleData)
    {

        tournamentId = this.scheduleData.tournamentId
    }

    return tournamentId;
};

PULSE.CLIENT.CRICKET.Match.prototype.getTournamentName = function()
{
    var tournamentName;

    if (this.scheduleData)
    {

        tournamentName = this.scheduleData.tournamentName
    }

    return tournamentName;
};


PULSE.CLIENT.CRICKET.Match.prototype.getMatchLink = function(tab)
{
    var link = this.urlGenerator.getMatchURL(this.matchId, tab);
    return link;
};

PULSE.CLIENT.CRICKET.Match.prototype.getTwitterTotal = function( teamIndex )
{
    if (this.scoringData)
    {
        var matchInfo = this.scoringData.matchInfo ? this.scoringData.matchInfo : undefined;
        if (!matchInfo)
        {
            return;
        }
        var additionalInfo = matchInfo.additionalInfo ? matchInfo.additionalInfo : undefined;
        if (!additionalInfo)
        {
            return
        }

        if (teamIndex === 0)
        {

            return additionalInfo['home.team.fan.total'] ? additionalInfo['home.team.fan.total'] :
                undefined;
        }
        else
        {

            return additionalInfo['away.team.fan.total'] ? additionalInfo['away.team.fan.total'] :
                undefined;
        }

    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamLink = function(teamIndex)
{
    var teamName = this.getFullName(teamIndex),
        teamId = this.getTeamId(teamIndex);
    if (teamName && teamId)
    {
        var link = this.tournament.globalUrlGenerator.getTeamURL(teamId, teamName);
        return link;
    }

    return "";
};

PULSE.CLIENT.CRICKET.Match.prototype.getPreviewLink = function()
{
    if (this.scheduleData)
    {
        return this.scheduleData.matchPreviewLink;
    }
    else
    {
        if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
        {
            return this.scoringData.matchInfo.additionalInfo['preview.link'];
        }
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getReportLink = function()
{
    if (this.scheduleData)
    {
        return this.scheduleData.reportLink;
    }
    else
    {
        if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
        {
            return this.scoringData.matchInfo.additionalInfo['report.link'];
        }
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getReportThumb = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['report.thumb'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getHighlightsLink = function()
{
    if (this.scheduleData)
    {
        return this.scheduleData.highlightsLink;
    }
    else
    {
        if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
        {
            return this.scoringData.matchInfo.additionalInfo['highlights.link'];
        }
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getHighlightsThumb = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['match.video.thumb'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getHighlightsId = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['match.video.id'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getManOfTheMatchId = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['mom.video.id'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getManOfTheMatchThumb = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['mom.video.thumb'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getSixesId = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['sixes.video.id'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getSixesThumb = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['sixes.video.thumb'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getInterviewLink = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['interview.link'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getInterviewThumb = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['interview.thumb'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getStatsLink = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['stats.link'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getStatsThumb = function()
{
    if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
    {
        return this.scoringData.matchInfo.additionalInfo['stats.thumb'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getPhotostreamLink = function()
{
    if (this.scheduleData)
    {
        return this.scheduleData.photostreamLink;
    }
    else
    {
        if (this.scoringData && this.scoringData.matchInfo.additionalInfo)
        {
            return this.scoringData.matchInfo.additionalInfo['photostream.link'];
        }
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getTicketsLink = function()
{
    if( this.tournament.playoffs && this.tournament.playoffs[ this.matchId ] )
    {
        return this.tournament.playoffs[ this.matchId ].ticketsLink;
    }
    else
    {
        var homeTeamId  = this.getTeamId(0); // the first team is always the home team
        var venue       = this.getVenue();
        if( this.tournament.ticketsOverride && this.tournament.ticketsOverride[this.matchId] )
        {
            return this.tournament.ticketsOverride[this.matchId].ticketsLink;
        }

        if( this.tournament.teams && this.tournament.teams[ homeTeamId ] && this.tournament.teams[ homeTeamId ].ticketsLink )
        {
            return this.tournament.teams[ homeTeamId ].ticketsLink;
        }
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getIPLVideosLink = function()
{
    if( this.scoringData && this.scoringData.matchInfo.additionalInfo )
    {
        return this.scoringData.matchInfo.additionalInfo["iplvideos.link"];
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchVideoMediaId = function()
{
    if( this.scoringData && this.scoringData.matchInfo.additionalInfo )
    {
        return this.scoringData.matchInfo.additionalInfo['match.video.id'];
    }
};
PULSE.CLIENT.CRICKET.Match.prototype.getMatchPhoto = function()
{
    if( this.scoringData && this.scoringData.matchInfo.additionalInfo )
    {
        return this.scoringData.matchInfo.additionalInfo["match.photo.id"];
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamTweetCount = function( teamIndex )
{
    if( this.scoringData && this.scoringData.matchInfo.additionalInfo )
    {
        if( teamIndex === 1 )
        {
            return this.scoringData.matchInfo.additionalInfo["away.team.fan.total"];
        }
        return this.scoringData.matchInfo.additionalInfo["home.team.fan.total"];
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchState = function()
{
    if (this.scoringData)
    {
        var matchState = '';

        switch (this.scoringData.currentState.phase)
        {
            case 'E':
            case 'U':
                matchState = 'U';
                break;
            case 'C':
                matchState = 'C';
                break;
            case 'O':
                if( this.hasTieBreaker() && this.scoringData.tieBreaker.currentState.inProgress )
                {
                    matchState = 'L';
                }
                else
                {
                    matchState = 'C';
                }
                break;
            default:
                matchState = 'L';
                break;
        }

        return matchState;
    }
    else if (this.scheduleData)
    {
        return this.scheduleData.matchState;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.isMatchLive = function()
{
    var stateString;
    if (this.scoringData)
    {
        stateString = this.scoringData.currentState.phase;
    }
    else if (this.scheduleData)
    {
        stateString = this.scheduleData.matchState;
    }
    if (stateString && $.inArray(stateString, ["U", "C"]) === -1)
    {
        return true;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.isInInningsBreak = function()
{
    if (this.scoringData)
    {
        switch (this.scoringData.currentState.phase)
        {
            case '12':
            case '23':
            case '34':
                return true;
            case 'O':
                if( this.hasTieBreaker() && this.getTieBreaker().currentState.phase === 'SO12' )
                {
                    return true;
                }
            default:
                return false;

        }
    }

    return false;
};

PULSE.CLIENT.CRICKET.Match.prototype.getCurrentInningsIndex = function()
{
    if (!this.scoringData || !this.scoringData.currentState)
    {
        return;
    }
    return this.scoringData.currentState.currentInningsIndex;
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamBatFirst = function( index )
{
    // Use scoring data if possible
    if( this.scoringData &&
        this.scoringData.matchInfo &&
        this.scoringData.matchInfo.battingOrder )
    {
        if( _.first( this.scoringData.matchInfo.battingOrder ) === index )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    // Fallback to schedule data - not sure if this is reliable?
    var indexName = 'team' + ( index + 1 );
    if( this.scheduleData &&
        this.scheduleData[ indexName ] &&
        this.scheduleData[ indexName ].innings &&
        this.scheduleData[ indexName ].innings.length > 0 )
    {
        for( var i = 0; i < this.scheduleData[ indexName ].innings.length; i++ )
        {
            if( this.scheduleData[ indexName ].innings[ i ].inningsNumber == 1 )
            {
                return true;
            }
        }
    }
    return false;
};

/**
 * Get the score(s) for that particular team
 * @param  {Number} index - the index of the team to retrieve the score for
 * @return {Array}        - array of score strings, as provided by
 *                          PULSE.CLIENT.CRICKET.Match.getScoreByTeamIndex
 */
PULSE.CLIENT.CRICKET.Match.prototype.getTeamInnings = function( index )
{
    var innings = [];

    //if scoring data exists, it takes precedence
    if ( this.scoringData )
    {
        var battingOrder = this.scoringData.matchInfo.battingOrder,
            cii = this.scoringData.currentState.currentInningsIndex;

        innings = this.getScoreByTeamIndex( this.scoringData.innings, battingOrder, cii, index );
    }
    else if ( this.scheduleData && this.scheduleData[ 'team' + ( index + 1 ) ] &&
        this.scheduleData[ 'team' + ( index + 1 ) ].innings )
    {
        for ( var i = 0; i < this.scheduleData[ 'team' + ( index + 1 ) ].innings.length; i++ )
        {
            var inns = this.scheduleData[ 'team' + ( index + 1 ) ].innings[ i ];

            /*
             * sometimes the data feed returns an innings object, but with no balls faced means
             * the inns never started, so it needs to be ignored
             */
            if ( inns.ballsFaced )
            {
                innings.push( PULSE.CLIENT.CRICKET.Utils.getInningsScore( inns.runs, inns.wkts,
                    inns.allOut, inns.declared, false ) );
            }
        }
    }
    else
    {
        innings.push( '' );
    }

    return innings;
};

/**
 * Corresponds to the PULSE.CLIENT.CRICKET.Match.getTeamInnings, but used for tieBreaker scores
 * @param  {Number} index - the index of the team to retrieve the score for
 * @return {Array}        - array of score strings, as provided by
 *                          PULSE.CLIENT.CRICKET.Match.getScoreByTeamIndex
 */
PULSE.CLIENT.CRICKET.Match.prototype.getTeamTieBreakScore = function( index )
{
    var innings = [];

    if( this.scoringData.matchInfo.tieBreaker && this.scoringData.tieBreaker )
    {
        var tieBreakerData = this.scoringData.tieBreaker,
            battingOrder = this.scoringData.matchInfo.tieBreaker.battingOrder,
            cii = tieBreakerData.currentState.currentInningsIndex;

        innings = this.getScoreByTeamIndex( tieBreakerData.innings, battingOrder, cii, index );
    }

    return innings;
};

/**
 * Returns the score(s) for a team, given its index; generalised so innings array, batting order
 * array and current innings index is provided
 * @param  {Array} innings       - array of innings objects in scoring file format
 * @param  {Array} battingOrder  - batting order array (team indices in order)
 * @param  {Number} cii          - current innings index within innings array
 * @param  {Number} teamIndex    - index of the team, as ordered in matchInfo
 * @return {Array}               - array of score strings, one for each innings for that team
 */
PULSE.CLIENT.CRICKET.Match.prototype.getScoreByTeamIndex = function( innings, battingOrder, cii, teamIndex )
{
    var teamInns = [];

    if ( innings )
    {
        for ( var i = 0; i < innings.length; i++ )
        {
            var inns = innings[ i ],
                battingIdx = battingOrder[ i ];

            if ( inns.scorecard && battingIdx === teamIndex )
            {
                teamInns.push( PULSE.CLIENT.CRICKET.Utils.getInningsScore( inns.scorecard.runs,
                    inns.scorecard.wkts, inns.scorecard.allOut, inns.declared, false ) );
            }
        }
    }

    /*
     * if a new innings has started and an innings object doesn't exist for the new innings and
     * the batting index for this innings === teamIndex add an empty score
     */
    if ( ( !innings || innings.length < ( cii + 1 ) ) &&
        battingOrder &&
        battingOrder[ cii ] === teamIndex )
    {
        teamInns.push( this.getMatchState() === 'L' ? '0/0' : '' );
    }

    return teamInns;
};

/**
 * Returns the score of the latest innings
 */
PULSE.CLIENT.CRICKET.Match.prototype.getCurrentScore = function()
{

    if (this.scoringData && (this.getMatchState() === "L" || 'C'))
    {
        var cii = this.scoringData.currentState.currentInningsIndex;

        if ((!this.scoringData.innings || this.scoringData.innings.length < (cii + 1)))
        {
            return {
                runs: 0,
                wickets: 0
            };
        }

        var inningsArray = this.scoringData.innings;
        if (inningsArray)
        {
            var lastInnings = inningsArray[inningsArray.length - 1];

            if (lastInnings.scorecard)
            {
                var currentScore = {
                    runs: lastInnings.scorecard.runs,
                    wickets: lastInnings.scorecard.wkts || 0
                };

                return currentScore;
            }

            return {
                runs: undefined,
                wickets: undefined
            };
        }
    }
};

/**
 * Gets the array of balls for a specific innings
 * @param  {Number} innsIndex          - the index of the desired innings
 * @param  {Boolean} includeTiebreaker - whether to use tiebreaker data or not
 * @param  {Number} limit              - how many balls to include, maximum
 * @return {Array}                     - balls for the innings or undefined, if no balls exist
 */
PULSE.CLIENT.CRICKET.Match.prototype.getOverHistory = function( innsIndex, includeTiebreaker, limit )
{
    if( this.scoringData )
    {
        var innings = this.scoringData.innings;
        if( includeTiebreaker && this.hasTieBreaker() )
        {
            innings = this.scoringData.tieBreaker.innings;
        }
        else if( includeTiebreaker && !this.hasTieBreaker() )
        {
            return;
        }

        if( innings && innings[ innsIndex ] )
        {
            overHistory = innings[ innsIndex ].overHistory;

            if( limit && overHistory.length > limit )
            {
                return overHistory.splice( overHistory.length - limit, limit );
            }

            return overHistory;
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getOver = function( innsIndex, overIndex, tieBreaker )
{
    var overHistory = this.getOverHistory( innsIndex, tieBreaker );
    if( overHistory )
    {
        return overHistory[ overIndex ];
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamWon = function(index)
{
    var desiredOutcome = index === 0 ? 'A' : 'B',
        outcome = this.getOutcome();

    return desiredOutcome === outcome;
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamRunRate = function(index)
{
    //if scoring data exists, it takes precedence
    if (this.scoringData && this.scoringData.innings)
    {
        var battingOrder = this.scoringData.matchInfo.battingOrder,
            cii = this.scoringData.currentState.currentInningsIndex,
            battingIdx = battingOrder[cii],
            batting = battingIdx === index,
            inning = PULSE.CLIENT.CRICKET.Utils.getTeamLatestInnings(this.scoringData.innings,
                battingOrder, index);

        if (inning && inning.runRate) // && batting )
        {
            return inning.runRate;
        }
    }
    return '';
};

PULSE.CLIENT.CRICKET.Match.prototype.getMaxOvers = function( index )
{
    if( this.scoringData )
    {
        if( this.scoringData.innings )
        {
            var battingOrder = this.scoringData.matchInfo.battingOrder,
                cii = this.scoringData.currentState.currentInningsIndex,
                inning = PULSE.CLIENT.CRICKET.Utils.getTeamLatestInnings(
                    this.scoringData.innings,
                    battingOrder,
                    index
                ),
                oversLimit = this.scoringData.matchInfo.oversLimit;

            return inning && inning.rodl ? inning.rodl.overs : oversLimit;
        }
        else
        {
            return this.scoringData.matchInfo.oversLimit;
        }

    }
    else if( this.scheduleData &&
             this.scheduleData['team' + (index + 1)] &&
             this.scheduleData['team' + (index + 1)].innings )
    {
        var innings = this.scheduleData['team' + (index + 1)].innings,
            inning = innings[innings.length - 1];

        inning.maxBalls = inning.maxBalls || this.maxBalls;

        var oversLimit = inning.maxBalls ? PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction(
            {
                ballsFaced: inning.maxBalls
            }) : undefined;

        return oversLimit;
    }
};

//returns the over progress for a team's latest innings
//returns ovProg/maxOvers for limited overs
//returns ovProg ov for unlimited overs

PULSE.CLIENT.CRICKET.Match.prototype.getOverProgress = function(index)
{
    var overProgress = '';
    var maxOvers = this.getMaxOvers( index );

    //if scoring data exists, it takes precedence
    if (this.scoringData && this.scoringData.innings)
    {
        var battingOrder = this.scoringData.matchInfo.battingOrder,
            cii = this.scoringData.currentState.currentInningsIndex,
            inning = PULSE.CLIENT.CRICKET.Utils.getTeamLatestInnings(this.scoringData.innings,
                battingOrder,
                index),
            batting = this.teamIsBatting(index),
            limited = this.scoringData.matchInfo.isLimitedOvers,
            matchType = this.scoringData.matchInfo.matchType;

        if (inning && inning.overProgress)
        {
            if (limited)
            {
                overProgress = inning.overProgress + '/' + maxOvers;
            }
            else
            {
                //for unlimited overs only add over progress if team is batting
                //this means also checking if an innings has started but no innings object exists for it
                if (this.scoringData.matchInfo.matchState !== 'L' || batting)
                {
                    if (this.scoringData.innings.length < (cii + 1) && batting)
                    {

                    }
                    else
                    {
                        overProgress = inning.overProgress;
                    }
                }

            }
        }

        // if the match has started but this team is batting but no ball have been bowled, return default
        if (!overProgress && this.teamIsBatting(index))
        {
            if (!limited)
            {
                return "0";
            }
            else
            {
                return "0/" + maxOvers;
            }
        }
    }
    else if (this.scheduleData && this.scheduleData['team' + (index + 1)] && this.scheduleData[
        'team' +
        (index + 1)].innings)
    {
        var innings = this.scheduleData['team' + (index + 1)].innings,
            inning = innings[innings.length - 1],
            overFraction = PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction(inning);

        inning.maxBalls = inning.maxBalls || this.maxBalls;

        var oversLimit = inning.maxBalls ? PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction(
            {
                ballsFaced: inning.maxBalls
            }) : undefined,
            matchType = this.scheduleData.matchType,
            limited = this.isLimitedOvers();

        if (inning && overFraction)
        {
            if (limited)
            {
                overProgress = overFraction + '/' + maxOvers;
            }
            else
            {
                overProgress = overFraction;
            }
        }
    }

    return overProgress;
};

// requires a team index
PULSE.CLIENT.CRICKET.Match.prototype.getOverProgressArray = function(index)
{
    var overProgress = [];

    //if scoring data exists, it takes precedence
    if (this.scoringData && this.scoringData.innings)
    {
        var battingOrder = this.scoringData.matchInfo.battingOrder,
            cii = this.scoringData.currentState.currentInningsIndex,
            innings = this.scoringData.innings,
            batting = this.teamIsBatting(index),
            limited = this.scoringData.matchInfo.isLimitedOvers,
            matchType = this.scoringData.matchInfo.matchType,
            maxOvers = this.scoringData.matchInfo.oversLimit;

        for (var i = 0; i < innings.length; i++)
        {
            var inning = innings[i],
                battingIdx = battingOrder[i];

            if (battingIdx === index)
            {
                if (inning && inning.overProgress && !limited)
                {
                    if (!limited)
                    {
                        overProgress.push(inning.overProgress);
                    }
                }
            }
            else if ((!inning || !inning.overProgress) && !limited)
            {
                overProgress.push("0");
            }
        }
    }
    else if (this.scheduleData && this.scheduleData['team' + (index + 1)] && this.scheduleData[
        'team' +
        (index + 1)].innings)
    {
        var innings = this.scheduleData['team' + (index + 1)].innings,
            matchType = this.scheduleData.matchType,
            limited = this.isLimitedOvers();

        for (var i = 0, iLimit = innings.length; i < iLimit; i++)
        {
            if (!limited && innings[i])
            {
                innings[i].maxBalls = innings[i].maxBalls || this.maxBalls;
                var overFraction = PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction(innings[i]);
                overProgress.push(overFraction)
            }
        }
    }

    return overProgress;
};

PULSE.CLIENT.CRICKET.Match.prototype.getOvers = function( index )
{
    //if scoring data exists, it takes precedence
    if (this.scoringData && this.scoringData.innings)
    {
        var battingOrder = this.scoringData.matchInfo.battingOrder,
            inning = PULSE.CLIENT.CRICKET.Utils.getTeamLatestInnings(
                this.scoringData.innings,
                battingOrder,
                index);

        if (inning && inning.overProgress)
        {
            return inning.overProgress;
        }
    }
    else if( this.scheduleData && this.scheduleData['team' + (index + 1)] &&
             this.scheduleData[ 'team' + (index + 1)].innings )
    {
        var innings = this.scheduleData['team' + (index + 1)].innings,
            inning = innings[innings.length - 1];

        inning.maxBalls = inning.maxBalls || this.maxBalls;

        var oversLimit = inning.maxBalls ? PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction(
            {
                ballsFaced: inning.maxBalls
            }) : undefined;

        return oversLimit;
    }
};


PULSE.CLIENT.CRICKET.Match.prototype.getOverPercentage = function(index)
{
    var overProgress = '';

    //if scoring data exists, it takes precedence
    if (this.scoringData && this.scoringData.innings)
    {
        var battingOrder = this.scoringData.matchInfo.battingOrder,
            cii = this.scoringData.currentState.currentInningsIndex,
            inning = PULSE.CLIENT.CRICKET.Utils.getTeamLatestInnings(this.scoringData.innings,
                battingOrder,
                index),
            batting = this.teamIsBatting(index),
            limited = this.scoringData.matchInfo.isLimitedOvers,
            matchType = this.scoringData.matchInfo.matchType,
            maxOvers = this.scoringData.matchInfo.oversLimit;

        if (inning && inning.overProgress)
        {
            if (limited)
            {
                overProgress = Math.round(inning.overProgress * 100 / (inning.rodl ? inning.rodl.overs :
                    maxOvers));
            }
            else
            {
                overProgress = 100;

            }
        }
    }
    else if (this.scheduleData && this.scheduleData['team' + (index + 1)] &&
             this.scheduleData[ 'team' + (index + 1) ].innings)
    {
        var innings = this.scheduleData['team' + (index + 1)].innings,
            inning = innings[innings.length - 1],
            overFraction = PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction(inning),
            oversLimit = inning.maxBalls ? PULSE.CLIENT.CRICKET.Utils.getFakeOversFraction(
            {
                ballsFaced: inning.maxBalls
            }) : undefined,
            matchType = this.scheduleData.matchType,
            maxOvers = (matchType === 'ODI' || matchType === "LIST_A" || matchType === 'OTHER' ) ? 50 : 20,
            limited = (matchType === 'TEST' || matchType === "FIRST_CLASS") ? false : true;

        if (this.tournament.tournamentName === "champtrophy-2013-warmups")
        {
            maxOvers = 50;
        }

        if (inning && overFraction)
        {
            if (limited)
            {
                overProgress = Math.round(inning.overFraction * 100 / (oversLimit || maxOvers));
            }
            else
            {
                overProgress = 100;
            }
        }
    }

    return overProgress;
};

PULSE.CLIENT.CRICKET.Match.prototype.teamIsBatting = function(index)
{
    //only determined via scoring data
    //(schedule doesn't contain enough info)
    if (this.scoringData && this.scoringData.matchInfo.battingOrder)
    {
        var cii = this.scoringData.currentState.currentInningsIndex,
            inProgress = this.scoringData.currentState.inProgress,
            battingOrder = this.scoringData.matchInfo.battingOrder,
            battingIdx = battingOrder[cii];

        return (inProgress && battingIdx === index);
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.teamIsBowling = function(index)
{
    //only deermined via scoring data
    //(schedule doesn't contain enough info)
    if ( this.scoringData && this.scoringData.matchInfo.battingOrder )
    {
        var currentState = this.hasTieBreaker() ? this.scoringData.tieBreaker.currentState :
                this.scoringData.currentState,
            cii = currentState.currentInningsIndex,
            inProgress = currentState.inProgress,
            battingOrder = this.hasTieBreaker() ?
                this.scoringData.matchInfo.tieBreaker.battingOrder :
                this.scoringData.matchInfo.battingOrder,
            battingIdx = battingOrder[ cii ],
            bowlingIdx = battingIdx === 0 ? 1 : 0;

        return ( inProgress && bowlingIdx === index );
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamAbbr = function(index)
{
    var abbr = 'TBD',
        teamNumber = 'team' + (index + 1);

    if (this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.teams)
    {
        var team = this.scoringData.matchInfo.teams[index];

        abbr = team && team.team ? team.team.abbreviation : 'TBD';
    }
    else if (this.scheduleData && this.scheduleData[teamNumber] && this.scheduleData[teamNumber].team)
    {
        abbr = this.scheduleData[teamNumber].team.abbreviation;
    }

    abbr = abbr.replace('SH', 'SRH');

    return abbr;
};

PULSE.CLIENT.CRICKET.Match.prototype.getIndexOfTeamByAbbr = function( abbr )
{
    if ( this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.teams )
    {
        var team = this.scoringData.matchInfo.teams[0];

        if( team && team.team && team.team.abbreviation == abbr )
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamId = function(index)
{
    var id = -1,
        teamNumber = 'team' + (index + 1);

    if (this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.teams)
    {
        var team = this.scoringData.matchInfo.teams[index];

        id = team && team.team ? team.team.id : -1;
    }
    else if (this.scheduleData && this.scheduleData[teamNumber] && this.scheduleData[teamNumber].team)
    {
        id = this.scheduleData[teamNumber].team.id;
    }

    return id;
}

PULSE.CLIENT.CRICKET.Match.prototype.getFullName = function(index)
{
    var fullName = 'TBD',
        teamNumber = 'team' + (index + 1);

    if (this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.teams)
    {
        var team = this.scoringData.matchInfo.teams[index];

        fullName = team && team.team ? team.team.fullName : 'TBD';
    }
    else if (this.scheduleData && this.scheduleData[teamNumber] && this.scheduleData[teamNumber].team)
    {
        fullName = this.scheduleData[teamNumber].team.fullName;
    }

    return fullName;
};

PULSE.CLIENT.CRICKET.Match.prototype.getShortName = function(index)
{
    var shortName = 'TBD',
        teamNumber = 'team' + (index + 1);

    if (this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.teams)
    {
        var team = this.scoringData.matchInfo.teams[index];

        shortName = team && team.team ? team.team.shortName : 'TBD';
    }
    else if (this.scheduleData && this.scheduleData[teamNumber] && this.scheduleData[teamNumber].team)
    {
        shortName = this.scheduleData[teamNumber].team.shortName;
    }

    return shortName;
};

PULSE.CLIENT.CRICKET.Match.prototype.getYetToBat = function(index)
{
    var innings = this.getTeamInnings(index),
        batting = this.teamIsBatting(index),
        matchState = this.getMatchState();

    if (!(innings.length || batting) && matchState !== 'C')
    {
        return true;
    }

    return false;
};

PULSE.CLIENT.CRICKET.Match.prototype.getCurrentPartnership = function()
{
    if ( !this.scoringData )
    {
        return;
    }

    var currentState = this.hasTieBreaker() ? this.scoringData.tieBreaker.currentState :
        this.scoringData.currentState;

    return currentState.currentPartnership || '0';
};

PULSE.CLIENT.CRICKET.Match.prototype.getCurrentBattingTeam = function()
{
    //only determined via scoring data
    //(schedule doesn't contain enough info)
    if (this.scoringData && this.scoringData.matchInfo.battingOrder)
    {
        var cii = this.scoringData.currentState.currentInningsIndex,
            inProgress = this.scoringData.currentState.inProgress,
            battingOrder = this.scoringData.matchInfo.battingOrder,
            battingIdx = battingOrder[cii],
            team = this.scoringData.matchInfo.teams[battingIdx];

        return team;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getCurrentBowlingTeam = function()
{
    //only determined via scoring data
    //(schedule doesn't contain enough info)
    if ( this.scoringData &&
        this.scoringData.matchInfo.teams &&
        this.scoringData.matchInfo.teams.length === 2 )
    {
        if ( this.teamIsBowling( 0 ) )
        {
            return this.scoringData.matchInfo.teams[ 0 ];
        }
        else if ( this.teamIsBowling( 1 ) )
        {
            return this.scoringData.matchInfo.teams[ 1 ];
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getRequiredRunRate = function()
{
    if (!this.scoringData)
    {
        return;
    }
    var requiredRunRate = this.scoringData.currentState ? this.scoringData.currentState.requiredRunRate :
        "";

    return requiredRunRate;
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchSummary = function()
{
    var text = "",
        inningsSummary,
        values,
        currentBattingTeam,
        requiredRunRate;

    if (this.scoringData)
    {
        if (this.scoringData.matchInfo.matchSummary)
        {
            text = this.scoringData.matchInfo.matchSummary;
        }
        else if (this.scoringData.matchInfo.matchStatus)
        {
            text = this.scoringData.matchInfo.matchStatus.text;
        }
        else if (this.scoringData.matchInfo.inningsSummary &&
            this.scoringData.matchInfo.inningsSummary.version === 1)
        {
            inningsSummary = this.scoringData.matchInfo.inningsSummary;
            values = inningsSummary.values;
            currentBattingTeam = this.getCurrentBattingTeam();
            requiredRunRate = this.getRequiredRunRate();

            switch (inningsSummary.type)
            {
                case "P":
                    text = currentBattingTeam.team.abbreviation + " Projections: " + values[0] +
                        " &#64; Current Run Rate &#124; " + values[1] + ' ' + PULSE.CLIENT.pluralise( values[1], 'run', 'runs' ) +
                        " @ 6 RPO &#124; " + values[2] + ' ' + PULSE.CLIENT.pluralise( values[2], 'run', 'runs' ) + " @ 8 RPO"

                    break;
                case "C":
                    var reqRR = this.scoringData.currentState && requiredRunRate ?
                        " &#124; Req RR&#58; " + requiredRunRate : "";
                    text = currentBattingTeam.team.abbreviation + " require " + values[0] + ' ' +
                        PULSE.CLIENT.pluralise( values[0], 'run', 'runs' ) + " with " + values[1] +
                        ' ' + PULSE.CLIENT.pluralise( values[1], 'ball', 'balls' ) + " remaining" + reqRR;

                    break;

                case "T":
                    text = this.getTestMatchSummary();
                    break;
            }
        }
    }
    else if (this.scheduleData && this.scheduleData.matchStatus)
    {
        text = this.scheduleData.matchStatus.text;
    }

    return text;
};

/**
 * If test scores, then for the current innings and the current batting team
 * we need to work out whether or not we're chasing or leading.
 * For instance Team B has a lead of 100 in the second innings then [100][1][1]
 * would be returned.
 *
 *   [0] The run delta between the two teams.
 *   [1] No-Score recorded (0), Ahead(1), or Behind(-1)
 *   [2] To-Win flag. If (1) then run count is to "win". This is only set in the final innings.
 */
PULSE.CLIENT.CRICKET.Match.prototype.getTestMatchSummary = function()
{
    var text;

    var values = this.scoringData.matchInfo.inningsSummary.values;

    var delta = values[0];
    var state = values[1];
    var toWin = values[2];

    var cii = this.getCurrentInningsIndex();
    var teamIndex = this.teamIsBatting(0) ? 0 : 1;
    var score = _.last(this.getTeamInnings(teamIndex));
    var overs = this.getOverProgress(teamIndex);
    var followOn = this.isFollowOn();
    var currentBattingTeam = this.getCurrentBattingTeam();
    var followOnText = '';

    if( followOn && cii === 2 ) // check for cii possibly redundant
    {
        followOnText = ' are following on and';
    }

    /**
     * If it's the first innings, there's no 'leading' or 'trailing'
     */
    if (cii === 0)
    {
        text = currentBattingTeam.team.abbreviation + ' are ' + score + ' off ' +
            overs + ' ' + PULSE.CLIENT.pluralise( overs, 'over', 'overs' );
    }
    /**
     * If it's the last innings and the teams aren't tied
     */
    else if (toWin && delta)
    {
        text = currentBattingTeam.team.abbreviation + ' require ' + delta +
            ' ' + PULSE.CLIENT.pluralise( delta, 'run', 'runs' ) + ' to win';
    }
    else
    {
        switch (state)
        {
            case -1:
                text = currentBattingTeam.team.abbreviation + followOnText + ' trail by ' +
                    delta + ' ' + PULSE.CLIENT.pluralise( delta, 'run', 'runs' ) ;
                break;
            case 0:
                if( followOn )
                {
                    text = currentBattingTeam.team.abbreviation + followOnText + ' scores are level';
                }
                else
                {
                    text = 'Scores are level';
                }
                break;
            case 1:
                text = currentBattingTeam.team.abbreviation + followOnText + ' lead by ' +
                    delta + ' ' + PULSE.CLIENT.pluralise( delta, 'run', 'runs' ) ;
                break;
        }
    }

    return text;
};

PULSE.CLIENT.CRICKET.Match.prototype.getInnsBreakOverride = function()
{
    if (this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.matchSummary)
    {
        return this.scoringData.matchInfo.matchSummary;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getOutcome = function()
{
    if (this.scoringData && this.scoringData.matchInfo.matchStatus)
    {
        return this.scoringData.matchInfo.matchStatus.outcome;
    }
    else if (this.scheduleData && this.scheduleData.matchStatus)
    {
        return this.scheduleData.matchStatus.outcome;
    }
};

/**
 * 	Match-specific additional info
 */
PULSE.CLIENT.CRICKET.Match.prototype.getMatchInfoModel = function()
{
    var model = {
        summary: this.getMatchSummary(),
        venue: this.getVenue(),
        umpires: this.getUmpires(),
        referee: this.getReferee(),
        toss: this.getToss(),
        notes: this.getNotes(),
        MoM: this.getManOfTheMatch()
    };

    return model;
};

PULSE.CLIENT.CRICKET.Match.prototype.getUmpires = function()
{
    if (!this.scoringData || !this.scoringData.matchInfo.additionalInfo)
    {
        return [];
    }

    var limit = 10, // assumes no more than 10 umpires get assigned to a match
        umpires = [];

    for (var i = 0; i < limit; i++)
    {
        var umpire = this.scoringData.matchInfo.additionalInfo["umpire.name." + (i + 1)];
        if (umpire)
        {
            umpires.push(umpire);
        }
    }

    return umpires;
};

/**
 * Determines whether the match is a limited overs match or not
 * IMPORTANT: note that it returns false if there's no data
 *
 * @return {Boolean} true if it is limited, false if it isn't
 */
PULSE.CLIENT.CRICKET.Match.prototype.isLimitedOvers = function()
{
    if( this.scoringData && this.scoringData.matchInfo )
    {
        var matchInfo = this.scoringData.matchInfo;
        return matchInfo.isLimitedOvers || matchInfo.oversLimit;
    }
    else if( this.scheduleData )
    {
        var team1exists = true;
        var team2exists = true;
        if( this.scheduleData.team1 && this.scheduleData.team1.innings )
        {
            for( var i = 0, iLimit = this.scheduleData.team1.innings.length; i < iLimit; i++ )
            {
                var innings = this.scheduleData.team1.innings[i];
                if( innings.maxBalls )
                {
                    return true;
                }
            }
        }

        if( this.scheduleData.team2 && this.scheduleData.team2.innings )
        {
            for( var i = 0, iLimit = this.scheduleData.team2.innings.length; i < iLimit; i++ )
            {
                var innings = this.scheduleData.team2.innings[i];
                if( innings.maxBalls )
                {
                    return true;
                }
            }
        }

        if( -1 < $.inArray( this.getMatchType(), ["TEST", "FIRST_CLASS"] ) )
        {
            return false;
        }
        else if( -1 < $.inArray( this.getMatchType(), ["T20", "T20I", "ODI", "CLT20", "IPLT20", "LIST_A"] ) )
        {
            return true;
        }
    }
    return false;
};

/**
 * Determines whether the match has a follow-on situation by checking whether the
 * third-innings team is the same as the second-innings team
 *
 * @return {Boolean} true if it is a follow-on, false if it isn't
 */
PULSE.CLIENT.CRICKET.Match.prototype.isFollowOn = function()
{
    var innsIndex = this.getCurrentInningsIndex();
    if( innsIndex < 2 )
    {
        return false;
    }

    if( this.scoringData && this.scoringData.matchInfo.battingOrder )
    {
        var order = this.scoringData.matchInfo.battingOrder;
        return order[ 2 ] === order[ 1 ];
    }
};

/**
 * Determines whether the match is a tie-break situation by checking whether the property exists in
 * the scoring file; there is no way of doing this for schedule at the moment
 *
 * @return {Boolean} - true for tie-break
 */
PULSE.CLIENT.CRICKET.Match.prototype.hasTieBreaker = function()
{
    return this.scoringData &&
        this.scoringData.matchInfo.tieBreaker &&
        this.scoringData.tieBreaker;
};

/**
 * Returns the tie breaker object within a scoring file, if it exists
 * @return {Object} - tie breaker object structure, or undefined
 */
PULSE.CLIENT.CRICKET.Match.prototype.getTieBreaker = function()
{
    if( this.scoringData )
    {
        return this.scoringData.tieBreaker;
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getTieBreakerLabel = function()
{
    if( this.hasTieBreaker() )
    {
        var type = this.scoringData.matchInfo.tieBreaker.type;
        switch( type )
        {
            case 'SUPER_OVER':
                return 'Super Over';
            default:
                return 'Tie Breaker';
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getToss = function()
{
    if (!this.scoringData || !this.scoringData.matchInfo.additionalInfo)
    {
        return '';
    }

    return this.scoringData.matchInfo.additionalInfo["toss.elected"];

};

PULSE.CLIENT.CRICKET.Match.prototype.getManOfTheMatch = function()
{
    if (!this.scoringData || !this.scoringData.matchInfo.additionalInfo)
    {
        return '';
    }

    return this.scoringData.matchInfo.additionalInfo["result.playerofthematch"];
};

PULSE.CLIENT.CRICKET.Match.prototype.getReferee = function()
{
    if (!this.scoringData || !this.scoringData.matchInfo.additionalInfo)
    {
        return '';
    }

    return this.scoringData.matchInfo.additionalInfo["referee.name"];
};

PULSE.CLIENT.CRICKET.Match.prototype.getNotes = function()
{
    if (!this.scoringData)
    {
        return [];
    }

    var cii = this.scoringData.currentState.currentInningsIndex,
        limit = typeof cii !== "undefined" ? cii + 1 : 0,
        teams = this.scoringData.matchInfo.teams,
        order = this.scoringData.matchInfo.battingOrder,
        notes = [];

    if (order)
    {
        for (var i = 0; i < limit; i++)
        {
            var note = {};
            var team = teams[order[i]].team;
            var entries = [];

            note.team = team;

            if (this.scoringData.matchInfo.additionalInfo)
            {
                var j = 1;
                while (this.scoringData.matchInfo.additionalInfo["notes." + (i + 1) + "." + j])
                {
                    entries.push(this.scoringData.matchInfo.additionalInfo["notes." + (i + 1) + "." +
                        j]);
                    j++;
                }
            }

            note.entries = entries;

            if (note.entries.length)
            {
                notes.push(note);
            }
        }
    }

    return notes;
};

PULSE.CLIENT.CRICKET.Match.prototype.getScorecardSource = function()
{
    if( this.scoringData && this.scoringData.matchInfo.additionalInfo )
    {
        return this.scoringData.matchInfo.additionalInfo["_scorecard_source"];
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getWinnerIndex = function()
{
    if( 'C' == this.getMatchState() && this.scoringData && this.scoringData.matchInfo )
    {
        var matchStatus = this.scoringData.matchInfo.matchStatus;

        if( matchStatus && matchStatus.outcome == 'A' )
        {
            return 0;
        }
        else if( matchStatus && matchStatus.outcome == 'B')
        {
            return 1;
        }
        else
        {
            return undefined;
        }
    }
    else if( 'C' == this.getMatchState() && this.scheduleData )
    {
        var matchStatus = this.scheduleData.matchStatus;

        if( matchStatus && matchStatus.outcome == 'A' )
        {
            return 0;
        }
        else if( matchStatus && matchStatus.outcome == 'B')
        {
            return 1;
        }
        else
        {
            return undefined;
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamSpecificOutcomeString = function( teamId )
{
    var thisTeam,
        opposingTeam = "",
        outcomeString = "";
    if( this.getTeamId(0) === teamId )
    {
        thisTeam = "A";
        outcomeString = this.getFullName(0);
        opposingTeam = this.getFullName(1);
    }
    else if( this.getTeamId(1) === teamId )
    {
        thisTeam = "B";
        outcomeString = this.getFullName(1);
        opposingTeam = this.getFullName(0);
    }

    if( thisTeam )
    {
        var outcome = this.getOutcome();
        switch( outcome )
        {
        case "A":
            if( thisTeam === "A" )
            {
                outcomeString += " beat ";
            }
            else
            {
                outcomeString += " lost to ";
            }
            summary = this.getMatchSummary().split('by');
            outcomeString +=  opposingTeam + " by " + summary[1];

            // special case for wins with custom text that cannot be parsed
            if( !summary[1] )
            {
                return this.getMatchSummary();
            }
            break;
        case "B":
            if( thisTeam === "B" )
            {
                outcomeString += " beat ";
            }
            else
            {
                outcomeString += " lost to ";
            }

            summary = this.getMatchSummary().split('by');
            outcomeString +=  opposingTeam + " by " + summary[1];

            // special case for wins with custom text that cannot be parsed
            if( !summary[1] )
            {
                return this.getMatchSummary();
            }
            break;
        case "N":
            outcomeString += " no result with " + opposingTeam;
            break;
        case "T":
            outcomeString += " tied with " + opposingTeam;
            break;
        case "D":
            outcomeString += " drawn with " + opposingTeam;
            break;
        }
    }

    return outcomeString;
};

PULSE.CLIENT.CRICKET.Match.prototype.getEstimatedDuration = function()
{
    var timeDiff = 360,
        matchType = this.getMatchType();

    if( matchType )
    {
        if( matchType.indexOf( 'T20' ) > -1 )
        {
            timeDiff = 180;
        }
    }

    return timeDiff;
};

PULSE.CLIENT.CRICKET.Match.prototype.generateCalendarLink = function()
{
    var icsContent = escape( 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN\r\nCALSCALE:GREGORIAN\r\n' + this.generateCalendarData() +'END:VCALENDAR\r\n' ),
        link = 'data:text/calendar;charset=utf8,'+ icsContent;

    return link;
};

PULSE.CLIENT.CRICKET.Match.prototype.getTournamentShortName = function()
{
    if ( this.tournament && this.tournament.shortName )
    {
        return this.tournament.shortName;
    }
    return '';
};

PULSE.CLIENT.CRICKET.Match.prototype.generateCalendarData = function()
{
    var location, details;
    var    tournament = this.getTournamentShortName();
    var    groupName = this.getGroupName();
    var    matchTitle;
    var    timeDiff = this.getEstimatedDuration();
    var    startTime = this.getFormattedMatchDate( 'yyyymmdd' ) + 'T' + this.getFormattedMatchDate( 'HHMM00' );
    var    endTime = this.getFormattedMatchDateWithOffset( 'yyyymmdd', ( timeDiff / 60 ) ) + 'T' + this.getFormattedMatchDateWithOffset( 'HHMM00', ( timeDiff / 60 ) );
    var    title = this.getFullName( 0 ) + ' v ' + this.getFullName( 1 );

    if( tournament && ( tournament.length > 0 ) )
    {
        title = title + ' - ' + tournament;
        details = tournament;
    }

    if( groupName )
    {
        if( details && details.length > 0 )
        {
            details = details + ', ' + groupName;
        }
    }

    location = this.getVenueLocation();
    //details = "MAtch of ruggers";
    icsContent = 'BEGIN:VEVENT\r\nDTEND:'  + endTime + '\r\nUID:'  + this.matchId + '\r\nDTSTAMP:20120315T170000Z\r\nSUMMARY:' + title +'\r\nLOCATION:' + location + '\r\nDESCRIPTION:' + details + '\r\nDTSTART:' + startTime + '\r\nEND:VEVENT\r\n';

    return icsContent;
};

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match) 	{ PULSE.CLIENT.CRICKET.Match = {}; }

/**
 *	Data requesting
 * 	These are match-specific requests
 */
PULSE.CLIENT.CRICKET.Match.prototype.startScoringFeed = function( start )
{
	if( !this.matchScoringLoaded )
	{
		this.scoringUrl 	 = this.urlGenerator.makeDataUrl( 'scoring', this.matchId );
		// this.scoringUrl = '//dynamic.pulselive.com/test/data/core/cricket/2012-alina/ipl2013/ipl2013-22/scoring.js';
		this.feedScoring 	 = 'scoring-' + this.matchId;
		this.scoringInterval = 10;
		this.scoringCallback = 'onScoring';

		this.dm.addFeed( this.feedScoring, this.scoringUrl,
			this.scoringInterval, this.scoringCallback, [ this ] );

		if( start )
		{
			this.dm.start( this.scoringUrl );
		}

		this.matchScoringLoaded = true;
	}
};

PULSE.CLIENT.CRICKET.Match.prototype.stopScoringFeed = function()
{
	this.dm.stop( this.scoringUrl );
};

PULSE.CLIENT.CRICKET.Match.prototype.startCommentaryFeed = function( customer, start )
{
	if (!this.commentaryFeedLoaded)
	{
		this.commentaryUrl   = this.urlGenerator.makeDataUrl( ( customer ? customer + '/' : '' ) + 'commentary-meta', this.matchId );
		this.feedCommentary  = 'commentary-' + this.matchId;
		this.commentaryInterval = 13;
		this.commentaryCallback = 'onCommentaryMetadata';

		this.dm.addFeed(this.feedCommentary, this.commentaryUrl,
			this.commentaryInterval, this.commentaryCallback, [ this ]);

		if ( start )
		{
			this.dm.start( this.commentaryUrl );
		}

		this.commentaryFeedLoaded = true;
	}
};

PULSE.CLIENT.CRICKET.Match.prototype.getCommentarySegment = function( index, start, options )
{
	options = options || {};

	this.chunkFeedName = options.feedName || 'commentaryChunk';

	var chunkUrl = this.urlGenerator.makeDataUrl( ( options.customer ? options.customer + '/' : '' ) + 'commentary-' + index, this.matchId );
	var interval = typeof options.interval !== 'undefined' ? options.interval : 0;
	var callback = 'onCommentary';
	var target 	 = options.target ? options.target : this;

	this.dm.addFeed( this.chunkFeedName + index, chunkUrl, interval, callback, [ target ] );

	if ( start )
	{
		this.dm.start( chunkUrl );
	}
};

PULSE.CLIENT.CRICKET.Match.prototype.getTwitterBattlesData = function( start )
{
	var team1abbr = this.getTeamAbbr(0);
	if( team1abbr && team1abbr !== 'TBD' )
	{
		var dirName = this.tournament.tournamentName + '-' + team1abbr.toLowerCase() + '-battle';
		this.urlGenerator.getTwitterHistoricalData( dirName, start );
	}

	var team2abbr = this.getTeamAbbr(1);
	if( team2abbr && team2abbr !== 'TBD' )
	{
		var dirName = this.tournament.tournamentName + '-' + team2abbr.toLowerCase() + '-battle';
		this.urlGenerator.getTwitterHistoricalData( dirName, start );
	}
};

/**
 * Get match related videos using the Brightcove API
 */
PULSE.CLIENT.CRICKET.Match.prototype.getMatchVideosData = function( start )
{
    var that = this;
    var filterParams = {
        references: "CRICKET_MATCH:" + this.id,
        pageSize: 100
    };
    this.feedMatchVideo = "match-video-feed";

    var url = PULSE.app.common.createContentPath( "VIDEO", filterParams );

    var requestConfig = {
        url: url,
        method: 'GET',
        callback: function( data ) {
            that.onData( data, that.feedMatchVideo );
        },
        interval: 120000,
        forceCallback: true,
        target: this
    };

    PULSE.core.data.manager.add( requestConfig );
};

PULSE.CLIENT.CRICKET.Match.prototype.getPhotoGalleryData = function( start )
{
    var that = this;
    var filterParams = {
        references: "CRICKET_MATCH:" + this.id,
        pageSize: 1
    };
    this.feedGallery = "match-gallery-feed";

    var url = PULSE.app.common.createContentPath( "PLAYLIST", filterParams );

    var requestConfig = {
        url: url,
        method: 'GET',
        callback: function( data ) {
            that.onData( data, that.feedGallery );
        },
        interval: 120000,
        forceCallback: true,
        target: this
    };

    this.photoGalleryPoll = PULSE.core.data.manager.add( requestConfig );
};

PULSE.CLIENT.CRICKET.Match.prototype.stopPhotoGalleryData = function() {
    if( this.photoGalleryPoll ) {
        this.photoGalleryPoll.stop();
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getPhotosData = function( start )
{
    var that = this;
    var filterParams = {
        references: "CRICKET_MATCH:" + this.id,
        tags: ["gallery-photo"],
        pageSize: 150
    };
    this.feedPhotos = "match-photo-feed";

    var url = PULSE.app.common.createContentPath( "PHOTO", filterParams );

    var requestConfig = {
        url: url,
        method: 'GET',
        callback: function( data ) {
            that.onData( data, that.feedPhotos );
        },
        interval: 30000,
        forceCallback: true,
        target: this
    };

    PULSE.core.data.manager.add( requestConfig );
};

PULSE.CLIENT.CRICKET.Match.prototype.getPlayerVoteResultsData = function( squadId, start, interval )
{
    this.feedPlayerVotingResults = 'playerVotingResults';

    var playerVotingResultsUrl = this.urlGenerator.makeDataUrl( 'playerVote-squad-' + squadId, this.matchId );
    var feedInterval = typeof interval !== 'undefined' ? interval : 0;

    this.dm.addFeed( this.feedPlayerVotingResults + squadId, playerVotingResultsUrl, feedInterval,
        'onPlayerVote', [ this ] );

    if( start )
    {
        this.dm.start( playerVotingResultsUrl );
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.stopPlayerVoteResultsData = function( squadId )
{
    var playerVotingResultsUrl = this.urlGenerator.makeDataUrl( 'playerVote-squad-' + squadId, this.matchId );
    if( playerVotingResultsUrl )
    {
        this.dm.stop( playerVotingResultsUrl );
    }
};

if (!PULSE)                         { var PULSE = {}; }
if (!PULSE.CLIENT)                  { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)          { PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match)    { PULSE.CLIENT.CRICKET.Match = {}; }

/**
 * Returns the upcoming match model from the perspective of a team
 * So if the team is team1, the opponent is team 2 and vice versa
 */
PULSE.CLIENT.CRICKET.Match.prototype.getScheduleSummaryModelForTeam = function( teamId, dateFormat, timeFormat )
{
    if( !teamId ) return;

    var opponentName,
        model = {},
        matchDate = this.getMatchDate();

    if( this.getMatchState() === 'U' )
    {
        if( this.getTeamId(0) === teamId )
        {
            opponent = {
                fullName: this.getFullName(1),
                shortName: this.getShortName(1),
                abbreviation: this.getTeamAbbr(1)
            };
        }
        else if( this.getTeamId(1) === teamId )
        {
            opponent = {
                fullName: this.getFullName(0),
                shortName: this.getShortName(0),
                abbreviation: this.getTeamAbbr(0)
            };
        }

        if( opponent )
        {
            model = {
                matchId : this.matchId,
                matchLink : this.getMatchLink(),
                previewLink : this.getPreviewLink(),

                matchDate : matchDate,
                utcTime : PULSE.CLIENT.DateUtil.getUtcTime( matchDate ),
                formattedMatchDate: this.getFormattedMatchDate( dateFormat ),
                formattedMatchTime: {
                    GMT: this.getFormattedMatchTime( timeFormat, 0 ),
                    IST: this.getFormattedMatchTime( timeFormat, +5.5 ),
                    GST: this.getFormattedMatchTime( timeFormat, +4 )
                },

                matchDescription : this.getMatchDescription(),

                venue : {
                    name: this.getVenueShortName(),
                    city: this.getVenueCity()
                },

                opponent: opponent
            };
        }
    }

    return model;
};

/**
 * Returns the complete match model from the perspective of a team
 * So if the team is team1, the opponent is team 2 and vice versa
 * Possible outcome strings in this scenario:
 *
 *      team1fullName + " beat " + team2fullName + " by 7 wickets"
 *      team1fullName + " lost to " + team2fullName + " by 7 wickets"
 *      team1fullName + " tied with " + team2fullName
 */
PULSE.CLIENT.CRICKET.Match.prototype.getResultsSummaryModelForTeam = function( teamId, dateFormat )
{
    if( !teamId ) return;

    var that = this,
        model;

    if( this.getMatchState() === 'C' )
    {
        model = {
            matchId : this.matchId,
            matchLink : this.getMatchLink( 'scorecard' ),
            reportLink : this.getReportLink(),
            highlightsLink : this.getHighlightsLink(),

            matchSummary : this.getTeamSpecificOutcomeString( teamId ),
            venue : {
                name: this.getVenueShortName(),
                city: this.getVenueCity()
            }
        };
    }

    return model;
};

/**
 * Returns an object covering match details and team details based on either the schedule or the scoring file
 * For more info, check out matchSchedule2.js and scoring.js in Tipsy3 spec
 * This model will return TBD instead of team names if the team hasn't been set etc.
 *
 * This model does not return batsmen or bowler models; see getBatsmanModel or getBowlerModel instead
 */
PULSE.CLIENT.CRICKET.Match.prototype.getFullModel = function( dateFormat, timeFormat )
{
    var that = this;

    var matchDate   = this.getMatchDate(),
        matchState  = this.getMatchState();


    var model = {
        id: this.id,
        matchLink : this.getMatchLink( matchState === 'C' ? 'scorecard' : '' ),
        previewLink : this.getPreviewLink(),
        reportLink : this.getReportLink(),
        reportThumb : this.getReportThumb(),
        highlightsLink : this.getHighlightsLink(),
        highlightsThumb : this.getHighlightsThumb(),
        highlightsId : this.getHighlightsId(),
        momId : this.getManOfTheMatchId(),
        momThumb : this.getManOfTheMatchThumb(),
        sixesId : this.getSixesId(),
        sixesThumb : this.getSixesThumb(),
        interviewLink : this.getInterviewLink(),
        interviewThumb : this.getInterviewThumb(),
        statsLink : this.getStatsLink(),
        statsThumb : this.getStatsThumb(),
        photostreamLink : this.getPhotostreamLink(),
        ticketsLink : this.getTicketsLink(),
        calendarLink : this.generateCalendarLink(),
        calendarData: this.generateCalendarData(),

        matchType: this.getMatchType(),
        matchState : matchState,
        live: this.isMatchLive(),
        inningsBreak : this.isInInningsBreak(),

        matchSummary : this.getMatchSummary(),
        matchDate : matchDate,
        formattedMatchDate: this.getFormattedMatchDate( dateFormat ),
        formattedTimeZoneDate: this.getFormattedTimeZoneDate( dateFormat, +5.5 ),
        formattedMatchTime: {
            GMT: this.getFormattedMatchTime( timeFormat, 0 ),
            BST: this.getFormattedMatchTime( timeFormat, +1 ),
            IST: this.getFormattedMatchTime( timeFormat, +5.5 ),
            GST: this.getFormattedMatchTime( timeFormat, +4 )
        },
        dayNight : this.getDayNight(),
        matchId : that.matchId,
        groupName : this.getGroupName(),
        matchDescription : this.getMatchDescription(),
        tournamentLabel: this.getTournamentLabel(),
        tournamentId: this.getTournamentId(),
        tournamentName: this.getTournamentName(),
        venue : this.getVenue(),
        venueUrl : this.getVenueUrl(),

        currentScore : this.getCurrentScore(),
        requiredRunRate : this.getRequiredRunRate(),
        winnerIndex : this.getWinnerIndex(),

        team1link : this.getTeamLink(0),
        team1id : this.getTeamId(0),
        team1innings : this.getTeamInnings(0),
        team1overProgress : this.getOverProgress(0),
        team1overProgressArray : this.getOverProgressArray(0),
        team1batting : this.teamIsBatting(0),
        team1bowling : this.teamIsBowling(0),
        team1abbr : this.getTeamAbbr(0),
        team1fullName : this.getFullName(0),
        team1shortName : this.getShortName(0),
        team1runRate: this.getTeamRunRate(0),
        team1yetToBat : this.getYetToBat(0),
        team1won : this.getTeamWon(0),
        team1Link : this.getTeamLink(0),
        team1twitterTotal: this.getTwitterTotal(0) || 0,
        team1battingFirst : this.getTeamBatFirst( 0 ),

        team2link : this.getTeamLink(1),
        team2id : this.getTeamId(1),
        team2innings : this.getTeamInnings(1),
        team2overProgress : this.getOverProgress(1),
        team2overProgressArray : this.getOverProgressArray(1),
        team2batting : this.teamIsBatting(1),
        team2bowling : this.teamIsBowling(1),
        team2abbr : this.getTeamAbbr(1),
        team2fullName : this.getFullName(1),
        team2shortName : this.getShortName(1),
        team2runRate: this.getTeamRunRate(1),
        team2yetToBat : this.getYetToBat(1),
        team2won : this.getTeamWon(1),
        team2Link : this.getTeamLink(1),
        team2twitterTotal: this.getTwitterTotal(1) || 0,
        team2battingFirst : this.getTeamBatFirst( 1 ),

        tieBreaker: this.getTieBreakModel()
    };

    return model;
};

/**
 * Returns an object with tiebreak scores for each team as well as the type of tie break
 * @return {Object} - { team1Score, team2Score, type } or undefined, if there's no tie break
 */
PULSE.CLIENT.CRICKET.Match.prototype.getTieBreakModel = function()
{
    if( this.hasTieBreaker() )
    {
        return {
            team1Score: this.getTeamTieBreakScore( 0 ),
            team2Score: this.getTeamTieBreakScore( 1 ),
            type: this.scoringData.matchInfo.tieBreaker.type
        };
    }
};

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match) 	{ PULSE.CLIENT.CRICKET.Match = {}; }

/**
 * 	MATCH MEDIA MODELS
 *
 */
PULSE.CLIENT.CRICKET.Match.prototype.getModalTheatre = function()
{
	if( !this.photosData )
	{
		return;
	}
	var model = this.photosData.gallery;

	return model;
};


PULSE.CLIENT.CRICKET.Match.prototype.hasPhotos = function()
{
	if( this.photosData && this.photosData.content && this.photosData.content.length > 0 )
	{
		return true;
	}
	return false;
};

PULSE.CLIENT.CRICKET.Match.prototype.hasVideos = function()
{
	if( this.videosData && this.videosData.content && this.videosData.content.length > 0 )
	{
		return true;
	}
	return false;
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchVideosModel = function( limit )
{
	if( !this.videosData || !this.videosData.content || this.videosData.content.length === 0 )
	{
		return { videos: [] };
	}

	return { videos: this.videosData.content };
};

PULSE.CLIENT.CRICKET.Match.prototype.getVideoById = function( id ) {
    for( var i = 0, iLimit = this.videosData.content.length; i < iLimit; i++ ) {
        if( this.videosData.content[ i ].id === +id ) {
            return this.videosData.content[ i ];
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getDuration = function( time )
{
    var s = Math.floor( time / 1000 );
    var duration = s;
    if ( s > 60 )
    {
        var m = Math.floor( s / 60 );
        s = s % 60;
        duration = m + ':' + s;
        if ( m > 60 )
        {
            var h = Math.floor( m / 60 );
            m = m % 60;
            duration = h + ':' + m + ':' + s;
        }
    }

    return duration;
}

PULSE.CLIENT.CRICKET.Match.prototype.getMatchVideoByIdModel = function(id)
{
	if (!this.videosData)
	{
		return {}
	}

	var videos = this.getMatchVideosModel();

	for (var i=0, length = videos.videos.length; i < length; i++) {

		var video = videos.videos[i]
		if (video.id === id) {

			return video;
		}
	}
};

PULSE.CLIENT.CRICKET.Match.prototype.getMatchVideosByTagName = function(tag)
{
	var model = this.getMatchVideosModel();
	return model.videos.filter( function( video ) {
        var tags = video.tags.map( function( tag ) { return tag.label; } );
        return -1 < $.inArray( tag, tags );
    } );
};


PULSE.CLIENT.CRICKET.Match.prototype.getMatchVideosByPlayerIdModel = function(id)
{
    var filteredVideos = [];
    if( this.videosData && this.videosData.content.length ) {
        for( var i = 0, iLimit = this.videosData.content.length; i < iLimit; i++ ) {
            var video = this.videosData.content[ i ];
            if( video.references ) {
                for( var j = 0, jLimit = video.references.length; j < jLimit; j++ ) {
                    if( video.references[ j ].type === "CRICKET_PLAYER" && video.references[ j ].id == id ) {
                        filteredVideos.push( video );
                    }
                }
            }
        }
    }
    return filteredVideos;
};

/**
 * Returns an objet with an array of video models tagged with the ball progress given
 * @param  {Object} bp  the ball progress (not counting progress!)
 * @param  {Number} bp.ball  the ball number
 * @param  {Number} bp.over  the over number
 * @param  {Number} bp.innings  the innings number
 * @return {Object}   Object with 'videos' key pointing to the video model array
 */
PULSE.CLIENT.CRICKET.Match.prototype.getVideosForBall = function( bp )
{
	var matchingVideos = [];

	if( !this.hasVideos() )
	{
		return matchingVideos;
	}

	var videos = this.videosData.content;
	for( var i = 0, iLimit = videos.length; i < iLimit; i++ )
	{
		var video = videos[i];
        var tags = video.tags.map( function( tag ) { return tag.label; } );
        var over = parseInt( bp.over, 10 ) - 1;

		if( $.inArray( 'ball-' + bp.ball, tags ) > -1 &&
            $.inArray( 'over-' + over, tags ) > -1 &&
            $.inArray( 'innings-' + bp.innings, tags ) > -1 )
		{
			var model = this.getMatchVideoByIdModel( video.id );
			matchingVideos.push( model );
		}
	}

	return { videos: matchingVideos };
};

PULSE.CLIENT.CRICKET.Match.prototype.getVideoClasses = function( tags )
{
	var hyphenatedClasses = $.map( tags, function( v, k ) {
		return v.split(' ').join('-');
	} );
	return hyphenatedClasses.join(' ');
};

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match) 	{ PULSE.CLIENT.CRICKET.Match = {}; }

PULSE.CLIENT.CRICKET.Match.prototype.onData = function( data, id )
{
	var that = this;
	if( id === this.feedScoring )
	{
		this.scoringData = data;
        this.id = data.matchId.id;
		var matchInfo 	= data.matchInfo,
			matchState 	= this.getMatchState();

		if( this.tournament.tournamentName === "ipl2013" ||
			this.tournament.tournamentName === "ipl2012" ||
			this.tournament.tournamentName === "ipl2011" ||
			this.tournament.tournamentName === "ipl2010" ||
			this.tournament.tournamentName === "ipl2009" ||
			this.tournament.tournamentName === "ipl2008" )
		{
			this.scoringData.matchInfo.oversLimit = 20;
		}

		if( !this.playerLookup && matchInfo.teams && matchInfo.teams.length && (matchState === "L" || matchState === "U") )
		{
			this.playerLookup = PULSE.CLIENT.Util.CreatePlayerLookup( matchInfo.teams );
		}

		// This assumes you would never start a scoring feed for an upcoming match
		if(!this.playerLookup && matchState === 'C' )
		{
			this.playerLookup = PULSE.CLIENT.Util.CreatePlayerLookup( matchInfo.teams );
			// Remove the match from the tournament's list of current live matches
			this.tournament.unregisterMatchAs( 'live', data.matchId.name );
			// Add the match to the tournament's list of complete matches
			this.tournament.registerMatchAs( 'complete', data.matchId.name );
		}

		PULSE.CLIENT.notify( 'scoring/update', {
			success: true,
			matchId: data.matchId.name,
			tournamentName: that.tournament.tournamentName
		} );
	}
	else if( id === this.feedPhotos )
	{
		this.photosData = data;
		PULSE.CLIENT.notify( 'match/photos', {
			success: true,
			matchId: this.matchId,
			tournamentName: that.tournament.tournamentName
		} );
	}
	else if( id === this.feedGallery && data.content.length )
	{
		this.photoGalleryData = data.content[ 0 ];
		PULSE.CLIENT.notify( 'match/gallery', {
			success: true,
			matchId: this.matchId,
			tournamentName: that.tournament.tournamentName
		} );
	}
	else if ( id === this.feedMatchVideo )
	{
		this.videosData = data;
		PULSE.CLIENT.notify( 'match/videos', {
			success: true,
			matchId: this.matchId,
			tournamentName: that.tournament.tournamentName
		} );
	}
	// else if( id === this.feedVideo )
	// {
	// 	this.videosData = data;
	// 	PULSE.CLIENT.notify( 'match/videos', {
	// 		success: true,
	// 		matchId: this.matchId,
	// 		tournamentName: that.tournament.tournamentName
	// 	} );
	// }
	else if( id === this.feedCommentary )
	{
		this.commentaryMeta = data.timestamps;

		PULSE.CLIENT.notify( 'commentary/meta', {
			success: true,
			matchId: this.matchId,
			tournamentName: that.tournament.tournamentName
		} );
	}
	else if( this.chunkFeedName && id.startsWith( this.chunkFeedName ) )
	{
		var chunkNumber = parseInt( id.substring( this.chunkFeedName.length ) );
		this.chunks[ chunkNumber ] = data;

		for( var i = 0, iLimit = data.commentaries.length; i < iLimit; i++ )
		{
			var entry = data.commentaries[i];
			if( entry.countingProgress )
			{
				entry.tags.push( 'innings-' + entry.countingProgress.innings );
			}
			else if( entry.innings )
			{
				entry.tags.push( 'innings-' + entry.innings );
			}
		}

		PULSE.CLIENT.notify( 'commentary/chunk', {
			success: true,
			matchId: this.matchId,
			tournamentName: that.tournament.tournamentName,
			data: data,
			fragment: chunkNumber
		} );
	}
	else if( this.feedPlayerVotingResults && id.startsWith( this.feedPlayerVotingResults ) )
	{
		this.playerVoting.results[ data.squadId ] = data;

		var squadId = parseInt( id.substring( 19 ), 10 );

		PULSE.CLIENT.notify( 'player-vote/votes', {
			success: true,
			matchId: this.matchId,
			squadId: squadId
		} );
	}
};

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match) 	{ PULSE.CLIENT.CRICKET.Match = {}; }

PULSE.CLIENT.CRICKET.Match.prototype.onError = function( id )
{
	var that = this;
	if( id === this.feedScoring )
	{
		PULSE.CLIENT.notify( 'scoring/update', { 
			success: false,
			matchId: that.matchId, 
			tournamentName: that.tournament.tournamentName 
		} );
	}
	else if( id === this.feedCommentary )
	{
		PULSE.CLIENT.notify( 'commentary/meta', { 
			success: false,
			matchId: that.matchId, 
			tournamentName: that.tournament.tournamentName 
		} );
	}
	else if( this.chunkFeedName && id.startsWith( this.chunkFeedName ) )
	{
		PULSE.CLIENT.notify( 'commentary/chunk', {
			success: false,
			matchId: this.matchId,
			fragment: parseInt( id.substring( this.chunkFeedName.length ) )
		} );
	}
	else if( id === this.feedPhotos )
	{
		PULSE.CLIENT.notify( 'match/photos', { 
			success: false,
			matchId: this.matchId, 
			tournamentName: that.tournament.tournamentName 
		} );
	}
	else if( id === this.feedVideo )
	{
		PULSE.CLIENT.notify( 'match/videos', { 
			success: false,
			matchId: this.matchId, 
			tournamentName: that.tournament.tournamentName 
		} );
	}
	else if( this.feedPlayerVotingResults && id.startsWith( this.feedPlayerVotingResults ) )
	{
		var squadId = parseInt( id.substring( 19 ), 10 );

		PULSE.CLIENT.notify( 'player-vote/votes', {
			success: false,
			matchId: this.matchId,
			squadId: squadId
		} );
	}
};

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match) 	{ PULSE.CLIENT.CRICKET.Match = {}; }

/**
 *	Player models
 */

PULSE.CLIENT.CRICKET.Match.prototype.getAwaitingPlayerModel = function( role )
{
	switch( role )
	{
	case 'bowler':
		var label = "Bowler";
		var team = this.getCurrentBowlingTeam();
		break;

	case 'striker':
		var label = "Striker";
		var team = this.getCurrentBattingTeam();
		break;

	case 'nonstriker':
		var label = "Non-Striker";
		var team = this.getCurrentBattingTeam();
		break;
	}

	team = team ? team.team : {};

	var model = {
		playerRole: role,
		role: label,
		teamAbbr: team.abbreviation
	};
		
	return model;
};

PULSE.CLIENT.CRICKET.Match.prototype.getCurrentBowler = function()
{
	var currentState = this.scoringData && this.hasTieBreaker() ?
		this.scoringData.tieBreaker.currentState : this.scoringData.currentState;

	if( !this.scoringData || !currentState )
	{
		return;
	}

	var bowlerId = currentState.currentBowler;

	if( bowlerId > 0 )
	{
		var model = this.getBowlerModel( bowlerId );
		return model;
	}
};

PULSE.CLIENT.CRICKET.Match.prototype.getCurrentFacingBatsman = function()
{
	var currentState = this.scoringData && this.hasTieBreaker() ?
		this.scoringData.tieBreaker.currentState : this.scoringData.currentState;

	if ( !this.scoringData || !currentState )
	{
		return;
	}

	if ( currentState.currentBatsmen[ 0 ] === currentState.facingBatsman )
	{
		var batsmanId = currentState.currentBatsmen[ 0 ];
	}
	else
	{
		var batsmanId = currentState.currentBatsmen[ 1 ];
	}

	if ( batsmanId === -1 )
	{
		return;
	}

	var model = this.getBatsmanModel( true, batsmanId );
	return model;
};

PULSE.CLIENT.CRICKET.Match.prototype.getCurrentNonFacingBatsman = function()
{
	var currentState = this.scoringData && this.hasTieBreaker() ?
		this.scoringData.tieBreaker.currentState : this.scoringData.currentState;

	if ( !this.scoringData || !currentState )
	{
		return;
	}

	if ( currentState.currentBatsmen[ 0 ] === currentState.facingBatsman )
	{
		var batsmanId = currentState.currentBatsmen[ 1 ];
	}
	else
	{
		var batsmanId = currentState.currentBatsmen[ 0 ];
	}

	if ( batsmanId === -1 )
	{
		return;
	}

	var model = this.getBatsmanModel( false, batsmanId );
	return model;
};

PULSE.CLIENT.CRICKET.Match.prototype.getBatsmanModel = function( facing, id )
{
	var stats 		= this.getBattingStats( id ),
		player 		= this.playerLookup[ id ],
		playerName 	= PULSE.CLIENT.Util.getPlayerNames( player.fullName ),
		team 		= this.getTeamByPlayerId( id ),
		matchType	= this.getMatchType(),
		playerUrl   = this.urlGenerator.getPlayerURL( player.id, player.fullName, team.id, team.fullName);

	team = team || {};


	var model = {
		id: player.id,
		facing: facing,
		fullName: player.fullName,
		firstName: playerName.firstName,
		lastName: playerName.secondName,
		playerUrl: playerUrl,
		runs: stats ? stats.r : "0",
		ballsFaced: stats ? stats.b : "0",
		strikeRate: stats ? stats.sr : "0",
		fours: stats ? stats['4s'] : "0",
		sixes: stats ? stats['6s'] : "0",
		status: stats ? 'NOT OUT' : '',
		team: team,
		matchType: matchType
	}

	if (stats && stats.mod) {
		model.status = stats.mod.text
	}
	
	return model;
};

PULSE.CLIENT.CRICKET.Match.prototype.getBowlerModel = function( id )
{
	var stats 		= this.getBowlingStats( id ),
		player 		= this.playerLookup[ id ],
		playerName 	= PULSE.CLIENT.Util.getPlayerNames( player.fullName ),
		team 		= this.getTeamByPlayerId( id ),
		matchType	= this.getMatchType(),
		playerUrl   = this.urlGenerator.getPlayerURL( player.id, player.fullName, team.id, team.fullName);

	team = team || {};
	
	var model = {
		id: player.id,
		fullName: player.fullName,
		firstName: playerName.firstName,
		lastName: playerName.secondName,
		playerUrl: playerUrl,
		wickets: stats ? stats.w : "0",
		runsConceded: stats ? stats.r : "0",
		overs: stats ? stats.ov : "0",
		dots: stats ? stats.d : "0",
		maidens: stats ? stats.maid : "0",
		economy: stats ? stats.e : "-",
		team: team,
		matchType: matchType
	}
	
	return model;
};
if (!PULSE)                         { var PULSE = {}; }
if (!PULSE.CLIENT)                     { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)             { PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match)     { PULSE.CLIENT.CRICKET.Match = {}; }

PULSE.CLIENT.CRICKET.Match.prototype.getScorecardModel = function()
{
    if( !this.scoringData )
    {
        return;
    }

    var scorecardModel = {},
        inningsModels = [],
        tieBreakerModels = [];

        var battingOrder= this.scoringData.matchInfo.battingOrder,
            cii         = this.scoringData.currentState.currentInningsIndex;

    if( this.scoringData.innings)
    {
        for( var i = 0, iLimit = this.scoringData.innings.length; i < iLimit; i++ )
        {
            var inns = this.scoringData.innings[i],
                teamIndex = battingOrder[i];

            var score = PULSE.CLIENT.CRICKET.Utils.getInningsScore( inns.scorecard.runs,
                inns.scorecard.wkts, inns.allOut, inns.declared, false );

            var overProgress = inns.overProgress;

            var inningsModel = {

                teamFullName : this.getFullName( teamIndex ),
                teamAbbr     : this.getTeamAbbr( teamIndex ),

                currentScore : inns.scorecard.runs,
                wickets      : inns.scorecard.wkts,
                allOut       : inns.scorecard.allOut,
                declared     : inns.declared,
                overProgress : overProgress,
                runRate      : inns.runRate,

                batsmen      : this.getBatsmen( i, false ),
                bowlers      : this.getBowlers( i, false ),

                extras       : this.getExtras( i, false ),
                fow          : this.getFOW( i, false )
            }

            inningsModels.push( inningsModel );
        }

        if( this.scoringData.tieBreaker && this.scoringData.tieBreaker.innings )
        {
            for( var i = 0, iLimit = this.scoringData.tieBreaker.innings.length; i < iLimit; i++ )
            {
                var inns = this.scoringData.tieBreaker.innings[i],
                    teamIndex = this.scoringData.matchInfo.tieBreaker.battingOrder[i];

                var score = PULSE.CLIENT.CRICKET.Utils.getInningsScore( inns.scorecard.runs,
                    inns.scorecard.wkts, inns.allOut, inns.declared, false );

                var inningsModel = {

                    tieBreakerLabel: this.getTieBreakerLabel(),

                    teamFullName   : this.getFullName( teamIndex ),
                    teamAbbr       : this.getTeamAbbr( teamIndex ),

                    currentScore   : inns.scorecard.runs,
                    wickets        : inns.scorecard.wkts,
                    allOut         : inns.scorecard.allOut,

                    batsmen        : this.getBatsmen( i, true ),
                    bowlers        : this.getBowlers( i, true ),

                    extras         : this.getExtras( i, true ),
                    fow            : this.getFOW( i, true )
                }

                tieBreakerModels.push( inningsModel );
            }
        }
    }

    var matchType = this.getMatchType();
    scorecardModel.limited = $.inArray( matchType, [ "TEST", "FIRST_CLASS" ] ) === -1;

    scorecardModel.innings = inningsModels;
    scorecardModel.tieBreakerInnings = tieBreakerModels;

    return scorecardModel;
};

PULSE.CLIENT.CRICKET.Match.prototype.getBatsmen = function( inningIndex, tieBreaker )
{
    if( !this.scoringData )
    {
        return;
    }

    var batters = [];
    var innings = tieBreaker && this.hasTieBreaker() ? this.scoringData.tieBreaker.innings :
        this.scoringData.innings;

    var stats = innings[inningIndex].scorecard.battingStats;

    for ( var i=0; i < stats.length; i++ )
    {
        var batter = this.getBatsmanModel( true, stats[i].playerId );

        var playerStats = stats[i];

        var model =  {
            id: batter.id,
            fullName: batter.fullName,
            firstName: batter.firstName,
            lastName: batter.secondName,
            runs: playerStats ? playerStats.r : "0",
            ballsFaced: playerStats ? playerStats.b : "0",
            strikeRate: playerStats ? playerStats.sr || "0.00" : "0.00",
            fours: playerStats ? playerStats['4s'] : "0",
            sixes: playerStats ? playerStats['6s'] : "0",
            status: playerStats.mod ? playerStats.mod.text : 'NOT OUT',
            url : batter.playerUrl
        }

        batters.push(model);
    }

    return batters;
};

PULSE.CLIENT.CRICKET.Match.prototype.getBowlers = function( inningIndex, tieBreaker )
{
    if( !this.scoringData )
    {
        return;
    }

    var bowlers = [];
    var innings = tieBreaker && this.hasTieBreaker() ? this.scoringData.tieBreaker.innings :
        this.scoringData.innings;

    var stats = innings[inningIndex].scorecard.bowlingStats;

    for (var i=0; i < stats.length; i++) {

        var bowler = this.getBowlerModel(stats[i].playerId);

        var playerStats = stats[i];

        var model = {
            id: bowler.id,
            fullName: bowler.fullName,
            firstName: bowler.firstName,
            lastName: bowler.secondName,
            wickets: playerStats ? playerStats.w : "0",
            runsConceded: playerStats ? playerStats.r : "0",
            overs: playerStats ? playerStats.ov : "0",
            dots: playerStats ? playerStats.d : "0",
            maidens: playerStats ? playerStats.maid : "0",
            economy: playerStats ? playerStats.e : "-"
        }


        bowlers.push(model);
    }

    return bowlers;
};

PULSE.CLIENT.CRICKET.Match.prototype.getExtras = function( inningIndex, tieBreaker )
{
    if( !this.scoringData )
    {
        return;
    }

    var innings = tieBreaker && this.hasTieBreaker() ? this.scoringData.tieBreaker.innings :
        this.scoringData.innings;
    var stats = innings[inningIndex].scorecard.extras,
        extras = {},
        total = 0,
        statTypes = {
            noBallRuns: 'nb',
            wideRuns: 'w',
            byeRuns: 'b',
            legByeRuns: 'lb',
            penaltyRuns: 'pen'
          };

    for (var type in statTypes) {

        if (typeof stats[type] !== 'undefined') {

            var name = statTypes[type]
            extras[name] = stats[type]

            total = (total + stats[type])
        }
    }

    extras.total = (total > 0 ? total : '')
    return extras;
};

PULSE.CLIENT.CRICKET.Match.prototype.getFOW = function( inningIndex, tieBreaker )
{
    if( !this.scoringData )
    {
        return;
    }

    var innings = tieBreaker && this.hasTieBreaker() ? this.scoringData.tieBreaker.innings :
        this.scoringData.innings;
    var stats = innings[inningIndex].scorecard.fow;

    var wickets = [];

    for (var i = 0; i < stats.length; i++) {

        var fow         = stats[i],
            player         = this.playerLookup[fow.playerId],
            playerName     = PULSE.CLIENT.Util.getPlayerNames( player.fullName ),
            score          = fow.w + '-' + (fow.r || "0"),
            over         = (parseInt(fow.bp.over) - 1) + '.' + fow.bp.ball;

        var model = {

            score  : score,
            bp: fow.bp,
            player : playerName.secondName ? playerName.secondName : player.fullName,
            over : over,
            playerId : fow.playerId
        }

        wickets.push(model);
    }

    return wickets;
};


/**
 * Gets the batting stats available in the scoring.js scorecard
 * @params id - the player id
 * @return the batting stats object for that player
 */
PULSE.CLIENT.CRICKET.Match.prototype.getBattingStats = function( id )
{
    var tieBreaker = this.scoringData.tieBreaker;
    var innings = this.hasTieBreaker() ? tieBreaker.innings : this.scoringData.innings;

    if ( !innings || !innings[ innings.length - 1 ].scorecard )
    {
        return;
    }

    var battingStats = innings[ innings.length - 1 ].scorecard.battingStats,
        totalBatsmen = battingStats.length,
        i = totalBatsmen;

    while ( i-- )
    {
        if ( battingStats[ i ].playerId == id )
        {
            return battingStats[ i ];
        }
    }
};

/**
 * Gets the bowling stats available in the scoring.js scorecard
 * @params id - the player id
 * @return the bowling stats object for that player
 */
PULSE.CLIENT.CRICKET.Match.prototype.getBowlingStats = function( id )
{
    var tieBreaker = this.scoringData.tieBreaker;
    var innings = this.hasTieBreaker() ? tieBreaker.innings : this.scoringData.innings;

    if ( !innings || !innings[ innings.length - 1 ].scorecard )
    {
        return;
    }

    var bowlingStats = innings[ innings.length - 1 ].scorecard.bowlingStats,
        totalBowlers = bowlingStats.length,
        i = totalBowlers;

    while ( i-- )
    {
        if ( bowlingStats[ i ].playerId == id )
        {
            return bowlingStats[ i ];
        }
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.getWicketStatsByBP = function( bp )
{
    if( !this.scoringData.innings || !this.scoringData.innings[ this.scoringData.innings.length - 1 ].scorecard ) return;

    var battingStats = this.scoringData.innings[ this.scoringData.innings.length - 1 ].scorecard.battingStats;
    for( var i = 0, iLimit = battingStats.length; i < iLimit; i++ )
    {
        var batsmanStats = battingStats[ i ];
        if( batsmanStats.mod &&
            batsmanStats.mod.dismissedBp.innings == bp.innings &&
            batsmanStats.mod.dismissedBp.over == bp.over &&
            batsmanStats.mod.dismissedBp.ball == bp.ball )
        {
            var player = this.playerLookup[ batsmanStats.playerId ];
            return {
                stats: batsmanStats,
                player: player
            };
        }
    }
};

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match) 	{ PULSE.CLIENT.CRICKET.Match = {}; }

// Get playing XI for one of the match's teams, if they have been set
PULSE.CLIENT.CRICKET.Match.prototype.getPlayingXI = function( teamIndex )
{
	if( this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.teams )
	{
		var model = {};
		var team = this.scoringData.matchInfo.teams[teamIndex];
		var players = team.players;

		if( !players )
		{
			return;
		}

		model.players = [];
		model.team = team.team;
		model.team.url = this.urlGenerator.getTeamURL( team.team.id, team.team.fullName );

		for( var i = 0, iLimit = players.length; i < iLimit; i++ )
		{
			var player = players[i],
				url = this.urlGenerator.getPlayerURL( player.id, player.fullName, team.team.id, team.team.fullName );

			var playerName = PULSE.CLIENT.Util.getPlayerNames( player.fullName );
			var playerModel = {
					id: player.id,
					url: url,
					fullName: player.fullName,
					firstName: playerName.firstName,
					lastName: playerName.secondName,
					nationality : player.nationality,
					wicketKeeper: team.wicketKeeper ? team.wicketKeeper.id === player.id : "",
					captain: team.captain ? team.captain.id === player.id : ""
			};
			model.players.push( playerModel );
		}
		return model;
	}

	return;
};

PULSE.CLIENT.CRICKET.Match.prototype.getSquad = function( teamIndex )
{
	var teamId = this.getTeamId( teamIndex );
	var model = this.tournament.getSquadWithCaptainModel( teamId );

	return model;
};

PULSE.CLIENT.CRICKET.Match.prototype.getTeamByPlayerId = function( id )
{
	if( this.scoringData && this.scoringData.matchInfo && this.scoringData.matchInfo.teams )
	{
		for( var i = 0, iLimit = this.scoringData.matchInfo.teams.length; i < iLimit; i++ )
		{
			var matchTeam = this.scoringData.matchInfo.teams[i];
			for( var j = 0, jLimit = matchTeam.players.length; j < jLimit; j++ )
			{
				var player = matchTeam.players[j];
				if( player.id == id )
				{
					return matchTeam.team;
				}
			}
		}
	}
};

if (!PULSE) 						{ var PULSE = {}; }
if (!PULSE.CLIENT) 					{ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET) 			{ PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match) 	{ PULSE.CLIENT.CRICKET.Match = {}; }

/**
 * The commentary for a match
 * @constructor
 * @param {PULSE.CLIENT.CRICKET.Match} match - the match for which to show comms
 * @param {String} container - the container which the Commentary affects
 * @param {Object} templates - association of template type to String path to template
 */
PULSE.CLIENT.CRICKET.Match.Commentary = function( match, container, templates, defaults )
{
	this.match 		= match;
	this.$container = $( container );
    this.customer   = this.match.customer;

    // this.active = true;

    if ( this.match && this.match.tournament && this.match.tournament.supportsVideoInCommentary )
    {
        this.supportsVideo = true;
    }

    this.templates	= {
		eov: templates.eov,
		auto: templates.auto,
		manual: templates.manual,
        tweet: templates.tweet,
        photo: templates.photo,
        video: templates.video,
        loading: templates.loading,
        empty: templates.empty
	};

    defaults = defaults || {};
    this.defaults = {
        'no-data' : defaults[ 'no-data' ] || 'Commentary not yet available',
        'no-match': defaults[ 'no-match' ] || 'No commentary entries matching selected filters'
    };

    /**
     * Initisalise the conditions that are used to filter tweets with
     */
    this.setConditions();

    /**
     * Array of array of tags to filter by
     * [ [ tag1, tag2 ], [ tag3, tag4 ] ] means get all entries that have ( tag1 OR tag2 ) AND ( tag3 OR tag4 )
     * @type {Array<String>}
     */
    this.categories = [
        // [ "four", "six", "wicket" ] // should default to empty array = everything;
    ];

    /**
     * The filters the commentary supports
     * @param {Array<String>} types - strings correspond to 'type' values in a commentary entry
     * @param {Array<String>} categories - strings correspond to tags in commentary entry
     * @param {Function} condition - function that returns true if entry fulfills condition, false otherwise
     * @param {Number} loadRate - the number of chunks to request when more data's needed (on scroll etc.)
     */
    this.filters = {
        "commentary": {
            types: [ "Manual", "Auto", "Eov" ],
            categories: this.categories,
            condition: this.commsNotTwitter,
            loadRate: 1
        },
        "videos": {
            types: [ "Video" ],
            categories: this.categories,
            condition: this.matchesTags,
            loadRate: 2
        },
        "photos": {
            types: [ "Photo" ],
            categories: [],
            condition: this.returnsTrue,
            loadRate: 1
        },
        "tweets": {
            types: [ "Manual" ],
            categories: [],
            condition: this.isATweet,
            loadRate: 3
        }
    };

    this.filter = [];

    this.onFirstLoad = true;
    this.canRender   = true;

    /**
     * Number of chunks to load at start
     * @type {Number}
     */
    this.startWith = 2;

    /**
     * Number of chunks to load on scroll
     * @type {Number}
     */
    this.loadRate = 1;

    /**
     * Array of timestamps of all available timestamps
     * @type {Array}
     */
	this.timestamps = [];

    /**
     * Array of chunk numbers that have been rendered on the page
     * @type {Array}
     */
    this.chunks = [];

	this.setSubscriptions();
    this.setEventListeners();

    this.$container.append('<div class="loading"></div>');
    this.$loading = this.$container.find('div.loading');
    PULSE.CLIENT.Template.publish( this.templates.loading, this.$loading, {} );

    this.$container.append('<div class="no-data" style="display:none;"></div>');
    this.$emptyMessage = this.$container.find('div.no-data');

	this.match.startCommentaryFeed( this.customer );

};

PULSE.CLIENT.CRICKET.Match.Commentary.prototype.setEventListeners = function()
{
    var that = this;

    /**
     * Waypoint to detect when user reaches end of screen and grab
     * more chunks (if available) and render them at the bottom
     */
    this.$container.waypoint(
    {
        handler: function( direction )
        {
            if( direction === "down" && that.chunks[0] - 1 > 0 )
            {
                var nextChunks = that.getMoreChunks();
                that.loadChunks( nextChunks, 'append' );

                // if( PULSE.CLIENT.Tracking )
                // {
                //     PULSE.CLIENT.Tracking.event( 'commentary', 'scroll', 'load more chunks' );
                // }
            }
        },
        offset: 'bottom-in-view'
    } );
};

/**
 * Gets an array of the full filter descriptions applied on the commentary
 * @return {Array} current filters
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getCurrentFilters = function()
{
    /**
     * If there are no specific filters set, return all filters
     */
    if( !this.filter || this.filter.length === 0 )
    {
        return this.filters;
    }
    else
    {
        var that = this;
        return $.map( this.filter, function( name )
        {
            return that.filters[ name ];
        } );
    }
};

/**
 * Get the load rate for the commentary (i.e., how many chunks to pull in at a time) by judging
 * what the current filters are and getting the minimum of these or, if there aren't any,
 * returning the commentary default load rate
 * @return {Number} how many chunks to load at a time
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getCurrentLoadRate = function()
{
    if( !this.filter || this.filter.length === 0 )
    {
        return this.loadRate;
    }
    else
    {
        var currentFilters = this.getCurrentFilters();
        var loadRates = $.map( currentFilters, function( f )
        {
            return f.loadRate;
        } );

        return _.min( loadRates );
    }
};

/**
 * Get a list of chunks to load next, depending on the load rate available
 * @return {Array<Number>} - the next chunks that should be loaded
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getMoreChunks = function()
{
    var howMany = this.getCurrentLoadRate();

    var chunks = [];
    if( howMany === 0 || this.chunks[0] - 1 === 0 )
    {
        return chunks;
    }

    chunks.push( this.chunks[0] - 1 );
    while( howMany - 1 > 0 && _.last(chunks) - 1 > 0 )
    {
        chunks.push( _.last(chunks) - 1 );
        howMany--;
    }

    return chunks;
};

PULSE.CLIENT.CRICKET.Match.Commentary.prototype.setSubscriptions = function()
{
	var that = this;
	$('body').on( 'commentary/meta', function( e, params )
    {
        if( params.matchId !== that.match.matchId )
        {
            return;
        }

		if( params.success )
		{
            that.$emptyMessage.hide();

            that.removeDeletedChunks();

            /**
             * If no chunks are rendered on the page, render the latest X, where X is
             * stored in the startsWith 'class' variable
             * If chunks have been rendered on the page, render all new chunks
             */
			var newChunks = that.getNewChunks( that.chunks.length ? undefined : that.startWith );
            that.loadChunks( newChunks );

            var updatedChunks = that.getUpdatedChunks();
            that.getChunks( updatedChunks );
            // console.log( "Requesting chunks updates for: " + updatedChunks.join(", ") );

            that.timestamps = that.match.commentaryMeta;

            that.onFirstLoad = false;
		}
        else if( that.timestamps.length === 0 )
        {
            PULSE.CLIENT.Template.publish(
                that.templates.empty,
                that.$emptyMessage,
                { message: that.defaults[ 'no-data' ] }
            );
            that.$loading.hide();
            that.$emptyMessage.show();
        }
	} );

	$('body').on( 'commentary/chunk', function( e, params )
    {
        if( params.matchId !== that.match.matchId )
        {
            return;
        }

        that.canRender = true;

		if( params.success )
		{
			var data = params.data;
            var number = data.fragment;

            that.renderChunk( $( '#chunk' + number ), data.commentaries );

            if( number === that.chunks[0] )
            {
                $.waypoints('refresh');

                /**
                 * If the number of entries shown on the page is under a certain limit,
                 * request more chunks (if available) so the commentary doesn't look empty
                 */
                if( that.active )
                {
                    if( ( that.$container.find('li.entry:visible').length < 15 ||
                        that.$container.find( '#chunk' + that.chunks[0] + ' li:visible' ).length === 0 ) &&
                        that.chunks[0] - 1 > 0 )
                    {
                        var nextChunks = that.getMoreChunks();
                        that.loadChunks( nextChunks, 'append' );
                    }
                }
            }

            /**
             *
             */
            if( that.active && 1 === that.chunks[0] )
            {
                if( that.$container.find('li.entry:visible').length === 0 )
                {
                    var message = that.filter.length ? that.defaults[ 'no-match' ] : that.defaults[ 'no-data' ];
                    PULSE.CLIENT.Template.publish(
                        that.templates.empty,
                        that.$emptyMessage,
                        { message: message }
                    );
                    that.$loading.hide();
                    that.$emptyMessage.show();
                }
                else
                {
                    that.$emptyMessage.hide();
                }
            }
		}
        else
        {
            /**
             * Handle situations where the commentary metadata has more chunks than the
             * number of chunks that have been published by requesting the next chunk down
             */
            if( params.fragment - 1 > 0 )
            {
                that.loadChunks( [ params.fragment - 1 ], 'append' );
            }

            $.waypoints('refresh');
        }
	} );
};

/**
 * Re-render the HTML for the chunks that are already stored in the commentary
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.refresh = function( immediate )
{
    if( !this.match.commentaryMeta )
    {
        return;
    }

    if( immediate )
    {
        for( var i = this.chunks.length - 1; i >= 0; i-- )
        {
            var num = this.chunks[i];
            if( this.match.chunks[ num ] )
            {
                this.renderChunk( this.$container.find( '#chunk' + num ), this.match.chunks[ num ].commentaries );
            }
        }
    }
    else
    {
        var newChunks = this.getNewChunks( this.chunks.length ? undefined : this.startWith );
        this.loadChunks( newChunks );

        var updatedChunks = this.getUpdatedChunks();
        this.getChunks( updatedChunks );
    }

    $.waypoints('refresh');
};

PULSE.CLIENT.CRICKET.Match.Commentary.prototype.removeDeletedChunks = function()
{
    for( var i = this.chunks.length - 1; i >= 0; i-- )
    {
        var chunk = this.chunks[i];
        if( chunk > this.match.commentaryMeta.length )
        {
            this.chunks.splice(i, 1);
            this.$container.find( '#chunk' + i ).remove();
        }
    }
};

/**
 * Load a specific list of chunks (request data and render)
 * @param  {Array<Number>} chunks - array of chunk numbers to load + render
 * @param  {Function}      func   - the function to use to add the new chunks (append, prepend etc.)
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.loadChunks = function( chunks, func )
{
    if( this.canRender && chunks.length )
    {
        this.addChunks( chunks, func );
        this.getChunks( chunks );
        this.canRender = false;
    }
};

/**
 * Given an array of chunk numbers, request commentary chunk data
 * through the match's data manager; it automatically starts the retrieval
 * @param  {Array} numbers array of integers (1-based) denoting chunk numbers
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getChunks = function( numbers )
{
    for( var i = numbers.length - 1; i >= 0; i-- )
    {
        this.match.getCommentarySegment( numbers[i], true, { customer: this.customer } );
    }
};

/**
 * Returns the chunks which are new (weren't in the metadata previously)
 * @return {Array} list of new chunk numbers
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getNewChunks = function( limit )
{
    var chunks = [];

    if( typeof limit === 'undefined' )
    {
        limit = 0;
    }

    var added = 0;
    var iLimit = _.last( this.chunks ) || 1;
    for( var i = this.match.commentaryMeta.length; i >= iLimit; i-- )
    {
        if( -1 === _.indexOf( this.chunks, i ) )
        {
            chunks.unshift( i );
            added++;

            if( ( limit && added === limit ) )
            {
                break;
            }
        }
    }

    return chunks;
};

/**
 * Returns the chunks which have been rendered already, but have updated content
 * to display
 * @return {Array} list of updated chunk numbers
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getUpdatedChunks = function()
{
	var chunks = [];

	for( var i = 0; i < this.timestamps.length; i++ )
    {
        if( this.match.commentaryMeta[i] !== this.timestamps[i] &&
            $.inArray( ( i + 1 ), this.chunks ) > -1 )
        {
            chunks.push( i + 1 );
        }
    }

    return chunks;
};

/**
 * Add empty unordered lists to the container; specify how to add these thorugh 'where'
 * @param {Array}  chunks the array of chunk numbers (1-based)
 * @param {String} func   the name of the jQuery function with which to add to the container;
 *                        the default value is 'prepend'. Format: $container[ func ]( chunksHTML )
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.addChunks = function( chunks, func )
{
    var show = this.onFirstLoad;

    // console.log( "Found new chunks: " + chunks.join(", ") );
    func = func || 'prepend';

    var chunksHTML = '';
    chunks.sort( function( a, b )
    {
        return a - b;
    } );

    for( var i = chunks.length - 1; i >= 0; i-- )
    {
        var number = chunks[i];
        chunksHTML += '<ul id="chunk' + number + '" class="streamItems' + ( show ? ' fadeIn' : '' ) + '"></ul>';
    }
    this.chunks = this.chunks.concat( chunks );
    this.chunks.sort( function( a, b )
    {
        return a - b;
    } );

    // console.log( "Chunks loaded: " + this.chunks.join(", ") );

    if( _.isFunction( this.$container[ func ] ) )
    {
        this.$container[ func ]( chunksHTML );
    }

    this.$loading.appendTo( this.$container ).show();
};

/**
 * Checks if the chunks is empty (or almost emtpy). If it is, then it renders chunk data all at once,
 * from HTML (with {PULSE.CLIENT.CRICKET.Match.Commentary.prototype.renderChunkHTML}).
 * If the chunks has entries, it simply updates/reorders/adds/removes entries
 * @param  {jQuery Object} $chunk  the chunk container
 * @param  {Array} entries the commentary chunk entries array
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.renderChunk = function( $chunk, entries )
{
    this.$loading.hide();

    var entries = this.filterEntries( entries );
    var published = $chunk.children().length;

    if( PULSE.CLIENT.Util.isEmpty( $chunk ) || ( published < 5 && published < entries.length / 2 ) || !this.active )
    {
        var entriesHTML = this.getEntriesHTML( entries, $chunk );
        $chunk.html( entriesHTML );

        // Fade in latest chunk
        var $chunks = this.$container.find( '.streamItems' );
        $chunks.first().css('opacity', 1);
        $chunk.css('opacity', 0);
        window.getComputedStyle( $chunk.get(0) ).getPropertyValue("top");
        $chunk.css('opacity', 1);
    }
    else
    {
        this.updateEntryContainers( $chunk, entries );
    }
};

/**
 * This should only be done once per chunk, at the very beginning;
 * It's merging HTML strings together for efficiency
 * @param  {Array}   entries     are the commentary entries within a chunk
 * @return {String}              the HTML of the list of entries as a string
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getEntriesHTML = function( entries )
{
    var listHTML = '';
    for( var i = entries.length - 1; i >= 0; i-- )
    {
        var id = entries[i].id;
        var entryHtml = this.getEntryHTML( entries[i] );
        if ( entries[ i ] && ( entries[ i ].type != 'Video' || ( entries[ i ].type === 'Video' && this.supportsVideo ) ) )
        {
            listHTML += '<li class="entry" data-entry-id="' + id + '" data-update-time="' + entries[i].updateTime + '">' + this.getEntryHTML( entries[i] ) + '</li>';
        }
    };

    return listHTML;
};

PULSE.CLIENT.CRICKET.Match.Commentary.prototype.updateEntryContainers = function( $chunk, entries )
{
    var ids = $.map( entries, function( entry, i )
    {
        return entry.id;
    } );

    var that = this;
    /**
     * Hide entries that exist in the chunk container but do not match the entries given
     */
    $chunk.children().each( function()
    {
        var entryId = $(this).attr('data-entry-id');
        if( $.inArray( +entryId, ids ) === -1 )
        {
            // console.log( "Hidden entry " + entryId + "(" + that.getBallProgress( entries[i] ) + ")" );
            $(this).hide();
        }
    } );

    for( var i = entries.length - 1; i >= 0; i-- )
    {
        var id = entries[i].id;
        var $entry = $chunk.find('li[data-entry-id="' + id + '"]');
        var index;

        if( $entry.length === 0 )
        {
            // console.log( "Created new entry " + id + "(" + this.getBallProgress( entries[i] ) + ")" );
            $entry = this.getEntriesHTML( [ entries[i] ] );
        }
        else
        {
            index = $.inArray( $entry[0], $chunk.children() );

            var storedUpdateTime = $entry.attr( 'data-update-time' );
            // TODO: comment back in when COMM-8 is fixed
            // if( storedUpdateTime && entries[i].updateTime > +storedUpdateTime )
            // {
                // console.log( "Updated entry " + id + "(" + this.getBallProgress( entries[i] ) + ")" );
                var html = this.getEntryHTML( entries[i] );
                $entry.html( html );
            // }
        }

        if( index === entries.length - i - 1 )
        {
            // console.log( id + "(" + this.getBallProgress( entries[i] ) + ") is in the right place" );
            // do nothing; the elment's in the correct position already
        }
        else
        {
            // if the element isn't in the list or is, but not in the correct position,
            // add it in the correct position
            if( i === 0 )
            {
                // console.log( id + "(" + this.getBallProgress( entries[i] ) + ") appended to the end of the chunk" );
                $chunk.append( $entry );
            }
            else
            {
                // console.log( id + "(" + this.getBallProgress( entries[i] ) + ") appended before position " + ( entries.length - i - 1 ) );
                $chunk.children().eq( entries.length - i - 1 ).before( $entry );
            }
        }
        $( $entry ).show();
    }
};


/**
 * Used for debugging, mainly, returns the ball progress string or EOV
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getBallProgress = function( entry )
{
    if( entry && entry.countingProgress )
    {
        return entry.countingProgress.over + "." + entry.countingProgress.ball;
    }
    else
    {
        return "EOV";
    }

};

/**
 * Decides which function to call to generate an HTML template for an entry,
 * depending on the entry type, but also differentiating between tweets added
 * via manual commentary and just manual commentary
 * @param  {Object} entry standard JSON for a commentary entry
 * @return {String}       HTML produced by Underscore adding the entry data to the template
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getEntryHTML = function( entry )
{
    entry.localTime = ( new Date( entry.timestamp ) ).format( 'HH:MM' );
    var entryHTML = '';

    if ( entry.type === 'Eov' )
    {
        entryHTML = this.getEndOfOverCommentary( entry );
    }
    else if( entry.type === 'Auto' )
    {
        entryHTML = this.getAutoCommentary( entry );
    }
    else if( entry.type === 'Photo' )
    {
        entryHTML = this.getPhotoCommentary( entry );
    }
    else if( entry.type === 'Video' )
    {
        entryHTML = this.getVideoCommentary( entry );
    }
    else if( entry.tweetjson )
    {
        entryHTML = this.getTweetCommentary( entry );
    }
    else
    {
        entryHTML = this.getStandardCommentary( entry );
    }

    return entryHTML;
};

/**
 * Returns the HTML for the end-of-over commentary
 * @param  {Object} entry standard JSON for a commentary entry
 * @return {String}       HTML produced by Underscore adding the entry data to the template
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getEndOfOverCommentary = function( entry )
{
    var html = '';
    var isTieBreakerInns = this.match.hasTieBreaker() && entry.innings > 2;
    var innsNumber = isTieBreakerInns ? entry.innings - 2 : entry.innings;
    var over = this.match.getOver( innsNumber - 1, entry.over - 1, isTieBreakerInns );

    entry.overBalls = over ? over.ovBalls : [];
    entry.tieBreaker = isTieBreakerInns;
    entry.tieBreakerLabel = isTieBreakerInns ? this.match.getTieBreakerLabel() : '';

    return PULSE.CLIENT.Template.getHtml( this.templates.eov, entry );
};

/**
 * Returns the HTML for the automatically-generated commentary
 * @param  {Object} entry standard JSON for a commentary entry
 * @return {String}       HTML produced by Underscore adding the entry data to the template
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getAutoCommentary = function( entry )
{
    var html = '';

    var haveBallSpeed = entry.autoText.indexOf( "%SPEED%" );

    // If we have a link to show the traj
    if( haveBallSpeed !== -1 )
    {
        // Convert speed to km/h
        var ballSpeed = entry.speed * 3.6;
        entry.autoText = entry.autoText.replace( /%SPEED%/, ballSpeed.toFixed( 1 ) + ' km/h' );
    }
    entry.thisOver = entry.thisOver || '';

    return PULSE.CLIENT.Template.getHtml( this.templates.auto, entry );
};

/**
 * Returns the HTML for the manual commentary
 * @param  {Object} entry standard JSON for a commentary entry
 * @return {String}       HTML produced by Underscore adding the entry data to the template
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getStandardCommentary = function( entry )
{
    var html = '';

    return PULSE.CLIENT.Template.getHtml( this.templates.manual, entry );
};

/**
 * Returns the HTML for a tweet, given a JSON object for the tweet
 * @param  {Object} entry standard JSON for a tweet
 * @return {String}       HTML produced by Underscore adding the twitter data to the template
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getTweetCommentary = function( entry )
{
    var html = '';
    var model = PULSE.CLIENT.Twitter.getTweetModel( entry.tweetjson );
    model.containsVine = this.containsVine( entry.tweetjson );
    model.containsPeriscope = this.containsPeriscope( entry.tweetjson );
    model.markup = entry.message.text;
    model.localTime = entry.localTime;

    return PULSE.CLIENT.Template.getHtml( this.templates.tweet, model );
};

/**
 * Search the tweetjson for urls pointing to 'vine.co/v/'
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.containsVine = function( tweetJson )
{
    var containsVine = false;

    if ( tweetJson && tweetJson.entities )
    {
        var entities = tweetJson.entities;

        if( entities && entities.urls && entities.urls.length )
        {
            _.each( entities.urls, function( url, i )
            {
                if( url.expanded_url.indexOf( 'vine.co/v/' ) > -1 )
                {
                    containsVine = true;
                }
            } );
        }
    }

    return containsVine;
};

/**
 * Search the tweetjson for urls pointing to 'vine.co/v/'
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.containsPeriscope = function( tweetJson )
{
    var containsPeriscope = false;

    if ( tweetJson && tweetJson.entities )
    {
        var entities = tweetJson.entities;

        if( entities && entities.urls && entities.urls.length )
        {
            _.each( entities.urls, function( url, i )
            {
                if( url.expanded_url.indexOf( 'periscope.tv/' ) > -1 )
                {
                    containsPeriscope = true;
                }
            } );
        }
    }

    return containsPeriscope;
};

/**
 * Returns the HTML for the video commentary
 * @param  {Object} entry standard JSON for a video commentary entry
 * @return {String}       HTML produced by Underscore adding the entry data to the template
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getVideoCommentary = function( entry )
{
    var html = '';

    entry.cls = this.match.getVideoClasses( entry.tags );
    entry.date = dateFormat( new Date(entry.publishDate), "dd mmmm yyyy" );

    return PULSE.CLIENT.Template.getHtml( this.templates.video, entry );
};

/**
 * Returns the HTML for the photo commentary
 * @param  {Object} entry standard JSON for a photo commentary entry
 * @return {String}       HTML produced by Underscore adding the entry data to the template
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.getPhotoCommentary = function( entry )
{
    var html = '';

    return PULSE.CLIENT.Template.getHtml( this.templates.photo, entry );
};

/**
 * Given an array of entries, returns all entries which match the current filter;
 * if no fitler is set, returns all entries; returns an empty array if no entries match
 * @param  {Array<Object>} entries - array of commentary entries
 * @return {Array<Object>}         - matching entries
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.filterEntries = function( entries )
{
    if( !this.filter || this.filter.length === 0 )
    {
        // console.log( "No filter set; returning all entries" );
        return entries;
    }
    if( !_.isArray( entries ) )
    {
        // console.log( "ERROR: filterEntries() not given an array; returning emtpy array" );
        return [];
    }

    // console.log( 'FILTER TYPES: ' + this.filter.join( ', ' ) );

    var that = this;
    /**
     * Go through all the set filters and check whether each entry matches any of the filter
     * types, then check whether it fulfills the condition for the filter; since it doesn't
     * have to fulfill both filter conditions, one pass is enough to return true; all must
     * fail to return false and not add the entry to the matchingEntries array
     * @type {Array<Object>}
     */
    var matchingEntries = $.grep( entries, function( entry, i )
    {
        for( var i = 0, iLimit = that.filter.length; i < iLimit; i++ )
        {
            var name = that.filter[i];
            if( -1 < _.indexOf( that.filters[name].types, entry.type ) && that.filters[name].condition( entry ) )
            {
                return true;
            }
        }
        return false;
    } );

    return matchingEntries;
};

PULSE.CLIENT.CRICKET.Match.Commentary.prototype.setConditions = function()
{
    var that = this;
    /**
     * Checks whether a commentary entry is a tweet entry by checking whether 'tweetjson'
     * is set as a parameter for the entry
     * @param  {Object}  entry - a standard commentary entry
     * @return {Boolean}       - true if it's a tweet, false if not
     */
    this.isATweet = function( entry )
    {
        return entry.tweetjson;
    };

    /**
     * Checks whether a commentary entry is a manual commentary entry that is not a tweet
     * by checking that {PULSE.CLIENT.CRICKET.Match.Commentary.prototype.isATWeet} returns false
     * and that the entry matches the set tags
     * @param  {Object}  entry - a standard commentary entry
     * @return {Boolean}       - true if it's a matching entry, false if not
     */
    this.commsNotTwitter = function( entry )
    {
        return !that.isATweet( entry ) && that.matchesTags( entry );
    }

    /**
     * Checks whether the entry matches any of the set list of tags (defined in the filter's categories array)
     * [ [ tag1, tag2 ], [ tag3, tag4 ] ] means get all entries that have ( tag1 OR tag2 ) AND ( tag3 OR tag4 )
     * @param  {Object}  entry - a standard commentary entry
     * @return {Boolean}       - true if it's a matching entry, false if not
     */
    this.matchesTags = function( entry )
    {
        for( var i = 0, iLimit = that.filter.length; i < iLimit; i++ )
        {
            var name = that.filter[i];
            var categories = _.clone( that.filters[name].categories );

            // ignores all groups of tags that are empty
            categories = $.grep( categories, function( array, i )
            {
                return array.length;
            } );

            // no set categories means the filter rule passes everything
            if( categories.length === 0 )
            {
                return true;
            }

            for( var j = 0, jLimit = categories.length; j < jLimit; j++ )
            {
                if( _.intersection( entry.tags, categories[j] ).length === 0 )
                {
                    // tags need to match every filter (AND rule), so return false if it fails one
                    return false;
                }
            }
            // if the filter has got this far, then it hasn't failed any of the rules; pass
            return true;
        }
    };

    /**
     * Condition that always returns true - passes everything
     * @param  {Object}  entry - a standard commentary entry
     * @return {Boolean}       - true
     */
    this.returnsTrue = function( entry )
    {
        return true;
    }
};

/**
 * Resets the filter to an empty array - accepts everything
 */
PULSE.CLIENT.CRICKET.Match.Commentary.prototype.resetFilter = function()
{
    this.filter = [];
};

PULSE.CLIENT.CRICKET.Match.Commentary.prototype.activate = function()
{
    this.active = true;
    this.$container.waypoint('enable');
    this.refresh();
};

PULSE.CLIENT.CRICKET.Match.Commentary.prototype.deactivate = function()
{
    this.active = false;
    this.$container.waypoint('disable');
};

if (!PULSE)                         { var PULSE = {}; }
if (!PULSE.CLIENT)                  { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)          { PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match)    { PULSE.CLIENT.CRICKET.Match = {}; }

/**
 * Calls to get team stats if they have not already been received.
 */
PULSE.CLIENT.CRICKET.Match.prototype.getTeamTournamentStatsData = function()
{
    var team1id = this.getTeamId(0);
    var team2id = this.getTeamId(1);

    if( !this.team1statsRequested && team1id && team1id > -1 )
    {
        this.tournament.getTeamStatsData( team1id, true );
        this.team1statsRequested = true;
    }

    if( !this.team2statsRequested && team1id && team1id > -1 )
    {
        this.tournament.getTeamStatsData( team2id, true );
        this.team2statsRequested = true;
    }
};

/**
 * Updates stats for the current match upon receiving scoring data.
 */
PULSE.CLIENT.CRICKET.Match.prototype.getTeamMatchStats = function()
{
    var teams = this.scoringData.matchInfo.teams;

    if( teams && teams.length )
    {
        for( var i = 0, iLimit = teams.length; i < iLimit; i++ )
        {
            var players = teams[i].players;

            if( players && players.length )
            {
                for( var j = 0, jLimit = players.length; j < jLimit; j++ )
                {
                    var player = players[j];

                    if( !this.playerLookup[player.id] )
                    {
                        this.playerLookup[player.id] = {
                            player: player,
                            team: teams[i].team || undefined
                        };
                    }
                }
            }
        }
    }

    var innings = this.scoringData.innings;

    if( innings && innings.length )
    {
        for( var i = 0, iLimit = innings.length; i < iLimit; i++ )
        {
            var inns = innings[i];
            if( inns.scorecard && inns.scorecard.battingStats )
            {
                var stats = inns.scorecard.battingStats;
                this.addMatchStatsToPlayerLookup( stats, "bat", i );
            }

            if( inns.scorecard && inns.scorecard.bowlingStats )
            {
                var stats = inns.scorecard.bowlingStats;
                this.addMatchStatsToPlayerLookup( stats, "bowl", i );
            }
        }
    }
};

/**
 * Adds match stats for each player to the match playerLookup.
 *
 * @param {array} stats Stats array.
 * @param {string} type Stat type string?.
 * @param {number} i    Index of innings.
 */
PULSE.CLIENT.CRICKET.Match.prototype.addMatchStatsToPlayerLookup = function( stats, type, i )
{
    for( var j = 0, jLimit = stats.length; j < jLimit; j++ )
    {
        var playerStats = stats[j];
        if( !this.playerLookup[playerStats.playerId] )
        {
            this.playerLookup[playerStats.playerId] = {};
        }

        var player = this.playerLookup[playerStats.playerId];

        if( !player.matchStats )
        {
            player.matchStats = {
                innings: []
            };
        }

        if( !player.matchStats.innings[i] )
        {
            player.matchStats.innings[i] = {};
        }

        player.matchStats.innings[i] = playerStats;
        player.matchStats.innings[i].type = type;
    }
};

/**
 * Adds tournament scope stats for a player to the match playerLookup
 * @param  {number} teamId Unique team id.
 */
PULSE.CLIENT.CRICKET.Match.prototype.addTournamentStatsToPlayerLookup = function( teamId )
{
    var teamStats = this.tournament.teamTournamentStatsData[teamId].playersStats;
    if( teamStats )
    {
        for( var i = 0, iLimit = teamStats.length; i < iLimit; i++ )
        {
            var player = teamStats[i].player;

            // Create player objects if they don't exist
            if( !this.playerLookup[player.id] ) this.playerLookup[player.id] = {};
            if( !this.playerLookup[player.id].fullName ) this.playerLookup[player.id] = player;
            this.playerLookup[player.id].team = teamId;

            // Add stats objects if stats for this
            if( teamStats[i].stats )
            {
                if( !this.playerLookup[player.id].stats ) this.playerLookup[player.id].stats = {};

                for( var j = 0, jLimit = teamStats[i].stats.length; j < jLimit; j++ )
                {
                    var stats = teamStats[i].stats[j];
                    this.playerLookup[player.id].stats[stats.matchType] = stats;
                }
            }
        }
    }
};
if (!PULSE)                         { var PULSE = {}; }
if (!PULSE.CLIENT)                  { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)          { PULSE.CLIENT.CRICKET = {}; }
if (!PULSE.CLIENT.CRICKET.Match)    { PULSE.CLIENT.CRICKET.Match = {}; }

PULSE.CLIENT.CRICKET.Match.prototype.setPlayerVoting = function( votingOpen, showResults )
{
    if( typeof this.playerVoting.votingOpen === 'undefined' || votingOpen !== this.playerVoting.votingOpen ||
        typeof this.playerVoting.showResults === 'undefined' || showResults !== this.playerVoting.showResults )
    {
        this.playerVoting.votingOpen = votingOpen;
        this.playerVoting.showResults = showResults;
        PULSE.CLIENT.notify( 'player-vote/state/update', { matchId: this.matchId } );
    }
};

PULSE.CLIENT.CRICKET.Match.prototype.playersVote = function( squadId, playerIds )
{
    var that = this;
    $.ajax(
    {
        url: this.getVotingUrl( this.matchId, squadId, playerIds ),
        timeout: 3000,
        dataType: 'jsonp'
    } ).done( function()
    {
        PULSE.CLIENT.notify( 'canary2/poll/voted', { matchId: that.matchId, squadId: squadId, playerIds: playerIds } );
    } ).fail( function( jqXHR, textStatus, errorThrown )
    {
        PULSE.CLIENT.notify( 'canary2/poll/fail', { matchId: that.matchId, squadId: squadId, playerIds: playerIds } );
        console.log( 'There was an error with the vote: ' + textStatus );
    } );
};

PULSE.CLIENT.CRICKET.Match.prototype.isPlayerVotingOpen = function()
{
    return this.playerVoting.votingOpen === true;
};

PULSE.CLIENT.CRICKET.Match.prototype.canShowPlayerVotingResults = function()
{
    return this.playerVoting.showResults === true;
};

PULSE.CLIENT.CRICKET.Match.prototype.getVotingUrl = function( matchId, squadId, playerIds )
{
    var params = PULSE.CLIENT.Util.prepareParams( { 'ids': playerIds } );
    return '//canary2.pulselive.com:8080/poll/teamvote/' + this.getDatabaseId() + '/' + squadId + params;
};

/*globals PULSE, PULSE.app, PULSE.common, PULSE.core */
(function ( app, core ) {
	"use strict";

	app.SocialShare = function( element, config ) {

		var _self = this;
		var isMobile = PULSE.CLIENT.ResponsiveUtils.detectMobile();
        _self.config = config;

		_self.socialShareBtn = element.querySelector('.js-btn-social-share');
		_self.socialIcons = element.querySelector('.js-social-icons');
		_self.socialLinks = element.querySelectorAll('.js-share');

		if( isMobile ) {
			core.style.removeClass(element.querySelector('.js-share.whatsapp'),'u-hide');
		}

		core.event.listenForOutsideClick.addElement( _self.socialIcons, function(){
			core.style.removeClass( _self.socialIcons, 'is-active' );
		}, _self.socialShareBtn );

		_self.socialShareBtn.addEventListener( 'click', function() {
			event.preventDefault();
			core.style.toggleClass( _self.socialIcons, 'is-active' );
		} );

		Array.prototype.forEach.call( _self.socialLinks, function( item, key ) {
			item.addEventListener( 'click', _self.sharePopUp );
		});

	};

	app.SocialShare.prototype.sharePopUp = function( event ) {
		event.preventDefault();

		var size = {
			width: 500,
			height: 400
		};

		var features = 'resizable,width=' + size.width + ',height=' + size.height;

		window.open( event.currentTarget.getAttribute( 'href' ), 'Share', features ).focus();
	};

	var widgets = document.querySelectorAll( "[data-widget='social-share']" );
    Array.prototype.forEach.call( widgets, function( widget ) {
        new app.SocialShare( widget, {} );
    } );

})( PULSE.app, PULSE.core );

/*globals PULSE, PULSE.app*/

( function( app, common, core ) {

    /* PRIVATE METHODS */

    /**
     * @namespace common.slider.private
     */

    var setDefaults = function( config ){

        if( !config.wrap ){
            console.warn( 'You must provide a wrap element in your slider config' );
            return;
        }
        if( !config.controls || !config.controls.next || !config.controls.previous ){
            console.warn( 'You must provide a both next and previous control elements in your slider config' );
            return;
        }
        if( !config.slideList ){
            config.slideList = config.wrap.querySelector( '.js-slide-list' );
        }
        if( !config.slides || config.slides.length === 0 ){
            config.slides = Array.prototype.filter.call( config.slideList.childNodes, function( node ) {
                return node.nodeType === Node.COMMENT_NODE;
            } ).map( function( commentNode, index ) {
                return {
                    indexVal: index,
                    commentNode: commentNode
                };
            } );
        }
        else {
            Array.prototype.forEach.call( config.slides, function( slide, index ) {
                slide.indexVal = index;
            } );
        }
        if( !config.slideRate ){
            config.slideRate = 50; // pixels to move per FPS
        }
        if( !config.thumbSlideRate ){
            config.thumbSlideRate = 10; // pixels to move per FPS
        }
        if( !config.interval ){
            config.interval = 5000;
        }
        if( !config.auto ){
            config.auto = false;
        }
        if( !config.startIndex ){
            config.startIndex = 0;
        }
        if( !config.hideClass ){
            config.hideClass = 'is-hidden';
        }
        if( config.thumbsWrap && !config.thumbsType ){
            config.thumbsType = 'image';
        }
        if( !config.thumbClass ){
            config.thumbClass = 'thumbnail';
        }
        if( !config.detailsSourceSelector ) {
            config.detailsSourceSelector = '.js-details-source';
        }
        if( !config.photoDetails ) {
            config.photoDetails = config.wrap.querySelector( '.js-details-target' );
        }

        return config;

    };

    var bindControls = function ( scope ) {

        scope.config.controls.previous.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.config.slidePrev = true;
            scope.slidePrev();
        } );

        scope.config.controls.next.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.config.slideNext = true;
            scope.slideNext();
        } );


        if ( scope.config.controls.expand ){
            // used to handle multiple expand elements that also set the current image on expand
            if(scope.config.controls.expand.length > 1) {

                for (var i = 0; i < scope.config.controls.expand.length; i++) {

                    scope.config.controls.expand[i].addEventListener('click', function(e) {

                        e.preventDefault();
                        scope.config.currentSlide = {
                            element: e.target.parentNode.parentNode,
                            indexVal: e.target.parentNode.parentNode.indexVal
                        };
                        scope.toggleExpand();
                    });
                }

            } else {

                scope.config.controls.expand.addEventListener( 'click', function( e ){
                    e.preventDefault();
                    scope.toggleExpand();
                } );

            }

        }

        if ( scope.config.controls.autoStart && scope.config.controls.autoStop ){
            scope.config.controls.autoStart.addEventListener( 'click', function( e ){
                e.preventDefault();
                scope.startAuto();
            } );
            scope.config.controls.autoStop.addEventListener( 'click', function( e ){
                e.preventDefault();
                scope.stopAuto();
            } );
        }

    };

    var buildViewport = function( scope ){

        var newViewport = false;

        if( !scope.config.viewport ){
            newViewport = true;
            scope.config.viewport = document.createElement( 'div' );
            core.style.addClass( scope.config.viewport, 'slider-viewport' );
        }
        scope.config.viewport.innerHTML = '';
        scope.config.viewportList = document.createElement( 'ul' );
        core.style.addClass( scope.config.viewportList, 'slider-viewport__list' );
        scope.config.viewport.appendChild( scope.config.viewportList );

        if( newViewport ){
            scope.config.wrap.appendChild( scope.config.viewport );
        }

        bindViewport( scope );
    };

    var bindViewport = function( scope ){
        var timeout;

        var checkScroll = function( ){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                var scrollDiff = Math.abs(scope.config.viewport.scrollLeft - scope.config.viewport.offsetWidth);
                if (scrollDiff > 30) {
                    if( scope.config.viewport.scrollLeft > scope.config.viewport.offsetWidth ){
                        scope.slideNext();
                    } else{
                        scope.slidePrev();
                    }
                } else {
                    scope.updateViewport( scope.config.currentSlide );
                }
                scope.config.viewport.removeEventListener( 'scroll', checkScroll );
            }, 50 );
        };

        scope.config.viewportList.addEventListener( 'touchstart', function( e ){
            startPos = scope.config.viewport.scrollLeft;
            scope.config.viewport.addEventListener( 'scroll', checkScroll );
        } );
    };

    var bindResize = function( scope ){
        var timeout;

        var checkResize = function( ){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                scope.updateViewport( scope.config.currentSlide );
            }, 200 );
        };

        window.addEventListener( 'resize', checkResize );
    };

    var buildThumbnails = function( scope ){
        scope.config.thumbnails = Array.prototype.map.call( scope.config.thumbsWrap.children, function( el, index ) {
            el.addEventListener( 'click', function(){
                scope.slideToIndex( index );
            } );
            return el;
        } );
    };

    var bindThumbControls = function( scope ){

        scope.config.thumbControls.left.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.slideThumbsLeft();
        } );

        scope.config.thumbControls.right.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.slideThumbsRight();
        } );

    };

    var setFullScreenPhoto = function(slide, data) {
        var picElem = convertToElement( slide ).querySelector('.js-picture-element');
        var picContent = '';

        data.srcset.forEach(function(set) {
            picContent += '<source srcset="' + set.src + '" media="' + (set.media ? set.media : '') + '">';
        });

        picContent += '<img src=' + data.img + '" class="thumbnail__image"/>';
        picElem.innerHTML = picContent;
    };

    common.slider = function ( config ) {
        'use strict';

        var _self = this;

        _self.config = setDefaults( config );

        // hide the slide list
        // core.style.addClass( _self.config.slideList, _self.config.hideClass );

        _self.config.currentSlide = _self.config.slides[ _self.config.startIndex ];
        _self.config.firstSlide = _self.config.slides[0];
        _self.config.lastSlide = _self.config.slides[ _self.config.slides.length - 1 ];
        _self.isViewportFullsize = false;

        bindControls( _self );
        buildViewport( _self );
        bindResize( _self );
        if( _self.config.thumbsWrap ){
            buildThumbnails( _self );

            if( _self.config.thumbControls ){
                bindThumbControls( _self );
            }
        }
        _self.updateViewport( _self.config.currentSlide );

        if( _self.config.auto ){
            _self.startAuto();
        }

    };

    common.slider.prototype.slidePrev = function(){

        var _self = this;
        var limit = 0;

        function moveSlide() {

            var newPos = _self.config.viewport.scrollLeft - _self.config.slideRate;

            if( newPos <= limit){
                _self.config.viewport.scrollLeft = limit;
                cancelAnimationFrame( sliding );
                _self.updateViewport( _self.config.prevSlide );
            } else if(_self.config.slidePrev === true) {
                _self.config.viewport.scrollLeft = newPos;
                requestAnimationFrame( moveSlide );
            }
        }
        var sliding = requestAnimationFrame(moveSlide);

    };

    common.slider.prototype.slideNext = function(){

        var _self = this;
        var limit = ( _self.config.viewport.offsetWidth * 2 ) - 10;

        function moveSlide() {

            var newPos = _self.config.viewport.scrollLeft + _self.config.slideRate;

            if( newPos >= limit ) {
                _self.config.viewport.scrollLeft = limit;
                cancelAnimationFrame( sliding );
                _self.updateViewport( _self.config.nextSlide );
            } else if(_self.config.slideNext === true) {
                _self.config.viewport.scrollLeft = newPos;
                requestAnimationFrame( moveSlide );
            }
        }
        var sliding = requestAnimationFrame(moveSlide);

    };

    common.slider.prototype.slideToIndex = function ( targetIndex ) {

        var _self = this;

        if( _self.config.currentSlide.indexVal !== targetIndex ){

            if ( _self.config.currentSlide.indexVal < targetIndex ) {
                var newTarget = _self.config.currentSlide;
                newTarget.forceNext = _self.config.slides[ targetIndex ];
                _self.updateViewport(newTarget, 'next');
            }
            else {
                var newTarget = _self.config.currentSlide;
                newTarget.forcePrev = _self.config.slides[ targetIndex ];
                _self.updateViewport(newTarget, 'prev');
            }
        }

    };

    common.slider.prototype.startAuto = function(){

        var _self = this;

        if( !_self.autoPlaying ){
            _self.autoPlaying = setInterval(
                function(){
                    _self.slideNext();
                }, _self.config.interval
            );
            core.style.toggleClass( _self.config.controls.autoStart, _self.config.hideClass );
            core.style.toggleClass( _self.config.controls.autoStop, _self.config.hideClass );
        }
        else{
            return "slider is already auto playing";
        }
    };

    common.slider.prototype.stopAuto = function(){

        var _self = this;

        if( _self.autoPlaying ){
            clearInterval( _self.autoPlaying );
            _self.autoPlaying = false;
            core.style.toggleClass( _self.config.controls.autoStart, _self.config.hideClass );
            core.style.toggleClass( _self.config.controls.autoStop, _self.config.hideClass );
        }
        else{
            return "slider is not auto playing";
        }
    };

    common.slider.prototype.arrowKeyNav = function(e) {

        var _self = this;
        _self.config.slidePrev = false;
        _self.config.slideNext = false;

        if( e.keyCode === 39 ) {
            _self.config.slideNext = true;
            _self.slideNext();
            _self.stopAuto();
        }
        else if( e.keyCode === 37 ) {
            _self.config.slidePrev = true;
            _self.slidePrev();
            _self.stopAuto();
        }
        else if( e.keyCode === 27 ) {
            _self.toggleExpand();
        }
    };

    common.slider.prototype.toggleExpand = function(){

        var _self = this;

        var keyListener = function(e) {

            if (_self.isViewportFullsize) {
                _self.arrowKeyNav(e);
            }
        };

        if ( core.style.hasClass( _self.config.wrap, 'expanded' ) ){
            _self.isViewportFullsize = false;
            core.style.removeClass( _self.config.wrap, 'expanded' );
            core.style.removeClass( document.getElementsByTagName( 'body' )[0], 'u-body-no-scroll' );
            _self.applyGalleryPosition();

        } else {
            _self.isViewportFullsize = true;
            _self.sliderPosition = _self.getPosition();
            core.style.addClass( _self.config.wrap, 'expanded' );
            core.style.addClass( document.getElementsByTagName( 'body' )[0], 'u-body-no-scroll' );

            var fullscreenData = convertToElement( _self.config.currentSlide ).getAttribute('data-fullscreen-data');
            if (fullscreenData) {
                setFullScreenPhoto( _self.config.currentSlide, JSON.parse(fullscreenData) );
            }

            if (!_self.keyEventListenerAdded) {
                _self.keyEventListenerAdded = true;
                document.addEventListener('keyup', keyListener );
            }
        }

        _self.updateViewport( _self.config.currentSlide );

    };

    common.slider.prototype.applyGalleryPosition = function() {
        var _self = this;

        if( window.innerWidth <= app.measurements.tablet ) {
            window.scrollTo( _self.sliderPosition.left, _self.sliderPosition.top );
        }
    };

    common.slider.prototype.getPosition = function() {
        var _self = this;

        var doc = document.documentElement;
        var left = ( window.pageXOffset || doc.scrollLeft ) - (doc.clientLeft || 0 );
        var top = ( window.pageYOffset || doc.scrollTop ) - (doc.clientTop || 0 );

        return { 'left': left, 'top': top };
    };

    common.slider.prototype.updateDetails = function( slide ) {
        var _self = this;
        var slideElement = convertToElement( slide );
        var detailsSrcElement = slideElement.querySelector( _self.config.detailsSourceSelector );
        if( detailsSrcElement && _self.config.photoDetails ) {
            _self.config.photoDetails.innerHTML = detailsSrcElement.innerHTML;
            var shareElements = _self.config.photoDetails.querySelectorAll( '[data-widget="photo-sharing"]' );
            Array.prototype.forEach.call( shareElements, function( widget ) {
                new app.SocialShare( widget, {} );
            } );

            var isPortrait = core.style.hasClass( slideElement.querySelector( '.js-item-image' ), 'is-portrait' );
            var viewportWidth = core.style.outerWidth( _self.config.viewport );
            var viewportRect = _self.config.viewport.getBoundingClientRect();
            var viewportHeight = viewportRect.bottom - viewportRect.top;
            var bodyHeight = document.body.getBoundingClientRect().bottom;
            var imageHeight = isPortrait ? viewportHeight : Math.round( viewportWidth * 0.66 );
            var topPositioning = Math.max( ( bodyHeight - imageHeight ) / 2, 50 );

            _self.config.photoDetails.style.height = imageHeight + 'px';
            _self.config.photoDetails.style.top = topPositioning + 'px';
        }
    };

    common.slider.prototype.updateViewport = function (target, slide) {

        var _self = this;
        _self.config.currentSlide = target;

        _self.updateDetails( _self.config.currentSlide, _self.config.thumbnails[ _self.config.currentSlide.indexVal ] );

        if (target.forcePrev) {
            _self.config.prevSlide = target.forcePrev;
            target.forcePrev = false;
            _self.config.slidePrev = true;
        } else {
            _self.config.prevSlide = _self.config.slides[ _self.config.currentSlide.indexVal - 1 ];
            if ( !_self.config.prevSlide ) {
                _self.config.prevSlide = _self.config.lastSlide;
            }
        }

        if (target.forceNext) {
            _self.config.nextSlide = target.forceNext;
            target.forceNext = false;
            _self.config.slideNext = true;
        } else {
            _self.config.nextSlide = _self.config.slides[ _self.config.currentSlide.indexVal + 1 ];
            if ( !_self.config.nextSlide ) {
                _self.config.nextSlide = _self.config.firstSlide;
            }
        }

        _self.config.viewportList.innerHTML = "";
        _self.config.viewportList.appendChild( convertToElement( _self.config.prevSlide ) );
        _self.config.viewportList.appendChild( convertToElement( _self.config.currentSlide ) );
        _self.config.viewportList.appendChild( convertToElement( _self.config.nextSlide ) );

        _self.config.viewport.scrollLeft = _self.config.viewport.offsetWidth;

        if ( slide === "next" ) {
            _self.slideNext( true );
        } else if ( slide === "prev" ) {
            _self.slidePrev( true );
        }

        if( _self.config.thumbnails ){
            _self.setActiveThumb( _self.config.currentSlide.indexVal );
        }

    };

    common.slider.prototype.setActiveThumb = function( activeIndex ){
        var _self = this;
        Array.prototype.forEach.call( _self.config.thumbnails, function( thumb ){
            core.style.removeClass( thumb, 'is-active' );
        } );
        core.style.addClass( _self.config.thumbnails[ activeIndex ], 'is-active' );
    };

    common.slider.prototype.slideThumbsRight = function( direction ){
        var _self = this;

        var getThumbWidth = function(){
            var width = _self.config.thumbnails[0].offsetWidth;

            var marginLeft = parseInt( window.getComputedStyle( _self.config.thumbnails[0] ).getPropertyValue('margin-left') );
            var marginRight = parseInt( window.getComputedStyle( _self.config.thumbnails[0] ).getPropertyValue('margin-right') );

            return width + marginRight + marginLeft;

        };

        var startPos =  _self.config.thumbsWrap.scrollLeft;
        var distance = getThumbWidth();
        var limit = ( _self.config.thumbnails.length * distance ) - _self.config.thumbsWrap.offsetWidth;


        function moveThumbs() {

            var newPos = _self.config.thumbsWrap.scrollLeft += _self.config.thumbSlideRate;

            if( newPos > limit ){
                _self.config.thumbsWrap.scrollLeft = limit;
                cancelAnimationFrame( slidingThumbs );
            }
            else if( newPos >= startPos + distance ){
                _self.config.thumbsWrap.scrollLeft = newPos;
                cancelAnimationFrame( slidingThumbs );
            }
            else{
                _self.config.thumbsWrap.scrollLeft = newPos;
                requestAnimationFrame( moveThumbs );
            }
        }

        if( _self.config.thumbsWrap.scrollLeft < limit ){
            var slidingThumbs = requestAnimationFrame( moveThumbs );
        }

    };

    common.slider.prototype.slideThumbsLeft = function( direction ){
        var _self = this;

        var startPos =  _self.config.thumbsWrap.scrollLeft;
        var distance = _self.config.thumbnails[0].offsetWidth;
        var limit = 0;

        function moveThumbs() {

            var newPos = _self.config.thumbsWrap.scrollLeft -= _self.config.thumbSlideRate;

            if( newPos < limit ){
                _self.config.thumbsWrap.scrollLeft = limit;
                cancelAnimationFrame( slidingThumbs );
            }
            else if( newPos <= startPos - distance ){
                _self.config.thumbsWrap.scrollLeft = newPos;
                cancelAnimationFrame( slidingThumbs );
            }
            else{
                _self.config.thumbsWrap.scrollLeft = newPos;
                requestAnimationFrame( moveThumbs );
            }
        }

        if( _self.config.thumbsWrap.scrollLeft > limit ){
            var slidingThumbs = requestAnimationFrame( moveThumbs );
        }

    };

    var convertToElement = function( slide ) {
            if( slide.element ) {
                return slide.element;
            }
            else {
                var div = document.createElement( 'div' )
                div.innerHTML = slide.commentNode.textContent;
                slide.element = div.firstChild;
                return div.firstChild;
            }
        };


} )( PULSE.app, PULSE.app.common, PULSE.core );

( function( app, common, core ) {

    /**
     * @typedef {Object} SliderConfig configuration for the LFC slider element
     * @property {HTMLElement} container the container of the slider element
     * @property {Integer} perPage how many li elements should be incremented per slide
     * @property {HTMLElement} scrollContainer the element that will be scrolled in the slider
     * @property {NodeList} sliderElements list of slide elements (li's)
     * @property {HTMLElement} nextButton the next button
     * @property {HTMLElement} prevButton the previous button
     * @property {NodeList} pagerElements the page indication elements
     * @property {String} nudgeLeftClass the class to apply to the container to nudge it left
     * @property {String} nudgeRightClass the class to apply to the container to nudge it right
     * @property {String} pagerActiveClass the class to apply to an active pager element
     */

    /**
     * LFC Videos Slider, creates slider interaction from a list, displays next and
     * previous buttons and a bottom pagination indicator
     * @param {SliderConfig} config the slider configuration
     * @constructor
     */
    common.ContentSlider = function( config ) {
        var _self = this;
        _self.config = config;
        _self.container = _self.config.container;
        _self.initSlider();
    };

    common.ContentSlider.prototype.initSlider = function() {
        var _self = this;

        _self.element = _self.config.container;
        _self.slideContainer = _self.config.scrollContainer;
        _self.slideWidth = _self.slideContainer.clientWidth;
        _self.slideItems = _self.config.sliderElements;
        _self.slideNum = Math.ceil(_self.slideItems.length/_self.config.perPage);
        _self.slidePos = 0;
        _self.activeSlide = 0;
        _self.slideElementWidth = _self.slideItems[0].clientWidth * _self.config.perPage;
        _self.nextBtn = _self.config.nextButton;
        _self.prevBtn = _self.config.prevButton;
        _self.paginatorContainer = _self.config.paginatorContainer;

        _self.setListeners();
        _self.updateControls();
        _self.setActiveItems();
    }

    common.ContentSlider.prototype.setListeners = function() {
        var _self = this;

        _self.nextBtn.addEventListener( 'click', function() {
            _self.scrollNext();
        });

        //set nudge listeners so that on button hovers the slider moves left and right slightly
        _self.nextBtn.addEventListener('mouseover', function(){
            _self.nudgeLeft();
        });

        _self.nextBtn.addEventListener('mouseout', function(){
            _self.nudgeLeft();
        });

        _self.prevBtn.addEventListener('mouseover', function(){
            _self.nudgeRight();
        });

        _self.prevBtn.addEventListener('mouseout', function(){
            _self.nudgeRight();
        });

        _self.prevBtn.addEventListener( 'click', function() {
            _self.scrollPrev();
        });

        core.event.windowResize.add({method:_self.resetSlider.bind(_self)});


        if ( _self.paginatorContainer ) {
            _self.renderPaginator();
        }

            // if ( _self.hasNav ) {
            //     core.style.removeClass(_self.nextBtn, 'u-hide');
            //     core.style.removeClass(_self.prevBtn, 'u-hide');
            //     // disable left slider chevron on page load;
            //     core.style.addClass(_self.prevBtn, 'disabled');
            // }
    };

    /**
     * Render paginator
     */
    common.ContentSlider.prototype.renderPaginator = function() {

        var _self = this;

        // render paginator
        _self.paginatorContainer.innerHTML = app.templating.render({ slideNum: _self.slideNum }, 'paginator');

        _self.pagerContainers = _self.element.getElementsByClassName('js-pager-container');
        _self.pagers = _self.element.getElementsByClassName('js-pager');

        // make pager 1 active on intialisation
        core.style.addClass(_self.pagers[ 0 ], 'content-slider__pager--active');

        Array.prototype.forEach.call( _self.pagerContainers, function( pagerBtn, index ) {
            pagerBtn.addEventListener( 'click', function( e ) {
                _self.activeSlide = index;
                _self.slideTo( _self.activeSlide );
            } );
        } );

    };

    //one slide right
    common.ContentSlider.prototype.scrollNext = function() {
        var _self = this;
        _self.activeSlide++;
        _self.slidePos = _self.slideElementWidth *_self.activeSlide;
        _self.slideContainer.style.left = '-' + _self.slidePos + 'px';
        _self.updateControls();
        _self.setActiveItems();
    }

    common.ContentSlider.prototype.nudgeLeft = function() {
        var _self = this;
        core.style.toggleClass( _self.slideContainer, _self.config.nudgeLeftClass );
    }

    common.ContentSlider.prototype.nudgeRight = function() {
        var _self = this;
        core.style.toggleClass( _self.slideContainer, _self.config.nudgeRightClass );
    }

    common.ContentSlider.prototype.isPaginating = function() {
        var _self = this;
        return _self.pagerItemsContainer ? _self.pagerItemsContainer.offsetParent : false;
    }

    //one slide left
    common.ContentSlider.prototype.scrollPrev = function() {
        var _self = this;

        _self.activeSlide--;
        _self.slidePos = _self.slideElementWidth *_self.activeSlide;
        _self.slideContainer.style.left = '-' + _self.slidePos + 'px';
        _self.updateControls();
        _self.setActiveItems();

    }

    //when pager is clicked jump the the slide that matches that buttons index
    common.ContentSlider.prototype.slideTo = function(slideIndex) {
        var _self = this;
        _self.slidePos = _self.slideElementWidth *_self.activeSlide;
        _self.slideContainer.style.left = '-' + _self.slidePos + 'px';
        var direction = _self.activeSlide < slideIndex;
        _self.activeSlide = slideIndex;
        _self.updateControls();
        _self.setActiveItems();

    }

    common.ContentSlider.prototype.updateControls = function() {
        var _self = this;

        //if there are no more slides after this hide next button
        if(_self.activeSlide >= _self.slideNum-1){
            core.style.addClass( _self.nextBtn, 'faded' );
            //otherwise show this button
        }else if(core.style.hasClass( _self.nextBtn, 'faded' )){
            core.style.removeClass( _self.nextBtn, 'faded' );
        }

        if(_self.activeSlide === 0){
            core.style.addClass( _self.prevBtn, 'faded' );
        }else if(core.style.hasClass( _self.prevBtn, 'faded' )){
            core.style.removeClass( _self.prevBtn, 'faded' );
        }

        if ( _self.paginatorContainer ) {
            //update the active pager button to match the activeSlide number
            for (var i = 0; i < _self.pagers.length; i++) {
                if (i === _self.activeSlide) {
                    core.style.addClass(_self.pagers[ i ], 'content-slider__pager--active');
                } else {
                    core.style.removeClass(_self.pagers[ i ], 'content-slider__pager--active');
                }
            }
        }
    }

    common.ContentSlider.prototype.getActiveSlide = function() {
        var _self = this;
        return _self.activeSlide;
    }

    //function to set the four items currently active in slider so they're shown with full opacity
    common.ContentSlider.prototype.setActiveItems = function() {
        var _self = this;

        for (var i = 0; i < _self.slideItems.length; i++) {
            core.style.removeClass(_self.slideItems[i], 'active');
        }

        var firstItemIndex = _self.activeSlide*_self.config.perPage;
        for(i = 0; i < _self.config.perPage; i++ ){
            if( !_self.slideItems[firstItemIndex] ) {
                break;
            }
            core.style.addClass(_self.slideItems[firstItemIndex], 'active');
            firstItemIndex++;
        }
    }

    common.ContentSlider.prototype.resetSlider = function() {
        var _self = this;

        if( window.innerWidth < app.measurements.desktop ) {
            _self.config.perPage = 3;
        } else {
            _self.config.perPage = 4;
        }

        _self.slidePos = 0;
        _self.slideElementWidth = _self.slideItems[0].clientWidth * _self.config.perPage;
        _self.slideNum = Math.ceil(_self.slideItems.length/_self.config.perPage);
        _self.activeSlide = 0;
        _self.renderPaginator();
        _self.slideTo(_self.activeSlide);
    }

} )(PULSE.app, PULSE.app.common, PULSE.core );

if (!PULSE)         { var PULSE = {}; }
if (!PULSE.CLIENT)  { PULSE.CLIENT = {}; }

// only one instance of the instagram model needed
PULSE.CLIENT.getInstagramInstance = function()
{
    if( !window.Instagram )
    {
        window.Instagram = new PULSE.CLIENT.Instagram();
    }
    return window.Instagram;
};

PULSE.CLIENT.Instagram = function()
{
    this.userMediaListData = {};
    this.dm = PULSE.CLIENT.getDataManager();
    this.urlGenerator = PULSE.CLIENT.CRICKET.getUrlGenerator();
};

PULSE.CLIENT.Instagram.prototype.onData = function( data, id )
{
    if( id.startsWith( 'media_account' ) )
    {
        var account = id.substring( 14 );
        this.userMediaListData[ account ] = data.data || [];

        PULSE.CLIENT.notify( 'instagram/user/latest', { success: true, account: account } );
    }
};

PULSE.CLIENT.Instagram.prototype.getMediaListDataForUser = function( account, options )
{
    if( !options )
    {
        options = {};
    }

    options = $.extend( options, { callback: "onInstagram" } );
    options.interval = typeof options.interval !== "undefined" ? options.interval : 60;
    
    var url = this.urlGenerator.makeInstagramAccountUrl( account );

    this.dm.addFeed( 'media_account-' + account, url, options.interval, options.callback,
        [ this ].concat( options.targets || [] ) );

    if( options.start )
    {
        this.dm.start( url );
    }
};

PULSE.CLIENT.Instagram.prototype.getMediaListModelForUser = function( account, limit )
{
    var model = { items: [] };

    var data = this.userMediaListData[ account ];
    if( data )
    {
        model.items = this.getMediaListForUser( data, limit );
    }

    return model;
};

PULSE.CLIENT.Instagram.prototype.getMediaListForUser = function( data, limit )
{
    var items = [];
    var iLimit = Math.min( limit || data.length, data.length );
    for( var i = 0; i < iLimit; i++ )
    {
        var item = data[ i ];
        items.push( this.getMediaItemModel( item ) );
    }

    return items;
};

PULSE.CLIENT.Instagram.prototype.getMediaItemModel = function( itemData )
{
    var date = new Date( itemData.created_time * 1000 );
    var timestamp = PULSE.CLIENT.DateUtil.getSinceString( date );
    return $.extend( {
        timestamp: timestamp,
        date: date,
        modelType: 'instagram'
    }, itemData );
};

if( !PULSE) var PULSE = {};
if( !PULSE.CLIENT) PULSE.CLIENT = {};
if( !PULSE.CLIENT.CRICKET) PULSE.CLIENT.CRICKET = {};

/**
 * Creates an instance of the playersModel for this match if it doesn't already exist
 * @param  {Object} match Match object supplied by widget
 * @return {Object}       Returns playersModel object for this match.
 */
PULSE.CLIENT.CRICKET.getPlayerModelInstance = function( match )
{
    if( !window.playersModel ) window.playersModels = {};
    if( !window.playersModel[match.matchId] ) window.playersModel[match.matchId] = new PULSE.CLIENT.CRICKET.PlayerModel( match );

    return window.playersModel[match.matchId];
};

/**
 * Constructor: Gets player stats for the current match.
 * @param {Object} match Match object supplied by the widget.
 */
PULSE.CLIENT.CRICKET.PlayerModel = function( match )
{
    this.match = match;
    this.tournament = this.match.tournament;
    this.players = {};
    this.videos = {};
    this.APICaller  = PULSE.CLIENT.CRICKET.getAPICaller();

    //this.setSubscriptions();

    // attempt to get the match's two teams' tournament stats
    //this.getTeamTournamentStats();
};

/**
 * Gets and returns various player data from tournament career stats and match stats
 * @param  {number} id Unique player id
 * @return {Object}    Player object
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getFullModel = function( id )
{
    if( this.hasPlayer( id ) )
    {
        var model = {};

        model.hasPlayed = this.playerHasPlayed( id )
        model.player = this.players[id].player;
        model.team = this.match.getTeamByPlayerId( id );
        model.tournamentStats = this.getPlayerSeriesStats( id );
        model.matchStats = this.getPlayerMatchStats( id );

        return model;
    }
};

/**
 * Checks if player data exists 'this.players' (tournament career stats for this match)
 * @param  {number}  id Unique player id
 * @return {Boolean}    Returns true if player data exists
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.hasPlayer = function( id )
{
    if( this.players[id] )
    {
        return true;
    }
    else
    {
        return false;
    }
};

/**
 * Lookup whether a given player has played in a given innings.
 *
 * @param  {number} id      Unique player id.
 * @param  {number} innsNum Index of the innings to lookup.
 * @return {boolean}        True for players that have played, else false.
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.playerHasPlayed = function( id )
{
    if( id && this.players[id] && this.players[id].matchStats && this.players[id].matchStats
        .innings && this.players[id].matchStats.innings.length > 0 )
    {
        return true;
    }
    return false;
};

/**
 * Gets player match stats if they have been received
 * @param  {number} id      Unique player id
 * @return {Object}         Player stats object
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerMatchStats = function( id )
{
    if( this.players[id] && this.players[id].matchStats )
    {
        return this.players[id].matchStats;
    }
    else
    {
        return undefined;
    }
};

/**
 * Returns the player object of a given player by their name
 * @param  {string} name Player name string
 * @return {Object}      Player object
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerByFullName = function( name )
{
    for( var id in this.players )
    {
        if( this.players[id].player && this.players[id].player.fullName === name )
        {
            return this.players[id];
        }
    }
};

/**
 * Returns the player object of a given player by their shortened name
 * @param  {string} name Player short name string
 * @return {Object}      Player object
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerByShortName = function( name )
{
    for( var id in this.players )
    {
        if( this.players[id].player && this.players[id].player.shortName === name )
        {
            return this.players[id];
        }
    }
};

/**
 * Returns the full name of a player by their unique id.
 * @param  {number} name Unique player id.
 * @return {string}      Player name string.
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerFullName = function( id )
{
    if( this.players[id] && this.players[id].player )
    {
        return this.players[id].player.fullName || "";
    }
    return "";
};

/**
 * Returns the short name of a player by their unique id.
 * @param  {number} name Unique player id.
 * @return {string}      Player short name string.
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerShortName = function( id )
{
    if( this.players[id] && this.players[id].player )
    {
        return this.players[id].player.shortName || "";
    }
    return "";
};

/**
 * Returns the series stats of a player by their unique id.
 * @param  {number} name Unique player id.
 * @return {Object}      Player stats object.
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerSeriesStats = function( id )
{
    if( this.players[id] && this.players[id].stats )
    {
        return this.players[id].stats;
    }
};

/**
 * Gets the zero-based innings index in which the player's team was batting/bowling
 * @param  {number} id        Unique team id
 * @param  {string} batBowl   [description]
 * @param  {number} whichInns [description]
 * @return {number}           Index of innings
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getInnsIndex = function( id, batBowl, whichInns )
{
    var team = this.match.getTeamByPlayerId(id);
    var teamId = team.id;

    var battingOrder = this.match.getBattingOrder();

    if( battingOrder )
    {
        var offset = whichInns == 1 ? 0 : 2;

        if( offset < battingOrder.length )
        {
            for( var i = offset, iLimit = battingOrder.length; i < iLimit; i++ )
            {
                var thisInnsBatBowl = this.match.getBatBowlForInnings( teamId, i );
                if( thisInnsBatBowl === batBowl )
                {
                    return i;
                }
            }
        }
    }
};

/**
 * Get videos for a given player based on their unique id.
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerVideos = function( id )
{
    var playerId = id;

    if( !this.match.videosData || !this.match.videosData.items )
    {
        return false;
    }
    else
    {
        var videos = this.match.videosData.items,
            matchedVideos = [];

        for( var i = 0; i < videos.length; i++ )
        {
            var video = videos[i];

            for( var j = 0; j < video.tags.length; j++ )
            {
                var tag = video.tags[j];

                if( tag == ('playerid ' + playerId) )
                {
                    matchedVideos.push( video );
                }
            }
        }

        return matchedVideos;
    }
};

/**
 * Calls the Hit API to get player data
 * @param  {String|Number} id Unique player id to request data for
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.getPlayerData = function( id )
{
    var playerId = id.toString();

    if( playerId )
    {
        this.APICaller.getPlayer(
                'player',
                this,
                {
                    id : playerId
                },
                true
            );
    }
};

/**
 * Called upon receiving player data for a given player from the Hit api
 * @param  {Object} data Object containing player data beyond what is available from stats
 * @param  {String} id   Id string for this data
 */
PULSE.CLIENT.CRICKET.PlayerModel.prototype.onData = function( data, id )
{
    var that = this;

    if( data.error )
    {
        PULSE.CLIENT.notify( 'player/update', {
                success: false,
                playerId: undefined,
                tournamentName: that.tournament.tournamentName,
                error: data.message
            });
    }
    else
    {
        var data = data.result;

        this.playerData = data;

        PULSE.CLIENT.notify( 'player/update', {
                success: true,
                playerId: data.Id,
                tournamentName: that.tournament.tournamentName
            });
    }
};

if ( !PULSE )        		{ var PULSE = {}; }
if ( !PULSE.CLIENT ) 		{ PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.Poll ) 	{ PULSE.CLIENT.Poll = {}; }

/**
 * Handles the data-retrieval and processing for a poll
 * @constructor
 * @param {Object} config includes the name of the poll, used as the ID of the data feed
 *                        as well as feed options (url, interval, start)
 */
PULSE.CLIENT.Poll.Model = function( container, config )
{
	this.$container = $( container );
	this.config 	= config;
	this.name 		= config.name || 'poll';
	this.url 		= config.url;
	this.interval 	= config.interval || 60;

	if( !config.popupQuestionId )
	{
		this.pqid = undefined;
	}
	else
	{
		/**
		 * The popupQuestionId
		 * @type {String}
		 */
		this.pqid = config.popupQuestionId;
	}

	if( !config.answeredQuestions )
	{
		this.answeredQuestions = [];
	}
	else
	{
		/**
		 * The questions the user's already answered; running through the array
		 * to turn any strings into Numbers
		 * @type {Array<Number>}
		 */
		this.answeredQuestions = $.map( config.answeredQuestions, function( stringId, i )
		{
			return parseInt( stringId, 10 );
		} );
	}

	this.data = {
		results: []
	};

	this.dm = PULSE.CLIENT.getDataManager();
	this.dm.addFeed( this.name, this.url, this.interval, 'onPollCallback', [ this ] );

	if( this.config.start )
	{
		this.dm.start( this.url );
	}

	/**
	 * Defer poll PQID setup so poll/data notifications get set first
	 */
	var that = this;
	this.$container.on( 'poll/data', function( e, params )
	{
		if( params.poll === that.name )
		{
			that.setPQId( that.data.popupQuestionId );
		}
	} );
};

/**
 * Sets the popupQuestionId; avoid using externally!
 * @param {Number} newId  the new popupQuestionId
 */
PULSE.CLIENT.Poll.Model.prototype.setPQId = function( newId )
{
	if( typeof newId === 'undefined' )
	{
		this.$container.trigger( 'poll/popup/removed', {
			poll: this.name
		} );
	}
	else if( this.pqid != newId && _.indexOf( this.answeredQuestions, this.pqid ) === -1 )
	{
		this.$container.trigger( 'poll/popup/new', {
			poll: this.name,
			popupQuestionId: newId
		} );
	}

	this.pqid = newId;
};

PULSE.CLIENT.Poll.Model.prototype.addAnsweredQuestion = function( questionId )
{
	if( typeof questionId === 'undefined' )
	{
		return;
	}

	questionId = parseInt( questionId, 10 );
	this.answeredQuestions.push( questionId );
};

PULSE.CLIENT.Poll.Model.prototype.onData = function( data, id )
{
	if( id === this.name )
	{
		if( data && data[0] )
		{
			this.data = data[0];

			this.$container.trigger( 'poll/data', {
				poll: id
			} );
		}
		else
		{
			this.$container.trigger( 'poll/error', {
				poll: id,
				type: 'no data'
			} );
		}
	}
};

PULSE.CLIENT.Poll.Model.prototype.onError = function( data, id )
{
	if( id === this.name )
	{
		this.$container.trigger( 'poll/error', {
			poll: id,
			type: 'unable to retrieve file'
		} );
	}
};

PULSE.CLIENT.Poll.Model.prototype.getQuestions = function( type )
{
	var questions = this.data.results;
	if( !questions )
	{
		return [];
	}
	if( !type || -1 === _.indexOf( [ 'answered', 'unanswered' ], type ) )
	{
		return questions;
	}

	var getAnswered = type === 'answered';

	var that = this;
	return $.grep( questions, function( q, i )
	{
		var isAnswered = -1 < _.indexOf( that.answeredQuestions, q.id );
		return getAnswered ? isAnswered : !isAnswered;
	} );
};

PULSE.CLIENT.Poll.Model.prototype.getQuestionById = function( questionId )
{
	var questions = this.getQuestions();
	for( var i = 0, iLimit = questions.length; i < iLimit; i++ )
	{
		if( questions[i].id === +questionId )
		{
			return questions[i];
		}
	}
};

PULSE.CLIENT.Poll.Model.prototype.getOptions = function( questionId )
{
	var question = this.getQuestionById( questionId );
	if( question )
	{
		return question.options;
	}
	else
	{
		return [];
	}
};

PULSE.CLIENT.Poll.Model.prototype.getPopupQuestion = function()
{
	return this.getQuestionById( this.data.popupQuestionId );
};
if (!PULSE)         { var PULSE = {}; }
if (!PULSE.CLIENT)  { PULSE.CLIENT = {}; }

/**
 * Ensure only one instance of the twitter object is ever used
 * @return {Object} the Twitter "singleton"
 */
PULSE.CLIENT.getTwitterInstance = function()
{
    if( !window.Twitter )
    {
        window.Twitter = new PULSE.CLIENT.Twitter();
    }
    return window.Twitter;
};

/**
 * Data-handler/model-maker for Canary-produced Twitter data
 * @constructor
 */
PULSE.CLIENT.Twitter = function()
{
    /**
     * Stores twitter list data, with the feed name (folder) as key and
     * the array of tweets as the stored value
     * @dict
     */
    this.listData = {};

    /**
     * Stores twitter tally/count totals, with feed name (folder) as key and
     * the total (integer) as the stored value
     * @dict
     */
    this.tallyData = {};

    /**
     * Stores twitter ranked topics data, with feed name as key and the
     * array of ranked entries as the stored value
     * @dict
     */
    this.trendingData = {};

    /**
     * Stores twitter historical data, with feed name as key and the
     * array of ranked entries as the stored value
     * @dict
     */
    this.historicalData = {};

    /**
     * The instance of the data manager
     * @type {Object}
     */
    this.dm = PULSE.CLIENT.getDataManager();

    /**
     * The instance of the URL generator
     * @type {Object}
     */
    this.urlGenerator = PULSE.CLIENT.CRICKET.getUrlGenerator();
};

/**
 * Function called by the Data Manager by default whenever it receives new data,
 * if the object (the Twitter instance) has subscribed to a given feed
 * @param  {Object} data    - the JSONP payload
 * @param  {String} id      - the custom ID for the feed set when the feed request is initialised
 */
PULSE.CLIENT.Twitter.prototype.onData = function( data, id )
{
    if( id.startsWith( 'list_' ) )
    {
        var name = id.substring( 5 );
        this.listData[ name ] = data;
        PULSE.CLIENT.notify( 'twitter/list', { success: true, name: name } );
    }
    else if( id.startsWith( 'tally_' ) )
    {
        var name = id.substring( 6 );
        this.tallyData[ name ] = data.total;
        PULSE.CLIENT.notify( 'twitter/tally', { success: true, name: name } );
    }
    else if( id.startsWith( 'trending_' ) )
    {
        var name = id.substring( 9 );
        this.trendingData[ name ] = data.entries;
        PULSE.CLIENT.notify( 'twitter/trending', { success: true, name: name } );
    }
    else if( id.startsWith( 'history_' ) )
    {
        var name = id.substring( 8 );
        this.historicalData[ name ] = data[0];
        PULSE.CLIENT.notify( 'twitter/history', { success: true, name: name } );
    }
};

/**
 * Function called by the Data Manager by default whenever it encounters an error,
 * allowing the object subscribed to it (the Twitter instance) to handle it
 * @param  {String} id      - the custom ID for the feed set when the feed request is initialised
 */
PULSE.CLIENT.Twitter.prototype.onError = function( id )
{
    if( id.startsWith( 'list_' ) )
    {
        var name = id.substring( 5 );
        PULSE.CLIENT.notify( 'twitter/list', { success: false, name: name } );
    }
    else if( id.startsWith( 'tally_' ) )
    {
        var name = id.substring( 6 );
        PULSE.CLIENT.notify( 'twitter/tally', { success: false, name: name } );
    }
    else if( id.startsWith( 'trending_' ) )
    {
        var name = id.substring( 9 );
        PULSE.CLIENT.notify( 'twitter/trending', { success: false, name: name } );
    }
    else if( id.startsWith( 'history_' ) )
    {
        var name = id.substring( 8 );
        PULSE.CLIENT.notify( 'twitter/history', { success: false, name: name } );
    }
};

PULSE.CLIENT.Twitter.prototype.getList = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    options = $.extend( options, { callback: "onTwitter", fileName: ( options.fileName || ( name + "_list" ) ) + "/tweetList" } );
    options.interval = typeof options.interval !== "undefined" ? options.interval : 60;
    this.getFeed( name, 'list', options );
};

PULSE.CLIENT.Twitter.prototype.stopList = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    var fileName = ( options.fileName || ( name + "_list" ) ) + "/tweetList";
    this.stopFeed( fileName );
};

PULSE.CLIENT.Twitter.prototype.getTally = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    options = $.extend( options, { callback: "onTweetTotal", fileName: ( options.fileName || ( name + "_count" ) ) + "/tally" } );
    options.interval = typeof options.interval !== "undefined" ? options.interval : 30;
    this.getFeed( name, 'tally', options );
};

PULSE.CLIENT.Twitter.prototype.stopTally = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    var fileName = ( options.fileName || ( name + "_count" ) ) + "/tally";
    this.stopFeed( fileName );
};

PULSE.CLIENT.Twitter.prototype.getRankedTopics = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    options = $.extend( options, { callback: "onRanking", fileName: ( options.fileName || ( name + "_trending" ) ) + "/tweetRanking" } );
    options.interval = typeof options.interval !== "undefined" ? options.interval : 60;
    this.getFeed( name, 'trending', options );
};

PULSE.CLIENT.Twitter.prototype.stopRankedTopics = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    var fileName = ( options.fileName || ( name + "_trending" ) ) + "/tweetRanking";
    this.stopFeed( fileName );
};

PULSE.CLIENT.Twitter.prototype.getHistoricalCount = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    options = $.extend( options, { callback: "onHistory", fileName: ( options.fileName || ( name + "_historical" ) ) + "/history" } );
    options.interval = typeof options.interval !== "undefined" ? options.interval : 30;
    this.getFeed( name, 'history', options );
};

PULSE.CLIENT.Twitter.prototype.stopHistoricalCount = function( name, options )
{
    if( !options )
    {
        options = {};
    }

    var fileName = ( options.fileName || ( name + "_historical" ) ) + "/history";
    this.stopFeed( fileName );
};

// type can be 'list', 'history', 'tally' etc.
PULSE.CLIENT.Twitter.prototype.getFeed = function( name, type, options )
{
    var feed = this.urlGenerator.makeTwitterDataUrl( options.fileName );
    this.dm.addFeed( type + "_" + name, feed, options.interval, options.callback, [ this ].concat( options.targets || [] ) );

    if( options.start )
    {
        this.dm.start( feed );
    }
};

PULSE.CLIENT.Twitter.prototype.stopFeed = function( fileName )
{
    var feed = this.urlGenerator.makeTwitterDataUrl( fileName );
    this.dm.stop( feed );
};


/**
 *
 * TWITTER AND CANARY MODELS
 *
 */

PULSE.CLIENT.Twitter.prototype.getTweetCount = function( name )
{
    var tweetCount = this.tallyData[ name ];
    if( tweetCount )
    {
        return PULSE.CLIENT.Util.addCommaForThousands( tweetCount );
    }
    return "";
};

PULSE.CLIENT.Twitter.prototype.getTweetsListModel = function( name, limit )
{
    var array = this.getTweetsArray( this.listData[ name ], limit );

    return { tweets: array };
};

PULSE.CLIENT.Twitter.prototype.getTweetsArray = function( data, limit )
{
    if( !data ) return;

    if( !limit || limit > data.length )
    {
        limit = data.length;
    }

    var array = [];
    for( var i = data.length - 1; i > data.length - 1 - limit; i-- )
    {
        var tweet = data[i];
        var model = PULSE.CLIENT.Twitter.getTweetModel( tweet );

        array.push( model );
    }

    return array;
};

PULSE.CLIENT.Twitter.getTweetModel = function( tweet )
{
    var TC = PULSE.CLIENT.TwitterController,
        userAccountLink = TC.getUserAccountUrl( tweet.user.screen_name ),
        tweetDate = TC.parseTwitterDate( tweet.created_at ),
        timestamp = PULSE.CLIENT.DateUtil.getSinceString( tweetDate ),
        photo = '',
        extended_media = [],
        model;

    if( tweet.entities && tweet.entities.media )
    {
        for( var i = 0, iLimit = tweet.entities.media.length; i < iLimit; i++ )
        {
            if( tweet.entities.media[i].type === 'photo' )
            {
                photo = tweet.entities.media[i].media_url;
            }
        }
    }

    if( tweet.extended_entities && tweet.extended_entities.media )
    {
        for( var i = 0, iLimit = tweet.extended_entities.media.length; i < iLimit; i++ )
        {
            var p = tweet.extended_entities.media[ i ];
            extended_media.push( p.media_url );
        }
    }

    model = {
        timestamp: timestamp,
        modelType: 'tweet',
        id: tweet.id_str,
        date: tweetDate,
        text: TC.markUpLinks( tweet.text ),
        link: TC.getPermalink( tweet ),
        photo: photo,
        extended_media: extended_media,
        user: {
            id: tweet.user.id_str,
            name: tweet.user.name,
            account: tweet.user.screen_name,
            link: userAccountLink,
            description: tweet.user.description,
            avatarUrl: tweet.user.profile_image_url
        },
        favorites: tweet.favorite_count,
        retweets: tweet.retweet_count
    };

    return model;
};

/**
 * Looks up account name in trending data array.
 *     - Returns early if no name is specified or no data exists.
 *     - If limit is specified will return top n number of entries.
 *     - If no limit is specified will return all entries in this file.
 *     - Adds percentage relative to the highest count.
 *
 * @param  {string} name  Account name string to lookup.
 * @param  {number} limit Number of entries to return.
 * @return {array}        Array of trending data entries at the specified length.
 */
PULSE.CLIENT.Twitter.prototype.getTrendingModel = function( name, limit )
{
    var model = { rankings: [] };
    if( name && this.trendingData[ name ] )
    {
        var array = this.trendingData[ name ],
            limit = limit || array.length,
            highest = array.length ? array[0].count : 0;

        model.rankings = array.slice( 0, limit )

        for( var i = 0; i < model.rankings.length; i++ )
        {
            var entry = model.rankings[i];
            entry.percentage =  Math.round( ( entry.count / highest ) * 100 ) + '%';
            entry.formattedCount = entry.count > 999 ? PULSE.CLIENT.Util.commafy( entry.count ) : entry.count;
        }
    }

    return model;
};

/**
 * Looksup historical data after it's been received and stored. Returns count values
 * based on resolution.
 * @param  {string} name  Value for looking up in historical data
 * @param  {number} limit Limitation of how many previous counts to return
 * @return {array}       Array of hsitoric counts
 */
PULSE.CLIENT.Twitter.prototype.getHistoricalModel = function( name, limit )
{
    var history = this.historicalData[ name ];
    var model = { total: 0, buckets: [] };

    if( history && history.data )
    {
        var iLimit = limit ? Math.min( limit, history.data.length ) : history.data.length;
        for( var i = 0; i < iLimit; i++ )
        {
            var pool = history.data[i];
            if( pool.resolution && pool.resolution.unit === "MINUTE" )
            {
                model.buckets = $.map( pool.buckets, function( bucket ) {
                    return bucket.count;
                } );
                model.buckets = model.buckets.reverse();
            }
            else if( pool.resolution && pool.resolution.unit === "DAY" )
            {
                $.map( pool.buckets, function( bucket ) {
                    model.total += bucket.count;
                } );
            }
        }
    }

    return model;
};
if (!PULSE)             { var PULSE = {}; }
if (!PULSE.CLIENT)      { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.UI )  { PULSE.CLIENT.UI = {}; }


PULSE.CLIENT.UI.ListScroller = function( options )
{
    var that = this;
    if( !options )
    {
        return;
    }

    this.$itemList      = $( options.listContainer );
    this.itemListWidth  = parseInt(this.$itemList.css('width').replace('px', '')); 
    
    this.$wrapper       = $( options.wrapper );
    this.wrapperWidth  = parseInt(this.$wrapper.css('width').replace('px', ''));

    this.$upScroll      = $( options.upScrollButton );
    this.$downScroll    = $( options.downScrollButton );
    this.maxHeight      = options.maxHeight || this.$wrapper.css('max-height');
    this.maxWidth       = options.maxWidth || this.$wrapper.css('max-width');
    this.scrollLength   = options.scrollLength || 2;
    this.scrollSize     = options.scrollSize;
    this.orientation    = options.orientation || 'vertical';
    this.alignment      = options.alignment || 'right';
    this.animating      = false;
    this.cssTrans       = options.cssTrans || false;

    $('body').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", this.$itemList, function() { 
        that.animating = false;
        that.refreshScrolling();
    });

    if( this.orientation === 'vertical' )
    {
        this.$upScroll.click( function( e ) {
            e.preventDefault();
            if( that.animating )
            {
                return;
            }
            that.animating = true;
            var topOffset = Math.abs( parseInt( that.$itemList.css('top'), 10 ) ),
                listHeight = that.$itemList.height(),
                scrollHeight = ( listHeight / that.$itemList.children().length ) * that.scrollLength;
            var offset = topOffset < scrollHeight ? topOffset : scrollHeight;
            that.$itemList.animate(
                { 
                    top: "+=" + offset 
                },
                "fast",
                'easeInSine',
                function() {
                    that.animating = false;
                    that.refreshScrolling();
                }
            );
        } );

        this.$downScroll.click( function( e ) {
            e.preventDefault();
            if( that.animating )
            {
                return;
            }
            that.animating = true;
            var topOffset = Math.abs( parseInt( that.$itemList.css('top'), 10 ) ),
                containerHeight = that.$wrapper.height(),
                listHeight = that.$itemList.height(),
                remainder = listHeight - containerHeight - topOffset,
                scrollHeight = ( listHeight / that.$itemList.children().length ) * that.scrollLength;
            var offset = remainder < scrollHeight ? remainder : scrollHeight;
            that.$itemList.animate(
                { 
                    top: "-=" + offset
                },
                "fast",
                'easeOutSine',
                function() {
                    that.animating = false;
                    that.refreshScrolling();
                }
            );
        } );
    }
    else
    {
        this.$upScroll.click( function( e )
        {
            e.preventDefault();

            if( that.animating )
            {
                return;
            }

            that.animating = true;
            var topOffset = Math.abs( parseInt( that.$itemList.css(that.alignment), 10 ) ),
                listHeight = that.$itemList.innerWidth(),
                scrollLength = ( listHeight / that.$itemList.children().length ) * that.scrollLength;
            var offset = topOffset < scrollLength ? topOffset : scrollLength;
            var offset = that.scrollSize ? that.scrollSize : offset;

            if( that.alignment === 'right' )
            {
                if ($('html').hasClass('csstransitions') && that.cssTrans) {

                    that.$itemList.css('right', '+=' + offset);

                } else {
                        that.$itemList.animate(
                            { 
                                right: "+=" + offset 
                            },
                            "fast",
                            'easeInSine',
                            function() {
                                that.animating = false;
                                that.refreshScrolling();
                            }
                        );
                }
            }
            else
            {
                if ($('html').hasClass('csstransitions') && that.cssTrans) {

                    var curPos = parseInt(that.$itemList.css('left').replace('px', ''));
                    var newOffSet = parseInt(curPos + offset);
                    if (newOffSet > 0) {

                        that.$itemList.css('left', '0px');
                    }
                    else {

                        that.$itemList.css('left', '+=' + offset);
                    }

                } else {
                    that.$itemList.animate(
                        { 
                            left: "+=" + offset 
                        },
                        "fast",
                        'easeInSine',
                        function() {
                            that.animating = false;
                            that.refreshScrolling();
                        }
                    );
                }
            }

            
        } );

        this.$downScroll.click( function( e )
        {    
            e.preventDefault();

            if( that.animating )
            {
                return;
            }
            that.animating = true;

            var topOffset = Math.abs( parseInt( that.$itemList.css( that.alignment ), 10 ) ),
                containerHeight = that.maxWidth || that.$wrapper.width(),
                listHeight = that.$itemList.innerWidth(),
                remainder = listHeight - containerHeight - topOffset,
                scrollLength = ( listHeight / that.$itemList.children().length ) * that.scrollLength;
            var offset = remainder < scrollLength ? remainder : scrollLength;
            var offset = that.scrollSize ? that.scrollSize : offset;

            if( that.alignment === 'right' )
            {
                if ($('html').hasClass('csstransitions') && that.cssTrans) {

                    that.$itemList.css('right', '+=' + offset);

                } else {
                    that.$itemList.animate(
                        { 
                            right: "-=" + offset
                        },
                        "fast",
                        'easeOutSine',
                        function() {
                            that.animating = false;
                            that.refreshScrolling();
                        }
                    );
                }
            }
            else
            {

                if ($('html').hasClass('csstransitions') && that.cssTrans) {

                    var maxScroll = -Math.abs(that.itemListWidth - that.wrapperWidth);
                    var curPos = parseInt(that.$itemList.css('left').replace('px', ''))
                    var newOffSet = parseInt(curPos - offset);

                    if (newOffSet <= maxScroll ) {

                        offset = curPos - maxScroll
                        that.animating = false;
                    }
    
                    that.$itemList.css('left', '-=' + offset);

                } else {

                    that.$itemList.animate(
                        { 
                            left: "-=" + offset
                        },
                        "fast",
                        'easeOutSine',
                        function() {
                            that.animating = false;
                            that.refreshScrolling();
                        }
                    );
                }
            }
        } );
    }

    var that = this;
    
};

PULSE.CLIENT.UI.ListScroller.prototype.refreshScrolling = function()
{
    if( this.orientation === "vertical" )
    {
        var maxHeight = parseInt( this.maxHeight, 10 ),
            containerHeight = this.$wrapper.height(),
            listHeight = this.$itemList.height();

        if( containerHeight < maxHeight )
        {
            this.$upScroll.hide();
            this.$downScroll.hide();
        }
        else
        {
            var topOffset = parseInt( this.$itemList.css('top'), 10 );
            if( topOffset + 30 < 0 )
            {
                this.$upScroll.fadeIn();
            }
            else
            {
                this.$upScroll.hide();
            }

            if( -topOffset + containerHeight + 30 < listHeight )
            {
                this.$downScroll.fadeIn();
            }
            else
            {
                this.$downScroll.hide();
            }
        }
    }
    else
    {
        var maxWidth = parseInt( this.maxWidth, 10 ),
            containerWidth = this.$wrapper.width(),
            listWidth = 0;

        this.$itemList.children().each( function() {
            listWidth += $(this).outerWidth( true );
        } );

        if( listWidth === 0 )
        {
            listWidth = this.$itemList.width();
        }

        if( containerWidth < maxWidth )
        {
            this.$upScroll.hide();
            this.$downScroll.hide();
        }
        else
        {

            if( this.alignment === "right" )
            {

                var offset = parseInt( this.$itemList.css('right'), 10 );
            }
            else
            {
                var offset = parseInt( this.$itemList.css('left'), 10 );
            }

            
            
            if( offset + 30 < 0 )
            {
                this.$upScroll.fadeIn();
            }
            else
            {
                this.$upScroll.hide();
            }

            // console.log( "-offset + containerWidth + 30 < listWidth" );
            // console.log( "-offset + containerWidth + 30 = " + ( -offset + containerWidth + 30 ) );
            // console.log( "listWidth = " + listWidth );

            if( -offset + containerWidth + 30 < listWidth )
            {
                this.$downScroll.fadeIn();
            }
            else
            {
                this.$downScroll.hide();
            }
        }
    }
};

if (!PULSE)             { var PULSE = {}; }
if (!PULSE.CLIENT)      { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.UI )  { PULSE.CLIENT.UI = {}; }

/**
 * Pulse scroller
 * @author tmarson
 */
PULSE.CLIENT.UI.Scroller = (function( $ )
{
    /**
     * Generic scroll functionality
     *
     * @param {HTMLElement} container - element to be scrolled
     * @param {object} [options]
     * @param {integer} [options.animSpeed = 250] - Time taken (ms) for scroller to change position
     * @param {integer} [options.scrollChange = 0.75] - Percentage change of scroller position
     * @param {string} [options.hideClass = 'hide'] - Class added to indicate control container superflousness
     * @param {string} [options.toggleClass = 'inactive'] - Class added to indicate controls threshold
     * @constructor
     */
    var Scroller = function( container, options )
    {
        var self = this;

        self.config = $.extend( {
            animSpeed: 250,
            scrollChange: 0.75,
            hideClass: 'hide',
            toggleClass: 'inactive'
        }, options );

        self.$container = $( container );
        self.container = self.$container[ 0 ];
        self.$scrollControls = $( '<div class="controls"></div>' ).appendTo( self.$container.parent() );
        self.$scrollRight = $( '<span class="horizontalNavArrow next"></span>' ).appendTo( self.$scrollControls ).data( 'posChange', self.config.scrollChange );
        self.$scrollLeft = $( '<span class="horizontalNavArrow prev"></span>' ).addClass( self.config.toggleClass ).appendTo( self.$scrollControls ).data( 'posChange', -self.config.scrollChange );
        self.scrollPosition = 0;
        this.checkThresholds();

        if( parseInt(self.$scrollControls.css("opacity")) == 0 )
        {
            self.$scrollControls.css({opacity: 1});
        }

        // Scroll element
        self.$scrollControls.on( 'click', 'span', function( e )
        {
            e.preventDefault();
            self.posChange = $( this ).data( 'posChange' ) * self.container.clientWidth;
            if ( self.posChange )
            {
                self.scrollTo( self.scrollPosition + self.posChange );
            }
        } );

        // Refresh scroll controls on resize (with grace period)
        $( window ).on( 'resize', function()
        {
            clearTimeout( self.windowTimeout );
            self.windowTimeout = setTimeout( function()
            {
                self.scrollPosition = self.container.scrollLeft;
                self.checkThresholds();
            }, 150 );
        } );

        // Refresh scroll controls on scroll (with grace period)
        self.$container.on( 'scroll', function()
        {
            if ( !self.scrollDisabled )
            {
                clearTimeout( self.scrollTimeout );
                self.scrollTimeout = setTimeout( function()
                {
                    self.scrollPosition = self.container.scrollLeft;
                    self.checkThresholds();
                }, 150 );
            }
        } )
    };

    Scroller.prototype = {

        /**
         * Checks the current scroll position -
         * if no scroll required, hide the controls, otherwise toggle state of left / right buttons.
         *
         * @returns {boolean} - Returns true if container can be scrolled
         */
        checkThresholds: function()
        {
            var self = this;

            // If scroll container is not visible, don't check scroll position
            if ( !self.$container.is( ':visible' ) )
            {
                self.$scrollControls.addClass( self.config.hideClass );
                return false;
            }

            // Hide scroll if not needed
            if ( self.container.scrollWidth <= self.container.clientWidth )
            {
                self.$scrollControls.addClass( self.config.hideClass );
                return false;
            }
            else
            {
                self.$scrollControls.removeClass( self.config.hideClass );
            }

            self.currentScroll = self.container.scrollLeft;
            self.maxScroll = self.container.scrollWidth - self.container.clientWidth;

            // Check for scroll beyond left threshold
            if ( self.scrollPosition <= 0 )
            {
                self.scrollPosition = 0;
                self.$scrollLeft.addClass( self.config.toggleClass );
            }
            else
            {
                self.$scrollLeft.removeClass( self.config.toggleClass );
            }

            // Check for scroll beyond right threshold
            if ( self.scrollPosition >= ( self.maxScroll ) )
            {
                self.scrollPosition = self.maxScroll;
                self.$scrollRight.addClass( self.config.toggleClass );
            }
            else
            {
                self.$scrollRight.removeClass( self.config.toggleClass );
            }

            return true;
        },

        /**
         * Scroll the container to a specific position and update controls
         *
         * @param {integer} position - the target position to scroll to
         * @param {boolean} [instantChange = false] - if true, do not animate
         */
        scrollTo: function( position, instantChange )
        {
            var self = this;
            self.scrollPosition = position;

            if ( self.scrollDisabled || !self.checkThresholds() )
            {
                return;
            }

            // Instant change
            if ( instantChange )
            {
                self.container.scrollLeft = self.scrollPosition;
                return;
            }

            // Animated change
            self.scrollDisabled = true;
            self.$container.animate(
                {
                    scrollLeft: self.scrollPosition + 'px'
                },
                self.config.animSpeed,
                function()
                {
                    self.scrollDisabled = false;
                    self.checkThresholds()
                } );
        }
    };

    $( function()
    {
        $.each( $( '[data-widget-type="scroller_widget"]' ), function()
        {
            this.scroller = new Scroller( this );
        } );
    });

    return Scroller;

})
( jQuery );

/**
 * Filter view logic specific to old HTML structure filters
 * @param {Object}   options  - classes and selector overrides
 * @param {Function} callback - function executed on click
 */
jQuery.fn.selectionFilter = function( options, callback )
{
    var settings = $.extend( {
        activeClass: 'active', // added to the $container when filter is active
        openClass: 'open', // added to the container to show the dropdown
        displaySelector: '.selection', // displays the default or current selection
        buttonSelector: undefined, // typically same as displaySelector, but can be separate
        optionsSelector: '.option', // selector for the options in the dropdown
        clickScope: 'selectionfilter' // special scope for the clicks attached to the body
    }, options || {} );

    var $container = $( this );
    var $selection = $container.find( settings.displaySelector );
    var $options = $container.find( settings.optionsSelector );
    var $button = settings.buttonSelector ? $container.find( settings.buttonSelector ) : $selection;
    var $body = $( 'body' );

    /**
     * PRIVATE
     */
    var chooseOption = function( $option )
    {
        $selection.html( $option.html() );
        $options.removeClass( settings.activeClass );
        $option.addClass( settings.activeClass );

        closeDropdown();

        if( callback && _.isFunction( callback ) )
        {
            callback( $option );
        }
    };

    var openDropdown = function()
    {
        $container.addClass( settings.openClass );
        $container.addClass( settings.activeClass );
        $body.on( getClickEvent(), function( e )
        {
            if ( !$button.is( e.target ) && $button.has( e.target ).length === 0 )
            {
                closeDropdown();
            }
        } );
    };

    var closeDropdown = function( keepActive )
    {
        $container.removeClass( settings.openClass );
        $container.toggleClass( settings.activeClass, keepActive === true );
        $body.off( getClickEvent() );
    };

    var getClickEvent = function()
    {
        return settings.clickScope ? 'click.' + settings.clickScope : 'click';
    };


    /**
     * PUBLIC
     */
    this.hide = function()
    {
        $container.hide();
    }
    this.show = function()
    {
        $container.show();
    }
    this.chooseOption = function( optionSelector )
    {
        chooseOption( $container.find( optionSelector ) );
    }
    this.openDropdown = function()
    {
        openDropdown();
    };
    this.closeDropdown = function()
    {
        closeDropdown();
    };


    /**
     * CLICK LISTENERS
     */
    $container.off( getClickEvent() ).on( getClickEvent(), settings.optionsSelector, function( e )
    {
        chooseOption( $( this ) );
        e.preventDefault();
    } );

    $button.off( getClickEvent() ).on( getClickEvent(), function( e )
    {
        if( $container.hasClass( settings.openClass ) )
        {
            closeDropdown();
        }
        else
        {
            openDropdown();
        }
        e.preventDefault();
    } );

    $container.data( 'initialised', true );
};

if (!PULSE)             { var PULSE = {}; }
if (!PULSE.CLIENT)      { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.UI )  { PULSE.CLIENT.UI = {}; }

PULSE.CLIENT.UI.ToggleNav = function( options ) {
    if( !options )
    {
        return;
    }

    this.activeTab      = typeof options.activeTab !== "undefined" ? options.activeTab : 0;
    this.navOnClass     = options.navActiveClass        || 'active';
    this.contentClass   = options.contentClassPrefix    || 'tab';
    this.$nav           = $( options.navigationContainer ); // mandatory
    this.$content       = $( options.contentContainer );    // mandatory
    this.$navLinks      = options.navLinksSelector ? this.$nav.find( options.navLinksSelector ) : this.$nav.children(),
    this.$next          = $( options.nextButton );
    this.$prev          = $( options.prevButton );
    this.animate        = options.animate;
    this.callback       = options.callback;

    this.$navLinks.eq( this.activeTab ).addClass( this.navOnClass );
    this.$content.children().hide();
    this.$content.find( '.' + this.contentClass + this.activeTab ).show();

    var that = this;
    this.$navLinks.each( function( index )
    {
        $( this ).click( function( e )
        {
            if( that.activeTab !== index )
            {
                that.activeTab = index;
                that.switchTabs( that );
            }

            e.preventDefault();
        } );
    } );

    if( options.nextButton )
    {
        this.$next.click( function( e )
        {
            if( that.$navLinks.length - 1 > that.activeTab )
            {
                that.activeTab++;
                that.switchTabs( that );
            }

            e.preventDefault();
        } );
    }

    if( options.prevButton )
    {
        this.$prev.click( function( e )
        {
            if( 0 < that.activeTab )
            {
                that.activeTab--;
                that.switchTabs( that );
            }

            e.preventDefault();
        } );
    }
};

PULSE.CLIENT.UI.ToggleNav.prototype.switchTabs = function( scope )
{
    if( !scope )
    {
        scope = this;
    }

    // Return early if the clicked link is 'inactive'
    if( scope.$navLinks.eq( scope.activeTab ).hasClass('inactive') )
    {
        return;
    }

    var hideContentChildren = function( callback )
    {
        scope.$content.children( ':visible' ).first().fadeOut('fast', function ()
        {
            if( callback )
            {
                callback( scope.activeTab );
            }
            if( scope.callback )
            {
                scope.callback( scope.activeTab );
            }
        } );
    }

    if( scope.animate )
    {
        hideContentChildren( function ()
        {
            scope.$content.find( "." + scope.contentClass + scope.activeTab ).fadeIn('slow');
        } );
    }
    else
    {
        scope.$content.children().hide();
        scope.$content.find( "." + scope.contentClass + scope.activeTab ).show();

        if( scope.callback )
        {
            scope.callback( scope.activeTab );
        }
    }

    scope.$navLinks.removeClass( scope.navOnClass );
    scope.$navLinks.eq( scope.activeTab ).addClass( scope.navOnClass );
};

PULSE.CLIENT.UI.ToggleNav.prototype.switchToTab = function( index )
{
    this.activeTab = index;
    this.switchTabs();
};

// --------- end toggle nav

/*globals PULSE, PULSE.app */

( function( core, common ) {

	var scrollBoundary = function() {

		var _self = this;

		_self.stickyItems = [];
		var timer = null;

		window.addEventListener( 'scroll', function(e) {
			onScroll( _self, e );

			if(timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				onScroll( _self, e );
			}, 300);
		} );
	};

	var onScroll = function(_self, e) {

        var i, item, boundaryRect, scrollTop, windowScroll;

		for (i = 0; i < _self.stickyItems.length; i++) {
            item = _self.stickyItems[i];
            elemRect = item.elem.getBoundingClientRect();
            windowScroll = window.scrollY || window.pageYOffset;

			if (item.boundary === 'viewport') {
				scrollTop = 0;
				boundaryPos = elemRect.top + item.margin;
			} else if( core.dom.isDescendant( item.elem, item.boundary ) ) {
				boundaryRect = item.boundary.getBoundingClientRect();
				scrollTop = (boundaryRect.top * -1) + item.elem.offsetHeight + elemRect.top + item.margin;
				boundaryPos = item.boundary.offsetHeight;
			} else {
                scrollTop = item.margin || 0;
                boundaryRect = item.boundary.getBoundingClientRect();
                boundaryPos = boundaryRect.top;
            }

			if (!core.style.hasClass(item.container[0], item.activeClass)) {

				if (scrollTop >= boundaryPos) { // reached the bottom of the boundary elem

					if((window.scrollY || window.pageYOffset) >= item.scrollPos) {
						setClass( item );
					}
					item.scrollPos = window.scrollY || window.pageYOffset;

				}

				/*

				 } else if (item.boundary === 'viewport' && item.scrollPos === 0) { // scrolled back up to the top
				 removeClass( item );
				 } else if (item.boundary !== 'viewport' && (window.scrollY || window.pageYOffset) <= item.scrollPos) { // scrolled back up above the boundary
				 removeClass( item );
				 }

				 */

			} else if ((window.scrollY || window.pageYOffset) <= item.scrollPos) { // scrolled back up above the boundary
					removeClass( item );
			}

		}

	};

	var setClass = function( item ) {
		for (var x = 0; x < item.container.length; x++) {
			core.style.addClass( item.container[x], item.activeClass );
		}
        if( item.classChangeCallback ) {
            item.classChangeCallback( true, item.elem );
        }
	};

	var removeClass = function( item ) {
		for (var x = 0; x < item.container.length; x++) {
			core.style.removeClass( item.container[x], item.activeClass );
		}
        if( item.classChangeCallback ) {
            item.classChangeCallback( false, item.elem );
        }
	};

	var addItemFromWidget = function(widget) {
		var item, boundarySelector, boundary, margin, activeClass, containers;

		item = widget.getAttribute('data-item');
		boundarySelector = widget.getAttribute('data-boundary');
		margin = parseInt(widget.getAttribute('data-margin'));
		activeClass = widget.getAttribute('data-active-class');
		containers = document.querySelectorAll(widget.getAttribute('data-containers'));

		if (item) {
			item = document.querySelector(item);
		}
		if (boundarySelector) {
			boundary = document.querySelector(boundarySelector);
		} else {
			boundary = 'viewport';
		}

		common.scrollBoundary.addItem(item || widget, boundary, margin, containers, activeClass);
	};



	/**
	 * Add an element to be watched on scroll if it reaches the boundary of another element and apply a class
	 * @param {object} item element to be watched
	 * @param {object} boundary boundary element
	 * @param {integer} scrollMargin margin to the boundary element
	 * @param {object} itemContainer array of elements which the class should be applied to - optional (if not set, class will be set to item)
	 * @param {string} activeClass CSS class to be set on element when active - default: is-static
	 */
	scrollBoundary.prototype.addItem = function(item, boundary, scrollMargin, itemContainer, activeClass, classChangeCallback) {

		var _self = this;

		if (item && boundary) {

			_self.stickyItems.push({
				elem: item,
				boundary: boundary,
				container: itemContainer && itemContainer.length > 0 ? itemContainer : [item],
				margin: scrollMargin || 0,
				activeClass: activeClass || 'is-static',
                classChangeCallback: classChangeCallback
			});

		}

		onScroll( _self );

	};

    /**
	 * Remove an element that was previously watched from the list
	 * @param {object} item element to be watched
	 */
	scrollBoundary.prototype.removeItem = function( item ) {

		var _self = this;
        var itemIndex = -1;
        _self.stickyItems.forEach( function( stickyItem, index ) {
            if( stickyItem.elem === item ) {
                itemIndex = index;
            }
        } );
        if( itemIndex > -1 ) {
            _self.stickyItems.splice( itemIndex, 1 );
        }

	};

    scrollBoundary.prototype.refresh = function() {
        onScroll( this );
    };

	common.scrollBoundary = new scrollBoundary();

	var widgets = document.querySelectorAll('[data-widget="scroll-boundary"]');
	for (var i = 0; i < widgets.length; i++) {
		addItemFromWidget(widgets[i]);
	}


}( PULSE.core, PULSE.app.common ));

if (!PULSE)                             { var PULSE = {}; }
if (!PULSE.CLIENT)                      { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)      { PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.CountdownManager = function( $container )
{
    this.$container = $container
};

PULSE.CLIENT.CRICKET.CountdownManager.prototype.setConfig = function( config )
{
    this.config = config;
};

PULSE.CLIENT.CRICKET.CountdownManager.prototype.update = function()
{
    var that = this;

    this.$container.find('.dhms-container')
    .each(function()
    {
            var $element = $(this);

            that.initCountdown( $element );
    } );
};

PULSE.CLIENT.CRICKET.CountdownManager.prototype.initCountdown = function( $element, overwrite )
{
    var that                = this,
        matchId         = $element.attr( 'data-match-id' ),
        matchDate       = $element.attr( 'data-match-date' ),
        id              = matchId + '-countdown';
        //$parent         = $element.parent();

    $element.find('.countdown').attr( 'id', id );

    //create countdown object if it doenst exist
    if( !this.countdown )
    {
            this.countdown = {};
    }

    // Create a new countdown timer for this match if it doesn't exist
    // Unless overwrite is true; in which case overwrite this countdown object with a new one
    if( !this.countdown[matchId] || overwrite )
    {
            //create countdown for given matchId
            this.countdown[matchId] = {};

            // The time it takes for a flip, in ms
            // Instantiate the counter
            this.countdown[matchId].element = $element;

            this.countdown[matchId].countdownCounter = new PULSE.CLIENT.FlipCounter( '#' + id,
                    this.config );

            this.countdown[matchId].controllerConfig =
            {
                    incrementing : false, // This is a countdown
                    format :  this.config.format || 'dddhhmm'
            };

            // Format
            this.countdown[matchId].countdownController =
                    new PULSE.CLIENT.CountdownController(
                            this.countdown[matchId].countdownCounter,
                                    this.countdown[matchId].controllerConfig );

            //Update / start the countdown
            var countingTo = +PULSE.CLIENT.DateUtil.parseDateTime( matchDate );

            // countingTo = (new Date( 2013, 2, 19, 8, 30, 10 ));

            this.countdown[matchId].countdownController.setTargetTimeMs( countingTo );

            this.countdown[matchId].countdownController.start( );
    }
    else
    {
            //this.countdown[matchId].element.detach().appendTo( $parent.empty() );
    }
};
if (!PULSE)                             { var PULSE = {}; }
if (!PULSE.CLIENT)                      { PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET)      { PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.CountdownText = function( $container, endTime )
{
    var that = this;

    this.$container = $container;
    this.endTime = endTime;

    this.$days = this.$container.find( '.daysSpan' );
    this.$hours = this.$container.find( '.hoursSpan' );
    this.$mins = this.$container.find( '.minsSpan' );
    this.$secs = this.$container.find( '.secsSpan' );

    if ( this.endTime )
    {
        this.liveRefresh = setInterval( function()
        {
            that.refreshTime();
        }, 1000 );
    }
}

PULSE.CLIENT.CRICKET.CountdownText.prototype.stopCountdown = function()
{
    clearInterval( this.liveRefresh );
    this.$container.hide();
};

PULSE.CLIENT.CRICKET.CountdownText.prototype.refreshTime = function()
{
    var now = new Date().getTime();
    var start = this.endTime; //Date( this.start_date )

    var timeGap = start - now;

    // console.log(time_lasting);

    if( timeGap <= 0)
    {
        this.$days.html( '00' );
        this.$hours.html( '00' );
        this.$mins.html( '00' );
        this.$secs.html( '00' );
        this.stopCountdown();
    }
    else
    {

        this.$container.show();
        this.$days.html( '30' );
        this.$hours.html( '30' );
        this.$mins.html( '30' );
        this.$secs.html( '30' );
        var days = Math.floor( ( timeGap  / 1000 ) / ( 60 * 60 * 24 ) );

        if ( days < 10 )
        {
            this.$days.html( '0' + days );
        }
        else
        {
            this.$days.html( days );
        }

        var daySecs = parseInt( days, 10 ) * 24 * 60 * 60;
        var hours = Math.floor( ( timeGap / 1000 - daySecs ) / ( 60 * 60 ) );
        if( hours < 10)
        {
            this.$hours.html( '0' + hours );
        }
        else
        {
            this.$hours.html( hours );
        }
        var hourSecs = parseInt( hours, 10 ) * ( 60 * 60 );
        var minutes = Math.floor( ( timeGap / 1000 - daySecs - hourSecs ) / 60 );
        if( minutes < 10)
        {
            this.$mins.html( '0' + minutes );
        }
        else
        {
            this.$mins.html( minutes );
        }
        var minSecs = parseInt( minutes, 10 ) * 60;
        var seconds = Math.floor( timeGap / 1000 - daySecs - minSecs - hourSecs );
        if( seconds < 10)
        {
            this.$secs.html( '0' + seconds );
        }
        else
        {
            this.$secs.html( seconds );
        }
    }
};


if ( !PULSE )                   	{ var PULSE = {}; }
if ( !PULSE.CLIENT )            	{ PULSE.CLIENT = {}; }

PULSE.CLIENT.FlipTweetCounter = function ( container, config, tournament )
{
	this.$container = $( container );
	this.tournament = tournament;
	this.config 	= config;
	this.feedName 	= config.feedName;
	this.template 	= config.template;

	// Instantiate the counter
	var tweetConfig = {
        imgPrefix : '//static3.iplt20.com/resources/219/i/flipcounter/',
		flipTime: this.config.flipTime || 400
	};  // The time it takes for a flip, in ms
	this.tweetCounter = new PULSE.CLIENT.FlipCounter( '#tweet-counter', tweetConfig );

	var controllerConfig = { showInterimValues: typeof this.config.showInterimValues === "undefined" ? false : true };
	this.tweetController = new PULSE.CLIENT.CounterController( this.tweetCounter, controllerConfig );

	// Add feeds to data manager
	this.tournament.getCanaryTallyData( this.feedName, true );

	// React to data updates
	this.setSubscriptions();
};

PULSE.CLIENT.FlipTweetCounter.prototype.setSubscriptions = function()
{
	var that = this;

	$('body').on( 'canary/tally', function( e, params ) {

		if( params.success && params.feedName === that.feedName )
		{
			that.refreshTweetCounter( params.total );
		}
    } );
};

PULSE.CLIENT.FlipTweetCounter.prototype.refreshTweetCounter = function( total )
{
	if( typeof total !== "undefined" )
	{
		this.tweetController.setValue( total );
	}
};


if ( !PULSE )                       { var PULSE = {}; }
if ( !PULSE.CLIENT )                { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )        { PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.Leaders = function ( container, config, tournament, options )
{
    this.$container = $( container );
    this.tournament = tournament;
    this.config     = config;
    this.statTypes  = options.statTypes;
    this.options    = options;
    this.teamId     = config['data-team-id'];

    this.urlGenerator = PULSE.CLIENT.CRICKET.getUrlGenerator( tournament );

    // React to data updates
    this.setSubscriptions();

    this.templates = {
        leaderCard:         'leader-card',
        teamsLeaderCard:    'leader-card-team',
        fairPlayCard:       'leader-card-fairplay'
    };

    this.containers = {};
    for( var i = 0, iLimit = this.statTypes.length; i < iLimit; i++ )
    {
        // Add feeds
        if( this.statTypes[i] === 'EmergingPlayerPoints' )
        {
            if( -1 === _.indexOf( this.statTypes, 'PlayerPoints' ) )
            {
                this.tournament[ "getPlayerPointsData" ]( false );
            }
        }
        else
        {
            this.tournament[ "get" + this.statTypes[i] + "Data" ]( false );
        }

        this.containers[ this.statTypes[i] ] = this.$container.find( '.pulse-leaders-js-hook' ).eq(i);
    };
};

PULSE.CLIENT.CRICKET.Leaders.prototype.setSubscriptions = function()
{
    var that = this;

    $('body').on( 'stats/update', function( e, params )
    {
        if( params.success
            && params.tournamentName === that.tournament.tournamentName
            && $.inArray( params.statName, that.statTypes ) > -1 )
        {
            if( that.teamId )
            {
                that.refreshTeamLeaders( params.statName, params.url );
            }
            else
            {
                that.refreshLeaders( params.statName, params.url );
                if( params.statName === 'PlayerPoints' && that.containers[ 'EmergingPlayerPoints' ] )
                {
                    that.refreshEmergingPlayers();
                }
            }
        }
    } );

    // Fairplay
    $('body').on( 'fairPlayStats/update', function( e, params )
    {
        if( params.success && params.tournamentName === that.tournament.tournamentName )
        {
            that.refreshFairplay();
        }
    } );
};


PULSE.CLIENT.CRICKET.Leaders.prototype.refreshTeamLeaders = function( statsName, statsDataName )
{
    var that  = this,
        model = this.tournament.getModelArrayFor( statsName, statsDataName, false, { limit: 3, teamId: this.teamId } );

    model.cardType = statsName;
    model.fullListLink = this.urlGenerator.getStatsUrlFor( statsName, this.tournament.year );

    PULSE.CLIENT.Template.publish(
        that.templates.teamsLeaderCard,
        that.containers[ statsName ],
        model,
        function() {
            var $container = that.containers[ statsName ];
            that.loadImages( $container, that.urlGenerator );
        }
    );
};

PULSE.CLIENT.CRICKET.Leaders.prototype.refreshLeaders = function( statsName, statsDataName )
{
    var that  = this,
        model = this.tournament.getModelArrayFor( statsName, statsDataName, false, { limit: 3 } ),
        template = this.options.template || this.templates.leaderCard;

    model.cardType = statsName;
    model.fullListLink = this.urlGenerator.getStatsUrlFor( statsName, this.tournament.year );

    PULSE.CLIENT.Template.publish(
        template,
        that.containers[ statsName ],
        model,
        function() {
            var $container = that.containers[ statsName ];
            that.loadImages( $container, that.urlGenerator );
        }
    );
};

PULSE.CLIENT.CRICKET.Leaders.prototype.refreshEmergingPlayers = function()
{
    var that  = this,
        model = this.tournament.getModelArrayFor( 'PlayerPoints', 'playerPoints', false, { limit: 3, matchFunc: function( stat ) {
            if( !PULSE.CLIENT.CRICKET[ 'IPL' + that.tournament.year ] )
            {
                return true;
            }
            return -1 < _.indexOf( PULSE.CLIENT.CRICKET[ 'IPL' + that.tournament.year ].EMERGING_PLAYERS, stat.player.fullName );
        } } ),
        template = this.options.template || this.templates.leaderCard;

    model.cardType = 'EmergingPlayerPoints';
    model.fullListLink = this.urlGenerator.getStatsUrlFor( 'EmergingPlayerPoints', this.tournament.year );

    PULSE.CLIENT.Template.publish(
        template,
        that.containers[ 'EmergingPlayerPoints' ],
        model,
        function() {
            var $container = that.containers[ 'EmergingPlayerPoints' ];
            that.loadImages( $container, that.urlGenerator );
        }
    );
};

PULSE.CLIENT.CRICKET.Leaders.prototype.refreshFairplay = function()
{
    var that = this
        model = this.tournament.getFairplayModel( 3 );

    model.fullListLink = this.urlGenerator.getStatsUrlFor( "AllFairplay", this.tournament.year );

     PULSE.CLIENT.Template.publish(
        that.templates.fairPlayCard,
        that.containers.FairPlay,
        model,
        function() {
            var $container = that.containers.FairPlay;
            that.loadImages( $container, that.urlGenerator );
        }
    );
};

PULSE.CLIENT.CRICKET.Leaders.prototype.loadImages = function( $container, urlGenerator )
{
    $imgContainers = $container.find( '.imageContainer' );

    $imgContainers.each( function() {
        var playerId = $(this).attr( 'data-player-id' );
        urlGenerator.setPlayerImageLoader( playerId, 210, this, 'png' );
    } );
};


if ( !PULSE )                   	{ var PULSE = {}; }
if ( !PULSE.CLIENT )            	{ PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    	{ PULSE.CLIENT.CRICKET = {}; }
if ( !PULSE.CLIENT.CRICKET.Mobile ) { PULSE.CLIENT.CRICKET.Mobile = {}; }

PULSE.CLIENT.CRICKET.MatchList = function( container, config, tournament, options )
{
	// Contants
	this.$container = $( container );
	this.tournament = tournament;
	this.teamId 	= config['data-team-id'];
	
	this.widgetType = options.widgetType;
	this.maxMatches = options.maxMatches;
	this.matchesType = options.matchesType;
	this.reverseMatchOrder = options.reverseMatches;

	this.templates 	= {
		results: "results",
		schedule: "schedule"
	};
	
	this.tournament.getMatchSchedule();
	
	this.setSubscriptions();
};

PULSE.CLIENT.CRICKET.MatchList.prototype.setSubscriptions = function()
{
	var that = this;
	$('body').on( 'schedule/update', function( e, params ){
		that.populateTeams();
		that.refreshMatches();
	} );
};

PULSE.CLIENT.CRICKET.MatchList.prototype.populateTeams = function()
{
	var $teamsDropdown = this.$container.find( '.teamFilter select' );
	if( $teamsDropdown.length === 0 ) return;

	var that = this;
		teams = this.tournament.getTeamListFromSchedule( this.matchesType );

	$teamsDropdown.append( 
		$( '<option>' )
		.val( 'all' )
		.text( 'All Teams' )
	);

	for( var i = 0, iLimit = teams.length; i < iLimit; i++ )
	{
		var team = teams[i];
		$teamsDropdown.append( 
			$( '<option>' )
			.val( team.id )
			.text( team.fullName || team.fullname )
		);
	}

	$teamsDropdown.change( function() {
		that.teamId = $( this ).val();
		that.refreshMatches();
	} );
};

PULSE.CLIENT.CRICKET.MatchList.prototype.refreshMatches = function()
{
	var that = this,
		model = this.tournament.getMatchArrayModelForType( 
			this.matchesType, 
			this.reverseMatchOrder, 
			{ 
				limit: this.maxMatches, 
				teamId: this.teamId,
				dateFormat: "dddd, mmmm dS yyyy",
				timeFormat: "HH:MM"
			} 
		);

	PULSE.CLIENT.Template.publish( 
		that.templates[ that.widgetType ],
		that.$container.find( '.matchList' ),
		model
	);
};
if ( !PULSE )        		{ var PULSE = {}; }
if ( !PULSE.CLIENT ) 		{ PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.Poll ) 	{ PULSE.CLIENT.Poll = {}; }


PULSE.CLIENT.Poll.Controller = function( container, config )
{
	this.$container = $( container );
	this.config 	= config;
	this.name 		= config.name || 'poll';

	this.POPUP_COOKIE 	= this.name + '_popup_cookie';
	this.ANSWERS_COOKIE = this.name + '_answers_cookie';

    this.cookiePath = config.cookieOptions ? config.cookieOptions.path : undefined;
    this.backwardsCompatible = config.backwardsCompatible; // uses the old style of cookies

	this.answersString = $.cookie( this.ANSWERS_COOKIE );
	this.popupQuestion = $.cookie( this.POPUP_COOKIE );

	this.answers = [];
	if( this.answersString )
	{
		this.answers = this.answersString.split(',');
	}

	// this.setSubscriptions();

	var feedOptions = this.config.feedOptions || {};
	this.model 	= new PULSE.CLIENT.Poll.Model( container, $.extend( {
		name: this.name,
		popupQuestionId: this.popupQuestion,
		answeredQuestions: this.answers
	}, feedOptions ) );

	/**
     * If there's a new popup question to be display,
     * show the poll
     */
    var that = this;
    this.$container.on( 'poll/popup/new', function( e, params )
    {
    	if( params.poll === that.name )
    	{
    	  	$.cookie( that.POPUP_COOKIE, params.popupQuestionId, { path: that.cookiePath } );
            that.$container.trigger( 'poll/show', { name: that.name } );
    	}
    } );

    this.$container.on( 'poll/popup/removed', function( e, params )
    {
    	if( params.poll === that.name )
    	{
        	$.cookie( that.POPUP_COOKIE, null, { path: that.cookiePath } );
        }
    } );

    /**
     * For backwards compatibility with the old poll, make sure the poll reads the
     * old style cookies and adds them to the answers array and the model
     */
    this.$container.on( 'poll/data', function( e, params )
    {
        if( params.poll === that.name && that.backwardsCompatible )
        {
            that.setOldStyleCookies();
        }
    } );
};

PULSE.CLIENT.Poll.Controller.prototype.setOldStyleCookies = function()
{
    var questions = this.model.data.results;
    for( var i = 0, iLimit = questions.length; i < iLimit; i++ )
    {
        if( $.cookie( 'answered_' + questions[i].id ) &&
        _.indexOf( this.answers, questions[i].id.toString() ) == -1 )
        {
            this.answers.push( questions[i].id.toString() );
            this.model.answeredQuestions.push( questions[i].id );
        }
    }
};

PULSE.CLIENT.Poll.Controller.prototype.answerQuestion = function( questionId, answerIndex )
{
	var that = this;
	if( questionId && answerIndex > -1 )
	{
		$.ajax(
        {
            dataType: 'jsonp',
            url: "//play2.pulselive.com/cms/answerQuestion?questionId=" + questionId + "&option=" + answerIndex,
            data: {},
            complete: function( data )
            {
                if( data.success )
                {
                    that.addAnsweredQuestion( questionId );
                    return true;
                }
                return;
            },
            error: function()
           	{
           		that.$container.trigger( 'poll/answer', { success: false, questionId: questionId } );
           	}
        } );
	}
};

PULSE.CLIENT.Poll.Controller.prototype.addAnsweredQuestion = function( questionId )
{
	this.model.addAnsweredQuestion( questionId );
	this.answers.push( questionId );
	this.answers = _.uniq( this.answers );

	$.cookie( this.ANSWERS_COOKIE, this.answers.join(','), { path: that.cookiePath } );
    if( this.backwardsCompatible )
    {
        $.cookie( 'answered_' + questionId, 1, { path: this.cookiePath } );
    }

	this.$container.trigger( 'poll/answer', { success: true, questionId: questionId } );
};

if (!PULSE) 		{ var PULSE = {}; }
if (!PULSE.CLIENT) 	{ PULSE.CLIENT = {}; }

/**
 *	Generic controller for the pulse poll content
 * 	Requires the following common libraries:
 * 		* lib/common/poll/PollModel.js
 * 		* lib/common/poll/PollView.js
 * 		* lib/common/poll/PollController.js
 * 		* lib/common/NewJSONPTimer.js
 * 		* lib/common/Set.js
 * 		* lib/common/Swingometer.js
 * 		* lib/common/Cookie.js
 *
 *	Requires config
 * 	params is an optional parameter (see the poll controller for information on params)
 */
PULSE.CLIENT.PulsePoll = function( config, params )
{
	this.urlFactory	= PULSE.CLIENT.CRICKET.getUrlGenerator();
	var url = this.urlFactory.makeCustomerDataUrl( config.account + "/poll" );

	this.pollModel = new PULSE.CLIENT.PollModel( this );
	this.pollController = new PULSE.CLIENT.PollController( this.pollModel, url, 60000, params || {} );
	this.pollView = new PULSE.CLIENT.PollView( 
		this.pollController, 
		config.container, 		// the selector (be it a class or an id) of the container
		config.popupSelector, 	// the popup selector (must be a class so please omit the '.')
		config.cookieName, 		// the name under which the cookie is saved
		config.hideClass		// the class used to hide the poll (must be a class so please omit the '.')
	);
};
if ( !PULSE )                { var PULSE = {}; }
if ( !PULSE.CLIENT )         { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.Poll )     { PULSE.CLIENT.Poll = {}; }


PULSE.CLIENT.Poll.ListView = function( container, config, tournament )
{
    this.$container = $( container );
    this.config     = config;
    this.name         = config.name || 'poll';

    this.cookiePath = config.cookieOptions ? config.cookieOptions.path : undefined;

    this.USER_CLOSED_POLL_COOKIE = config.name + '_closed_by_user';
    this.closed_by_user = $.cookie( this.USER_CLOSED_POLL_COOKIE );

    this.backwardsCompatible = config.backwardsCompatible; // uses old style cookies for answers

    this.templates     = {
        questions: config.templates.questions,
        question:  config.templates.question,
        answers:   config.templates.answers,
        pulse:        config.templates.pulse
    };

    this.historyFocus = 0;

    this.$slider = this.$container.find('ul.contentSlider');
    this.$backBtn = this.$container.find('header .back');
    this.$closeBtn = this.$container.find('header .close');

    if( tournament && tournament.fullName )
    {
        this.$container.find('.pulseWhat .event').text( tournament.fullName );
    }
    else
    {
        this.$container.find('.pulseWhat .event').text( 'action' );
    }

    /**
     * $container is the wrapper for the template
     */
    this.views = {
        'question-list': {
            container: 'li.contentSlide[data-view="question-list"] .questionList'
        },
        'question': {
            container: 'li.contentSlide[data-view="question"] .questionContainer'
        },
        'answers': {
            // container: 'li.contentSlide[data-view="answers"] .answerContainer'
            container: 'li.contentSlide[data-view="question"] .questionContainer'
        },
        'history': {
            container: 'li.contentSlide[data-view="question"] .pulseHistory'
        },
        'whats-pulse': {
            container: 'li.contentSlide[data-view="question"] .pulseWhat'
        }
    };

    /**
     * The stack of views, to help navigating back and forth between the
     * different panels of the poll; each value is the name of a view
     * @type {Array<String>}
     */
    this.stack = [ 'question-list' ];

    this.controller = new PULSE.CLIENT.Poll.Controller( container, config );
    this.setSubscriptions();
    this.setEventListeners();
};

PULSE.CLIENT.Poll.ListView.prototype.setEventListeners = function()
{
    var that = this;

    this.$container.find( '.voting-history-button' ).on( 'click', function( e )
    {
        that.renderHistory();
        that.updateMiddleView( 'history' );
        that.slideTo( 'question' );
        e.preventDefault();
        e.stopPropagation();
    } );

    this.$container.find( '.whats-pulse-button' ).on( 'click', function( e )
    {
        that.updateMiddleView( 'whats-pulse' );
        that.slideTo( 'question' );
        e.preventDefault();
        e.stopPropagation();
    } );

    this.$backBtn.on( 'click', function( e )
    {
        that.back();
        e.preventDefault();
        e.stopPropagation();
    } );

    /*Closing functions*/
    //Button
    this.$closeBtn.on( 'click', function( e )
    {
        $.cookie( this.USER_CLOSED_POLL_COOKIE, 'yes', { path: this.cookiePath } );
        that.hide();
        e.preventDefault();
        e.stopPropagation();
    } );

    //When u click on the modal it close the sidebar
    that.$container.prev().on( 'click', function( e ){
        that.hide();
        e.preventDefault();
        e.stopPropagation();
    });

    /**
     * When the user clicks on the 'close' button, remember they have
     * done so, so as not to show the poll otherwise.
     */
    // this.$container.find( '.close' ).click( function( e )
    // {
    //     $.cookie( this.USER_CLOSED_POLL_COOKIE, 'yes', { path: this.cookiePath } );

    //     e.preventDefault();
    // } );

    /**
     * Whenever a question in a question list is clicked, render the next views
     * and slide to the next view (the question-with-options) view
     */
    $( this.views[ 'question-list' ].container ).on( 'click', 'a', function( e )
    {
        var qid = $(this).attr( 'data-question-id' );

        that.renderQuestion( qid );
        that.renderAnswers( qid );
        that.updateMiddleView( 'question' );

        that.currentQuestion = parseInt( qid, 10 );

        that.slideTo( 'question' );

        e.preventDefault();
        e.stopPropagation();
    } );

    /**
     * Whenever a question optino is clicked on, call the controller's
     * 'answerQuestion' function, which sends an ajax request for the vote
     */
    $( this.views[ 'question' ].container ).on( 'click', 'a', function( e )
    {
        var qid = $(this).attr( 'data-question-id' );
        var index = $(this).attr( 'data-option-index' );

        that.controller.answerQuestion( qid, index );

        e.preventDefault();
        e.stopPropagation();
    } );

    $( this.views[ 'history' ].container ).on( 'click', '.questionsList a', function( e )
    {
        var qid = parseInt( $(this).attr( 'data-question-id' ), 10 );
        if( !isNaN( qid ) )
        {
            that.historyFocus = qid;
            that.renderHistory();
        }

        e.stopPropagation();
        e.preventDefault();
    } );

    /**
     * When the user clicks on the 'X questions to answer',
     * take them back to the question list view
     */
    this.$container.on( 'click', '.nextSteps a', function( e )
    {
        that.slideTo( 'question-list' );
        e.preventDefault();
        e.stopPropagation();
    } );
};

PULSE.CLIENT.Poll.ListView.prototype.setSubscriptions = function()
{
    var that = this;

    /**
     * When new data comes in, update the current view
     */
    this.$container.on( 'poll/data', function( e, params )
    {
        if(!that.$container.hasClass('open')){
            that.update( _.last( that.stack ) );
        }
        // that.update( _.last( that.stack ) );
    } );

    /**
     * If there's a new popup question to be display,
     * show the poll
     */
    this.$container.on( 'poll/show', function( e, params )
    {
        if( $(window).width() >= 500 )
        {
            that.$container.addClass('open');
        }
    } );

    /**
     * If an answer was accepted/went through correctly,
     * slide to the answers breakdown view
     */
    this.$container.on( 'poll/answer', function( e, params )
    {
        if( params.success )
        {
            that.renderAnswers( that.currentQuestion );
        }
    } );
};

PULSE.CLIENT.Poll.ListView.prototype.refresh = function()
{
    this.update( _.last( this.stack ) );
};

PULSE.CLIENT.Poll.ListView.prototype.update = function( view )
{
    var that = this;
    switch( view )
    {
        case 'question':
            this.renderQuestion( this.currentQuestion );
            break;
        case 'answers':
            this.renderAnswers( this.currentQuestion );
            break;
        case 'history':
            this.renderHistory();
            break;
        case 'question-list':
            this.renderQuestions();
            break;
        default:
            this.renderQuestions();
            break;
    }
};

PULSE.CLIENT.Poll.ListView.prototype.renderQuestions = function()
{
    var model = this.controller.model.getQuestions( 'unanswered' );

    var $noData = this.$container.find('.contentSlide[data-view="question-list"] .empty');

    if( model.length )
    {
        PULSE.CLIENT.Template.publish(
            this.templates.questions,
            $( this.views[ 'question-list' ].container ),
            { questions: model }
        );
        $noData.hide();
        $( this.views[ 'question-list' ].container ).show();
    }
    else
    {
        $( this.views[ 'question-list' ].container ).hide();
        $noData.show();
    }
};

PULSE.CLIENT.Poll.ListView.prototype.renderQuestion = function( questionId )
{
    if( !questionId )
    {
        return;
    }

    var model = this.controller.model.getQuestionById( questionId );
    $( this.views[ 'question' ].container ).removeClass('result-slide');

    PULSE.CLIENT.Template.publish(
        this.templates.question,
        $( this.views[ 'question' ].container ),
        model
    );
};

PULSE.CLIENT.Poll.ListView.prototype.renderAnswers = function( questionId )
{
    var questionsLeft = this.controller.model.getQuestions( 'unanswered' );
    var $nextSteps = this.$container.find('.nextSteps');

    $nextSteps.find('.total').text( questionsLeft.length || 'No' );

    if( !questionId )
    {
        return;
    }

    // $( this.views[ 'answers' ].container ).parent().addClass('result-slide');
    this.renderQuestionAnswers( $( this.views[ 'answers' ].container ), questionId );
};

PULSE.CLIENT.Poll.ListView.prototype.renderHistory = function()
{
    var answered = this.controller.model.getQuestions( 'answered' );

    var $questions = $( this.views[ 'history' ].container ).find('.questionsList');
    var $answers = $( this.views[ 'history' ].container ).find('.answerContainer');
    var $noData = $( this.views[ 'history' ].container ).find('.empty-state');

    if( answered.length )
    {
        if( !this.historyFocus )
        {
            this.historyFocus = _.first( answered ).id;
        }

        PULSE.CLIENT.Template.publish(
            this.templates.questions,
            $questions.find('ul'),
            { questions: answered, active: this.historyFocus }
        );

        this.renderQuestionAnswers( $answers, this.historyFocus );

        $noData.hide();
        $questions.show();
        $answers.show();
    }
    else
    {
        $questions.hide();
        $answers.hide();
        $noData.show();
    }
};

PULSE.CLIENT.Poll.ListView.prototype.renderQuestionAnswers = function( $container, questionId )
{
    var answer_model = this.controller.model.getQuestionById( questionId );
    var that = this;

    PULSE.CLIENT.Template.publish(
        this.templates.answers,
        $container,
        answer_model,
        function(){
            $( that.views[ 'answers' ].container ).parent().addClass('result-slide');
            $bars = $container.find('.bar');
            window.getComputedStyle( $bars.get(0) ).getPropertyValue("width");
            for (var i = 0; i < answer_model.options.length; i++) {
                $bars.eq(i).css('width', answer_model.options[i].percentage);
            }
            // $( that.views[ 'answers' ].container ).parent().addClass('result-slide');
            // setTimeout(function(){
            //     $( that.views[ 'answers' ].container ).parent().addClass('result-slide');
            // }, 300)
        }
    );

    // console.log($container.find('.bar') );

};

PULSE.CLIENT.Poll.ListView.prototype.updateMiddleView = function( viewToShow )
{
    this.$container.find( this.views[ 'question' ].container ).toggle( 'question' === viewToShow );
    this.$container.find( this.views[ 'history' ].container ).toggle( 'history' === viewToShow );
    this.$container.find( this.views[ 'whats-pulse' ].container ).toggle( 'whats-pulse' === viewToShow );
};


PULSE.CLIENT.Poll.ListView.prototype.slideTo = function( view, callback )
{
    var that = this;

    // if no go-to view value is specified, return OR
    // if the $slider element has class animate (which means it's animating),
    // to prevent double-clicks, don't do anything and return
    if( typeof view === 'undefined' || this.$slider.hasClass('animate') )
    {
        return;
    }

    this.update( view );

    var $current = this.$container.find( '[data-view="' + _.last( this.stack ) + '"]' );
    var $target = this.$container.find( '[data-view="' + view + '"]' );

    var left = this.stack.length * 100;

    var $targetClone = $target.clone( true, true );

    this.$slider.addClass('animate');
    this.$slider.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");

    var endOfStack = false;
    if( view === 'question-list' )
    {
        endOfStack = true;
    }
    else
    {
        this.stack.push( view );
    }

    if( this.stack.length === 2 )
    {
        this.$backBtn.addClass('on');
    }
    else
    {
        this.$backBtn.removeClass('on');
    }

    $targetClone.insertAfter( $current );
    this.$slider.css( 'left', '-' + left + '%' ).bind( "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function( e )
    {
        // remove class with CSS3 transitions so CSS can be applied instantly
        that.$slider.removeClass('animate');

        // if it's the last element, after the animation's complete,
        // go back to the first element and remove the last element
        if( endOfStack )
        {
            // reset the stack to just the first element
            that.stack = [ 'question-list' ];

            // reset the position to the first element while NOT animating, so it's instant
            that.$slider.css('left', '0px');

            // remove the duplicate 1st element located at the end
            $targetClone.remove();
        }
        else
        {
            $target.remove();
        }

        if( _.isFunction( callback ) )
        {
            callback();
        }
    } );
};

PULSE.CLIENT.Poll.ListView.prototype.back = function( callback )
{
    var that = this;

    var currentView = this.stack.pop();
    var view = _.last( this.stack );
    var left = ( this.stack.length - 1 ) * 100;

    // beginning of the stack, hide the 'back' button
    if( !view || view === 'question-list' )
    {
        if( !view )
        {
            this.stack.push( 'question-list' );
        }
    }

    this.$backBtn.removeClass('on');

    // Refresh the question list to make sure answered questions are not rendered
    this.refresh();

    // add class with CSS3 transitions
    this.$slider.addClass('animate');
    this.$slider.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
    this.$slider.css('left', '-' + left + '%').bind( "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function( e )
    {
        // remove class with CSS3 transitions so CSS can be applied instantly
        that.$slider.removeClass('animate');

        if( _.isFunction( callback ) )
        {
            callback();
        }
    } );
};

PULSE.CLIENT.Poll.ListView.prototype.hide = function()
{
    var that = this;
    this.$container.prev().addClass('closing');
    this.$container.addClass('closing');
    this.$container.on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function(e)
        {
            that.$container.prev().removeClass('open closing');
            that.$container.removeClass('open closing');
            that.$container.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
        }
    );
};

if ( !PULSE )                   	{ var PULSE = {}; }
if ( !PULSE.CLIENT )            	{ PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    	{ PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.Rankings = function(container, config, widget) 
{

  this.$container = container;
  this.config = config;

  this.widget = (typeof widget === 'undefined' ? 'Table' : widget);

  this.type;

  this.rankingTypes = 
  [ 'TEST'
  , 'ODI'
  , 'T20I'
  ]

  this.templateHeaders = 
  { TEST: ['Rank', 'Team', 'Matches', 'Points', 'Rating']
  , ODI:  ['Rank', 'Team', 'Matches', 'Points', 'Rating']
  , T20I:  ['Rank', 'Team', 'Matches', 'Qfy Matches', 'Points', 'Rating']
  }

  this.template = 'table';

  this.model = new PULSE.CLIENT.CRICKET.RankingsModels();

  if ( this.setType() ) {

    this.model.getRankingsData();
  }
};


PULSE.CLIENT.CRICKET.Rankings.prototype.setType = function() 
{
 
  if (typeof this.config['data-match-type'] !== 'undefined') {

    var type = this.config['data-match-type'];    
  }
  else 
  {

    var url = window.location.href
      , type = url.substring(url.lastIndexOf('/') + 1, url.length);
  }

  type = type.toUpperCase();

  if (~ $.inArray(type, this.rankingTypes)) {

    this.type = type;
    this.setTabHeader();
    return true;
  }
};


PULSE.CLIENT.CRICKET.Rankings.prototype.render = function(details) 
{
 
  if (typeof details === 'undefined') {

    var model = this.model.getRankingsModel('men', true)
      , unrankedModel;

    if (this.type === 'T20I') {

      unrankedModel = this.model.getRankingsModel('men', false);
      unrankedModel = unrankedModel[ this.type ];
    }

    details =
    { model: model[ this.type ]
    , unrankedModel: unrankedModel
    , template : this.template
    , headings: this.templateHeaders[this.type]
    , type: this.type
    , widget: this.widget
    , selector: 'section.standings' 
    }

  }

  PULSE.CLIENT.Template.publish(
    details.template,
    details.selector,
    details
  );
};

PULSE.CLIENT.CRICKET.Rankings.prototype.setTabHeader = function()
{

  switch (this.type) {

    case 'TEST':
      $('.secondaryNav ul li').eq(0).find('a').addClass('active')
                                              .append('<span></span>');
      break;

    case 'ODI':
      $('.secondaryNav ul li').eq(1).find('a').addClass('active')
                                              .append('<span></span>');
      break;

    case 'T20I':
      $('.secondaryNav ul li').eq(2).find('a').addClass('active')
                                              .append('<span></span>');
      break;
  }
};
if ( !PULSE )                   	{ var PULSE = {}; }
if ( !PULSE.CLIENT )            	{ PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    	{ PULSE.CLIENT.CRICKET = {}; }

/**
 * Requires a div.pointsTable wrapper in which to drop the table template
 * Please adjust PULSE.CLIENT.CRICKET.Standings.prototype.updateTable otherwise
 */
PULSE.CLIENT.CRICKET.Standings = function ( container, tournament, groups, options )
{
	this.$container = $( container );
	this.tournament = tournament;
	this.groups 	= groups;
	this.options 	= options || {};
	this.hide 		= this.options.hideIfOutsideOfStage;
	this.widgetType = this.options.widgetType || "full";
	this.callback 	= this.options.callback;
    this.groupIndex = this.options.groupIndex;
    this.active 	= this.options.active;

	this.components = {};

	if( this.options.templates )
	{
		this.templates = this.options.templates;
	}
	else
	{
		this.templates = {
			full: "standings-table-full",
			groups: "standings-table-groups",
			abridged: "standings-table-abridged"
		};
	}

	//this.tournament.getMatchSchedule();
	this.tournament.getGroupStandings( options.start );

	var that = this;
	$( 'body' ).on( 'standings/update', function( e, params ) {
		if( params.success )
		{
			that.hasStandings = true;
			that.updateTable();
		}
	} );
	$( 'body' ).on( 'schedule/update', function( e, params ) {
		if( params.success )
		{
			that.updateWidgetState();
		}
	} );
};

PULSE.CLIENT.CRICKET.Standings.prototype.createTweetButton = function( $link )
{
    var TC = PULSE.CLIENT.TwitterController;
    var that = this;
    var hashtag = this.tournament.tweetUser ? this.tournament.tweetUser.hash : 'IPL';

    $link.unbind( 'click' ).bind( 'click', function()
    {
        var intent = "tweet";
        var params = {
            text: that.getTweetMessage( hashtag ),
            url: encodeURI("https://www.iplt20.com")
        };
        TC.tweetEvent(intent, params);
    });
};

/**
 * Get tweet message - in format #pepsiIPL Points table after Mxx - ABC 1, DEF 2 - http://statsurl
 *
 * @param hashtag the hashtag to apply
 * @returns {string} in a position to have the direct access url appended to it.
 */
PULSE.CLIENT.CRICKET.Standings.prototype.getTweetMessage = function( hashtag )
{
    //tweet the standings table
    var standings = this.tournament.getStandingsModel( this.groupIndex ).standings;
    var matchNumber = 0;
    var pointsString = "";
    for (var i = 0; i < standings.length; i++)
    { //don't encode ourselves here.
        pointsString += '#' + standings[i].team.abbreviation + " " +standings[i].points;
        matchNumber += +standings[i].played; //convert to int
        if(i != standings.length - 1) pointsString += ", ";
    }
    var message = "#" + hashtag + " Points table after M" + (matchNumber / 2) + " - ";
    message += pointsString + " -"; //for URL splitting
    return message;
};

/**
 * Updates and publishes a standings table in the given container
 *     - If groups from a stage are given then these groups are published
 *     - If stages are not present in metadata a group index can be supplied in
 *     the options object.
 */
PULSE.CLIENT.CRICKET.Standings.prototype.updateTable = function()
{
    var that = this;

    if( !this.active || this.stopUpdating || !this.hasStandings )
    {
    	return;
    }

	var model = { groups: [] };

    if( this.groups && this.groups.length > 0 )
    {
    	for( var i = 0, iLimit = this.groups.length; i < iLimit; i++ )
    	{
    		var groupName = this.groups[i];

            groupName = groupName.replace('Pool', 'Group');

    		var groupModel = this.tournament.getStandingsModelByGroupName( groupName );

    		model.groups.push( groupModel );
    	}
    }
    else if( typeof this.groupIndex != undefined )
    {
        var groupModel = this.tournament.getStandingsModel( this.groupIndex );

        model.groups.push( groupModel )
    }

	PULSE.CLIENT.Template.publish(
		this.templates[ this.widgetType ],
		this.$container,
		model,
		function() {
			if( that.callback )
			{
				that.callback();
			}
		}
	);
};

PULSE.CLIENT.CRICKET.Standings.prototype.activate = function()
{
	this.active = true;
	this.stopUpdating = false;
};
PULSE.CLIENT.CRICKET.Standings.prototype.deactivate = function()
{
	this.active = false;
	this.stopUpdating = true;
};

// Hide widget if no longer needed (i.e., all group matches are complete)
PULSE.CLIENT.CRICKET.Standings.prototype.updateWidgetState = function()
{
	if( this.tournament.isInPlayoffStage() && this.hide )
	{
		this.stopUpdating = true;
		this.$container.hide();
	}
};


if ( !PULSE )                   	{ var PULSE = {}; }
if ( !PULSE.CLIENT )            	{ PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    	{ PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.TwitterBox = function ( container, tournament, defaultText, characterLimit )
{
	this.$container 	= $( container );
	this.tournament 	= tournament;
	this.characterLimit	= characterLimit || 140;

	// if defaultText exists, it's assumed a feed's not needed to update the box text
	if( !defaultText && this.tournament )
	{
		var defaultText = this.tournament.hashTags || "";
	}

	this.defaultText = defaultText;
	this.update( defaultText );

	this.setListeners();
};

PULSE.CLIENT.CRICKET.TwitterBox.prototype.setListeners = function()
{
	var that = this;
	this.$container.find('textarea').live( 'keyup', function( e ) 
	{
		var total = $(this).val().length;

		that.$container.find( '.characterCount' ).html( that.characterLimit - total );

		if( that.characterLimit - total < 0 )
		{
			that.$container.find( '.characterCount' ).addClass('red');
		}
		else
		{
			that.$container.find( '.characterCount' ).removeClass('red');
		}
    } );

	this.$container.find('a').live( 'click', function( e ) 
	{
		e.preventDefault();
		
		var tweetUser  = that.tournament.tweetUser,
			iplAccount = tweetUser.account,
			iplHashTag = tweetUser.hash;

		var params = { text: that.$container.find('textarea').val() };
		
		PULSE.CLIENT.TwitterController.tweetEvent('tweet', params );
	} );
};

PULSE.CLIENT.CRICKET.TwitterBox.prototype.update = function( defaultText )
{
	if( defaultText )
	{
		this.$container.find( 'textarea' ).val( defaultText );
		this.$container.find( '.characterCount' ).html( this.characterLimit - defaultText.length );
	}
	else
	{
		var existingText = this.$container.find( 'textarea' ).val() || "";
		this.$container.find( '.characterCount' ).html( this.characterLimit - existingText.length );
	}
};

if ( !PULSE )           { var PULSE = {}; }
if ( !PULSE.CLIENT ) 	{ PULSE.CLIENT = {}; }

/**
 *	Works off a twitter feed and displays the tweets for it
 * 	Dependent on the Twitter module (PULSE.CLIENT.Twitter from Twitter.js)
 */
PULSE.CLIENT.TwitterFeed = function ( container, config, active )
{
	config = config || {};

	this.$container = $( container );
	this.config 	= config;
	this.account 	= config.account;
	this.maxTweets 	= config.maxTweets;
	this.interval 	= config.interval;
	this.twitter 	= PULSE.CLIENT.getTwitterInstance();
	this.callback	= config.callback;
	this.active 	= active;

	this.templates = {
		latestTweets: config.template || "tweet-list"
	};

	this.setSubscriptions();

	if( this.active )
	{
		this.getData();
	}
};

PULSE.CLIENT.TwitterFeed.prototype.setSubscriptions = function()
{
	var that = this;
	$('body').on( 'twitter/list', function( e, params )
    {
		// check if the received notification's for the right account
		if( params.name === that.account )
		{
			if( params.success )
			{
				if( that.active )
				{
					// only update active elements
					that.update();
				}
	       	}
	       	else
	       	{
	       		// do something when no data's retrieved
	       	}
	    }
    } );
};

PULSE.CLIENT.TwitterFeed.prototype.getData = function( start )
{
	this.twitter.getList( this.account, {
		fileName: 	this.config.fileName,
		start: 		this.config.start || start,
		interval: 	this.config.interval,
		targets: 	this.config.targets
	} );
};

PULSE.CLIENT.TwitterFeed.prototype.update = function()
{
	var that 	= this,
		model 	= this.twitter.getTweetsListModel( this.account, this.maxTweets );

	PULSE.CLIENT.Template.publish(
		this.templates.latestTweets,
		this.$container.find('#tweets'),
		model,
		function()
        {
			if( that.callback )
			{
				that.callback();
			}
			if( that.timeRefresh )
			{
				that.stopRefresh();
			}
		}
	);

	this.timeRefresh = setInterval( function()
    {
		var model = that.twitter.getTweetsListModel( that.account, that.maxTweets );
		for( var i = 0, iLimit = model.tweets.length; i < iLimit; i++ )
		{
			var tweet = model.tweets[i],
				timeString = tweet.timestamp;

			that.$container.find( '.time' ).eq( i )
        			.empty()
        			.append( $('<i class="icon">').text('') )
        			.append( tweet.timestamp );
		}
	}, 60000 );
};

PULSE.CLIENT.TwitterFeed.prototype.stopRefresh = function()
{
	clearInterval( this.timeRefresh );
};

PULSE.CLIENT.TwitterFeed.prototype.activate = function()
{
	this.active = true;
	this.getData( true );
	this.$container.show();
};

PULSE.CLIENT.TwitterFeed.prototype.deactivate = function()
{
	this.active = false;
	this.stopRefresh();
	this.$container.hide();
};
if (!PULSE){ var PULSE = {}; }
if (!PULSE.CLIENT){ PULSE.CLIENT = {}; }
if (!PULSE.CLIENT.CRICKET){ PULSE.CLIENT.CRICKET = {}; }

PULSE.CLIENT.CRICKET.WidgetController = function() {
	that = this;

	// Get tournament specifics, like data feeds, naming conventions etc.
	this.metadata = PULSE.CLIENT.CRICKET.Metadata;
	this.urlGenerator = PULSE.CLIENT.CRICKET.getUrlGenerator();
	this.tournaments = {};
	this.widgets = {};

	// Create all tournaments supported
	for (var i = 0, iLimit = this.metadata.length; i < iLimit; i++) {
		var metadata = this.metadata[i];
		this.tournaments[metadata.tournamentName] = new PULSE.CLIENT.CRICKET.Tournament(metadata);
	}

	window.tournaments = this.tournaments;
};

PULSE.CLIENT.CRICKET.WidgetController.prototype.init = function( type, constr )
{
	var _self = this;
    $( '[data-widget="' + type + '"]' ).each( function( i, widget ) {
    	try {
    		var config = {};
    		$.each( widget.attributes, function( i, attr ) {
    			var name = attr.name;
    			var value = attr.value;

    			config[ name ] = value;
    		} );

    		var tournament = that.getTournamentByName( config[ 'data-season' ] );
            if( constr ) {
                _self.widgets[ type ] = _self.widgets[ type ] || [];
                _self.widgets[ type ].push( new constr( $( widget ), config, tournament ) );
            }
    	}
    	catch( err ) {
    		// if any widget fails
            console.warn(err);
        }
    } );

	/**
	 * since there can only be one instance of the Data Manager on the page,
	 * grab the Data Manager and start all feeds
	 */
	this.dm = PULSE.CLIENT.getDataManager();
	this.dm.startAll();
};

PULSE.CLIENT.CRICKET.WidgetController.prototype.currentTournament = function() {
	if (this.metadata.length) {
		return this.tournaments[this.metadata[0].tournamentName];
	}
};

PULSE.CLIENT.CRICKET.WidgetController.prototype.getTournamentByName = function( tournamentName )
{
	if( this.tournaments[ tournamentName ] ) {
		return this.tournaments[ tournamentName ];
	}
	else if( tournamentName ) {
		return new PULSE.CLIENT.CRICKET.Tournament( { tournamentName: tournamentName } );
	}
};

	window.WidgetController = new PULSE.CLIENT.CRICKET.WidgetController();

/*globals PULSE, PULSE.app, PULSE.core*/

(function ( app, core ) {

    /**
     *
     * @param {Object} element html element that defines the event actions and context
     * @param {String} [action] string representing the action triggered on the content e.g. 'VIEW'
     * @param {String} [contentType] string representing the content type that the action occured on e.g. 'TEXT'
     * @param {String} [contentId] ID of the content object that the action occured on
     * @constructor
     */
    app.contentTracker = function ( element, action, contentType, contentId ) {

        var _self = this;
        _self.event = {
            contentType: contentType || element.getAttribute('data-tracker-type'),
            contentId: contentId || element.getAttribute('data-tracker-id'),
            action: action || element.getAttribute('data-tracker-action')
        };

        var checkErrors = function () {
            var error = "";

            if ( !_self.event.contentType ) {
                error += "The content event must include a contentType or 'data-tracker-type' on the element/n";
            }
            if ( !_self.event.contentId ) {
                error += "The content event must include a contentId or 'data-tracker-id' on the element/n";
            }
            if ( !_self.event.action ) {
                error += "The content event must include an action or 'data-tracker-action' on the element/n";
            }
            return error;
        };

        var errors = checkErrors();

        if ( errors.length > 0 ) {
            return errors;
        } else {
            var requestConfig = {
                url: app.environment.trackingAPI,
                headers: [ { label: "account", value: app.account } ],
                data: _self.event,
                method: "POST",
                callback: _self.eventSent,
                forceCallback: true,
                target: this
            };

            core.data.manager.add(requestConfig);
        }
    };

    app.contentTracker.prototype.eventSent = function ( data, config ) {

        var _self = this;
        // use data or config from data.manager response
    };

    /**
     * create the event tracker instances
     */
    var widgets = document.querySelectorAll('[data-tracker-action]');
    for ( x = 0; x < widgets.length; x++ ) {
        new app.contentTracker( widgets[ x ] );
    }

})(PULSE.app, PULSE.core);

/*globals PULSE, PULSE.app, PULSE.ui */

( function( core, common ) {

    common.filterOptions = function( filters, references ){

        var _self = this;

        _self.filters = filters;

        _self.updateReferences( references );


    };

    common.filterOptions.prototype.addRefsToFilters = function(){

        var _self = this;

        var refString = "";

        if( typeof _self.references === 'string' ){
            refString += _self.references;
        }
        else{
            for ( var key in _self.references ) {
                // skip loop if the property is from prototype
                if (!_self.references.hasOwnProperty(key)) continue;
                if( refString.length > 0 ){
                    refString += ',';
                }
                refString += key + ':' + _self.references[key];
            }
        }

        _self.filters.references = refString;
    };

    common.filterOptions.prototype.updateFilters = function( newFilters ){

        var _self = this;

        _self.filters = core.object.extend( _self.filters, newFilters );

    };

    common.filterOptions.prototype.updateReferences = function( newReferences ){

        var _self = this;

        if( typeof newReferences !== 'undefined' ){ 
            if( !_self.references || typeof _self.references === 'string' ){
                _self.references = newReferences;
            }
            else{
                _self.references = core.object.extend( _self.references, newReferences );
            }

            _self.addRefsToFilters();
        }
    };

    common.filterOptions.prototype.removeReference = function( reference ){

        var _self = this;

        delete _self.references[reference];

        _self.addRefsToFilters();

    };

    common.filterOptions.prototype.get = function( ){
        var _self = this;
        return _self.filters;
    };

} )( PULSE.core, PULSE.app.common );

/*globals PULSE, PULSE.app, PULSE>I18N */

( function( common, core, templates ) {

    /**
     * create an interface for the use of the scroll loader
     */
    common.ScrollLoaderDelegate = function() {

    };

    /**
     * indicate to the delegate object that the scroller has reached a point
     * where it has been activated and the delegate should populate the
     * container with new data
     */
    common.ScrollLoaderDelegate.prototype.didRequestLoad = function() {

    };




    /**
     * @namespace common.ScrollLoader.private
     */

    /**
     * draw the loader from the template, ensuring translation is used
     *
     * @param {common.ScrollLoader} _self contextual reference to the object that is calling the function
     */
    var drawLoader = function( _self ) {

        var loader = '<div class="loader-container"></div>',
            loadingIndicator = '<div class="loader js-loader"></div>';

        //append to container and keep a reference
        _self.element = core.dom.appendDomString( _self.showMoreContainer || _self.container, loader );
        _self.loadingIndicator = core.dom.appendDomString( _self.element, loadingIndicator );

    };

    var onScroll = function( event ) {
        var _self = this;
        if ( !_self.loading && _self.element ) {
            _self.show();
            var top = _self.element.getBoundingClientRect().top;
            if ( ( window.innerHeight - top ) >= _self.limit && (_self.element.offsetHeight !== 0 || _self.ignoreOffsetHeight)) {
                _self.show();
                if ( _self.delegate ) {
                    _self.loading = true;
                    _self.delegate.didRequestLoad();
                }
            }
            else {
                _self.hide();
            }
        }
    };

    var onShowMoreClick = function() {
        var _self = this;

        core.style.addClass( _self.showMoreButton, 'u-hide' );

        _self.newLoader();

        _self.loading = true;
        _self.delegate.didRequestLoad();
    };

    /**
     * set the scroller listener for the loader
     *
     * @param {common.ScrollLoader} _self contextual reference to the object that is calling the function
     */
    var setScrollListeners = function( _self ) {
        if (_self.delegate.config && _self.delegate.config.scrollBoundary) {
            var elem = typeof _self.delegate.config.scrollBoundary === 'string' ? document.querySelector(_self.delegate.config.scrollBoundary) : _self.delegate.config.scrollBoundary;
            elem.addEventListener( 'scroll', onScroll.bind( _self ) );
        } else {
            document.addEventListener( 'scroll', onScroll.bind( _self ) );
        }
        _self.scrollListenersSet = true;
    };

    var removeListeners = function( _self ) {
        if (_self.delegate.config && _self.delegate.config.scrollBoundary) {
            var elem = typeof _self.delegate.config.scrollBoundary === 'string' ? document.querySelector(_self.delegate.config.scrollBoundary) : _self.delegate.config.scrollBoundary;
            elem.removeEventListener( 'scroll', onScroll.bind( _self ) );
        } else {
            document.removeEventListener( 'scroll', onScroll.bind( _self ) );
        }
        _self.scrollListenersSet = false;
    };


    /**
     * create a scroll loader, for requesting more content when the page scroll
     * reaches this point the scroller will append itself to the bottom of
     * the list of content provided as container
     *
     * @param {HTMLElement} container
     * @param {common.ScrollLoaderDelegate} delegate
     * @param {boolean} ignoreOffsetHeight Whether to ignore the offset height or not.
     * @param {boolean} showMore Whether a show more button should be shown before initiating the infinity scroll.
     */
    common.ScrollLoader = function( container, delegate, ignoreOffsetHeight, showMore ) {
        var _self = this;

        _self.delegate = delegate;
        _self.container = container;
        _self.ignoreOffsetHeight = ignoreOffsetHeight;
        _self.loading = false;
        _self.element = delegate.widget.querySelector( '.js-loader' );
        _self.hideShowLoader = typeof _self.element !== 'undefined';
        // this property defines how far above the bottom of the screen the
        // loading element must rise in order to trigger a load request
        _self.limit = 0;
        _self.showMore = showMore;
        _self.scrollListenersSet = false;

        if (showMore && delegate.widget) {
            _self.showMoreContainer = delegate.widget.querySelector('.js-show-more');
            _self.showMoreButton = delegate.widget.querySelector('.js-show-more-button');
            core.style.addClass( _self.showMoreContainer, 'is-active' );

            _self.showMoreButton.addEventListener( 'click', onShowMoreClick.bind( _self ));
        } else {
            _self.newLoader();
            setScrollListeners( _self );
        }

    };

    common.ScrollLoader.prototype.enable = function() {
        var _self = this;
        _self.loading = false;
        setScrollListeners( _self );
    };

    common.ScrollLoader.prototype.disable = function() {
        var _self = this;
        _self.loading = true;
        removeListeners( _self );
    };

    /**
     * Reset the loader; will re-add the tracker on the page
     */
    common.ScrollLoader.prototype.reset = function() {
        var _self = this;

        _self.loading = false;

        if( _self.hideShowLoader && _self.element ) {
            _self.hide();
        }
        else {
            _self.removeLoader();
        }
        removeListeners( _self );

        if (_self.showMore) {
            core.style.removeClass( _self.showMoreButton, 'u-hide' );
        } else {
            _self.newLoader();
            setScrollListeners( _self );
        }
    };

    /**
     * public method that can be used to initialte a re-append
     */

    common.ScrollLoader.prototype.contentLoaded = function(allContentLoaded) {
        var _self = this;

        _self.loading = false;

        if ( _self.element ) {
            _self.hide();
        }

        if (!_self.scrollListenersSet) {
            setScrollListeners(_self);
        }
        if ( allContentLoaded ) {
            _self.disable();
        }
    };

    /**
     * remove the loader
     *
     */
    common.ScrollLoader.prototype.removeLoader = function() {
        var _self = this;

        if ( _self.element && _self.element.parentNode ) {
            _self.element.parentNode.removeChild( _self.element );
        }
        _self.element = false;
        _self.hideShowMore();
    };

    /**
     * make the loader visible
     *
     */
    common.ScrollLoader.prototype.show = function() {
        var _self = this;
        _self.element.style.display = "block";
        if (_self.loadingIndicator) {
            _self.loadingIndicator.style.display = "block";
        }
        core.style.removeClass( _self.element, 'u-hide' );
    };

    /**
     * hide the loader
     *
     */
    common.ScrollLoader.prototype.hide = function() {
        var _self = this;
        if (_self.loadingIndicator) {
            _self.loadingIndicator.style.display = "none";
        }
        core.style.addClass( _self.element, 'u-hide' );
    };

    /**
     * hide the show more button
     *
     */
    common.ScrollLoader.prototype.hideShowMore = function() {
        var _self = this;
        if( _self.showMoreButton ) {
            core.style.addClass( _self.showMoreButton, 'u-hide' );
        }
    };

    common.ScrollLoader.prototype.newLoader = function() {
        var _self = this;

        if ( !_self.element ) {
            drawLoader( _self );
        }
    };

    /**
     * delegate will call this on the scroll loader when it has finished
     * loading data and adding this data to the view.
     */
    common.ScrollLoader.prototype.completedDataLoad = function() {
        var _self = this;

        _self.loading = false;
        _self.removeLoader();
    };

} )( PULSE.app.common, PULSE.core, PULSE.app.templates );

if ( !PULSE )                   { var PULSE = {}; }
if ( !PULSE.CLIENT )            { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    { PULSE.CLIENT.CRICKET = {}; }
if( !PULSE.CLIENT.CRICKET.IPL2014 ) { PULSE.CLIENT.CRICKET.IPL2014 = {}; }

PULSE.CLIENT.CRICKET.IPL2014.EMERGING_PLAYERS = [
    "Baba Aparajith",
    "Matt Henry",
    "Ronit More",
    "Pawan Negi",
    "Ishwar Pandey",
    "Vijay Shankar",
    "Mohit Sharma",
    "Quinton de Kock",
    "Siddarth Kaul",
    "Milind Kumar",
    "Jimmy Neesham",
    "Wayne Parnell",
    "HS Sharath",
    "Rahul Shukla",
    "Jaidev Unadkat",
    "Jayant Yadav",
    "Rishi Dhawan",
    "Gurkeerat Singh",
    "Beuran Hendricks",
    "Glenn Maxwell",
    "David Miller",
    "Akshar Patel",
    "Sandeep Sharma",
    "Shivam Sharma",
    "Shardul Thakur",
    "Manan Vohra",
    "Pat Cummins",
    "Kuldeep Yadav",
    "Chris Lynn",
    "Sayan Mondal",
    "Veer Pratap Singh",
    "Andre Russell",
    "Suryakumar Yadav",
    "Jasprit Bumrah",
    "Marchant de Lange",
    "Shreyas Gopal",
    "Josh Hazlewood",
    "Pawan Suyal",
    "Apporv Wankhade",
    "A Mishra",
    "Ankit Sharma",
    "Ankush Bains",
    "Unmukt Chand",
    "Kevon Cooper",
    "James Faulkner",
    "Deepak Hooda",
    "Karun Nair",
    "Kane Richardson",
    "Sanju Samson",
    "Rahul Tewatia",
    "Varun Aaron",
    "Abu Nechim",
    "Yuzvendra Chahal",
    "Harshal Patel",
    "Sandeep Warrier",
    "Vijay Zol",
    "Ashish Reddy",
    "Ricky Bhui",
    "Jason Holder",
    "Manpreet Juneja",
    "Chama Milind",
    "Parveez Rasool",
    "Amit Paunikar",
    "Lokesh Rahul"
];
if ( !PULSE )                   { var PULSE = {}; }
if ( !PULSE.CLIENT )            { PULSE.CLIENT = {}; }
if ( !PULSE.CLIENT.CRICKET )    { PULSE.CLIENT.CRICKET = {}; }
if( !PULSE.CLIENT.CRICKET.IPL2015 ) { PULSE.CLIENT.CRICKET.IPL2015 = {}; }

PULSE.CLIENT.CRICKET.IPL2015.EMERGING_PLAYERS = [
    "Ankush Bains",
    "Baba Aparajith",
    "Ishwar Pandey",
    "Matt Henry",
    "Pawan Negi",
    "Ronit More",
    "Pratyush Singh",
    "Gurinder Sandhu",
    "Jayant Yadav",
    "KK Jiyas",
    "Markus Stoinis",
    "Srikar Bharat",
    "Quinton De Kock",
    "Shreyas Iyer",
    "Travis Head",
    "Axar Patel",
    "Beuran Hendricks",
    "Gurkeerat Mann Singh",
    "Manan Vohra",
    "Nikhil Naik",
    "Rishi Dhawan",
    "Sandeep Sharma",
    "Shardul Thakur",
    "Shivam Sharma",
    "Aditya Garhwal",
    "KC Cariappa",
    "Kuldeep Yadav",
    "Pat Cummins",
    "Suryakumar Yadav",
    "Vaibhav Rawal",
    "Veer Pratap Singh",
    "Abhimanyu Mithun",
    "Jasprit Bumrah",
    "Hardik Pandya",
    "Jagadeesha Suchitch",
    "Josh Hazlewood",
    "Marchant de Lange",
    "Nitish Rana",
    "Pawan Suyal",
    "Shreyas Gopal",
    "Siddhesh Lad",
    "Unmukt Chand",
    "Ankit Sharma",
    "Barinder Saran",
    "Deepak Hooda",
    "Karun Nair",
    "Rahul Tewatia",
    "Sanju Samson",
    "Sagar Trivedi",
    "Adam Milne",
    "Harshal Patel",
    "Nic Maddinson",
    "Rilee Rossouw",
    "Sandeep Warrier",
    "Sarfaraz Khan",
    "Sean Abbott",
    "Shishir Bhavane",
    "Varun Aaron",
    "Vijay Zol",
    "Yuzvendra Chahal",
    "Ashish Reddy",
    "Chama Milind",
    "Hanuma Vihari",
    "Lokesh Rahul",
    "Ricky Bhui",
    "Siddarth Kaul"
];
/*globals PULSE, PULSE.core */

(function( app, common ){
    "use strict";

    app.playerImage = function( element, config ) {

        var _self = this;

        _self.element = element;
        _self.playerId = _self.element.getAttribute( 'data-player' );
        _self.imageSize = _self.element.getAttribute( 'data-size' ) || '480x480';
        _self.imgExtension = _self.element.getAttribute( 'data-extension' );
        _self.matchType = _self.element.getAttribute( 'data-match-type' );

        common.image.setPlayerImageLoader( _self.playerId, _self.imageSize, _self.element, _self.imgExtension, _self.matchType );
    };

    app.setPlayerImages = function( container ) {
        if( container ) {
            var widgets = container.querySelectorAll( '[data-widget="player-image"]' );
            for ( var i = 0; i < widgets.length; i++ ) {
                new app.playerImage( widgets[ i ], {} );
            }
        }
    };

    app.setPlayerImages( document );


}( PULSE.app, PULSE.app.common ));

/*globals PULSE, PULSE.app, PULSE.app.common */

( function( common ) {

    // pass in the 'created_time' string returned from Facebook
    // stamp arrives formatted as 2016-10-03T20:00:01+0000
    var parsePostedDate = function(dateString) {
        // by splitting the date string it'll also work for Safari http://stackoverflow.com/a/6427318/1486020
        var a = dateString.split(/[^0-9]/);
        var date = new Date (a[0], a[1]-1, a[2], a[3], a[4], a[5]);
        return date;
    };

    var getUserAccountUrl = function(id) {
        return "https://www.facebook.com/" + id;
    };

    var getPhotoUrl = function(attachments) {
        if (!attachments || attachments.data.length === 0) {
            return null;
        }

        var photoObject = attachments.data[0];

        if (photoObject.subattachments) {
            // post is an album - return url of first image
            return photoObject.subattachments.data[0].media.image.src;
        }

        return photoObject.media.image.src;

    };

    var getAvatar = function(post) {
        if (post.from && post.from.picture) {
            return post.from.picture.data.url;
        }
        return;
    };

    /**
     * Model-maker for Canary-produced Instagram data
     * @constructor
     */
    common.Facebook = function() {

        var _self = this;

    };

    common.Facebook.prototype.getFacebookModel = function(post) {

        var _self = this, model,
            userAccountLink = getUserAccountUrl( post.from.id ),
            postDate = parsePostedDate( post.created_time),
            sinceString = common.getSinceString( postDate ),
            photo = '';

        if (post.type === 'photo') {
            photo = post.picture;
        }

        model = {
            timestamp: sinceString,
            time: common.getTime(postDate),
            id: post.id,
            text: post.message,
            link: post.permalink_url,
            photo: getPhotoUrl(post.attachments),
            feedType: 'facebook',
            user: {
                id: post.from.id,
                name: post.from.name,
                link: userAccountLink,
                avatarUrl: getAvatar(post)
            }
        };

        return model;

    };

} )( PULSE.app.common );

/*globals PULSE, PULSE.app, PULSE.app.common */

( function( common ) {

    // pass in the 'created_time' string returned from Instagram
    // stamp arrives formatted as Fri Apr 29 2016 13:59:11 GMT+0100 (BST)
    var parsePostedDate = function(timestamp) {
        var date = new Date(parseInt(timestamp) * 1000);
        return date;
    };

    var getUserAccountUrl = function(screenName) {
        return "https://www.instagram.com/" + screenName;
    };

    /**
     * Model-maker for Canary-produced Instagram data
     * @constructor
     */
    common.Instagram = function() {

        var _self = this;

    };

    common.Instagram.prototype.getInstagramModel = function(post) {

        var _self = this, model,
            userAccountLink = getUserAccountUrl( post.user.username ),
            postDate = parsePostedDate( post.created_time),
            sinceString = common.getSinceString( postDate ),
            photo = '';

        if (post.type === 'image' || post.type === 'video') {
            photo = post.images.low_resolution.url; // 320x320
        }

        model = {
            timestamp: sinceString,
            time: common.getTime(postDate),
            id: post.id,
            text: post.caption ? post.caption.text : "",
            link: post.link,
            photo: photo,
            // extended_media: extended_media,
            feedType: 'instagram',
            user: {
                id: post.user.id,
                name: post.user.full_name,
                account: post.user.username,
                link: userAccountLink,
                avatarUrl: post.user.profile_picture
            }
        };

        return model;

    };

} )( PULSE.app.common );

/*globals PULSE, PULSE.app, PULSE.common, PULSE.core */

( function( app, common, core ) {

    /**
     * @constructor
     */
    common.SocialFeed = function (config) {

        var _self = this;

        _self.config = setDefaultSettings(config || {});

    	/**
         * Stores feed list data, with the feed name as key and
         * the array of posts as the stored value
         * @dict
         */
        _self.listData = {};

        /**
         * The instance of the data manager
         * @type {Object}
         */
        _self.dm = PULSE.core.data.manager;

        createSocialPlatformInstances(_self);

    };

    common.SocialFeed.prototype.fetchFeed = function(settings) {

        if (!settings.feedName) {
            console.warn('Please provide a feed name.');
            return;
        }


        var _self = this,
            options = {
                url: _self.config.feedUrl,
                callback: function(data) { fetchFeedCallback(_self, data, settings.feedName); },
                method: "GET",
                forceCallback: typeof settings.forceCallback === 'undefined' ? true : settings.forceCallback,
                target: _self,
                interval: _self.config.interval || null
            };

        _self.listData[settings.feedName] = {
            successCallback: settings.successCallback,
            errorCallback: settings.errorCallback,
            render: settings.render,
            start: settings.start || false,
            target: settings.target
        };

        if (app.environment.label === 'local') {
            fetchFeedCallback(_self, MOCK_DATA.socialFeed, settings.feedName);
        } else {
            /**
             * keep a reference to the subscriber returned by the manager
             */
            _self.subscriber = _self.dm.add(options);
        }

    };

    common.SocialFeed.prototype.deactivate = function() {
        if( this.subscriber ) {
            this.subscriber.stop();
        }
    };

    common.SocialFeed.prototype.activate = function() {
        if( this.subscriber ) {
            this.subscriber.start();
        }
    };

    common.SocialFeed.prototype.buildFeedItems = function(feedName) {

        var _self = this,
            list = _self.listData[feedName],
            feed = list.data;

        for (var i = 0; i < feed.length; i++) {
            switch (feed[i].network) {
                case "TWITTER":
                    var tweet = _self.twitter.getTweetModel( feed[i].data );
                    list.models.push(tweet);
                    break;
                case "INSTAGRAM":
                    var post = _self.instagram.getInstagramModel( feed[i].data );
                    list.models.push(post);
                    break;
                case "FACEBOOK":
                    var post = _self.facebook.getFacebookModel( feed[i].data );
                    list.models.push(post);
                    break;
            }
        }
    };

    common.SocialFeed.prototype.renderFeed = function(feedName) {

        var _self = this,
            list = _self.listData[feedName],
            feed = list.models,
            rendered;

        rendered = list.render(feed);

        if (list.target) {
            list.target.innerHTML = rendered;
        }

        return rendered;
    };

    var setDefaultSettings = function(config) {

        var defaults = {
            feedUrl: config.feedUrl || common.createCanaryStreamPath(config)
        };

        config = core.object.extend(defaults, config);

        return config;

    };

    var createSocialPlatformInstances = function(_self) {

        _self.twitter = new common.Twitter();
        _self.instagram = new common.Instagram();
        _self.facebook = new common.Facebook();

    };

    var fetchFeedCallback = function(_self, data, feedName) {

        var list = _self.listData[feedName];

        if (typeof data === 'object') {
            list.data = data.content;
            list.models = [];

            if (list.start) {
                _self.buildFeedItems(feedName);
                _self.renderFeed(feedName);
            }

            if (typeof list.successCallback === 'function') {
                list.successCallback(data);
            }
        } else {
            if (typeof list.errorCallback === 'function') {
                list.errorCallback(data);
            }
        }

    };

} )( PULSE.app, PULSE.app.common, PULSE.core );

/**
 *     Common library to hold most-used twitter code to handle
 *     click events such as tweeting with custom parameters,
 *     retweeting, favouriting etc.
 */
(function( common ){

    if (!common.TwitterController) {
        common.TwitterController = {};
    }

    /**
     * Creates a new window for a specific twitter event; determines the type of event
     * through the 'intent' parameter
     *
     * More info at: https://dev.twitter.com/docs/intents
     *
     * @param  {String} intent - can be: 'tweet', 'favorite', 'retweet'
     * @param  {Object} params - optional; describes additional tweet params
     * @param  {Number} w      - optional; the width of the pop-up window created
     * @param  {Number} h      - optional; the height of the pop-up window created
     */
    common.TwitterController.tweetEvent = function(intent, params, w, h)
    {
        var TC = common.TwitterController;

        var width = w || 575,
            height = h || 400,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            options = 'status=1' +
                ',width=' + width +
                ',height=' + height +
                ',top=' + top +
                ',left=' + left;

        var tweetUrl = TC.getIntentUrl(intent, params);

        window.open(tweetUrl, 'twitter', options);
    };

    /**
     * Returns a URL to call the Twitter API
     * More info at: https://dev.twitter.com/docs/intents
     *
     * @return {String} - the intent URL, complete with added params
     */
    common.TwitterController.getIntentUrl = function(intent, params)
    {
        var TC = common.TwitterController,
            paramsString = TC.prepareParams(params);

        return "https://twitter.com/intent/" + intent + paramsString;
    };

    common.TwitterController.getPermalink = function(tweet)
    {
        var userName = tweet.actor.preferredUsername;
        var userUrl = common.TwitterController.getUserAccountUrl(userName);

        return userUrl + "/status/" + tweet.id;
    };

    common.TwitterController.prepareParams = function(params)
    {
        var paramsArray = [];
        $.each(params, function(key, value)
        {
            var keyValuePair = [key, encodeURIComponent(value)];
            paramsArray.push(keyValuePair.join("="));
        });

        return "?" + paramsArray.join("&");
    };

    common.TwitterController.getUserAccountUrl = function(screenName)
    {
        return "https://twitter.com/" + screenName;
    };

    common.TwitterController.getSearchTagUrl = function(topic)
    {
        return "https://twitter.com/search?q=%23" + topic;
    };

    /**
     * Utility method to scan the given String for what look like HTTP links,
     * Twitter handles and hashtags (called entities), and mark them up with <a> tags.
     *
     * For URLs and media links, use expanded_url as the title and use the
     * display_url provided by Twitter as the text of the anchor tag
     *
     * See: https://dev.twitter.com/docs/tco-url-wrapper/best-practices
     *
     * @param  {String} string   - the original body of the tweet
     * @param  {Object} entities - mapping of types of entities to an array of entity objects
     * @return {String}          - the processed body of the tweet, with anchor tags
     */
    common.TwitterController.markUpLinks = function(string, entities)
    {
        // to support the old way of doing things, when entities weren't use
        // to determine links to pages or media and the URL was directly processed
        // from the tweet text body
        if (!entities)
        {
            string = string.replace(/(https{0,1}:\/\/\S+)/g, '<a target="_blank" href="$1">$1</a>')
                .replace(/@(\S+)/g, '<a target="_blank" href="https://twitter.com/$1">@$1</a>')
                .replace(/#(\S+)/g,
                    '<a target="_blank" href="https://twitter.com/#!/search?q=%23$1">#$1</a>');

            return string;
        }

        // extrapolate URLs from the identified entities of the tweet
        var entitiesArray = [];

        if (entities.urls)
        {
            for (var i = 0, iLimit = entities.urls.length; i < iLimit; i++)
            {
                var entity = entities.urls[i];

                var html = '<a href="' +
                    entity.url +
                    '" title="' +
                    entity.expanded_url +
                    '" target="_blank">' +
                    entity.display_url +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: entity.url,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        // extrapolate URLs from the identified entities of the tweet
        if (entities.media)
        {
            for (var i = 0, iLimit = entities.media.length; i < iLimit; i++)
            {
                var entity = entities.media[i];

                var html = '<a href="' +
                    entity.url +
                    '" title="' +
                    entity.expanded_url +
                    '" target="_blank">' +
                    entity.display_url +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: entity.url,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        if (entities.user_mentions)
        {
            for (var i = 0, iLimit = entities.user_mentions.length; i < iLimit; i++)
            {
                var entity = entities.user_mentions[i];

                var url = common.TwitterController.getUserAccountUrl(entity.screen_name);

                var html = '<a href="' +
                    url +
                    '" target="_blank">&#64;' +
                    entity.screen_name +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: '@' + entity.screen_name,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        if (entities.hashtags)
        {
            for (var i = 0, iLimit = entities.hashtags.length; i < iLimit; i++)
            {
                var entity = entities.hashtags[i];

                var url = common.TwitterController.getSearchTagUrl(entity.text);

                var html = '<a href="' +
                    url +
                    '" target="_blank">&#35;' +
                    entity.text +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: '#' + entity.text,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        /**
         * Since the entities are ordered by type, sort the array by their start indice,
         * so they are in the order of appearances
         */
        entitiesArray.sort(function(a, b)
        {
            return a.start - b.start;
        });

        // re-do start/end indices for entities
        // this is a fix accounting for two-byte characters read as ASCII
        for (var i = 0, iLimit = entitiesArray.length; i < iLimit; i++)
        {
            var entity = entitiesArray[i];

            var lowercaseString = string.toLowerCase();
            var lowercaseOriginal = entity.original.toLowerCase();
            entity.start = lowercaseString.search( lowercaseOriginal );
            entity.end = entity.start + entity.original.length;
        }

        /**
         * The new tweet body, with anchor tags rather than just plain text
         * @type {String}
         */
        var newString = '';

        /**
         * Used to determine where in the original tweet body we're last
         * @type {Number}
         */
        var previousIdx = 0;

        /**
         * Go through all entities (if any) and replace their plain text version with
         * their anchor-tag equivalents
         * @type {Number}
         */
        for (var i = 0, iLimit = entitiesArray.length; i < iLimit; i++)
        {
            var entity = entitiesArray[i];
            var length = entity.start - previousIdx;

            newString += string.substr(previousIdx, length);
            newString += entity.html;

            previousIdx = entity.end;
        }

        /**
         * At the end, add what's left of the original string
         */
        newString += string.substr(previousIdx);

        return newString;
    };

    // pass in the 'created_at' string returned from twitter
    // stamp arrives formatted as Tue Apr 07 22:52:51 +0000 2009
    common.TwitterController.parseTwitterDate = function(timestamp)
    {
        var date = new Date(Date.parse(timestamp));
        if (K.ie)
        {
            date = Date.parse(timestamp.replace(/( \+)/, ' UTC$1'))
        }

        return date;
    };

    // from http://widgets.twimg.com/j/1/widget.js
    var K = function()
    {
        var a = navigator.userAgent;
        return {
            ie: a.match(/MSIE\s([^;]*)/)
        }
    }();


    common.TwitterController.getMediaImg = function(entities, index)
    {

        var idx = typeof index === 'undefined' ? 0 : index,
            img;

        for (var type in entities)
        {

            if (entities.hasOwnProperty(type) && type === 'media')
            {

                var media = entities[type],
                    entry = media[idx];

                img = entry.media_url;
            }
        }

        return img
    }
}( PULSE.app.common ));


/*globals PULSE, PULSE.app, PULSE.app.common */

( function( common, core ) {

    /**
     * Data-handler/model-maker for Canary-produced Twitter data
     * @constructor
     */
    common.Twitter = function ()
    {
    	/**
         * Stores twitter list data, with the feed name (folder) as key and
         * the array of tweets as the stored value
         * @dict
         */
        this.listData = {};

        /**
         * Stores twitter tally/count totals, with feed name (folder) as key and
         * the total (integer) as the stored value
         * @dict
         */
        this.tallyData = {};

        /**
         * Stores twitter ranked topics data, with feed name as key and the
         * array of ranked entries as the stored value
         * @dict
         */
        this.trendingData = {};

        /**
         * Stores twitter historical data, with feed name as key and the
         * array of ranked entries as the stored value
         * @dict
         */
        this.historicalData = {};

        /**
         * The instance of the data manager
         * @type {Object}
         */
        this.dm = PULSE.core.data.manager;

    };


    common.Twitter.prototype.onData = function( data, id )
    {
    	if( id.startsWith( 'list_' ) )
    	{
    		var name = id.substring( 5 );
    		this.listData[ name ] = data;

    		// common.notify( 'twitter/list', { success: true, name: name } );
    	}
    	else if( id.startsWith( 'tally_' ) )
    	{
    		var name = id.substring( 6 );
    		this.tallyData[ name ] = data.total;
    		common.notify( 'twitter/tally', { success: true, name: name } );
    	}
        else if( id.startsWith( 'trending_' ) )
        {
            var name = id.substring( 9 );
            this.trendingData[ name ] = data.entries;
            common.notify( 'twitter/trending', { success: true, name: name } );
        }
        else if( id.startsWith( 'history_' ) )
        {
            var name = id.substring( 8 );
            this.historicalData[ name ] = data.data;
            common.notify( 'twitter/history', { success: true, name: name } );
        }
    };

    common.Twitter.prototype.onError = function( id )
    {
    	if( id.startsWith( 'list_' ) )
    	{
    		var name = id.substring( 5 );
    		common.notify( 'twitter/list', { success: false, name: name } );
    	}
    	else if( id.startsWith( 'tally_' ) )
    	{
    		var name = id.substring( 6 );
    		common.notify( 'twitter/tally', { success: false, name: name } );
    	}
        else if( id.startsWith( 'trending_' ) )
        {
            var name = id.substring( 9 );
            common.notify( 'twitter/trending', { success: false, name: name } );
        }
        else if( id.startsWith( 'history_' ) )
        {
            var name = id.substring( 8 );
            common.notify( 'twitter/history', { success: false, name: name } );
        }
    };

    common.Twitter.prototype.getList = function( name, options )
    {
    	if( !options )
    	{
    		return;
    	}

    	options = core.object.extend( options, { callback: "onTwitter", fileName: ( options.fileName || ( name + "_list" ) ) + "/tweetList" } );
    	options.interval = typeof options.interval !== "undefined" ? options.interval : 20;
    	this.getFeed( name, 'list', options );
    };

    common.Twitter.prototype.stopList = function( name, options )
    {
        if( !options )
        {
            return;
        }

        core.object.extend( options, { fileName: ( options.fileName || ( name + "_list" ) ) + "/tweetList" } );
        this.stopFeed( name, 'list', options );
    };

    common.Twitter.prototype.getTally = function( name, options )
    {
    	if( !options )
    	{
    		return;
    	}

    	options = core.object.extend( options, { callback: "onTweetTotal", fileName: ( options.fileName || ( name + "_count" ) ) + "/tally" } );
    	options.interval = typeof options.interval !== "undefined" ? options.interval : 5;
    	this.getFeed( name, 'tally', options );
    };

    common.Twitter.prototype.getTrending = function( name, options )
    {
        if( !options )
        {
            return;
        }

        options = core.object.extend( options, { callback: "onRanking", fileName: ( options.fileName || ( name + "_buzz" ) ) + "/tweetRanking" } );
        options.interval = typeof options.interval !== "undefined" ? options.interval : 20;
        this.getFeed( name, 'trending', options );
    };

    common.Twitter.prototype.getHistory = function( name, options )
    {
        if( !options )
        {
            return;
        }

        options = core.object.extend( options, { callback: "onHistoryData", fileName: ( options.fileName || ( name + "_history" ) ) + "/history" } );
        options.interval = typeof options.interval !== "undefined" ? options.interval : 30;
        this.getFeed( name, 'history', options );
    };

    // type can be 'list', 'history', 'tally' etc.
    common.Twitter.prototype.getFeed = function( options )
    {
        var sub = this.dm.add( options );

        if( options.start ) {
    		sub.start();
    	}
    };

    common.Twitter.prototype.stopFeed = function( name, type, options )
    {
        var feed = this.urlGenerator.makeTwitterDataUrl( options.fileName );
        this.dm.stop( feed );
    };


    /**
     *
     * TWITTER AND CANARY MODELS
     *
     */

    common.Twitter.prototype.getTweetCount = function( name )
    {
    	var tweetCount = this.tallyData[ name ];
    	if( tweetCount )
    	{
    		return common.Util.addCommaForThousands( tweetCount );
    	}
    	return "";
    };

    common.Twitter.prototype.getTweetsListModel = function( name, limit )
    {
    	var array = this.getTweetsArray( this.listData[ name ], limit );

    	return { tweets: array };
    };



    common.Twitter.prototype.getTweetsArray = function( data, limit )
    {
        if( !data ) return;

        if( !limit || limit > data.length )
        {
            limit = data.length;
        }

        var array = [];
        for( var i = data.length - 1; i >= data.length - limit; i-- )
        {
            var tweet = data[i];
            var model = this.getTweetModel( tweet );

            array.push( model );
        }

        return array;
    };

    common.Twitter.prototype.getTweetModel = function( tweet )
    {
        var TC = common.TwitterController,
            userAccountLink = TC.getUserAccountUrl( tweet.actor.preferredUsername ),
            tweetDate = TC.parseTwitterDate( tweet.postedTime ),
            format = {
                seconds: 's', minutes: 'm',
                hours: 'h', days: 'd'
            },
            timestamp = common.getSinceString( tweetDate, format ),
            time = common.getTime( tweetDate ),
            photo = '',
            extended_media = [],
            model;

        if( tweet.entities && tweet.entities.media )
        {
            for( var i = 0, iLimit = tweet.entities.media.length; i < iLimit; i++ )
            {
                if( tweet.entities.media[i].type === 'photo' )
                {
                    photo = tweet.entities.media[i].media_url;
                }
            }
        }

        if( tweet.twitter_entities && tweet.twitter_entities.media )
        {
            for( var i = 0, iLimit = tweet.twitter_entities.media.length; i < iLimit; i++ )
            {
                var p = tweet.twitter_entities.media[ i ];
                extended_media.push( p.media_url );
            }
        }

        model = {
            timestamp: timestamp,
            time: time,
            id: tweet.id.split(":")[2],
            text: common.TwitterController.markUpLinks(tweet.body),
            link: tweet.link,
            photo: photo,
            extended_media: extended_media,
            user: {
                id: tweet.actor.id,
                name: tweet.actor.displayName,
                account: tweet.actor.preferredUsername,
                link: userAccountLink,
                description: tweet.actor.summary,
                avatarUrl: tweet.actor.image
            },
            feedType: 'twitter',
            favorites: tweet.favoritesCount,
            retweets: tweet.retweetCount
        };

        return model;
    };

    /**
     * Looks up account name in trending data array.
     *     - Returns early if no name is specified or no data exists.
     *     - If limit is specified will return top n number of entries.
     *     - If no limit is specified will return all entries in this file.
     *     - Adds percentage relative to the highest count.
     *
     * @param  {string} name  Account name string to lookup.
     * @param  {number} limit Number of entries to return.
     * @return {array}        Array of trending data entries at the specified length.
     */
    common.Twitter.prototype.getTrendingModel = function( name, limit )
    {
        var model = { rankings: [] };
        if( name && this.trendingData[ name ] )
        {
            var array = this.trendingData[ name ],
                limit = limit || array.length,
                highest = array.length ? array[0].count : 0;

            model.rankings = array.slice( 0, limit )

            for( var i = 0; i < model.rankings.length; i++ )
            {
                var entry = model.rankings[i];
                entry.percentage =  Math.round( ( entry.count / highest ) * 100 ) + '%';
                entry.formattedCount = entry.count > 999 ? common.Util.commafy( entry.count ) : entry.count;
            }
        }

        return model;
    };

    /**
     * Looksup historical data after it's been received and stored. Returns count values
     * based on resolution.
     * @param  {string} name  Value for looking up in historical data
     * @param  {number} limit Limitation of how many previous counts to return
     * @return {array}       Array of hsitoric counts
     */
    common.Twitter.prototype.getHistoricalModel = function( name, limit )
    {
        var pools = this.historicalData[ name ];
        var model = { total: 0, buckets: [] };

        if( pools )
        {
            var iLimit = limit ? Math.min( limit, pools.length ) : pools.length;
            for( var i = 0; i < iLimit; i++ )
            {
                var pool = pools[i];
                if( pool.resolution && pool.resolution.unit === "MINUTE" )
                {
                    model.buckets = $.map( pool.buckets, function( bucket ) {
                        return bucket.count;
                    } );
                    model.buckets = model.buckets.reverse();
                }
                else if( pool.resolution && pool.resolution.unit === "DAY" )
                {
                    model.total = pool.buckets[0].count;
                }
            }
        }

        return model;
    };

} )( PULSE.app.common, PULSE.core );
