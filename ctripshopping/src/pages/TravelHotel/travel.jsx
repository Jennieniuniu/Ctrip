import React, { useState } from "react";
import { Input, Layout, Carousel, Tooltip, Tabs } from "antd";
import { photoStyle, showStyle } from "../../config/userStyle";
import seasonlist from "../../data/seasonlist";
import themelist from "../../data/themelist";
import Usernavigation from "../../components/usernavigation";
import Ctripfooter from "../../components/ctripfooter";
import Sideselect from "../../components/sideselect";
import Picshow from "../../components/picshow";
import Linearcard from "../../components/linearcard";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as ticketActionCreator } from "./ticketstore";

const { Content } = Layout;

// 尚完善
const { Search } = Input;
const onSearch = (value) => console.log(value);
// =====================================游玩首页=====================================
function Travel(props) {
  const { ticketFn } = props;
  const pictureshow = JSON.parse(localStorage.getItem("pictureAll"));
  const [month, setmonth] = useState(1);
  const [theme, settheme] = useState("节假日");
  const [thumb, setthumb] = useState(false);
  // 当季推荐、主题精选点击选择
  const onChangemonth = (key) => {
    setmonth(parseInt(key) + 1);
  };
  const onChangetheme = (key) => {
    settheme(key);
  };
  // 点赞一次，悬浮文字会变化
  const likeAdd = async (e) => {
    if (!thumb) {
      const authorid = parseInt(e.target.attributes[0].value);
      const { data } = await ticketFn.likeaddAc({ authorid });
      if (data.status === 0) {
        setthumb(true);
        // 存储图片到本地
        localStorage.setItem("pictureAll", JSON.stringify(data.pictureAll));
      }
    }
  };

  return (
    <>
      <Usernavigation />
      <Sideselect />
      <Content style={photoStyle}>
        {/* 照片展示 */}
        <Carousel autoplay style={{ height: "26rem" }}>
          {pictureshow.map((photo) => (
            <div key={photo.theme}>
              <img src={photo.url} alt="照片秀" style={{ height: "25rem" }} />
              <div
                style={{ position: "relative", top: "-22rem", left: "40rem" }}
              >
                <h1>{photo.theme}</h1>
                <h3>来自{photo.name}的作品~</h3>
              </div>
              <div
                style={{ position: "relative", top: "-22rem", left: "50rem" }}
              >
                <Tooltip title={thumb ? "感谢点赞❤" : "赞一赞！"}>
                  <button
                    style={{
                      width: "5rem",
                      height: "5rem",
                      fontSize: "1.2rem",
                      borderRadius: "50%",
                      background: "	#FF6347",
                    }}
                    data-author={photo.authorid}
                    onClick={likeAdd}
                  >
                    喜欢❤
                  </button>
                </Tooltip>
              </div>
            </div>
          ))}
        </Carousel>
        <Search
          placeholder="游玩/酒店/订单"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{
            width: "22rem",
            color: "#330000",
            position: "relative",
            top: "-7rem",
            left: "36rem",
          }}
        />
      </Content>
      {/* 当季推荐 */}
      <Content style={showStyle}>
        <h1>当季推荐</h1>
        <Tabs
          defaultActiveKey="0"
          centered
          items={seasonlist.map((item, i) => {
            const id = String(i);
            return {
              label: `${item.label}`,
              key: id,
              children: (
                // <Picshow data={item} month={month} />,
                <Linearcard data={item} month={month} />
              ),
            };
          })}
          onChange={onChangemonth}
        />
      </Content>

      {/* 主题精选 */}
      <Content style={showStyle}>
        <h1>主题精选</h1>
        <Tabs
          defaultActiveKey="0"
          centered
          items={themelist.map((item, i) => {
            // const id = String(i);
            return {
              label: `${item.label}`,
              key: `${item.label}`,
              children: (
                // <Picshow
                //   data={item}
                //   theme={theme}
                // />
                <Linearcard data={item} theme={theme} />
              ),
            };
          })}
          onChange={onChangetheme}
        />
      </Content>
      <Ctripfooter />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    TicketData: state.ticket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ticketFn: bindActionCreators(ticketActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Travel);
