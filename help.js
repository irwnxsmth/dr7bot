
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
ββββ² π³πππ΄ππ΄π½ πππΎππ΄ βββ

 π¨π¦ππ₯ ππ‘ππ’
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 ππ’π§ ππ‘ππ’
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}

 ππΌππ ππππ 
 ${no++} β³ ${prefix}menu
 ${no++} β³ ${prefix}rules
 ${no++} β³ ${prefix}owner
 ${no++} β³ ${prefix}infobot
 ${no++} β³ ${prefix}donasi
 ${no++} β³ ${prefix}donate
 ${no++} β³ ${prefix}jadibot
 ${no++} β³ ${prefix}listjadibot
 ${no++} β³ ${prefix}sewabot
 ${no++} β³ ${prefix}groupbot

 ππππ ππππ 
 ${no++} β³ ${prefix}verify
 ${no++} β³ ${prefix}report
 ${no++} β³ ${prefix}request
 ${no++} β³ ${prefix}transfer
 ${no++} β³ ${prefix}menfess
 ${no++} β³ ${prefix}buatroom
 ${no++} β³ ${prefix}secretchat
 ${no++} β³ ${prefix}cekprem
 ${no++} β³ ${prefix}daftarprem
 ${no++} β³ ${prefix}changename

 πππππ ππππ 
 ${no++} β³ ${prefix}error
 ${no++} β³ ${prefix}clearerr
 ${no++} β³ ${prefix}siaran
 ${no++} β³ ${prefix}session
 ${no++} β³ ${prefix}resetdb
 ${no++} β³ ${prefix}runtime
 ${no++} β³ ${prefix}setexif
 ${no++} β³ ${prefix}setwm
 ${no++} β³ ${prefix}setfooter
 ${no++} β³ ${prefix}setppbot
 ${no++} β³ ${prefix}addprem
 ${no++} β³ ${prefix}delprem
 ${no++} β³ ${prefix}bc

 πππππ ππππ 
 ${no++} β³ ${prefix}kali 1 2
 ${no++} β³ ${prefix}bagi 1 2
 ${no++} β³ ${prefix}kurang 1 2
 ${no++} β³ ${prefix}tambah 1 2
 ${no++} β³ ${prefix}dellist key
 ${no++} β³ ${prefix}addlist key@response
 ${no++} β³ ${prefix}update key@response
 ${no++} β³ ${prefix}done <reply orderan>
 ${no++} β³ ${prefix}proses <reply orderan>
 ${no++} β³ ${prefix}list <only group>
 ${no++} β³ ${prefix}shop <only group>
 
 πππππ ππππ 
 ${no++} β³ ${prefix}fitnah
 ${no++} β³ ${prefix}delete
 ${no++} β³ ${prefix}revoke
 ${no++} β³ ${prefix}tagall
 ${no++} β³ ${prefix}hidetag
 ${no++} β³ ${prefix}setdesc
 ${no++} β³ ${prefix}linkgrup
 ${no++} β³ ${prefix}infogroup
 ${no++} β³ ${prefix}setppgrup
 ${no++} β³ ${prefix}setnamegrup
 ${no++} β³ ${prefix}group open
 ${no++} β³ ${prefix}group close
 ${no++} β³ ${prefix}antilink on
 ${no++} β³ ${prefix}antilink off
 ${no++} β³ ${prefix}welcome on
 ${no++} β³ ${prefix}welcome off
 ${no++} β³ ${prefix}kick @tag
 ${no++} β³ ${prefix}demote @tag
 ${no++} β³ ${prefix}promote @tag
 
 πΌππππΏππΎπ ππππ 
 ${no++} β³ ${prefix}sadcat
 ${no++} β³ ${prefix}translate
 ${no++} β³ ${prefix}stalkff
 ${no++} β³ ${prefix}stalknpm
 ${no++} β³ ${prefix}stalkgithub
 ${no++} β³ ${prefix}balikhuruf
 ${no++} β³ ${prefix}balikangka
 ${no++} β³ ${prefix}besarkecil
 ${no++} β³ ${prefix}bilangangka
 `
}

exports.rulesBot = () =>{
return`*ββγ RULES-BOT γββ*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`ββγ *MENU DONATE* γββ

Hallo kak *${cekName}* ${ucapanWaktu} ππ»

*MANDIRI *
NOREK 1390023434529
A/N: IRWAN

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

ββγ *THX FOR YOU* γββ`
}

exports.infoOwner = () =>{
return`ββγ *INFO OWNER* γββ

 *Data Profil*
 β’ *Nama :* Irwan Smith
 β’ *Asal :* Batang Jawa Tengah
 `
}