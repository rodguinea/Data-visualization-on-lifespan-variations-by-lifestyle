const app = Vue.createApp({
    data(){
        return {
            x_dim: 1200,
            y_dim: 1500, 
            rMin: 45, /* Diameter of the smallest circle at the center */
            aMin: 0, /* Polar origin */
            flag: false,
            initOpacity: 0.7,
            opacities: [],
            showDetail: false,
            studyTitle: null,
            studySupport: null,
            details: null,
            yearsGained:null,
            additionalInformation:null,
            url:null,
            source:null,
            showModal: null,
            note:null,
            studies: [
                {
                    "variable": "Lifestyle of non-smoking, exercise, and healthy eating",
                    "control_level": "3",
                    "years_male": "14",
                    "years_female": "14",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "additional": "study of 20,244 men and women aged 45â€“79 found that 4 health behaviours (non-smoking / physically active / healthy eating / moderate alcohol intake) had an estimated impact on mortality equivalent to 14 y in chronological age",
                    "source": "Khaw KT, et al. (2008). Combined impact of health behaviours and mortality in men and women: the EPIC Norfolk prospective population study. PLoS Medicine 5(1), 39â€“47.",
                    "url": "http://www.plosmedicine.org/article/info:doi/10.1371/journal.pmed.0050012"
                },
                {
                    "variable": "A little alcohol",
                    "control_level": "4",
                    "years_male": "2",
                    "years_female": "0",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "A little is fine",
                    "additional": "gain 2 years by consuming less than 2 units of alcohol a day (roughly just under 1 pint of lager) against someone who completely abstains from drinking.",
                    "source": "Guardian; Wikipedia (units)",
                    "url": "http://www.guardian.co.uk/society/2009/apr/30/alcohol-life-expectancy-live-longer"
                },
                {
                    "variable": "A little exercise",
                    "control_level": "5",
                    "years_male": "2",
                    "years_female": "2",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "note": "10 minutes a week",
                    "additional": "Activities like gardening, walking, or dancing in a non-vigorous, leisurely way for 10 minutes to an hour per week was associated with an 18-percent lower risk of death compared to people who did nothing",
                    "source": "British Medical Journal",
                    "url": "https://bjsm.bmj.com/content/early/2019/02/26/bjsports-2018-099254"
                },
                {
                    "variable": "A little wine",
                    "control_level": "5",
                    "years_male": "5",
                    "years_female": "5",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "A little wine is fine",
                    "additional": "gain 5 years by consuming less than 2 units of wine a day (half a glass, or 175ml) against those who completely abstain from drinking",
                    "source": "Guardian; Wikipedia (units)",
                    "url": "http://www.guardian.co.uk/society/2009/apr/30/alcohol-life-expectancy-live-longer"
                },
                {
                    "variable": "Alcohol (heavy abuse)",
                    "control_level": "1",
                    "years_male": "-11",
                    "years_female": "-11",
                    "scientific_support_level": "3",
                    "scientific_support_label": "Good",
                    "note": "A lot is bad",
                    "additional": "Alcoholism reduces life expectancy by about 10 - 12 years.",
                    "source": "New York Times",
                    "url": "http://health.nytimes.com/health/guides/disease/alcoholism/possible-complications.html"
                },
                {
                    "variable": "Avoid cancer",
                    "control_level": "2",
                    "years_male": "15",
                    "years_female": "15",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "additional": "gain in life expectancy at birth for those individuals who would have died of cancer = 15 years.\r\n\r\nThe gains in life expectancy due to the elimination of cancer as a cause of death are then 3.35 years at birth and 3.12 years at age 50 - this is a gain in life expectancy spread across the WHOLE population though.",
                    "source": "Centres for Disease Control & Prevention",
                    "url": "http://www.cdc.gov/nchs/data/lifetables/life89_1_4.pdf"
                },
                {
                    "variable": "Avoid heart disease",
                    "control_level": "3",
                    "years_male": "13",
                    "years_female": "13",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "additional": "- Eliminating heart disease would increase life expectancy at birth by nearly 13 years for those who would otherwise have died of heart disease.\r\n- Elimination of heart disease would increase life expectancy at birth by nearly 5 years for whole population i.e. a person aged 50 years would expect to live an additional 4.63 years if heart disease were eliminated as a cause of death.",
                    "source": "Centres for Disease Control & Prevention",
                    "url": "http://www.cdc.gov/nchs/data/lifetables/life89_1_4.pdf"
                },
                {
                    "variable": "Being a woman",
                    "control_level": "1",
                    "years_male": "0",
                    "years_female": "5.1",
                    "scientific_support_level": "3",
                    "scientific_support_label": "Good",
                    "additional": "US, 2006 - difference between male and female life expectancy was 5.1 years",
                    "source": "Centres for Disease Control & Prevention",
                    "url": "www.cdc.gov/nchs/data/nvsr/nvsr57/nvsr57_14.pdf"
                },
                {
                    "variable": "City living",
                    "control_level": "2",
                    "years_male": "-2.5",
                    "years_female": "-2.5",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "Or living near a busy road",
                    "additional": "According to a Canadaâ€™s McMaster University study, just living next to a busy road could knock 2.5 years off your life due to increased exposure to traffic air pollution",
                    "source": "2004 study by Murray Finkelstein @ Canada McMaster University",
                    "url": "http://aje.oxfordjournals.org/content/160/2/173.full"
                },
                {
                    "variable": "Country living",
                    "control_level": "2",
                    "years_male": "8",
                    "years_female": "8",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "Compared to living next to a busy road",
                    "additional": "Countryside dwellers have a life expectancy of 84 years, as opposed to 76 for townies.",
                    "source": "2004 study by Murray Finkelstein @ Canada McMaster University",
                    "url": "http://aje.oxfordjournals.org/content/160/2/173.full"
                },
                {
                    "variable": "Good marriage",
                    "control_level": "2",
                    "years_male": "10",
                    "years_female": "10",
                    "scientific_support_level": "3",
                    "scientific_support_label": "Good",
                    "additional": "Having a spouse can decrease your risk for dying from cancer as much as knocking ten years off your life. Single people spend longer in the hospital, and have a greater risk of dying after surgery",
                    "source": "Linda Waite, university of chicago, 'The Case for Marriage: Why Married People Are Happier, Healthier, and Better off Financially'",
                    "url": "http://www.psychpage.com/family/brwaitgalligher.html"
                },
                {
                    "variable": "Greater faith (churchgoing)",
                    "control_level": "2",
                    "years_male": "5",
                    "years_female": "7",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "Studies show it does and also doesn't, perhaps remaining active with the church.",
                    "additional": "Research conducted partly at the University of Colorado at Boulder has found that regular churchgoers live longer than people who seldom or never attend worship services. Life expectancy beyond age 20 averages another 55.3 years, to age 75, for those who never attend church compared to another 62.9 years, age 83, for those who go more than once a week.",
                    "source": "Science Daily; Demography (1999) 'Religious involvement and adult mortality'",
                    "url": "http://www.sciencedaily.com/releases/1999/05/990517064323.htm"
                },
                {
                    "variable": "Healthy eating",
                    "control_level": "4",
                    "years_male": "7",
                    "years_female": "7",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "note": "Japanese / Mediterannean diet will lengthen life & reduce risks of cancer. calc applies to mediterannean diet only",
                    "additional": "Figure given for Mediterannean diet. JAPANESE: A diet comprising one-third less than the recommended 2,300 calories and meals including fish, vegetables and soya products, was cited as the reason for a high life expectancy on the Japanese island of Okinawa, where the worldâ€™s highest number of people over 90 live.                                                                                                                  MEDITERANNEAN: In people ages 70â€“90, eating a Mediterranean-style diet and greater physical activity are associated with 65â€“73% lower rates of all-cause mortality, as well as mortality due to CHD, CVD and cancer. ",
                    "source": "Amazon (book) The Okinawa Program : How the World's Longest-Lived People Achieve Everlasting Health (2002); American Heart Association (2009)",
                    "url": "http://www.amazon.com/Okinawa-Program-Longest-Lived-Everlasting-Health/dp/0609807501"
                },
                {
                    "variable": "Less food",
                    "control_level": "3",
                    "years_male": "11.67",
                    "years_female": "11.67",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "30% less calories increases primate and rat life. assumes humans affected same way as monkeys",
                    "additional": "shown to increase rhesus monkey lifespans by 10-20% (4 years); the most striking extensions of life span occur when put on the diet from birth.",
                    "source": "New Scientist; New York Times",
                    "url": "www.newscientist.com/article/mg20327175.600-eating-less-may-be-the-key-to-living-longer.html"
                },
                {
                    "variable": "Living at high altitude",
                    "control_level": "2",
                    "years_male": "3.6",
                    "years_female": "0.5",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "note": "Compared to living at sea-level. 0.5-2.5 for women, 1.2-3.6 for men. ",
                    "additional": "\"Lower oxygen levels turn on certain genes and we think those genes may change the way heart muscles function. They may also produce new blood vessels that create new highways for blood flow into the heart,  also increased solar radiation at altitude helps the body better synthesize vitamin D which has also been shown to have beneficial effects on the heart and some kinds of cancer..\" mountain village residents had lower death rates, and lower rates of death from heart disease, than their peers in the lowlands; concluded that high altitude enables the body to cope with lower levels of oxygen & made for a healthier heart. ",
                    "source": "based on a study by University of Athens Medical School in Journal of Epidemiology and Community Health, March 2005; BBC News",
                    "url": "http://www.medicalnewstoday.com/releases/21265.php"
                },
                {
                    "variable": "Mental Illness",
                    "control_level": "1",
                    "years_male": "-25",
                    "years_female": "-25",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "note": "Severe",
                    "additional": "Study found that those with severe mental illness are two to three times more likely to have chronic medical conditions and have a 25-year shorter life expectancy on average than the general population",
                    "source": "Joseph Parks, director of psychiatric services for the Missouri Department of Mental Health.",
                    "url": "http://www.healio.com/psychiatry/journals/PsycAnn/%7B9D5D6D5E-31F4-4180-9BA8-4B71AE8D6617%7D/Mental-Health-Community-Case-Management-and-Its-Effect-on-Healthcare-Expenditures"
                },
                {
                    "variable": "More close friends",
                    "control_level": "3",
                    "years_male": "5.3",
                    "years_female": "5.3",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "Strong social relationships. based on calc (50% = 5.3 years)",
                    "additional": "people with stronger social relationships had a 50% increased likelihood of survival than those with weaker social relationships. loneliness as bad for you as smoking 15 cigarettes a day",
                    "source": "Guardian; Plos Medicine",
                    "url": "http://www.guardian.co.uk/lifeandstyle/2010/jul/27/friendship-relationships-good-health-study"
                },
                {
                    "variable": "More conscientious & stable",
                    "control_level": "2",
                    "years_male": "2.5",
                    "years_female": "2.5",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "As opposed to taking risks.",
                    "additional": "Traits that mark people as conscientious: thinking things through before acting, being dependable in following through on their commitments, adopting conventional norms of morality and being neat and orderly. ",
                    "source": "Kern et al (2008) 'Do conscientious individuals live longer? A quantitative review.'; New York Times; 'Personality Predictors of Longevity: Activity, Emotional Stability, and Conscientiousness' (2008)",
                    "url": "www.ncbi.nlm.nih.gov/pubmed/18823176?ordinalpos=1&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DiscoveryPanel.Pubmed_Discovery_RA&linkpos=4&log$=relatedreviews&logdbfrom=pubmed"
                },
                {
                    "variable": "More exercise",
                    "control_level": "4",
                    "years_male": "2",
                    "years_female": "2",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "note": "150 minutes a week of moderate-intensity, leisure time exercise",
                    "additional": "Researchers from the National Cancer Institute, Harvard Medical School. Another study has shown that lots of physical activity combined with frequently eating nuts, not eating meat and maintaining a stable weight can lengthen life by 1.5 - 2.5 years. In a large US study, brisk walking for 450+ min/wk) increased life expectancy by 4.5 years compared to those who did no activity. Being activeâ€”having a physical activity level at or above the WHO-recommended minimum of 150 minutes of brisk walking per weekâ€”was associated with an overall gain of life expectancy of 3.4â€“4.5 years.",
                    "source": "CBS; Harvard Health Publication: Living to 100",
                    "url": "http://wtvr.com/2012/11/07/study-says-exercise-lengthens-life-even-if-youre-overweight/"
                },
                {
                    "variable": "More health checks #2",
                    "control_level": "3",
                    "years_male": "0.14",
                    "years_female": "0.14",
                    "scientific_support_level": "3",
                    "scientific_support_label": "Good",
                    "note": "preventative health screening in 30-49 year olds",
                    "additional": "Preventive health screening and consultation in primary care in 30- to 49-year-olds produce significantly better life expectancy without extra direct and total costs over a six-year follow-up period.",
                    "source": "National Center for Biotechnology Information",
                    "url": "http://www.ncbi.nlm.nih.gov/pubmed/17786799"
                },
                {
                    "variable": "More meditation",
                    "control_level": "4",
                    "years_male": "12",
                    "years_female": "12",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "as well as Yoga / Tai Chi - as relaxation exercises they all reduce health risks in older people",
                    "additional": "A study of 2,000 seniors found that those who did relaxation exercises daily had 87% fewer heart attacks than is normal for their age group; 55% fewer cancerous tumors; & 87% fewer nervous disorders. ",
                    "source": "Marmot M (2005) 'Social determinants of longevity and mortality'",
                    "url": "http://sagecrossroads.net/webcast26"
                },
                {
                    "variable": "More money",
                    "control_level": "3",
                    "years_male": "7.5",
                    "years_female": "7.5",
                    "scientific_support_level": "3",
                    "scientific_support_label": "Good",
                    "note": "as opposed to not having much",
                    "additional": "On average, poorer people in the UK become ill and die five to ten years earlier than their more privileged counterparts, in effect 'ageing' more quickly. ",
                    "source": "Perlman RL (2008). Socioeconomic inequalities in ageing and health. Lancet 372, S34â€“S39. Fries JF (1980).  ; Ageing, natural death and the compression of morbidity and health in the elderly. New England Journal of Medicine 313, 407â€“428.\r\n",
                    "url": "http://www.bmj.com/cgi/content/full/319/7215/953"
                },
                {
                    "variable": "More optimism",
                    "control_level": "2",
                    "years_male": "0",
                    "years_female": "2",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "& faith in fellow humans. calc takes average % of optimism / lack of cynicism",
                    "additional": "Women within the highest 25% of optimism scores had a 9% lower chance of developing heart disease and a 14% lower chance of dying of any cause. Women with the highest degree of cynical hostility were 16% more likely to die than those with the most trust in their fellow humans.",
                    "source": "Source: Hilary A. Tindle, M.D., assistant professor, medicine, University of Pittsburgh; Suzanne Steinbaum, M.D., director, woman and heart disease, Lenox Hill Hospital, New York City; Aug. 10, 2009, Circulation",
                    "url": "www.nlm.nih.gov/medlineplus/news/fullstory_87950.html"
                },
                {
                    "variable": "More pets",
                    "control_level": "4",
                    "years_male": "3.21",
                    "years_female": "3.21",
                    "scientific_support_level": "3",
                    "scientific_support_label": "Good",
                    "note": "particularly for elderly. calc assumes that heart attack would cause death",
                    "additional": "(1) Cats - According to a study by the Minnesota Stroke Institute that followed more than 4,000 cat owners over 10 years, owning a cat can dramatically reduce a person's chance of dying from heart disease [source: Mundell]. Specifically, people who owned cats were 30 percent less likely to suffer a heart attack. (2) It has also been found that pets in general can help older people and patients recovering from major illness",
                    "source": "Medical News Today; National Center for Biotechnology Information",
                    "url": "http://www.medicalnewstoday.com/articles/98432.php"
                },
                {
                    "variable": "More professional responsibility",
                    "control_level": "3",
                    "years_male": "3.5",
                    "years_female": "3.5",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "higher and managerial professionals live longer from age 65+ compare to those with \"routine\" work",
                    "additional": "At age 65, LE of males (2002-06) classified by occupation as Higher managerial and professional was 18.8 years compared with 15.3 years for those assigned to occupations classifies as â€œRoutineâ€ ",
                    "source": "Longevity Science Advisory Panel",
                    "url": "http://www.longevitypanel.co.uk/docs/life-expectancy-by-socio-economic-group.pdf"
                },
                {
                    "variable": "Obesity",
                    "control_level": "2",
                    "years_male": "-8.5",
                    "years_female": "-8.5",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "additional": "In one study, US 18 year olds with a BMI above 35 had a life expectancy reduced by five to 12 years depending on race, sex, and whether or not the person smoked. The largest reduction in life expectancy occurred for white male smokers.",
                    "source": "NIH News",
                    "url": "www.nih.gov/news/pr/mar2005/nia-16.htm"
                },
                {
                    "variable": "Orgasms",
                    "control_level": "5",
                    "years_male": "4",
                    "years_female": "4",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "additional": "Dr Roizen - \"The typical man who has 350 orgasms a year, versus the national average of around a quarter of that, lives about four years longer.\" And more than those extra four years, Roizen says, the men will feel eight years younger than their contemporaries. ",
                    "source": "Men's Journal; Revista Mexicana de Anestesiología",
                    "url": "http://www.mensjournal.com/health-fitness/health/the-best-reason-to-have-sex-20121001"
                },
                {
                    "variable": "Polygamy",
                    "control_level": "1",
                    "years_male": "9.3",
                    "years_female": "0",
                    "scientific_support_level": "1",
                    "scientific_support_label": "Debated",
                    "note": "Many woman",
                    "additional": "12% increase, compared to average lifespan",
                    "source": "New Scientist",
                    "url": "http://www.newscientist.com/article/dn14564-polygamy-is-the-key-to-a-long-life.html"
                },
                {
                    "variable": "Red Meat",
                    "control_level": "4",
                    "years_male": "-1",
                    "years_female": "-1",
                    "scientific_support_level": "3",
                    "scientific_support_label": "Good",
                    "additional": "risk of dying in a given year increases by 13% if diet has a high red meat content. argues that eating burger has equivalent life-shortening effects as smoking 2 cigarettes a day.",
                    "source": "BBC News",
                    "url": "http://www.bbc.co.uk/news/magazine-17389938"
                },
                {
                    "variable": "Sitting down",
                    "control_level": "3",
                    "years_male": "-2.996",
                    "years_female": "-2.996",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "for 8-11 hours sitting a day",
                    "additional": "No matter how much you exercise, sitting too much raises your risk of death. Regardless of whether youâ€™re exercising for 5 hours a week, the fact that youâ€™re sitting for the rest raises the risk of death: you canâ€™t outrun your desk job. Compared to 4 hours per day of sitting, mortality rates for 4-8 sitting hours/day were 3.96% higher, 8-11 sitting h/d were 28% higher, 11+ sitting hours/day were 68.57% higher, regardless of the amount of exercise done.",
                    "source": "Sydney School of Public Health research paper (2012)",
                    "url": "http://www.ncbi.nlm.nih.gov/pubmed/22450936"
                },
                {
                    "variable": "Smoking",
                    "control_level": "2",
                    "years_male": "-10",
                    "years_female": "-10",
                    "scientific_support_level": "4",
                    "scientific_support_label": "Strong",
                    "note": "10 years gained (against those who continue to smoke) if you quit smoking between the ages of 25 and 24; 5 years gained if you quit smoking between the ages of 45 and 59",
                    "additional": "14 if combined with exercise and eating healthy; HOWEVER those who quit smoking before they turn 35 can gain most if not all of that decade back, and even those who wait until middle age to kick the habit can add about five years back to their life expectancies.",
                    "source": "Khaw KT, et al. (2008). Combined impact of health behaviours and mortality in men and women: the EPIC Norfolk prospective population study. PLoS Medicine 5(1), 39â€“47.",
                    "url": "http://www.washingtonpost.com/wp-dyn/articles/A61981-2004Jun22.html"
                },
                {
                    "variable": "Spending more time with women ",
                    "control_level": "3",
                    "years_male": "15",
                    "years_female": "0",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "in formative years of secondary / high school",
                    "additional": "Study found significant positive relationship between a man's life expectancy and the sex ratio of the secondary school he attended (i.e. higher % of females). Found that the average white American male who was 65 in 1993 could expect to live another 15 years having spent time around women at school.",
                    "source": "Economist",
                    "url": "http://christakis.med.harvard.edu/pdf/media-talks/archive/ec_2010_08_11.pdf"
                },
                {
                    "variable": "Too much sleeping",
                    "control_level": "5",
                    "years_male": "-1.498",
                    "years_female": "-1.498",
                    "scientific_support_level": "2",
                    "scientific_support_label": "Suggestive",
                    "note": "7 hours ideal, no more than 8 hrs a night",
                    "additional": "Averaging more than 8 hours sleep a night will increase your chances of dying within 6 years by 13-15%, than if you average 7 hours a night. 7 hours sleep = the 'safest'; but sleeping for five hours a night is less risky than eight; the average sleep time in the western world is now 6.5 hours",
                    "source": "New Scientist",
                    "url": "http://www.newscientist.com/article/dn1928-seven-hours-sleep-the-safest.html"
                }
            ]
        }
    },
    methods: {
        varPts(rs, idStudy, ri){ 
        /* Return three points in the arc that corresponds to idStudy: (p1x,p1y) and (p2x,p2y) for an angle of varArc without considering the padding pad*/
            
            var pad = (2*Math.PI/this.sum)*0.10
            var varArc = (2*Math.PI/this.sum)
            var oy = this.y_center
            var totArc1 = (varArc)*(idStudy) 
            var totArc2 = (varArc)*(idStudy-1) + pad

            var semiArc = (totArc1 + totArc2)/2

            if(ri==0){
                oxn = this.x_center + rs
            }else{
                oxn = this.x_center + rs + ri
            }

                var x1 = +Math.cos(totArc1) * (oxn-this.x_center) - Math.sin(totArc1) * (oy-this.y_center) + this.x_center
                var y1 = -Math.sin(totArc1) * (oxn-this.x_center) - Math.cos(totArc1) * (oy-this.y_center) + this.y_center

                var x2 = +Math.cos(totArc2) * (oxn-this.x_center) - Math.sin(totArc2) * (oy-this.y_center) + this.x_center
                var y2 = -Math.sin(totArc2) * (oxn-this.x_center) - Math.cos(totArc2) * (oy-this.y_center) + this.y_center
 
                var mx = +Math.cos(semiArc) * (oxn-this.x_center) - Math.sin(semiArc) * (oy-this.y_center) + this.x_center
                var my = -Math.sin(semiArc) * (oxn-this.x_center) - Math.cos(semiArc) * (oy-this.y_center) + this.y_center

            return{
                p1x: x1,
                p1y: y1,

                p2x: x2,
                p2y: y2,

                midx: mx,
                midy: my
            }
        },

        max(a, b) {
            a = parseFloat(a)
            b = parseFloat(b)
            c = a > b ? a : b
            return (c < 0 ? 0 : c) + 1.1
        },
        auNum(idStudy){
            if (idStudy <= this.countByCat.g4) {
                return{aun: 8}
            } else if (this.countByCat.g4 < idStudy && idStudy <= (this.countByCat.g4+this.countByCat.g3)) {
                return{aun: 5}
            } else if ((this.countByCat.g4+this.countByCat.g3) < idStudy && idStudy <= (this.countByCat.g4+this.countByCat.g3+this.countByCat.g2)) {
                return{aun: 3}
            } else if ((this.countByCat.g4+this.countByCat.g3+this.countByCat.g2) < idStudy && idStudy <= (this.countByCat.g4+this.countByCat.g3+this.countByCat.g2+this.countByCat.g1)) {
                return{aun: 2} 
            } else {
                return{aun: 1}
            }
        },
        anglePos(n){
            if (n==4) {
                return{an: this.aMin}
            } else if (n==3) {
                return{an:  this.aperture(n+1).tn}
            } else if (n==2) {
                return{an: this.aperture(n+2).tn + this.aperture(n+1).tn}
            } else if (n==1) {
                return{an: this.aperture(n+3).tn + this.aperture(n+2).tn + this.aperture(n+1).tn} 
            } else {
                return{an: this.aMin}
            }
        },
        aperture(n){
            if (n==4) {
                return{tn: 2 * Math.PI * this.countByCat.g4 / this.sum}
            } else if (n==3) {
                return{tn: 2 * Math.PI * this.countByCat.g3 / this.sum}
            } else if (n==2) {
                return{tn: 2 * Math.PI * this.countByCat.g2 / this.sum}
            } else if (n==1) {
                return{tn: 2 * Math.PI * this.countByCat.g1 / this.sum} 
            } else {
                return{tn: 2 * Math.PI * this.countByCat.g4 / this.sum}
            }
        },
        endPts(n, oxn, oy){
            return{
                pnx: +Math.cos(this.anglePos(n).an) * (oxn-this.x_center) - Math.sin(this.anglePos(n).an) * (oy-this.y_center) + this.x_center,
                pny: -Math.sin(this.anglePos(n).an) * (oxn-this.x_center) - Math.cos(this.anglePos(n).an) * (oy-this.y_center) + this.y_center
            }
        },
        oxyPoints(rn){
            return{
                oxn: this.x_center + rn

        }},
        radii(pn){
            return {
                r0: this.rMin, 
                rn: this.rMin*pn
            }
        },
        polarToCartesian(centerX, centerY, radius, angleInDegrees) {
          var angleInRadians = (angleInDegrees);

          return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY - (radius * Math.sin(angleInRadians))
          }
        },
        describeArc(x, y, radius, startAngle, endAngle){

          var start = this.polarToCartesian(x, y, radius, endAngle);
          var end = this.polarToCartesian(x, y, radius, startAngle);

          var arcSweep = endAngle - startAngle <= Math.PI ? "0" : "1";

          var d = [
              "M", end.x, end.y, 
              "A", radius, radius, 0, arcSweep, 0, start.x, start.y
          ].join(" ")
          return d
        },
        textAngle(el, sum){

            var res = 2*Math.PI/sum * (el) - Math.PI/sum

            return -res*180/(Math.PI)
        },
        midPoint(x1, y1, x2, y2){  
            return {
                midx: (x1 + x2) / 2,
                midy: (y1 + y2) / 2
            }
        },
        barH(maxVar, Rs, lifeVar, idStudy){
                var ss = Rs - this.rMin/2
                var h = (ss/maxVar)*lifeVar

                var mx = this.varPts(this.radii(this.auNum(idStudy).aun).rn, idStudy,0).midx
                var my = this.varPts(this.radii(this.auNum(idStudy).aun).rn, idStudy,0).midy

                    var dx = mx - this.x_center 
                    var dy = my - this.y_center
                    var dist = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2))

                var ux = dx/dist
                var uy = dy/dist

                var xL = mx + ux*h
                var yL = my + uy*h

                var lptx = this.varPts(this.radii(this.auNum(idStudy).aun).rn, idStudy,0).p1x + ux*h
                var lpty = this.varPts(this.radii(this.auNum(idStudy).aun).rn, idStudy,0).p1y + uy*h

                var rptx = this.varPts(this.radii(this.auNum(idStudy).aun).rn, idStudy,0).p2x + ux*h
                var rpty = this.varPts(this.radii(this.auNum(idStudy).aun).rn, idStudy,0).p2y + uy*h

            return{
                xLife: xL,
                yLife: yL,

                lxLife: lptx,
                lyLife: lpty,

                rxLife: rptx,
                ryLife: rpty 
            }
        },
        radiiGen(maxVar, Rs, lifeVar){
            var ss = Rs - this.rMin/2
            return{
                ri: (ss/maxVar)*lifeVar
            }
        },
        drawLine(x1,y1,x2,y2){
        var d = [
              "M", x1,y1, 
              "L", x2,y2,
          ].join(" ")
          return d
        },
        barplotMale(x_center, y_center, index, maxAge, study) {
            let a1 = this.describeArc(x_center, y_center,
                        this.radii(this.auNum(index + 1).aun).rn,
                        this.getAngle(index + 1).aMid,
                        this.getAngle(index + 1).af)

            let a2 = this.drawLine(this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, 0).p1x,
                        this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, 0).p1y,
                        this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, this.radiiGen(maxAge, this.radii(this.auNum(index + 1).aun).rn, study.years_male).ri).p1x,
                        this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, this.radiiGen(maxAge, this.radii(this.auNum(index + 1).aun).rn, study.years_male).ri).p1y)
            let aFix2 = a2.split('L')[1]
            let a3 = this.describeArc(x_center,
                        y_center,
                        this.radii(this.auNum(index + 1).aun).rn + this.radiiGen(maxAge, this.radii(this.auNum(index + 1).aun).rn, study.years_male).ri,
                        this.getAngle(index + 1).aMid,
                        this.getAngle(index + 1).af)

            let aFix32 = a3.split('A')[0].replace('M', '')
            let aFix31A = a3.split('A')[1].trim().split(' ')
            let aFix31 = ''
            for(var i=0 ; i <aFix31A.length - 3 ; i++) {
                aFix31 += aFix31A[i] + ' '
            }
            
            return a1 + ' L' + aFix2 + ' A ' + aFix31 + ' 1 ' + aFix32 + 'z'
        },
        barplotFemale(x_center, y_center, index, maxAge, study) {
            let a1 = this.describeArc(x_center, y_center,
                        this.radii(this.auNum(index + 1).aun).rn,
                        this.getAngle(index + 1).aMid,
                        this.getAngle(index + 1).ai)

            let a2 = this.drawLine(this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, 0).p2x,
                        this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, 0).p2y,
                        this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, this.radiiGen(maxAge, this.radii(this.auNum(index + 1).aun).rn, study.years_female).ri).p2x,
                        this.varPts(this.radii(this.auNum(index + 1).aun).rn, index + 1, this.radiiGen(maxAge, this.radii(this.auNum(index + 1).aun).rn, study.years_female).ri).p2y)
            let aFix2 = a2.split('L')[1]
            let a3 = this.describeArc(x_center,
                        y_center,
                        this.radii(this.auNum(index + 1).aun).rn + this.radiiGen(maxAge, this.radii(this.auNum(index + 1).aun).rn, study.years_female).ri,
                        this.getAngle(index + 1).aMid,
                        this.getAngle(index + 1).ai)

            let aFix32 = a3.split('A')[0].replace('M', '')
            let aFix31A = a3.split('A')[1].trim().split(' ')
            let aFix31 = ''
            for(var i=0 ; i < aFix31A.length - 3 ; i++) {
                aFix31 += aFix31A[i] + ' '
            }
            
            return a1 + ' L' + aFix2 + ' A ' + aFix31 + ' 0 ' + aFix32 + 'z'
        },
        getAngle(idStudy){

            var pad = (2*Math.PI/this.sum)*0.10
            var varArc = (2*Math.PI/this.sum)
            var oy = this.y_center
            var totArc1 = (varArc)*(idStudy) 
            var totArc2 = (varArc)*(idStudy-1) + pad

            return{
                af: totArc1,
                aMid: (totArc1 + totArc2)/2,
                ai: totArc2,
            }
        },
        arrayOfOrderedOpacities(){
            var data = [];
            var length = this.orderJSON.length; // user defined length

            for(var i = 0; i < length; i++) {
                data.push(this.initOpacity);
            }

            return data
        },
        opacitiesEvent(e, index){
                list = this.arrayOfOrderedOpacities()
                list[index-1] = 1
                this.opacities = list

        },
        showWindow(e, study){
            this.showModal = true
            this.studyTitle = study.variable
            this.studySupport = study.scientific_support_label
            this.yearsGainedMale = study.years_male
            this.yearsGainedFemale = study.years_female
            this.showDetail = true
            this.additionalInformation = study.additional
            this.url = study.url
            this.source = study.source
            this.note = study.note
        }  
    },
    computed: {
        orderJSON(){
            return _.orderBy(this.studies, ['scientific_support_level', 'control_level'], ['desc', 'asc']);
        },
        countByCat(){
            var studies = this.studies || []
            var buff = {g1: 0, g2: 0, g3: 0, g4: 0}
            
            for(study in studies){
                var key = studies[study].scientific_support_level
                buff['g' + key] = buff['g' + key] + 1
            }
            return buff
        },
        sum(){
            return this.countByCat.g1 + this.countByCat.g2 + this.countByCat.g3 + this.countByCat.g4
        },
        maxAge() {
            let studies = this.studies || []
            let result = 0
            studies.forEach((study) => {
                let yearsMale = Math.abs(parseFloat(study.years_male))
                let yearsFemale = Math.abs(parseFloat(study.years_female))
                if (result < yearsMale) {
                    result = yearsMale
                }
                if (result < yearsFemale) {
                    result = yearsFemale
                }
            })   
            return result
        },
        x_center(){
            return this.x_dim/2
        },
        y_center(){
            return this.y_dim/2
        }
    },
    mounted(){
        window._this=this
    }
})

app.mount('#app')