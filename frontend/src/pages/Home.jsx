import React, { useEffect, useState } from "react";
import imgUrl from "../assets/bg/home1.jpg";
import Swipergrid from "../components/Swipergrid";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [reverse, setReverse] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(`https://localhost:7198/api/Blogs/Display`, {
      headers: {
        Accept: "application/json",
      },
    });
    setData(res.data);
    setReverse(res.data.reverse());
  };

  function comparator(a, b) {
    if (a.likes < b.likes) return -1;
    if (a.likes > b.likes) return 1;
    return 0;
  }

  let test_data = [
    {
      id: 4,
      username: "lnwmee007",
      tag: "ไหว้พระ 9 วัดดัง “อ่างทอง” แดนดินถิ่นธรรมะ",
      img: "https://i.ibb.co/TgXMrJ9/86cf9700-4a76-11eb-89e4-35f1a97d3869-original.jpg",
      detail:
        "จังหวัดอ่างทองเป็นเมืองเก่าแก่ที่มีวัดวาอาราม โบราณสถานสิ่งศักดิ์สิทธิ์และเรื่องราวทางประวัติศาสตร์ของชาติไทย ตั้งอยู่ในพื้นที่จำนวนมากจนมีการขนานนามว่า “อ่างทอง แดนดินถิ่นธรรมะ”\n\nจึงขอนำเสนอเส้นทางท่องเที่ยวไหว้พระใหญ่ 9 วัดดัง ที่นักท่องเที่ยวไม่ควรพลาดในการสักการะที่สุดของสิ่งศักดิ์สิทธิ์แห่งจังหวัดเพื่อเป็นมงคลกับชีวิต\n\nเริ่มกันที่ วัดจันทรังษี อ.เมืองอ่างทอง วัดนี้มี “หลวงพ่อสด” ทำจากโลหะองค์ใหญ่มีความงดงามอย่างมาก ตามด้วย วัดราชปักษี อ.เมืองเช่นกัน มี พระพุทธไสยาสน์ องค์ใหญ่สมัยอยุธยาให้กราบไหว้บูชากัน\n\nต่อด้วย วัดต้นสน ตั้งอยู่ในเมืองอ่างทอง มีพระพุทธรูปศักดิ์สิทธิ์ชื่อว่า “สมเด็จพระศรีเมืองทอง” หล่อด้วยโลหะมีสีทองสวยงามมาก และ วัดท้ายย่าน สักการะ “พระพุทธไสยาสน์ปุนญญาภา” องค์ใหญ่ห่อหุ้มด้วยผ้าไหมทอง\n\nจากนั้นไปกันที่ วัดไชโยวรวิหาร อ.ไชโย พระอารามหลวงชั้นโท ขอพรจากสมเด็จพุฒาจารย์ (โต พรหมรังสี) และพระมหาพุทธพิมพ์ ที่เข้มขลังศักดิ์สิทธิ์\n\nตามติดด้วย วัดขุนอินทประมูล อ.โพธิ์ทอง วัดเก่าแก่ที่ประดิษฐาน “พระพุทธไสยาสน์” ที่ใหญ่มากอีกองค์\n\nเดินทางไปต่อที่ วัดม่วง อ.วิเศษชัยชาญ สักการะ “พระพุทธมหานวมินทร์ศากยมุนีศรีวิเศษชัยชาญ” หน้าตักกว้างถึง 1 ไร่ 9 ตารางวา พระอุโบสถล้อมรอบด้วยกลีบบัวขนาดใหญ่ที่สุด วิหารแก้วประดิษฐานพระพุทธรูปเนื้อเงินและดินแดนนรกสวรรค์\n\nแล้วไปกันที่ วัดสี่ร้อย อ.วิเศษชัยชาญ บูชา “หลวงพ่อโต” พระพุทธรูปปางเลไลยก์กลางแจ้งสูง 21 เมตร สร้างขึ้นเพื่อระลึกถึงวีรชนบ้านสี่ร้อย สุดท้ายไปที่ วัดป่าโมกวรวิหาร อ.ป่าโมก วัดโบราณตั้งอยู่ริมแม่น้ำเจ้าพระยา ที่ประดิษฐาน “พระพุทธไสยาสน์” ที่มีพระพักตร์อันงดงาม...\n\nนอกจากศาสนสถานและพระพุทธรูปคู่บ้านคู่เมืองอันศักดิ์สิทธิ์แล้ว เมืองอ่างทองยังมีสถานที่ท่องเที่ยวและของดีอีกมากมาย ดังนั้น ในปีหมูทองนี้ อย่าลืมชวนกันมาท่องเที่ยวและไหว้พระ 9 วัดดังกัน!!!",
      isHidden: "False",
      date: "2022-04-25T06:42:51.8835234",
      comments: [
        {
          id: 7,
          username: "lnwmee007",
          blogId: 4,
          message: "สุดยอดเลยครับพี่",
          isHidden: "False",
          date: "2022-04-25T06:43:27.5980614",
          img: "https://i.ibb.co/QPbyx0X/Artboard-5.png",
          likes: 0,
        },
        {
          id: 8,
          username: "lnwmee009",
          blogId: 4,
          message: "น่าไปสุดๆ",
          isHidden: "False",
          date: "2022-04-25T06:45:50.6769693",
          img: "https://i.ibb.co/m0Kv40J/276138962-149969060772600-5857327849743771685-n.jpg",
          likes: 0,
        },
        {
          id: 9,
          username: "admin",
          blogId: 4,
          message: "พูดคุยกันดีๆนะครับ",
          isHidden: "False",
          date: "2022-04-25T07:12:28.1202778",
          img: "https://i.ibb.co/k0FTTyc/unknown-3.png",
          likes: 0,
        },
        {
          id: 10,
          username: "admin",
          blogId: 4,
          message: "คุณ lnwmee007 ก็ขยันเที่ยวเกินนะครับ",
          isHidden: "False",
          date: "2022-04-25T07:13:06.2606295",
          img: "https://i.ibb.co/k0FTTyc/unknown-3.png",
          likes: 0,
        },
        {
          id: 17,
          username: "lnwpure007",
          blogId: 4,
          message: "ชะแว้บบบบ",
          isHidden: "False",
          date: "2022-04-25T07:18:25.6059728",
          img: "https://i.ibb.co/9WxgQ94/unknown-5.png",
          likes: 0,
        },
        {
          id: 22,
          username: "arjanred",
          blogId: 4,
          message: "จะเอ๋ ตัวเองงงงงงงงงงง",
          isHidden: "False",
          date: "2022-04-25T07:26:39.3953119",
          img: "https://i.ibb.co/tx4TZDN/RedLogo.png",
          likes: 0,
        },
      ],
      likes: 2,
    },
    {
      id: 5,
      username: "admin",
      tag: "อิ่มบุญ&สุขใจ@วัดข่อย จ.เพชรบุรี วัดสวยชวนเช็คอิน",
      img: "https://i.ibb.co/LQGkTX4/123.png",
      detail:
        "วันนี้ผมออกเดินทางไปทำธุระแต่เช้าที่ตัวเมือง จ.เพชรบุรี  หลังจากเสร็จธุระมีเวลาเหลือ จึงคิดว่าจะแวะวัดทำบุญกันเสียหน่อย  'วัดข่อย' จึงเป็นจุดหมายปลายทางของเราในวันนี้ครับเป็นที่ทราบกันดีว่าจังหวัดเพชรบุรีมีวัดเยอะมากและวัดข่อยจัดเป็นวัดที่น่าสนใจทั้งสายบุญและสายถ่ายภาพเพราะนอกจากจะมีพระบรมสารีริกธาตุที่เป็นไฮไลต์ของวัดให้ได้สักการะกันแล้วนั้น ภายในบริเวณวัดยังมีการจัดแสดงรูปปั้นสิ่งศักดิ์สิทธ์ ที่เป็นงานปั่นของช่างเมืองเพชรที่มีชื่อเสียงโดดเด่นทางด้านงานปั่นให้เราได้ชมความงามแบบไทยๆกันอย่างจุใจ จะเป็นอย่างไรกันนั้นให้ภาพบรรยายแทนแล้วกันนะครับ^^ มาถึงก็ไหว้พระบรมสารีริกธาตุกันกันเพื่อความเป็นสิริมงคลของชีวิต. มีดอกไม้ธูปเทียนอยู่ด้านข้างวิหารนะครับเป็นศาสาเล็กๆ ภายในวิหารพระบรมสารีริกธาตุ สวยงามและเย็นสบายมากๆครับ ยิ่งเสาร์อาทิตย์คนจะมากันเรื่อยๆ. ตอนมาถึงเวลาเที่ยงๆก็ยังมีคนมากราบไหว้ไม่ขาดสาย หลังจากไหว้พระเสร็จเราสามารถเดินชมจิตรกรรมฝาผนังและปูนปั่น ที่ขอบอกเลยว่าสวยมากกกก ให้เราได้ถ่ายภาพกันรัวๆ นอกจากนี้วัดข่อยยังมีอีกหลายจุดหลายมุมเลยครับที่น่าสนใจ เพียงแต่เวลาเรามีจำกัดเลยได้ภ่ายภาพไว้พอเป็นบันทึกระหว่างทาง. ครั้งต่อไปจะเป็นที่ไหนนั้น ติดตามชมกันได้ในบทความตอ่อไปนะครับ^^",
      isHidden: "False",
      date: "2022-04-25T06:46:58.0328489",
      comments: [
        {
          id: 12,
          username: "admin",
          blogId: 5,
          message: "อย่าลืม วัดข่อย เน้ออออ",
          isHidden: "False",
          date: "2022-04-25T07:14:14.5797404",
          img: "https://i.ibb.co/k0FTTyc/unknown-3.png",
          likes: 1,
        },
        {
          id: 13,
          username: "lnwmee007",
          blogId: 5,
          message: "จะไม่ลืมนะคร้าบบ คุณ admin",
          isHidden: "False",
          date: "2022-04-25T07:14:54.0171172",
          img: "https://i.ibb.co/QPbyx0X/Artboard-5.png",
          likes: 0,
        },
        {
          id: 14,
          username: "lnwmee007",
          blogId: 5,
          message: "แล้วอย่าลืมพาผมไปเที่ยวด้วย",
          isHidden: "False",
          date: "2022-04-25T07:15:21.7535182",
          img: "https://i.ibb.co/QPbyx0X/Artboard-5.png",
          likes: 0,
        },
        {
          id: 15,
          username: "lnwmee009",
          blogId: 5,
          message: "มีตัง เดี๋ยวผมไปด้วยย",
          isHidden: "False",
          date: "2022-04-25T07:15:56.1285957",
          img: "https://i.ibb.co/m0Kv40J/276138962-149969060772600-5857327849743771685-n.jpg",
          likes: 0,
        },
        {
          id: 18,
          username: "lnwpure007",
          blogId: 5,
          message: "เลี้ยงผมด้วยย",
          isHidden: "False",
          date: "2022-04-25T07:18:54.9497489",
          img: "https://i.ibb.co/9WxgQ94/unknown-5.png",
          likes: 0,
        },
      ],
      likes: 0,
    },
    {
      id: 6,
      username: "admin",
      tag: "วัดร่องขุ่น",
      img: "https://i.ibb.co/93xgRbV/2021-05-c1ab3ac263b72c7.jpg",
      detail:
        "วัดร่องขุ่น (Wat Rong Khun) ตั้งอยู่ที่จังหวัดเชียงราย ได้รับการบูรณะโดยอาจารย์เฉลิม ชัยโฆษิตพิพัฒน์ จิตรกรชาวเชียงราย ผู้เป็นศิลปินแห่งชาติสาขาทัศนศิลป์ (จิตรกรรม) จากวัดเล็ก ๆ ซึ่งอยู่ในสภาพค่อนข้างเสื่อมโทรมนี้ได้กลายเป็นศาสนสถานที่สวยงามด้วยสถาปัตยกรรมและงานศิลปะเต็มไปด้วยลวดลายอ่อนช้อยประณีตดึงดูดนักท่องเที่ยวให้มาเยี่ยมชมวัดนี้อย่างคับคั่งตลอดปี อุโบสถของวัดร่องขุ่นมีสีขาวบริสุทธิ์สะอาดซึ่งได้กลายเป็นเอกลักษณ์เป็นที่จดจำของนักท่องเที่ยวชาวต่างชาติซึ่งพากันเรียกวัดร่องขุ่นว่าวัดขาว (Thailand White Temple) ประดับประดาด้วยช่อฟ้าใบระกาอย่างวิจิตรอลังการตามด้วยลวดลายอ่อนช้อยอื่น ๆ อีกมากมายเป็นเชิงชั้นลดหลั่นกันลงมาหน้าบันประดับด้วยพญานาคและติดกระจกระยิบระยับโดยความตั้งใจของผู้สร้างนั้นต้องการสื่อสัญลักษณ์ต่าง ๆ ในพุทธศาสนาโดยสีขาวหมายถึงพระบริสุทธิคุณส่วนกระจกหมายถึงพระปัญญาธิคุณของพระพุทธเจ้าที่ส่องแสงโชติช่วงชัชวาลนอกจากนี้ตัวพระอุโบสถยังสร้างอยู่บนเนินเตี้ยๆที่มีทะเลสาบใสสะอาดสะท้อนเงาอาคารได้อย่างชัดเจนและทางเดินเข้าอุโบสถที่เป็นสะพานทอดยาวนั้นก็หมายถึงการเดินข้ามวัฏสงสารมุ่งสู่พุทธภูมิส่วนบนของหลังคาได้นำหลักธรรมอันสำคัญยิ่งคือศีลสมาธิปัญญามาแสดงออกในรูปของสัตว์ในช่อฟ้าชั้นต่างๆและภายในอุโบสถยังมีภาพจิตกรรมฝาผนังรวมทั้งอาคารแสดงภาพวาดที่ตั้งอยู่ภายในบริเวณวัดเพื่อแสดงผลงานของอาจารย์เฉลิมชัยให้นักท่องเที่ยวได้ชื่นชมอีกเช่นกัน ที่นี่เปิดให้ชมทุกวัน 06.30-18.00น. ห้องแสดงภาพเปิดให้เข้าชมวันจันทร์-ศุกร์ เวลา 08.00-17.30น. วันเสาร์อาทิตย์และวันหยุดราชการเวลา 08.00-18.00น. สอบถามเพิ่มเติมโทร. 0 5367 3579, ททท.สำนักงานเชียงรายโทร. 0 5371 7433 และศูนย์บริหารจัดการการท่องเที่ยวจังหวัดเชียงรายโทร. 0 5371 5690 สถานที่ท่องเที่ยวใกล้เคียง (Chiang Rai Attractions) วัดพระสิงห์โบสถ์มีความสวยงามและที่น่าสนใจคือที่หน้าโบสถ์ใหม่มีบานประตูไม้แกะสลักฝีมืออาจารย์ถวัลย์ดัชนีศิลปินแห่งชาติ วัดพระแก้ววัดคู่บ้านคู่เมืองของเมืองเชียงราย วัดพระธาตุดอยจอมทองเป็นที่ตั้งเสาสะดือเมือง 108 หลัก น้ำตกขุนกรณ์ ไร่สิงห์",
      isHidden: "False",
      date: "2022-04-25T06:53:36.2773011",
      comments: [
        {
          id: 11,
          username: "admin",
          blogId: 6,
          message: "อันนี้อยากจะอวดจริงๆ หึหึหึ",
          isHidden: "False",
          date: "2022-04-25T07:13:41.4754624",
          img: "https://i.ibb.co/k0FTTyc/unknown-3.png",
          likes: 0,
        },
        {
          id: 16,
          username: "lnwmee009",
          blogId: 6,
          message: "ร้ายกาจนักน้าาาา admin",
          isHidden: "False",
          date: "2022-04-25T07:16:28.1806098",
          img: "https://i.ibb.co/m0Kv40J/276138962-149969060772600-5857327849743771685-n.jpg",
          likes: 1,
        },
        {
          id: 19,
          username: "lnwpure007",
          blogId: 6,
          message: "สวยจังเลยยยย",
          isHidden: "False",
          date: "2022-04-25T07:19:16.1148022",
          img: "https://i.ibb.co/9WxgQ94/unknown-5.png",
          likes: 0,
        },
        {
          id: 20,
          username: "lnwpod007",
          blogId: 6,
          message: "ว้าววววววว",
          isHidden: "False",
          date: "2022-04-25T07:21:27.201714",
          img: "https://i.ibb.co/c83YydB/khaopod.jpg",
          likes: 0,
        },
        {
          id: 21,
          username: "lnwcoffee007",
          blogId: 6,
          message: "เน้นเข้าร่วมม",
          isHidden: "False",
          date: "2022-04-25T07:22:52.2064002",
          img: "https://i.ibb.co/9Hg2mfh/unknown-6.png",
          likes: 1,
        },
      ],
      likes: 1,
    },
  ];

  function getLike(arr) {
    let result = ""
    arr.forEach(element => {
      result += String(element.likes) + " "
    });
    return result
  }

  function bubbleSortLikes(arr) {
    let result = [];
    result.push(arr[0]);
    for (let i = 1 ; i < arr.length ; i++) {
      for (let j = 0 ; j < result.length + 1 ; j++) {
        if (j === result.length) {
          result.push(arr[i]);
          break;
        }
        if (arr[i].likes > result[j].likes) {
          result.splice(j, 0, arr[i]);
          break;
        }
      }  
    }
   
    return result
  }
  
  console.log(getLike(bubbleSortLikes(test_data)))

  return (
    <div className="flex flex-col h-full w-full">
      {/* Section Create Blog */}
      <section className="flex h-screen">
        <div className="flex w-full h-full items-center">
          <img className="w-full h-full object-cover" src={imgUrl}></img>
          {/* Welcome Home */}
          <div className="flex absolute h-[2em] p-12 bg-white bg-opacity-60 text-slate md:text-3xl underline items-center underline-offset-8">
            <NavLink
              to={"/Createblog"}
              class="drop-shadow-xl hover:text-[#ff9900]"
              style={{ transitionDuration: "0.3s" }}
            >
              <h1>CREATE YOUR BLOG</h1>
            </NavLink>
          </div>
        </div>
      </section>
      {/* Popular Blogs */}
      <section className="flex flex-col h-screen gap-4 sm:gap-12 justify-center">
        <div className="flex justify-center mt-12">
          <h1 className="font-roboto text-3xl font-bold">POPULAR BLOGS</h1>
        </div>
        <div className="flex ml-8 mr-8 sm:ml-32 sm:mr-32">
          <Swipergrid
            num_view={3}
            space={30}
            group_slide={1}
            loop={true}
            pagination={true}
            datas={data.sort(comparator)}
            isOrange={true}
          />
        </div>
        <div className="inline-flex">
          {/*  More */}
          <div className="flex flex-row w-full items-center justify-center">
            <NavLink to={"/Blog"}>
              <h3 className="underline underline-offset-1 ">More</h3>
            </NavLink>
          </div>
          {/* CirCle */}
          <NavLink to={"/Createblog"}>
            <div
              className="fixed bottom-20 opacity-70 hover:opacity-100 hover:pulse"
              style={{ transition: "all 0.4s" }}
            >
              <div className="absolute bg-white w-8 h-1 right-10 mt-[1.9em] z-[1]" />
              <div className="absolute bg-white w-1 h-8 right-[3.4em] mt-4 z-[2]" />
              <div className="absolute right-0 h-16 w-16 rounded-full bg-[#ff9600] mr-6 z-[0] shadow-xl drop-shadow-2xl" />
            </div>
          </NavLink>
        </div>
      </section>
      {/* Newly Blogs */}
      <section className="flex flex-col h-screen gap-4 sm:gap-12 bg-orange text-white justify-center">
        <div className="flex justify-center mt-12">
          <h1 className="font-roboto text-3xl font-bold">NEWLY BLOGS</h1>
        </div>
        <div className="flex ml-8 mr-8 sm:ml-32 sm:mr-32">
          <Swipergrid
            num_view={3}
            space={30}
            group_slide={1}
            loop={true}
            pagination={true}
            datas={reverse}
          />
        </div>
        <div className="inline-flex">
          {/*  More */}
          <div className="flex flex-row w-full items-center justify-center">
            <NavLink to={"/Blog"}>
              <h3 className="underline underline-offset-1 ">More</h3>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
