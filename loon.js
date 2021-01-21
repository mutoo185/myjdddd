
hostname = wq.jd.com, draw.jdfcloud.com, jdjoy.jd.com, account.huami.com
# 东东农场
cron "5 6-18/6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_fruit.js,tag=东东农场

# 东东萌宠
cron "10 7-19/6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_pet.js,tag=东东萌宠

# 京东种豆得豆
cron "1 7-21/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_plantBean.js,tag=京东种豆得豆

# 宠汪汪(主要是日常任务,不过里面也有喂食和领取三餐狗粮)
cron "15 1,7,9,12,18,21 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy.js,tag=宠汪汪

# 宠汪汪喂食
cron "12 */1 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_feedPets.js,tag=宠汪汪喂食

# 宠汪汪偷好友积分与狗粮
cron "0 0,6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_steal.js,tag=宠汪汪偷好友积分与狗粮

# 宠汪汪积分兑换奖品
cron "0 0,8,12,16 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_reward.js,tag=宠汪汪积分兑换奖品

# 京东天天加速
cron "8 */3 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_speed.js,tag=京东天天加速

# 京东摇钱树
cron "3 */5 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_moneyTree.js,tag=京东摇钱树

# 京小超
cron "11 1-23/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_superMarket.js,tag=京小超

# 京小超兑换奖品
cron "0,30 0 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_blueCoin.js,tag=京小超兑换奖品

# 取关京东店铺商品
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_unsubscribe.js,tag=取关京东店铺商品

# 进店领豆
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_shop.js,tag=进店领豆

#摇京豆
cron "5 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_club_lottery.js,tag=摇京豆

#京东全民开红包
cron "1 1 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_redPacket.js, tag=京东全民开红包

#京豆变动通知
cron "2 9 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bean_change.js, tag=京豆变动通知

#点点券
cron "20 0,20 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_necklace.js, tag=点点券

#十元街
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_syj.js, tag=十元街

#东东小窝
cron "16 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_small_home.js, tag=东东小窝

#京喜工厂
cron "26 * * * *" script-path= https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_dreamFactory.js, tag=京喜工厂

#东东工厂
cron "10 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdfactory.js,tag=东东工厂

#宠汪汪邀请助力与赛跑助力
cron "15 10 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, tag=宠汪汪邀请助力与赛跑助力

#宠汪汪助力更新Token
http-response ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/addUser\?code= script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, requires-body=true, timeout=3600, tag=宠汪汪助力更新Token

#宠汪汪助力获取Token
http-request ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/user\/detail\?openId= script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, requires-body=true, timeout=3600, tag=宠汪汪助力获取Token

# 宠汪汪强制为别人助力
http-request ^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力

#聚宝盆投狗粮辅助(github@Zero-S1搬的)
http-response ^https:\/\/jdjoy\.jd\.com\/pet\/getPetTreasureBox|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/getPetTreasureBox script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_petTreasureBox.js, requires-body=true, timeout=3600, tag=聚宝盆投狗粮辅助

# 京东快递
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_kd.js, tag=京东快递签到

# 领京豆额外奖励
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bean_home.js, tag=领京豆额外奖励

# 京东健康
#cron "3 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdh.js, tag=京东健康
# 京东赚赚
cron "10 11 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdzz.js, tag=京东赚赚
# 京东秒杀红包雨
# cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_ms_redrain.js, tag=秒杀红包雨
#注销京东店铺会员卡
cron "23 12 * * 6" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_unbind.js, tag=注销京东店铺会员卡
# 京东直播
cron "10-20/5 12 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_live.js, tag=京东直播
# 京东看一看
# cron "40 9,10 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_watch.js, tag=京东看一看
#直播红包雨
# cron "1 0,20,9-23/2 15-31 12 *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_live_redrain.js, tag=直播红包雨
# 金融打卡领年终奖
# cron "10 6 1-31 12 *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jr_sign.js, tag=金融打卡领年终奖
# 健康抽奖机
#cron "10 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_health.js, tag=健康抽奖机
# 疯狂的joy日常任务
cron "30 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_crazy_joy.js, tag=疯狂的joy日常任务
#京喜签到
cron "5 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jx_sign.js, tag=京喜签到
#口袋书店
cron "1 8,12,18 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bookshop.js, tag=口袋书店
#京东年货节
cron "1 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nh.js, tag=京东年货节
#京东神仙书院
cron "0 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_immortal.js, tag=京东神仙书院
#京喜农场
http-request ^https\:\/\/wq\.jd\.com\/cubeactive\/farm\/dotask script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_nc.cookie.js, requires-body=false, timeout=3600, tag=京喜农场cookie
cron "0 9,12,18 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jxnc.js, tag=京喜农场
#京东炸年兽
cron "0 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nian.js, tag=京东炸年兽
#京东炸年兽定时
cron "20 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nianCollect.js, tag=京东收





