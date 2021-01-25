hostname = api.m.jd.com, draw.jdfcloud.com, jdjoy.jd.com, account.huami.com
#京东多合一签到脚本
cron "1 0 * * *" tag=京东多合一签到, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean tag=获取京东Cookie, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# 超级直播间红包雨
cron "30,31 20-23/1 19 1 *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_live_redrain.js, tag=超级直播间红包雨
# 直播间红包雨
cron "0,1 19-21/1 * * *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_live_redrain2.js, tag=直播间红包雨
# 半点红包雨
cron "30,31 12-23/1 * * *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_live_redrain_half.js, tag=半点红包雨
# 年货直播红包雨
cron "0 0,9,11,13,15,17,19,20,21,23 3,5,20-30/1 1,2 *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_live_redrain_nian.js, tag=年货直播红包雨
# 官方号直播红包雨
cron "0 0,9,11,13,15,17,19,20,21,22,23 * * *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_live_redrain_offical.js, tag=官方号直播红包雨
# 超级直播间幸运值抽京豆
cron "10 20 15 1 *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_mh_super.js,tag=超级直播间幸运值抽京豆
#总动员
cron "1 0 * * **" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_friend.js,tag=总动员


