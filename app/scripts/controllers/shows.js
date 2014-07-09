'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:ShowsCtrl
 * @description
 * # ShowsCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
  .controller('ShowsCtrl', function ($scope) {
    $scope.shows = [
{
    images: [ {
        url: "http://randomc.net/image/Miscellaneous/Summer%202014%20Preview/free2.jpg",
        path: "full/1ade6d93d8065e9ba0eb1ff555d9ede66bd24afd.jpg",
        checksum: "9f2e5611069595a2971426bf70717169"
    } ],
    startdate: "July 2, 2014",
    airday: "wednes",
    image_urls: [ "http://randomc.net/image/Miscellaneous/Summer 2014 Preview/free2.jpg" ],
    title: "Free! -Eternal Summer-"
}, {
    images: [ {
        url: "http://randomc.net/image/Miscellaneous/Summer%202014%20Preview/railwars.jpg",
        path: "full/9a2d43ab3295f2dfdea6726a0f81fd21c7089acc.jpg",
        checksum: "a40ecf2914debf9071078ab2c822081f"
    } ],
    startdate: "July 3, 2014",
    airday: "thurs",
    image_urls: [ "http://randomc.net/image/Miscellaneous/Summer 2014 Preview/railwars.jpg" ],
    title: "RAIL WARS!"
}, {
    startdate: "July 3, 2014",
    title: "Tokyo Ghoul",
    image_urls: [ "http://randomc.net/image/Miscellaneous/Summer 2014 Preview/tokyoghoul.jpg" ],
    images: [ {
        url: "http://randomc.net/image/Miscellaneous/Summer%202014%20Preview/tokyoghoul.jpg",
        path: "full/4ee1650417355d83721b9f7e85c3db41e4181849.jpg",
        checksum: "06746a9390bd7676dbad811390e6c873"
    } ],
    airday: "thurs",
    desc: "東京喰種 -トーキョーグール-"
}, {
    startdate: "July 3, 2014",
    title: "Futsuu no Joshikousei ga [Locodol] Yattemita.",
    image_urls: [ "http://randomc.net/image/Miscellaneous/Summer 2014 Preview/locodol.jpg" ],
    images: [ {
        url: "http://randomc.net/image/Miscellaneous/Summer%202014%20Preview/locodol.jpg",
        path: "full/87a28225d60aedadb97c7ecd1f65561c16135437.jpg",
        checksum: "7abcac9529ac84462db32c885b678068"
    } ],
    airday: "thurs",
    desc: "普通の女子校生が【ろこどる】やってみた。"
}
    ];
  });
