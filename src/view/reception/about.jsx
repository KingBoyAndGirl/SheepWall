import React from 'react';
import { Link } from 'react-router-dom';
import dy from '@/assets/dy.jpg';
import xhs from '@/assets/xhs.jpg';
import logo from "@/assets/logo.png";

const App = () => {
      const imageStyle = {
            maxWidth: '100%',
            maxHeight: '100%',
      };

      return (
                <div
                          id="image"
                          style={{
                                width: '50%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center', // 居中垂直对齐
                                padding: '0px 22%',
                          }}
                >
                      <Link to="https://v.douyin.com/id5BSE8g/">
                            <img src={dy} alt="点击跳转" style={imageStyle} />
                      </Link>
                      <Link to="https://www.xiaohongshu.com/user/profile/5e2b0aa60000000001004d2b?xhsshare=CopyLink&appuid=5e2b0aa60000000001004d2b&apptime=1697446529">
                            <img src={xhs} alt="点击跳转" style={imageStyle} />
                      </Link>
                </div>
      );
}

export default App;
