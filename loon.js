# Loon���Task���� By LXK9301
# GitHub��ҳ(https://github.com/LXK9301/jd_scripts)
# TG������ (https://t.me/JD_fruit_pet)
# TG֪ͨƵ�� (https://t.me/jdfruit)
# Loon��Task�ű���������: https://raw.githubusercontent.com/LXK9301/jd_scripts/master/Loon/lxk0301_LoonTask.conf
# ʹ�÷���:��APP������������ -> �ű� -> ���Ľű�- > ������Ͻ�+�� -> ���url���� (https://raw.githubusercontent.com/LXK9301/jd_scripts/master/Loon/lxk0301_LoonTask.conf)

hostname = wq.jd.com, draw.jdfcloud.com, jdjoy.jd.com, account.huami.com
# ����ũ��
cron "5 6-18/6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_fruit.js,tag=����ũ��

# �����ȳ�
cron "10 7-19/6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_pet.js,tag=�����ȳ�

# �����ֶ��ö�
cron "1 7-21/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_plantBean.js,tag=�����ֶ��ö�

# ������(��Ҫ���ճ�����,��������Ҳ��ιʳ����ȡ���͹���)
cron "15 1,7,9,12,18,21 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy.js,tag=������

# ������ιʳ
cron "12 */1 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_feedPets.js,tag=������ιʳ

# ������͵���ѻ����빷��
cron "0 0,6 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_steal.js,tag=������͵���ѻ����빷��

# ���������ֶһ���Ʒ
cron "0 0,8,12,16 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_reward.js,tag=���������ֶһ���Ʒ

# �����������
cron "8 */3 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_speed.js,tag=�����������

# ����ҡǮ��
cron "3 */5 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_moneyTree.js,tag=����ҡǮ��

# ��С��
cron "11 1-23/2 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_superMarket.js,tag=��С��

# ��С���һ���Ʒ
cron "0,30 0 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_blueCoin.js,tag=��С���һ���Ʒ

# ȡ�ؾ���������Ʒ
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_unsubscribe.js,tag=ȡ�ؾ���������Ʒ

# �����춹
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_shop.js,tag=�����춹

#ҡ����
cron "5 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_club_lottery.js,tag=ҡ����

#����ȫ�񿪺��
cron "1 1 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_redPacket.js, tag=����ȫ�񿪺��

#�����䶯֪ͨ
cron "2 9 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bean_change.js, tag=�����䶯֪ͨ

#���ȯ
cron "20 0,20 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_necklace.js, tag=���ȯ

#ʮԪ��
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_syj.js, tag=ʮԪ��

#����С��
cron "16 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_small_home.js, tag=����С��

#��ϲ����
cron "26 * * * *" script-path= https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_dreamFactory.js, tag=��ϲ����

#��������
cron "10 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdfactory.js,tag=��������

#������������������������
cron "15 10 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, tag=������������������������

#��������������Token
http-response ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/addUser\?code= script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, requires-body=true, timeout=3600, tag=��������������Token

#������������ȡToken
http-request ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/user\/detail\?openId= script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_run.js, requires-body=true, timeout=3600, tag=������������ȡToken

# ������ǿ��Ϊ��������
http-request ^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js, requires-body=true, timeout=3600, tag=������ǿ��Ϊ��������

#�۱���Ͷ��������(github@Zero-S1���)
http-response ^https:\/\/jdjoy\.jd\.com\/pet\/getPetTreasureBox|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/getPetTreasureBox script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_petTreasureBox.js, requires-body=true, timeout=3600, tag=�۱���Ͷ��������

# �������
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_kd.js, tag=�������ǩ��

# �쾩�����⽱��
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bean_home.js, tag=�쾩�����⽱��

# ��������
#cron "3 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdh.js, tag=��������
# ����׬׬
cron "10 11 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jdzz.js, tag=����׬׬
# ������ɱ�����
# cron "10 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_ms_redrain.js, tag=��ɱ�����
#ע���������̻�Ա��
cron "23 12 * * 6" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_unbind.js, tag=ע���������̻�Ա��
# ����ֱ��
cron "10-20/5 12 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_live.js, tag=����ֱ��
# ������һ��
# cron "40 9,10 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_watch.js, tag=������һ��
#ֱ�������
# cron "1 0,20,9-23/2 15-31 12 *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_live_redrain.js, tag=ֱ�������
# ���ڴ������ս�
# cron "10 6 1-31 12 *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jr_sign.js, tag=���ڴ������ս�
# �����齱��
#cron "10 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_health.js, tag=�����齱��
# ����joy�ճ�����
cron "30 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_crazy_joy.js, tag=����joy�ճ�����
#��ϲǩ��
cron "5 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jx_sign.js, tag=��ϲǩ��
#�ڴ����
cron "1 8,12,18 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_bookshop.js, tag=�ڴ����
#���������
cron "1 7 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nh.js, tag=���������
#����������Ժ
cron "0 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_immortal.js, tag=����������Ժ
#��ϲũ��
http-request ^https\:\/\/wq\.jd\.com\/cubeactive\/farm\/dotask script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_nc.cookie.js, requires-body=false, timeout=3600, tag=��ϲũ��cookie
cron "0 9,12,18 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_jxnc.js, tag=��ϲũ��
#����ը����
cron "0 8 * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nian.js, tag=����ը����
#����ը���޶�ʱ
cron "20 * * * *" script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_nianCollect.js, tag=������





