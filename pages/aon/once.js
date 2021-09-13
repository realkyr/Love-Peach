import Head from "next/head";
import { Typography, Divider, Layout, Row, Image, Col } from "antd";
import styled from "styled-components";
import React, { Component } from "react";

const { Title } = Typography;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Card = styled.div`
  width: 1000px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  display: flex;
  padding: 30px;
`;

const Cover = styled(Image)`
  max-width: 250px;
  border-radius: 25px;
`;

const CenteredCol = styled(Col)`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FullRow = styled(Row)`
  width: 100%;
`;

const Logo = styled(Image)`
  &&& {
    width: auto;
    height: 30px;
  }
`;

let { Text } = Typography;
Text = styled(Text)`
  display: block;
  margin-bottom: 10px;
`;

const Name = styled(Text)`
  display: block;
  margin-bottom: 10px;
  text-align: center;
`;

const Line = styled(Divider)`
  margin-bottom: 20px;
  margin-top: 0;
  width: 50%;
  min-width: 50%;
`;

const Chord = styled.span`
  position: relative;
  top: -25px;
  margin-left: -25px;
  width: 25px;
  display: inline-block;
  font-weight: 700;
`;
const Lyric = styled.p`
  margin-top: 25px;
  line-height: 50px;
`;

export default class Lyrics extends Component {
  render() {
    return (
      <>
        <Head>
          <title>ที่เคยคุยไว้ (Once) - AON</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="ร้านอาหารที่เคยคุยกันไว้
            ที่ที่เธออยากไป ถ่ายรูปด้วยกัน
            หนังเรื่องนั้น ที่ควรดูวันนี้"
          />
          <meta name="robots" content="noindex, nofollow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="UTF-8"></meta>

          <meta property="og:title" content="ที่เคยคุยไว้ (Once) - AON" />
          <meta
            property="og:description"
            content="ร้านอาหารที่เคยคุยกันไว้
            ที่ที่เธออยากไป ถ่ายรูปด้วยกัน
            หนังเรื่องนั้น ที่ควรดูวันนี้"
          />
          {/* <meta property="og:image" content="/assets/just.jpg"/> */}
          {/* <meta property="og:url" content="http://euro-travel-example.com/index.htm"/> */}
        </Head>
        <Content>
          {/* <Row justify="center">
            <Card>
              <FullRow gutter={[16, 16]} justify="center">
                <CenteredCol span={24}>
                  <Cover src="/assets/just.jpg" />
                </CenteredCol>
                <CenteredCol span={24}>
                  <Title level={3}>แค่เธอบอก</Title>
                </CenteredCol>
                <Line />
                <FullRow justify="center">
                  <Col xs={22} md={12}>
                    <Row>
                      <Col span={12}>
                        <Text strong={true}>Writer and Composer</Text>
                      </Col>
                      <Col span={12}>
                        <Name>Yora, Mewit</Name>
                      </Col>
                      <Col span={12}>
                        <Text strong={true}>Producer</Text>
                      </Col>
                      <Col span={12}>
                        <Name>Noppharach Jitphongampai</Name>
                      </Col>
                      <Col span={12}>
                        <Text strong={true}>Arranger</Text>
                      </Col>
                      <Col span={12}>
                        <Name>Noppharach Jitphongampai</Name>
                      </Col>
                    </Row>
                  </Col>
                </FullRow>
                <Line />
                <FullRow gutter={[16, 30]} justify="center">
                  <CenteredCol xs={24} md={5} lg={4}>
                    <a href="https://spoti.fi/35oxUaC">
                      <Logo
                        preview={false}
                        src="assets/streaming/Spotify.png"
                      />
                    </a>
                  </CenteredCol>
                  <CenteredCol xs={24} md={5} lg={4}>
                    <a href="https://bit.ly/2JUYTlL">
                      <Logo preview={false} src="assets/streaming/JOOX.png" />
                    </a>
                  </CenteredCol>
                  <CenteredCol xs={24} md={5} lg={4}>
                    <a href="https://apple.co/32E3b7F">
                      <Logo preview={false} src="/assets/streaming/Apple.svg" />
                    </a>
                  </CenteredCol>
                </FullRow>
              </FullRow>
            </Card>
          </Row> */}
          <Row
            justify="center"
            gutter={[25, 16]}
            style={{ padding: 10, marginTop: 100 }}
          >
            <CenteredCol xs={23} md={12} lg={8} xl={6} xxl={4}>
              <Lyric>
                <Chord> Bmaj9 </Chord>เรื่องที่เราเคยคุย<Chord> G#m11 </Chord>
                กันเอาไว้ ในวันนี้เธอ<Chord> C#m7 </Chord> ยังคิดเหมือนเดิม
                อย่างที่เรา<Chord> F#7 </Chord> เคยคุยกันอยู่ไหม?
                <Chord> Bmaj9 </Chord>เรื่องที่เธอเคยบอก<Chord> G#m11 </Chord>
                ว่ารัก แต่วันนี้เธอ<Chord> C#m7 </Chord>เปลี่ยนไปใช่ไหม
                เพราะวันนี้เธอ<Chord> F#7 </Chord>เลือกไปกับเขา
              </Lyric>
              <Lyric>
                อยากขอ<Chord> E </Chord>ร้องเธอ<Chord> F#7 </Chord>
                อยากให้ลอง<Chord> E </Chord> ทบทวน<Chord> F#7 </Chord> เรื่อง...
              </Lyric>
              <Lyric>
                ** ร้าน<Chord> Bmaj9 </Chord>อาหารที่เคย<Chord> G#m11 </Chord>
                คุยกันไว้ ที่ที่เธอ<Chord> C#m7 </Chord>อยากไป ถ่ายรูป
                <Chord> F#7 </Chord>ด้วยกัน หนัง<Chord> Bmaj9 </Chord>เรื่องนั้น
                ที่ควร<Chord> G#m11 </Chord>ดูวันนี้ เหมือนจะดี
                <Chord> C#m7 </Chord>ทุกอย่าง แต่สุดท้ายเธอ<Chord> F#7 </Chord>
                ก็ไปกับเขา<Chord> Bmaj9 </Chord>
              </Lyric>

              <Lyric>
                <Chord>Bmaj9</Chord>มันก็คงเป็นได้<Chord>G#m11</Chord>แค่ความหลัง เพราะตอนนี้เธอ<Chord>
                C#m7</Chord>เลือกทางที่เดิน ไอคำว่าเรา<Chord>F#7</Chord> ก็คงได้แค่นั้น
                <Chord>Bmaj9</Chord> ไม่มีทางเปลี่ยนเรื่อง<Chord>G#m11</Chord>ระหว่างเรา
                แม้ตอนนี้เธอ<Chord>C#m7</Chord>เลือกไปกับเขา แต่ว่าตัวฉันเอง<Chord>F#7
               </Chord>ก็ยังคงรัก
              </Lyric>
              
            </CenteredCol>
            <CenteredCol
              style={{ justifyContent: "flex-start" }}
              xs={23}
              md={12}
              lg={8}
              xl={6}
              xxl={4}
            >
              <Lyric>
                อยากขอ<Chord> E </Chord>ร้องเธอ<Chord> F#7 </Chord>
                อยากให้ลอง<Chord> E </Chord> ทบทวน<Chord> F#7 </Chord> เรื่อง...
              </Lyric>

              <Lyric>
                ** ร้าน<Chord> Bmaj9 </Chord>อาหารที่เคย<Chord> G#m11 </Chord>
                คุยกันไว้ ที่ที่เธอ<Chord> C#m7 </Chord>อยากไป ถ่ายรูป
                <Chord> F#7 </Chord>ด้วยกัน หนัง<Chord> Bmaj9 </Chord>เรื่องนั้น
                ที่ควร<Chord> G#m11 </Chord>ดูวันนี้ เหมือนจะดี
                <Chord> C#m7 </Chord>ทุกอย่าง แต่สุดท้ายเธอ<Chord> F#7 </Chord>
                ก็ไปกับเขา<Chord> Bmaj9 </Chord>
              </Lyric>

              <Lyric>{'SOLO'}</Lyric>

              <Lyric>
                อยากขอ<Chord> E </Chord>ร้องเธอ<Chord> F#7 </Chord>
                อยากให้ลอง<Chord> E </Chord> ทบทวน<Chord> F#7 </Chord> เรื่อง...
              </Lyric>

              <Lyric>
                ** ร้าน<Chord> Bmaj9 </Chord>อาหารที่เคย<Chord> G#m11 </Chord>
                คุยกันไว้ ที่ที่เธอ<Chord> C#m7 </Chord>อยากไป ถ่ายรูป
                <Chord> F#7 </Chord>ด้วยกัน หนัง<Chord> Bmaj9 </Chord>เรื่องนั้น
                ที่ควร<Chord> G#m11 </Chord>ดูวันนี้ เหมือนจะดี
                <Chord> C#m7 </Chord>ทุกอย่าง แต่สุดท้ายเธอ<Chord> F#7 </Chord>
                ก็ไปกับเขา<Chord> Bmaj9 </Chord>
              </Lyric>
            </CenteredCol>
          </Row>
          <div style={{ textAlign: "center" }}>
            <Text>
              Follow me on{" "}
              <a href="https://www.instagram.com/_imyora/">Instagram</a>
            </Text>
          </div>
        </Content>
      </>
    );
  }
}
