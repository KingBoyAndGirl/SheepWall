import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import '@/style/reception/PhotoWall.scss';

const Img = () => {
      const [photoList, setPhotoList] = useState([]);

      useEffect(() => {
            // 使用fetch获取外部URL中的数据
            fetch('https://raw.githubusercontent.com/KingBoyAndGirl/SheepWall/master/src/assets/photo.json')
                      .then((response) => response.json())
                      .then((data) => {
                            setPhotoList(data);
                      })
                      .catch((error) => {
                            console.error('Failed to load photo data:', error);
                      });
      }, []);

      const fileSrc = (filename) => {
            // 引入文件
            return new URL(`/src/assets/photo/${filename}`, import.meta.url).href;
      };

      const listItems = photoList.map((item, index) => (
                <Image key={index} alt="SHEEP" src={fileSrc(item.src)} />
      ));

      return (
                <>
                      <Image.PreviewGroup
                                preview={{
                                      onChange: (current, prev) =>
                                                console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                      >
                            {listItems}
                      </Image.PreviewGroup>
                </>
      );
};

const Portrait = () => {
      return (
                <section className="photowall">
                      <Img />
                </section>
      );
};

export default Portrait;
