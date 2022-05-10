import { CountryCode } from "../interfaces/iso-3166.interface"

export interface Country {
  name: string
  capital: string
  code: CountryCode
  flag: string
}

export const CountriesList: Country[] = [
  { code: "AF", name: "Afghanistan", flag: "af.svg", capital: "Kabul" },
  { code: "AL", name: "Albania", flag: "al.svg", capital: "Tirana" },
  { code: "DZ", name: "Algeria", flag: "dz.svg", capital: "Algiers" },
  { code: "AS", name: "American Samoa", flag: "as.svg", capital: "Pago Pago" },
  { code: "AD", name: "Andorra", flag: "ad.svg", capital: "Andorra la Vella" },
  { code: "AO", name: "Angola", flag: "ao.svg", capital: "Luanda" },
  { code: "AI", name: "Anguilla", flag: "ai.svg", capital: "The Valley" },
  { code: "AG", name: "Antigua and Barbuda", flag: "ag.svg", capital: "Saint John's" },
  { code: "AR", name: "Argentina", flag: "ar.svg", capital: "Buenos Aires" },
  { code: "AM", name: "Armenia", flag: "am.svg", capital: "Yerevan" },
  { code: "AW", name: "Aruba", flag: "aw.svg", capital: "Oranjestad" },
  { code: "AU", name: "Australia", flag: "au.svg", capital: "Canberra" },
  { code: "AT", name: "Austria", flag: "at.svg", capital: "Vienna" },
  { code: "AZ", name: "Azerbaijan", flag: "az.svg", capital: "Baku" },
  { code: "BS", name: "Bahamas", flag: "bs.svg", capital: "Nassau" },
  { code: "BH", name: "Bahrain", flag: "bh.svg", capital: "Manama" },
  { code: "BD", name: "Bangladesh", flag: "bd.svg", capital: "Dhaka" },
  { code: "BB", name: "Barbados", flag: "bb.svg", capital: "Bridgetown" },
  { code: "BY", name: "Belarus", flag: "by.svg", capital: "Minsk" },
  { code: "BE", name: "Belgium", flag: "be.svg", capital: "Brussels" },
  { code: "BZ", name: "Belize", flag: "bz.svg", capital: "Belmopan" },
  { code: "BJ", name: "Benin", flag: "bj.svg", capital: "Porto-Novo" },
  { code: "BM", name: "Bermuda", flag: "bm.svg", capital: "Hamilton" },
  { code: "BT", name: "Bhutan", flag: "bt.svg", capital: "Thimphu" },
  { code: "BO", name: "Bolivia", flag: "bo.svg", capital: "Sucre" },
  { code: "BA", name: "Bosnia and Herzegovina", flag: "ba.svg", capital: "Sarajevo" },
  { code: "BW", name: "Botswana", flag: "bw.svg", capital: "Gaborone" },
  { code: "BR", name: "Brazil", flag: "br.svg", capital: "Brasilia" },
  { code: "BN", name: "Brunei Darussalam", flag: "bn.svg", capital: "Bandar Seri Begawan" },
  { code: "BG", name: "Bulgaria", flag: "bg.svg", capital: "Sofia" },
  { code: "BF", name: "Burkina Faso", flag: "bf.svg", capital: "Ouagadougou" },
  { code: "BI", name: "Burundi", flag: "bi.svg", capital: "Bujumbura" },
  { code: "CV", name: "Cabo Verde", flag: "cv.svg", capital: "Praia" },
  { code: "KH", name: "Cambodia", flag: "kh.svg", capital: "Phnom Penh" },
  { code: "CM", name: "Cameroon", flag: "cm.svg", capital: "Yaounde" },
  { code: "CA", name: "Canada", flag: "ca.svg", capital: "Ottawa" },
  { code: "KY", name: "Cayman Islands", flag: "ky.svg", capital: "George Town" },
  { code: "CF", name: "Central African Republic", flag: "cf.svg", capital: "Bangui" },
  { code: "TD", name: "Chad", flag: "td.svg", capital: "N'Djamena" },
  { code: "CL", name: "Chile", flag: "cl.svg", capital: "Santiago" },
  { code: "CN", name: "China", flag: "cn.svg", capital: "Beijing" },
  { code: "CX", name: "Christmas Island", flag: "cx.svg", capital: "Flying Fish Cove" },
  { code: "CC", name: "Cocos Islands", flag: "cc.svg", capital: "West Island" },
  { code: "CO", name: "Colombia", flag: "co.svg", capital: "Bogota" },
  { code: "KM", name: "Comoros", flag: "km.svg", capital: "Moroni" },
  { code: "CD", name: "Congo (Democratic)", flag: "cd.svg", capital: "Kinshasa" },
  { code: "CG", name: "Congo", flag: "cg.svg", capital: "Brazzaville" },
  { code: "CK", name: "Cook Islands", flag: "ck.svg", capital: "Avarua" },
  { code: "CR", name: "Costa Rica", flag: "cr.svg", capital: "San Jose" },
  { code: "HR", name: "Croatia", flag: "hr.svg", capital: "Zagreb" },
  { code: "CU", name: "Cuba", flag: "cu.svg", capital: "Havana" },
  { code: "CW", name: "Curacao", flag: "cw.svg", capital: "Willemstad" },
  { code: "CY", name: "Cyprus", flag: "cy.svg", capital: "Nicosia" },
  { code: "CZ", name: "Czechia", flag: "cz.svg", capital: "Prague" },
  { code: "CI", name: "Cote d'Ivoire", flag: "ci.svg", capital: "Yamoussoukro" },
  { code: "DK", name: "Denmark", flag: "dk.svg", capital: "Copenhagen" },
  { code: "DJ", name: "Djibouti", flag: "dj.svg", capital: "Djibouti" },
  { code: "DM", name: "Dominica", flag: "dm.svg", capital: "Roseau" },
  { code: "DO", name: "Dominican Republic", flag: "do.svg", capital: "Santo Domingo" },
  { code: "EC", name: "Ecuador", flag: "ec.svg", capital: "Quito" },
  { code: "EG", name: "Egypt", flag: "eg.svg", capital: "Cairo" },
  { code: "SV", name: "El Salvador", flag: "sv.svg", capital: "San Salvador" },
  { code: "GQ", name: "Equatorial Guinea", flag: "gq.svg", capital: "Malabo" },
  { code: "ER", name: "Eritrea", flag: "er.svg", capital: "Asmara" },
  { code: "EE", name: "Estonia", flag: "ee.svg", capital: "Tallinn" },
  { code: "SZ", name: "Eswatini", flag: "sz.svg", capital: "Lobamba" },
  { code: "ET", name: "Ethiopia", flag: "et.svg", capital: "Addis Ababa" },
  { code: "FK", name: "Falkland Islands", flag: "fk.svg", capital: "Stanley" },
  { code: "FO", name: "Faroe Islands", flag: "fo.svg", capital: "Torshavn" },
  { code: "FJ", name: "Fiji", flag: "fj.svg", capital: "Suva" },
  { code: "FI", name: "Finland", flag: "fi.svg", capital: "Helsinki" },
  { code: "FR", name: "France", flag: "fr.svg", capital: "Paris" },
  { code: "GA", name: "Gabon", flag: "ga.svg", capital: "Libreville" },
  { code: "GM", name: "Gambia", flag: "gm.svg", capital: "Banjul" },
  { code: "GE", name: "Georgia", flag: "ge.svg", capital: "Tbilisi" },
  { code: "DE", name: "Germany", flag: "de.svg", capital: "Berlin" },
  { code: "GH", name: "Ghana", flag: "gh.svg", capital: "Accra" },
  { code: "GI", name: "Gibraltar", flag: "gi.svg", capital: "Gibraltar" },
  { code: "GR", name: "Greece", flag: "gr.svg", capital: "Athens" },
  { code: "GL", name: "Greenland", flag: "gl.svg", capital: "Nuuk" },
  { code: "GD", name: "Grenada", flag: "gd.svg", capital: "St. George's" },
  { code: "GU", name: "Guam", flag: "gu.svg", capital: "Hagatna" },
  { code: "GT", name: "Guatemala", flag: "gt.svg", capital: "Guatemala City" },
  { code: "GG", name: "Guernsey", flag: "gg.svg", capital: "St. Peter Port" },
  { code: "GN", name: "Guinea", flag: "gn.svg", capital: "Conakry" },
  { code: "GW", name: "Guinea-Bissau", flag: "gw.svg", capital: "Bissau" },
  { code: "GY", name: "Guyana", flag: "gy.svg", capital: "Georgetown" },
  { code: "HT", name: "Haiti", flag: "ht.svg", capital: "Port-au-Prince" },
  { code: "VA", name: "Holy See", flag: "va.svg", capital: "Vatican City" },
  { code: "HN", name: "Honduras", flag: "hn.svg", capital: "Tegucigalpa" },
  { code: "HK", name: "Hong Kong", flag: "hk.svg", capital: "City of Victoria" },
  { code: "HU", name: "Hungary", flag: "hu.svg", capital: "Budapest" },
  { code: "IS", name: "Iceland", flag: "is.svg", capital: "Reykjavik" },
  { code: "IN", name: "India", flag: "in.svg", capital: "New Delhi" },
  { code: "ID", name: "Indonesia", flag: "id.svg", capital: "Jakarta" },
  { code: "IR", name: "Iran", flag: "ir.svg", capital: "Tehran" },
  { code: "IQ", name: "Iraq", flag: "iq.svg", capital: "Baghdad" },
  { code: "IE", name: "Ireland", flag: "ie.svg", capital: "Dublin" },
  { code: "IM", name: "Isle of Man", flag: "im.svg", capital: "Douglas" },
  { code: "IL", name: "Israel", flag: "il.svg", capital: "Jerusalem" },
  { code: "IT", name: "Italy", flag: "it.svg", capital: "Rome" },
  { code: "JM", name: "Jamaica", flag: "jm.svg", capital: "Kingston" },
  { code: "JP", name: "Japan", flag: "jp.svg", capital: "Tokyo" },
  { code: "JE", name: "Jersey", flag: "je.svg", capital: "Saint Helier" },
  { code: "JO", name: "Jordan", flag: "jo.svg", capital: "Amman" },
  { code: "KZ", name: "Kazakhstan", flag: "kz.svg", capital: "Astana" },
  { code: "KE", name: "Kenya", flag: "ke.svg", capital: "Nairobi" },
  { code: "KI", name: "Kiribati", flag: "ki.svg", capital: "South Tarawa" },
  { code: "KP", name: "North Korea", flag: "kp.svg", capital: "Pyongyang" },
  { code: "KR", name: "South Korea", flag: "kr.svg", capital: "Seoul" },
  { code: "KW", name: "Kuwait", flag: "kw.svg", capital: "Kuwait City" },
  { code: "KG", name: "Kyrgyzstan", flag: "kg.svg", capital: "Bishkek" },
  { code: "LA", name: "Laos", flag: "la.svg", capital: "Vientiane" },
  { code: "LV", name: "Latvia", flag: "lv.svg", capital: "Riga" },
  { code: "LB", name: "Lebanon", flag: "lb.svg", capital: "Beirut" },
  { code: "LS", name: "Lesotho", flag: "ls.svg", capital: "Maseru" },
  { code: "LR", name: "Liberia", flag: "lr.svg", capital: "Monrovia" },
  { code: "LY", name: "Libya", flag: "ly.svg", capital: "Tripoli" },
  { code: "LI", name: "Liechtenstein", flag: "li.svg", capital: "Vaduz" },
  { code: "LT", name: "Lithuania", flag: "lt.svg", capital: "Vilnius" },
  { code: "LU", name: "Luxembourg", flag: "lu.svg", capital: "Luxembourg" },
  { code: "MG", name: "Madagascar", flag: "mg.svg", capital: "Antananarivo" },
  { code: "MW", name: "Malawi", flag: "mw.svg", capital: "Lilongwe" },
  { code: "MY", name: "Malaysia", flag: "my.svg", capital: "Kuala Lumpur" },
  { code: "MV", name: "Maldives", flag: "mv.svg", capital: "Male" },
  { code: "ML", name: "Mali", flag: "ml.svg", capital: "Bamako" },
  { code: "MT", name: "Malta", flag: "mt.svg", capital: "Valletta" },
  { code: "MH", name: "Marshall Islands", flag: "mh.svg", capital: "Majuro" },
  { code: "MR", name: "Mauritania", flag: "mr.svg", capital: "Nouakchott" },
  { code: "MU", name: "Mauritius", flag: "mu.svg", capital: "Port Louis" },
  { code: "MX", name: "Mexico", flag: "mx.svg", capital: "Mexico City" },
  { code: "FM", name: "Micronesia", flag: "fm.svg", capital: "Palikir" },
  { code: "MD", name: "Moldova", flag: "md.svg", capital: "Chisinau" },
  { code: "MC", name: "Monaco", flag: "mc.svg", capital: "Monaco" },
  { code: "MN", name: "Mongolia", flag: "mn.svg", capital: "Ulan Bator" },
  { code: "ME", name: "Montenegro", flag: "me.svg", capital: "Podgorica" },
  { code: "MS", name: "Montserrat", flag: "ms.svg", capital: "Plymouth" },
  { code: "MA", name: "Morocco", flag: "ma.svg", capital: "Rabat" },
  { code: "MZ", name: "Mozambique", flag: "mz.svg", capital: "Maputo" },
  { code: "MM", name: "Myanmar", flag: "mm.svg", capital: "Naypyidaw" },
  { code: "NA", name: "Namibia", flag: "na.svg", capital: "Windhoek" },
  { code: "NR", name: "Nauru", flag: "nr.svg", capital: "Yaren" },
  { code: "NP", name: "Nepal", flag: "np.svg", capital: "Kathmandu" },
  { code: "NL", name: "Netherlands", flag: "nl.svg", capital: "Amsterdam" },
  { code: "NC", name: "New Caledonia", flag: "nc.svg", capital: "Noumea" },
  { code: "NZ", name: "New Zealand", flag: "nz.svg", capital: "Wellington" },
  { code: "NI", name: "Nicaragua", flag: "ni.svg", capital: "Managua" },
  { code: "NE", name: "Niger", flag: "ne.svg", capital: "Niamey" },
  { code: "NG", name: "Nigeria", flag: "ng.svg", capital: "Abuja" },
  { code: "NU", name: "Niue", flag: "nu.svg", capital: "Alofi" },
  { code: "NF", name: "Norfolk Island", flag: "nf.svg", capital: "Kingston" },
  { code: "MP", name: "Northern Mariana Islands", flag: "mp.svg", capital: "Saipan" },
  { code: "NO", name: "Norway", flag: "no.svg", capital: "Oslo" },
  { code: "OM", name: "Oman", flag: "om.svg", capital: "Muscat" },
  { code: "PK", name: "Pakistan", flag: "pk.svg", capital: "Islamabad" },
  { code: "PW", name: "Palau", flag: "pw.svg", capital: "Ngerulmud" },
  { code: "PS", name: "Palestine", flag: "ps.svg", capital: "Ramallah" },
  { code: "PA", name: "Panama", flag: "pa.svg", capital: "Panama City" },
  { code: "PG", name: "Papua New Guinea", flag: "pg.svg", capital: "Port Moresby" },
  { code: "PY", name: "Paraguay", flag: "py.svg", capital: "Asuncion" },
  { code: "PE", name: "Peru", flag: "pe.svg", capital: "Lima" },
  { code: "PH", name: "Philippines", flag: "ph.svg", capital: "Manila" },
  { code: "PN", name: "Pitcairn", flag: "pn.svg", capital: "Adamstown" },
  { code: "PL", name: "Poland", flag: "pl.svg", capital: "Warsaw" },
  { code: "PT", name: "Portugal", flag: "pt.svg", capital: "Lisbon" },
  { code: "PR", name: "Puerto Rico", flag: "pr.svg", capital: "San Juan" },
  { code: "QA", name: "Qatar", flag: "qa.svg", capital: "Doha" },
  { code: "MK", name: "North Macedonia", flag: "mk.svg", capital: "Skopje" },
  { code: "RO", name: "Romania", flag: "ro.svg", capital: "Bucharest" },
  { code: "RU", name: "Russia", flag: "ru.svg", capital: "Moscow" },
  { code: "RW", name: "Rwanda", flag: "rw.svg", capital: "Kigali" },
  { code: "SH", name: "Saint Helena", flag: "sh.svg", capital: "Jamestown" },
  { code: "KN", name: "Saint Kitts and Nevis", flag: "kn.svg", capital: "Basseterre" },
  { code: "LC", name: "Saint Lucia", flag: "lc.svg", capital: "Castries" },
  { code: "VC", name: "Saint Vincent", flag: "vc.svg", capital: "Kingstown" },
  { code: "WS", name: "Samoa", flag: "ws.svg", capital: "Apia" },
  { code: "SM", name: "San Marino", flag: "sm.svg", capital: "City of San Marino" },
  { code: "ST", name: "Sao Tome", flag: "st.svg", capital: "Sao Tome" },
  { code: "SA", name: "Saudi Arabia", flag: "sa.svg", capital: "Riyadh" },
  { code: "SN", name: "Senegal", flag: "sn.svg", capital: "Dakar" },
  { code: "RS", name: "Serbia", flag: "rs.svg", capital: "Belgrade" },
  { code: "SC", name: "Seychelles", flag: "sc.svg", capital: "Victoria" },
  { code: "SL", name: "Sierra Leone", flag: "sl.svg", capital: "Freetown" },
  { code: "SG", name: "Singapore", flag: "sg.svg", capital: "Singapore" },
  { code: "SX", name: "Sint Maarten", flag: "sx.svg", capital: "Philipsburg" },
  { code: "SK", name: "Slovakia", flag: "sk.svg", capital: "Bratislava" },
  { code: "SI", name: "Slovenia", flag: "si.svg", capital: "Ljubljana" },
  { code: "SB", name: "Solomon Islands", flag: "sb.svg", capital: "Honiara" },
  { code: "SO", name: "Somalia", flag: "so.svg", capital: "Mogadishu" },
  { code: "ZA", name: "South Africa", flag: "za.svg", capital: "Pretoria" },
  { code: "GS", name: "South Georgia", flag: "gs.svg", capital: "King Edward Point" },
  { code: "SS", name: "South Sudan", flag: "ss.svg", capital: "Juba" },
  { code: "ES", name: "Spain", flag: "es.svg", capital: "Madrid" },
  { code: "LK", name: "Sri Lanka", flag: "lk.svg", capital: "Colombo" },
  { code: "SD", name: "Sudan", flag: "sd.svg", capital: "Khartoum" },
  { code: "SR", name: "Suriname", flag: "sr.svg", capital: "Paramaribo" },
  { code: "SJ", name: "Svalbard", flag: "sj.svg", capital: "Longyearbyen" },
  { code: "SE", name: "Sweden", flag: "se.svg", capital: "Stockholm" },
  { code: "CH", name: "Switzerland", flag: "ch.svg", capital: "Bern" },
  { code: "SY", name: "Syrian Arab Republic", flag: "sy.svg", capital: "Damascus" },
  { code: "TW", name: "Taiwan", flag: "tw.svg", capital: "Taipei" },
  { code: "TJ", name: "Tajikistan", flag: "tj.svg", capital: "Dushanbe" },
  { code: "TZ", name: "Tanzania", flag: "tz.svg", capital: "Dodoma" },
  { code: "TH", name: "Thailand", flag: "th.svg", capital: "Bangkok" },
  { code: "TL", name: "Timor-Leste", flag: "tl.svg", capital: "Dili" },
  { code: "TG", name: "Togo", flag: "tg.svg", capital: "Lome" },
  { code: "TK", name: "Tokelau", flag: "tk.svg", capital: "Fakaofo" },
  { code: "TO", name: "Tonga", flag: "to.svg", capital: "Nuku'alofa" },
  { code: "TT", name: "Trinidad", flag: "tt.svg", capital: "Port of Spain" },
  { code: "TN", name: "Tunisia", flag: "tn.svg", capital: "Tunis" },
  { code: "TR", name: "Turkey", flag: "tr.svg", capital: "Ankara" },
  { code: "TM", name: "Turkmenistan", flag: "tm.svg", capital: "Ashgabat" },
  { code: "TC", name: "Turks and Caicos Islands", flag: "tc.svg", capital: "Cockburn Town" },
  { code: "TV", name: "Tuvalu", flag: "tv.svg", capital: "Funafuti" },
  { code: "UG", name: "Uganda", flag: "ug.svg", capital: "Kampala" },
  { code: "UA", name: "Ukraine", flag: "ua.svg", capital: "Kyiv" },
  { code: "AE", name: "United Arab Emirates", flag: "ae.svg", capital: "Abu Dhabi" },
  { code: "GB", name: "United Kingdom", flag: "gb.svg", capital: "London" },
  { code: "US", name: "USA", flag: "us.svg", capital: "Washington D.C." },
  { code: "UY", name: "Uruguay", flag: "uy.svg", capital: "Montevideo" },
  { code: "UZ", name: "Uzbekistan", flag: "uz.svg", capital: "Tashkent" },
  { code: "VU", name: "Vanuatu", flag: "vu.svg", capital: "Port Vila" },
  { code: "VE", name: "Venezuela", flag: "ve.svg", capital: "Caracas" },
  { code: "VN", name: "Viet Nam", flag: "vn.svg", capital: "Hanoi" },
  { code: "EH", name: "Western Sahara", flag: "eh.svg", capital: "El Aaiun" },
  { code: "YE", name: "Yemen", flag: "ye.svg", capital: "Sana'a" },
  { code: "ZM", name: "Zambia", flag: "zm.svg", capital: "Lusaka" },
  { code: "ZW", name: "Zimbabwe", flag: "zw.svg", capital: "Harare" },
  { code: "AX", name: "Aland Islands", flag: "ax.svg", capital: "Mariehamn" },
]
