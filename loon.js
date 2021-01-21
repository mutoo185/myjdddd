# IOS Loon Task&Cookies配置 By LXK9301
# GitHub主页(https://github.com/LXK9301/jd_scripts)
# TG讨论组 (https://t.me/JD_fruit_pet)
# TG通知频道 (https://t.me/jdfruit)
# Loon的Task&Cookies脚本订阅链接: https://raw.githubusercontent.com/LXK9301/jd_scripts/master/Loon/lxk0301_LoonTask.conf
# 使用方法:打开APP，顶部的配置 -> 脚本 -> 订阅脚本- > 点击右上角+号 -> 添加url链接 (https://raw.githubusercontent.com/LXK9301/jd_scripts/master/Loon/lxk0301_LoonTask.conf)

hostname = api.m.jd.com, draw.jdfcloud.com, jdjoy.jd.com, account.huami.com

# 京豆变动通知
cron "2 9 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bean_change.js, tag=京豆变动通知

# 领京豆额外奖励
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bean_home.js, tag=领京豆额外奖励

# 京小超兑换奖品
cron "0 0 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_blueCoin.js,tag=京小超兑换奖品

# 口袋书店
cron "1 8,12,18 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bookshop.js,tag=口袋书店

# 签到领现金
cron "2 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_cash.js,tag=签到领现金

# 摇京豆
cron "5 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_club_lottery.js,tag=摇京豆

# crazyJoy任务
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_crazy_joy.js,tag=crazyJoy任务

# 京喜工厂
cron "10 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_dreamFactory.js,tag=京喜工厂

# 京东家庭号
cron "1 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_family.js,tag=京东家庭号

# 集鞭炮赢京豆
cron "10 8,21 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_firecrackers.js,tag=集鞭炮赢京豆

# 东东农场
cron "5 6-18/6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_fruit.js,tag=东东农场

# 获取互助码
cron "20 13 * * 6" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_get_share_code.js, tag=获取互助码

# 京东神仙书院
cron "0 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_immortal.js,tag=京东神仙书院

# 东东工厂
cron "10 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdfactory.js,tag=东东工厂

# 京东赚赚
cron "0 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdzz.js,tag=京东赚赚

# 宠汪汪
cron "15 0-23/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy.js,tag=京东宠汪汪

# 宠汪汪🐕喂食
cron "15 0-23/1 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_feedPets.js,tag=京东宠汪汪喂食

# 宠汪汪强制为别人助力
http-request ^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力

# 宠汪汪积分兑换奖品
cron "0 0-16/8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_reward.js,tag=宠汪汪积分兑换奖品

# 宠汪汪赛跑
cron "15 10 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, tag=宠汪汪邀请助力与赛跑助力

# 宠汪汪助力更新Token
http-response ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/addUser\?code= script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, requires-body=true, timeout=3600, tag=宠汪汪助力更新Token

# 宠汪汪助力获取Token
http-request ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/user\/detail\?openId= script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, requires-body=true, timeout=3600, tag=宠汪汪助力获取Token

# 宠汪汪偷好友积分与狗粮
cron "0 0-10/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_steal.js,tag=宠汪汪偷好友积分与狗粮

# 京喜农场
cron "0 9,12,18 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jxnc.js,tag=京喜农场

# 京喜农场cookie
http-request ^https\:\/\/wq\.jd\.com\/cubeactive\/farm\/dotask script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_nc.cookie.js, requires-body=false, timeout=3600, tag=京喜农场cookie

# 京东快递签到
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_kd.js, tag=京东快递签到

# 京东摇钱树
cron "3 0-23/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_moneyTree.js,tag=京东摇钱树

# 点点券
cron "10 0,20 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_necklace.js,tag=点点券

# 京东年货节
cron "1 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nh.js,tag=京东年货节

# 京东炸年兽
cron "10 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nian.js,tag=京东炸年兽

# 京东炸年兽AR
cron "0 9 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nian_ar.js,tag=京东炸年兽AR

# 京东炸年兽签到任务
cron "30 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nian_sign.js,tag=京东炸年兽签到任务🧨

# 京东炸年兽领爆竹
cron "50 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nianCollect.js,tag=京东收

# 东东萌宠
cron "15 6-18/6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_pet.js,tag=东东萌宠

# 聚宝盆投狗粮辅助
http-response ^https:\/\/jdjoy\.jd\.com\/pet\/getPetTreasureBox|^https:\/\/draw\.jdfcloud\.com\/\/pet\/getPetTreasureBox script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_petTreasureBox.js, requires-body=true, timeout=3600, tag=聚宝盆投狗粮辅助


# 京东种豆得豆
cron "1 7-21/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_plantBean.js,tag=京东种豆得豆

# 京东全民开红包
cron "1 1 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_redPacket.js, tag=京东全民开红包

# 进店领豆
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_shop.js,tag=进店领豆

# 东东小窝
cron "16 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_small_home.js, tag=东东小窝

# ✈️天天加速
cron "8 0-23/3 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_speed.js,tag=京东天天加速

# 东东超市
cron "11 1-23/5 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_superMarket.js,tag=东东超市

# 十元街
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_syj.js, tag=十元街

# 注销京东会员卡
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_unbind.js,tag=注销京东会员卡

# 取关京东店铺和商品
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_unsubscribe.js,tag=取关京东店铺商品

# 京喜签到
cron "5 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jx_sign.js,tag=京喜签到

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
# 盲盒抽京豆
cron "1 7 * * *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_mh.js,tag=盲盒抽京豆
# 超级直播间幸运值抽京豆
cron "10 20 15 1 *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_mh_super.js,tag=超级直播间幸运值抽京豆
# 京东秒秒币
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_ms.js,tag=京东秒秒币
# 神券京豆
cron "1 7 13 1 *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_super_coupon.js,tag=神券京豆
# 海产新年抽奖
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_sx.js,tag=海产新年抽奖
# 京年团圆pick
cron "5 0 19,20 1 *" script-path=https://raw.githubusercontent.com/shylocks/Loon/main/jd_vote.js,tag=京年团圆pick
