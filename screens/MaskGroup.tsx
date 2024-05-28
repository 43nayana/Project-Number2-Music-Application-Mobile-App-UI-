import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const MaskGroup = () => {
  return (
    <View style={styles.maskGroup}>
      <View style={[styles.androidLarge1Parent, styles.parentPosition]}>
        <ImageBackground
          style={[styles.androidLarge1, styles.androidLayout3]}
          resizeMode="cover"
          source={require("../assets/androidlarge1.png")}
        >
          <Text
            style={[styles.findYourFavorite, styles.bijleeTypo]}
          >{`Find Your 
Favorite
music`}</Text>
          <View style={styles.androidLarge1Child} />
          <View style={styles.getStartedWrapper}>
            <Text style={[styles.getStarted, styles.text6Typo]}>
              Get Started
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={[styles.androidLarge2, styles.androidLayout3]}
          resizeMode="cover"
          source={require("../assets/androidlarge2.png")}
        >
          <Image
            style={styles.fa6SolidmusicIcon}
            contentFit="cover"
            source={require("../assets/fa6solidmusic.png")}
          />
          <View style={styles.welcomeToViiMusicWrapper}>
            <Text style={[styles.welcomeToVii, styles.text6Typo]}>
              Welcome to Vii Music
            </Text>
          </View>
          <View style={styles.createYourAccountParent}>
            <Text
              style={[styles.createYourAccount, styles.bijleeTypo]}
            >{`Create your account `}</Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          <View style={[styles.androidLarge2Child, styles.androidLayout2]} />
          <Text style={[styles.vikashini, styles.textTypo2]}>vikashini</Text>
          <Text style={[styles.email, styles.nameTypo]}>Email</Text>
          <Text style={[styles.password, styles.nameTypo]}>Password</Text>
          <View style={[styles.androidLarge2Item, styles.androidLayout2]} />
          <View style={[styles.androidLarge2Inner, styles.androidLayout2]} />
          <Text style={[styles.spotifygmailcom, styles.textTypo2]}>
            Spotify@gmail.com
          </Text>
          <Text style={[styles.text, styles.textTypo2]}>************</Text>
          <View style={[styles.rectangleView, styles.rectangleViewBg]} />
          <Text style={[styles.signIn, styles.bijleeTypo]}>Sign in</Text>
          <Text style={styles.orContinueWith}>or continue with google</Text>
          <View style={[styles.lineView, styles.lineViewPosition]} />
          <Image
            style={[styles.rectangleIcon, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-6.png")}
          />
          <Image
            style={styles.flatColorIconsgoogle}
            contentFit="cover"
            source={require("../assets/flatcoloriconsgoogle.png")}
          />
          <Text style={[styles.signUpWith, styles.text1Typo]}>
            Sign up with Google
          </Text>
          <Text style={[styles.alreadyHaveAnContainer, styles.text1Typo]}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Already have an account ?  `}</Text>
            <Text style={styles.signIn1}> Sign in</Text>
          </Text>
        </ImageBackground>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
        <View style={[styles.androidLarge3, styles.rectangleViewBg]}>
          <View style={[styles.ggbatteryParent, styles.parentLayout]}>
            <Image
              style={styles.ggbatteryIcon}
              contentFit="cover"
              source={require("../assets/ggbattery.png")}
            />
            <Image
              style={[styles.ionwifiSharpIcon, styles.text1Position]}
              contentFit="cover"
              source={require("../assets/ionwifisharp.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>7:41</Text>
          </View>
          <Text
            style={[
              styles.helloNayanaContainer,
              styles.androidLarge3ChildPosition,
            ]}
          >
            <Text
              style={[styles.helloNayana, styles.bijleeTypo]}
            >{`Hello Nayana ,
`}</Text>
            <Text style={styles.whatDoYou}>
              What do you want to hear today ?
            </Text>
          </Text>
          <View
            style={[
              styles.androidLarge3Child,
              styles.androidLarge3ChildPosition,
            ]}
          />
          <Image
            style={[
              styles.materialSymbolsLightsearchIcon,
              styles.mdiplayIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolslightsearch.png")}
          />
          <Text style={styles.search}>Search</Text>
          <Image
            style={styles.fluentmic16RegularIcon}
            contentFit="cover"
            source={require("../assets/fluentmic16regular.png")}
          />
          <View
            style={[
              styles.recommendationParent,
              styles.androidLarge4Child1Position,
            ]}
          >
            <Text style={[styles.recommendation, styles.text1Typo]}>
              Recommendation
            </Text>
            <Text style={[styles.trending, styles.text1Typo]}>Trending</Text>
            <Text style={[styles.beauty, styles.text1Typo]}>Beauty</Text>
            <Text style={[styles.business, styles.text1Typo]}>Business</Text>
            <View style={[styles.frameInner, styles.lineViewPosition]} />
          </View>
          <Image
            style={[styles.androidLarge3Item, styles.androidLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-8.png")}
          />
          <Image
            style={[styles.androidLarge3Inner, styles.androidLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Text
            style={[styles.fridayParty, styles.partyTypo1]}
          >{`Friday Party `}</Text>
          <Text
            style={[styles.saturdayParty, styles.partyTypo1]}
          >{`Saturday Party `}</Text>
          <Text style={[styles.partyMood, styles.partyTypo]}>Party Mood !</Text>
          <Text style={[styles.partyMood1, styles.partyTypo]}>
            Party Mood !
          </Text>
          <Image
            style={[styles.ellipseIcon, styles.androidChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.androidLarge3Child1, styles.androidChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[
              styles.tablerplayerPlayFilledIcon,
              styles.mdiplayIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/tablerplayerplayfilled.png")}
          />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.recentlyPlayed, styles.seeAllPosition]}>
            Recently Played
          </Text>
          <Text style={[styles.seeAll, styles.seeAllPosition]}>See all</Text>
          <View
            style={[styles.androidLarge3Child2, styles.androidChildLayout2]}
          />
          <Image
            style={[styles.androidLarge3Child3, styles.androidChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
          <Text style={[styles.newRules, styles.duaLipaPosition]}>
            New Rules
          </Text>
          <Text style={[styles.duaLipa, styles.duaLipaPosition]}>Dua Lipa</Text>
          <Image
            style={[styles.androidLarge3Child4, styles.androidChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.tablerplayerPlayFilledIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/tablerplayerplayfilled1.png")}
          />
          <View
            style={[styles.androidLarge3Child5, styles.mithoonPaponPosition]}
          />
          <View
            style={[styles.androidLarge3Child6, styles.androidChildLayout2]}
          />
          <Text style={[styles.darshanRaval, styles.duaLipaPosition]}>
            Darshan Raval
          </Text>
          <Image
            style={[styles.androidLarge3Child7, styles.androidChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-14.png")}
          />
          <Image
            style={[styles.androidLarge3Child8, styles.androidChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-15.png")}
          />
          <Text style={[styles.sakhiyaan, styles.duaLipaPosition]}>
            Sakhiyaan
          </Text>
          <Text style={[styles.maninderButtar, styles.duaLipaPosition]}>
            Maninder Buttar
          </Text>
          <Image
            style={[styles.androidLarge3Child9, styles.androidChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.androidLarge3Child10}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.tablerplayerPlayFilledIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/tablerplayerplayfilled1.png")}
          />
          <Image
            style={[styles.tablerplayerPlayFilledIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/tablerplayerplayfilled1.png")}
          />
          <Text style={[styles.hawaBanke, styles.duaLipaPosition]}>
            Hawa Banke
          </Text>
        </View>
        <View style={[styles.androidLarge4, styles.androidPosition1]}>
          <View style={[styles.ggbatteryParent, styles.parentLayout]}>
            <Image
              style={styles.ggbatteryIcon}
              contentFit="cover"
              source={require("../assets/ggbattery.png")}
            />
            <Image
              style={[styles.ionwifiSharpIcon, styles.text1Position]}
              contentFit="cover"
              source={require("../assets/ionwifisharp.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>7:41</Text>
          </View>
          <Image
            style={styles.androidLarge4Child}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={[styles.androidLarge4Item, styles.androidLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Image
            style={[styles.androidLarge4Inner, styles.androidLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.text3, styles.text3Typo]}>...</Text>
          <Image
            style={[styles.mdifavouriteIcon, styles.mdiplayIconLayout]}
            contentFit="cover"
            source={require("../assets/mdifavourite.png")}
          />
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame-6.png")}
          />
          <Text style={[styles.bijleeBijlee, styles.bijleePosition]}>
            Bijlee Bijlee
          </Text>
          <Text style={[styles.nainoNeBaandhi, styles.bijleeTypo]}>
            Naino Ne Baandhi
          </Text>
          <Text style={[styles.humnava, styles.humnavaPosition]}>Humnava</Text>
          <Text style={[styles.mareezEIshq, styles.bijleeTypo]}>
            Mareez-E-Ishq
          </Text>
          <Text style={[styles.tumMile, styles.tumMilePosition]}>Tum Mile</Text>
          <Text style={[styles.harrdySandhu, styles.text1Typo]}>
            Harrdy Sandhu
          </Text>
          <Text style={[styles.pasoori, styles.bijleeTypo]}>Pasoori</Text>
          <Text style={[styles.gulabiAankhen, styles.mdiplayIcon2Position]}>
            Gulabi Aankhen
          </Text>
          <Text style={[styles.filhall, styles.filhallPosition]}>Filhall</Text>
          <Text style={[styles.shaeGillaliSethi, styles.text1Typo]}>
            Shae Gill,Ali Sethi
          </Text>
          <Text style={[styles.sanam, styles.text1Typo]}>Sanam</Text>
          <Text style={[styles.bPraakAkshay, styles.text1Typo]}>
            B Praak, Akshay Kumar, Nupur Sanon
          </Text>
          <Text style={[styles.yasserDesaiArko, styles.text1Typo]}>
            Yasser Desai, Arko
          </Text>
          <Text style={[styles.mithoonPapon, styles.mithoonPaponPosition]}>
            Mithoon, Papon
          </Text>
          <Text style={[styles.shaaribToshiArijit, styles.text1Typo]}>
            Shaarib Toshi, Arijit Singh
          </Text>
          <Text style={[styles.pritamNeerajShridhar, styles.text1Typo]}>
            Pritam, Neeraj Shridhar
          </Text>
          <Image
            style={[styles.androidLarge4Child1, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.androidLarge4Child2, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.androidLarge4Child3, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.androidLarge4Child4, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.androidLarge4Child5, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.androidLarge4Child6, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.androidLarge4Child7, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.androidLarge4Child8, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.mdiplayIcon, styles.bijleePosition]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <Image
            style={[styles.mdiplayIcon1, styles.mdiplayIconPosition]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <Image
            style={[styles.mdiplayIcon2, styles.mdiplayIcon2Position]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <Image
            style={[styles.mdiplayIcon3, styles.filhallPosition]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <Image
            style={[styles.mdiplayIcon4, styles.mdiplayIconPosition]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <Image
            style={[styles.mdiplayIcon5, styles.humnavaPosition]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <Image
            style={[styles.mdiplayIcon6, styles.mdiplayIconLayout]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <Image
            style={[styles.mdiplayIcon7, styles.tumMilePosition]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
          <View style={styles.androidLarge4Child9} />
          <Text style={[styles.asalMein, styles.asalMeinPosition]}>
            Asal Mein
          </Text>
          <Text style={[styles.darshanRaval1, styles.text1Typo]}>
            Darshan Raval
          </Text>
          <Image
            style={[styles.androidLarge4Child10, styles.asalMeinPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.mdiplayIcon8, styles.mdiplayIconPosition]}
            contentFit="cover"
            source={require("../assets/mdiplay.png")}
          />
        </View>
        <View style={[styles.androidLarge5, styles.androidPosition1]}>
          <Image
            style={styles.octiconplay16}
            contentFit="cover"
            source={require("../assets/octiconplay16.png")}
          />
          <Image
            style={[styles.mdifavouriteIcon1, styles.mdiplayIconLayout]}
            contentFit="cover"
            source={require("../assets/mdifavourite.png")}
          />
          <View style={[styles.ggbatteryParent, styles.parentLayout]}>
            <Image
              style={styles.ggbatteryIcon}
              contentFit="cover"
              source={require("../assets/ggbattery.png")}
            />
            <Image
              style={[styles.ionwifiSharpIcon, styles.text1Position]}
              contentFit="cover"
              source={require("../assets/ionwifisharp.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>7:41</Text>
          </View>
          <Text style={[styles.text5, styles.text5Position]}>{`<`}</Text>
          <Text style={[styles.playingNow, styles.text5Position]}>
            Playing Now
          </Text>
          <Image
            style={styles.androidLarge5Child}
            contentFit="cover"
            source={require("../assets/rectangle-17.png")}
          />
          <Text style={[styles.text6, styles.text6Typo]}>. .</Text>
          <Text style={[styles.loveIsGone, styles.text6Typo]}>
            Love is gone
          </Text>
          <Text style={[styles.slanderDylanMatthew, styles.text6Typo]}>
            SLANDER, Dylan Matthew
          </Text>
          <Image
            style={[styles.androidLarge5Item, styles.androidPosition]}
            contentFit="cover"
            source={require("../assets/line-4.png")}
          />
          <Image
            style={[styles.androidLarge5Inner, styles.androidPosition]}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
          <Text style={[styles.text7, styles.textTypo]}>1:30</Text>
          <Text style={[styles.text8, styles.textTypo]}>2:30</Text>
          <Image
            style={[styles.androidLarge5Child1, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame-6.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    top: 0,
    position: "absolute",
  },
  androidLayout3: {
    height: 800,
    top: 108,
    width: 360,
    overflow: "hidden",
  },
  bijleeTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text6Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameChildLayout: {
    height: 52,
    width: 294,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  nameTypo: {
    left: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLayout2: {
    left: 33,
    height: 52,
    width: 294,
    borderRadius: Border.br_3xs,
  },
  textTypo2: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorDarkgoldenrod,
    position: "absolute",
  },
  lineViewPosition: {
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  parentLayout: {
    width: 360,
    overflow: "hidden",
    left: 0,
  },
  text1Position: {
    top: 1,
    position: "absolute",
  },
  textTypo1: {
    left: 8,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  androidLarge3ChildPosition: {
    left: 11,
    position: "absolute",
  },
  mdiplayIconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  androidLarge4Child1Position: {
    top: 208,
    position: "absolute",
  },
  androidLayout1: {
    height: 129,
    width: 150,
    top: 281,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  partyTypo1: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 363,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  partyTypo: {
    top: 380,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidChildLayout3: {
    height: 25,
    width: 29,
    position: "absolute",
  },
  seeAllPosition: {
    top: 451,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidChildLayout2: {
    height: 73,
    width: 335,
    backgroundColor: Color.colorDarkkhaki,
    borderRadius: Border.br_5xs,
  },
  androidChildLayout1: {
    height: 54,
    width: 82,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  duaLipaPosition: {
    left: 119,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    left: 316,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mithoonPaponPosition: {
    top: 610,
    left: 14,
    position: "absolute",
  },
  androidPosition1: {
    top: 988,
    backgroundColor: Color.colorDarkgoldenrod,
    height: 800,
    width: 360,
    overflow: "hidden",
    position: "absolute",
  },
  androidLayout: {
    height: 36,
    width: 44,
    top: 94,
    position: "absolute",
  },
  text3Typo: {
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameIconLayout: {
    height: 34,
    top: 766,
    width: 360,
    overflow: "hidden",
    position: "absolute",
  },
  bijleePosition: {
    top: 214,
    position: "absolute",
  },
  humnavaPosition: {
    top: 586,
    position: "absolute",
  },
  tumMilePosition: {
    top: 710,
    position: "absolute",
  },
  mdiplayIcon2Position: {
    top: 338,
    position: "absolute",
  },
  filhallPosition: {
    top: 400,
    position: "absolute",
  },
  androidChildLayout: {
    width: 37,
    left: 307,
    height: 36,
  },
  mdiplayIconPosition: {
    left: 315,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  asalMeinPosition: {
    top: 462,
    position: "absolute",
  },
  text5Position: {
    top: 66,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidPosition: {
    top: 645,
    left: 22,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    top: 655,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIconPosition: {
    top: "87.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  findYourFavorite: {
    top: 21,
    fontSize: 48,
    textAlign: "left",
    color: Color.colorBlack,
    left: 41,
    position: "absolute",
  },
  androidLarge1Child: {
    top: 703,
    height: 55,
    width: 252,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    left: 54,
    position: "absolute",
  },
  getStarted: {
    top: 8,
    left: 36,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  getStartedWrapper: {
    top: 702,
    height: 56,
    width: 252,
    left: 54,
    borderRadius: Border.br_xl,
    overflow: "hidden",
    position: "absolute",
  },
  androidLarge1: {
    left: 222,
    position: "absolute",
  },
  fa6SolidmusicIcon: {
    top: 43,
    left: 142,
    width: 76,
    height: 70,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
  },
  welcomeToVii: {
    top: 22,
    left: 5,
    color: Color.colorDarkgoldenrod,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  welcomeToViiMusicWrapper: {
    top: 126,
    left: 51,
    width: 255,
    height: 72,
    overflow: "hidden",
    position: "absolute",
  },
  createYourAccount: {
    top: 18,
    left: 29,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChild: {
    top: 62,
    left: 256,
    backgroundColor: Color.colorGainsboro,
  },
  createYourAccountParent: {
    top: 207,
    width: 292,
    height: 65,
    left: 35,
    overflow: "hidden",
    position: "absolute",
  },
  name: {
    top: 298,
    fontSize: FontSize.size_base,
  },
  androidLarge2Child: {
    top: 326,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  vikashini: {
    top: 344,
    left: 41,
  },
  email: {
    top: 387,
    fontSize: FontSize.size_base,
  },
  password: {
    top: 491,
    fontSize: FontSize.size_base,
  },
  androidLarge2Item: {
    top: 419,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  androidLarge2Inner: {
    top: 519,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  spotifygmailcom: {
    top: 437,
    left: 41,
  },
  text: {
    top: 537,
    left: 39,
  },
  rectangleView: {
    top: 612,
    left: 33,
    height: 52,
    width: 294,
    borderRadius: Border.br_3xs,
  },
  signIn: {
    top: 626,
    left: 145,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  orContinueWith: {
    top: 677,
    left: 87,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  lineView: {
    top: 687,
    borderColor: Color.colorWhite,
    width: 79,
    height: 1,
    left: 0,
  },
  rectangleIcon: {
    top: 696,
    left: 35,
  },
  flatColorIconsgoogle: {
    top: 708,
    left: 102,
    width: 30,
    height: 33,
    overflow: "hidden",
    position: "absolute",
  },
  signUpWith: {
    top: 713,
    left: 140,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorBlack,
  },
  signIn1: {
    color: Color.colorDarkgoldenrod,
  },
  alreadyHaveAnContainer: {
    top: 775,
    left: -23,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  androidLarge2: {
    left: 663,
    position: "absolute",
  },
  frameItem: {
    top: 795,
    left: 941,
    width: 83,
    height: 2,
    position: "absolute",
  },
  ggbatteryIcon: {
    top: -3,
    left: 329,
    width: 31,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  ionwifiSharpIcon: {
    left: 292,
    width: 22,
    height: 20,
    overflow: "hidden",
  },
  text1: {
    top: 1,
    position: "absolute",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
  },
  ggbatteryParent: {
    height: 22,
    top: 0,
    position: "absolute",
  },
  helloNayana: {
    fontSize: FontSize.size_5xl,
  },
  whatDoYou: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  helloNayanaContainer: {
    top: 50,
    textAlign: "left",
    color: Color.colorBlack,
  },
  androidLarge3Child: {
    top: 137,
    width: 333,
    height: 43,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    left: 11,
  },
  materialSymbolsLightsearchIcon: {
    top: 146,
    left: 24,
    position: "absolute",
  },
  search: {
    top: 149,
    left: 48,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  fluentmic16RegularIcon: {
    top: 144,
    width: 27,
    height: 28,
    left: 310,
    overflow: "hidden",
    position: "absolute",
  },
  recommendation: {
    color: "#00020a",
    left: 13,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  trending: {
    left: 143,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  beauty: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    left: 222,
    top: 0,
    position: "absolute",
  },
  business: {
    left: 287,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  frameInner: {
    top: 30,
    left: 26,
    borderColor: Color.colorBlack,
    width: 94,
    height: 1,
  },
  recommendationParent: {
    height: 45,
    width: 360,
    overflow: "hidden",
    left: 0,
  },
  androidLarge3Item: {
    left: 13,
  },
  androidLarge3Inner: {
    left: 198,
  },
  fridayParty: {
    color: Color.colorGainsboro,
    left: 22,
  },
  saturdayParty: {
    left: 208,
    color: Color.colorBlack,
  },
  partyMood: {
    left: 22,
  },
  partyMood1: {
    left: 206,
  },
  ellipseIcon: {
    left: 124,
    top: 367,
    height: 25,
  },
  androidLarge3Child1: {
    left: 319,
    top: 367,
    height: 25,
  },
  tablerplayerPlayFilledIcon: {
    top: 368,
    left: 128,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.25%",
    width: "4.17%",
    top: "46.38%",
    right: "4.44%",
    bottom: "51.38%",
    left: "91.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  recentlyPlayed: {
    left: 8,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  seeAll: {
    left: 303,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  androidLarge3Child2: {
    top: 503,
    left: 13,
    position: "absolute",
  },
  androidLarge3Child3: {
    top: 513,
    left: 22,
  },
  newRules: {
    top: 521,
    width: 81,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  duaLipa: {
    top: 540,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  androidLarge3Child4: {
    top: 527,
    left: 310,
  },
  tablerplayerPlayFilledIcon1: {
    top: 528,
    position: "absolute",
  },
  androidLarge3Child5: {
    left: 14,
    height: 73,
    width: 335,
    backgroundColor: Color.colorDarkkhaki,
    borderRadius: Border.br_5xs,
  },
  androidLarge3Child6: {
    top: 718,
    left: 13,
    position: "absolute",
  },
  darshanRaval: {
    top: 758,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  androidLarge3Child7: {
    top: 620,
    left: 22,
  },
  androidLarge3Child8: {
    top: 728,
    left: 24,
  },
  sakhiyaan: {
    top: 628,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  maninderButtar: {
    top: 647,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  androidLarge3Child9: {
    top: 634,
    left: 310,
  },
  androidLarge3Child10: {
    top: 768,
    height: 26,
    width: 29,
    left: 310,
    position: "absolute",
  },
  tablerplayerPlayFilledIcon2: {
    top: 635,
    position: "absolute",
  },
  tablerplayerPlayFilledIcon3: {
    top: 743,
    position: "absolute",
  },
  hawaBanke: {
    top: 739,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  androidLarge3: {
    left: 1085,
    height: 800,
    top: 108,
    width: 360,
    overflow: "hidden",
  },
  androidLarge4Child: {
    top: 57,
    left: 122,
    width: 117,
    height: 110,
    position: "absolute",
  },
  androidLarge4Item: {
    left: 14,
  },
  androidLarge4Inner: {
    left: 303,
  },
  text3: {
    top: 83,
    left: 313,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  mdifavouriteIcon: {
    top: 100,
    left: 24,
    position: "absolute",
  },
  frameIcon: {
    left: 0,
  },
  bijleeBijlee: {
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  nainoNeBaandhi: {
    top: 524,
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  humnava: {
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  mareezEIshq: {
    top: 648,
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  tumMile: {
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  harrdySandhu: {
    top: 238,
    left: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  pasoori: {
    top: 276,
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  gulabiAankhen: {
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  filhall: {
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  shaeGillaliSethi: {
    top: 300,
    left: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  sanam: {
    top: 362,
    left: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  bPraakAkshay: {
    top: 424,
    left: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  yasserDesaiArko: {
    top: 548,
    left: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  mithoonPapon: {
    left: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  shaaribToshiArijit: {
    top: 672,
    left: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  pritamNeerajShridhar: {
    top: 734,
    left: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge4Child1: {
    top: 208,
    position: "absolute",
  },
  androidLarge4Child2: {
    top: 270,
    position: "absolute",
  },
  androidLarge4Child3: {
    top: 332,
    position: "absolute",
  },
  androidLarge4Child4: {
    top: 394,
    position: "absolute",
  },
  androidLarge4Child5: {
    top: 518,
    position: "absolute",
  },
  androidLarge4Child6: {
    top: 580,
    position: "absolute",
  },
  androidLarge4Child7: {
    top: 636,
    position: "absolute",
  },
  androidLarge4Child8: {
    top: 701,
    position: "absolute",
  },
  mdiplayIcon: {
    left: 313,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mdiplayIcon1: {
    top: 276,
  },
  mdiplayIcon2: {
    left: 317,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mdiplayIcon3: {
    left: 316,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mdiplayIcon4: {
    top: 524,
  },
  mdiplayIcon5: {
    left: 313,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mdiplayIcon6: {
    top: 642,
    left: 313,
    position: "absolute",
  },
  mdiplayIcon7: {
    left: 313,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  androidLarge4Child9: {
    top: 454,
    left: 6,
    width: 341,
    backgroundColor: Color.colorDarkkhaki,
    borderRadius: Border.br_5xs,
    height: 55,
    position: "absolute",
  },
  asalMein: {
    left: 14,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  darshanRaval1: {
    top: 486,
    left: 15,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge4Child10: {
    width: 37,
    left: 307,
    height: 36,
  },
  mdiplayIcon8: {
    top: 468,
  },
  androidLarge4: {
    left: 222,
  },
  octiconplay16: {
    top: 690,
    left: 159,
    width: 43,
    height: 39,
    overflow: "hidden",
    position: "absolute",
  },
  mdifavouriteIcon1: {
    top: 566,
    left: 321,
    position: "absolute",
  },
  text5: {
    left: 8,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  playingNow: {
    left: 121,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  androidLarge5Child: {
    top: 134,
    left: 16,
    width: 329,
    height: 347,
    position: "absolute",
  },
  text6: {
    top: 442,
    left: 154,
    fontSize: 64,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  loveIsGone: {
    top: 563,
    left: 22,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  slanderDylanMatthew: {
    top: 592,
    left: 22,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge5Item: {
    width: 318,
    height: 1,
  },
  androidLarge5Inner: {
    width: 145,
    height: 0,
  },
  text7: {
    left: 22,
  },
  text8: {
    left: 314,
  },
  androidLarge5Child1: {
    left: 1,
  },
  vectorIcon1: {
    height: "2.5%",
    width: "9.72%",
    right: "24.44%",
    bottom: "10.13%",
    left: "65.83%",
  },
  vectorIcon2: {
    height: "2.63%",
    width: "7.5%",
    right: "65.56%",
    bottom: "10%",
    left: "26.94%",
  },
  androidLarge5: {
    left: 663,
  },
  androidLarge1Parent: {
    backgroundColor: Color.colorBlack,
    width: 1549,
    overflow: "hidden",
    left: 0,
    height: 1874,
  },
  maskGroup: {
    flex: 1,
    width: "100%",
    height: 1874,
  },
});

export default MaskGroup;
