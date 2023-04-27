import React from "react";
import "@chatui/core/es/styles/index.less";
// 引入组件
import Chat, { Bubble, useMessages } from "@chatui/core";
// 引入样式
import "@chatui/core/dist/index.css";
import Usernavigation from "./usernavigation";
import Ctripfooter from "./ctripfooter";
const initialMessages = [
  {
    type: "text",
    content: { text: "主人好，我是助理小携，请问有什么可以帮到您的吗~" },
    user: {
      avatar:
        "//hbimg.huabanimg.com/0afc190477541e120a1824fa8090c7f4214190381f457-uI6bUU_fw658",
    },
  },
];

// 默认快捷短语，可选
const defaultQuickReplies = [
  {
    icon: "message",
    name: "联系管理员",
    isHighlight: true,
  },
  {
    icon: "cart",
    name: "账户充值",
    isHighlight: true,
  },
  {
    icon: "compass",
    name: "游玩推荐",
  },
  {
    icon: "compass",
    name: "酒店推荐",
  },
];
export default function Robort() {
  const { messages, appendMsg, setTyping } = useMessages(initialMessages);

  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "账户充值",
          content: { text: "好的稍等，正在联系管理员！" },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }
  return (
    <>
      <Usernavigation />
      <div
        style={{ width: "70rem", height: "24rem", margin: "8rem auto 2rem" }}
      >
        <Chat
          navbar={{ title: "小携助理" }}
          messages={messages}
          // 渲染气泡形式的提问内容
          renderMessageContent={renderMessageContent}
          // 默认快捷短语
          quickReplies={defaultQuickReplies}
          // 根据输入的内容 使用trim裁剪前后空格messages, appendMsg, setTyping
          onSend={handleSend}
        />
      </div>

      <Ctripfooter />
    </>
  );
}
