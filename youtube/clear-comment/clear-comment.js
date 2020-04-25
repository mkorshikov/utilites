/**
 * Очищает комментарий при переходе к нему по ссылке
 * 
 * Добавляется на страницу с помощью вот такой ссылки
 * javascript:(function(){_my_script=document.createElement('SCRIPT');_my_script.type='text/javascript';_my_script.src='https://raw.githubusercontent.com/mkorshikov/utilites/master/youtube/clear-comment/clear-comment.js';document.getElementsByTagName('head')[0].appendChild(_my_script);})();
 */
;(function(document) {
	const commentHeaderEl = document.querySelector('#header-badge');
	commentHeaderEl.remove();
}(document));