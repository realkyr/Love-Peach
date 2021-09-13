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
          <title>แค่เธอบอก (Just) - Yora</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="แค่เธอบอกว่าเธอจะไป ก็ไม่ต้องพูดอะไรให้มากความ
              ไม่ต้องทำเป็นว่าเธอเสียใจ ต่อหน้าฉัน
              ไม่ต้องการคำอธิบาย อะไรจากเธอทั้งนั้น"
          />
          <meta name="robots" content="all" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta charSet="UTF-8"></meta>

          <meta property="og:title" content="แค่เธอบอก (Just) - Yora" />
          <meta property="og:description" content="แค่เธอบอกว่าเธอจะไป ก็ไม่ต้องพูดอะไรให้มากความ
            ไม่ต้องทำเป็นว่าเธอเสียใจ ต่อหน้าฉัน
            ไม่ต้องการคำอธิบาย อะไรจากเธอทั้งนั้น" />
          <meta property="og:image" content="/assets/just.jpg"/>
          {/* <meta property="og:url" content="http://euro-travel-example.com/index.htm"/> */}
        </Head>
        <Content>
          <Row justify="center">
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
          </Row>
          <Row
            justify="center"
            gutter={[25, 16]}
            style={{ padding: 10, marginTop: 100 }}
          >
            <CenteredCol xs={23} md={12} lg={8} xl={6} xxl={4}>
              <Lyric>
                ** แค่เธอบอก<Chord>Dmaj9</Chord>ว่าเธอจะไป ก็ไม่ต้องพูด
                <Chord>C#m7</Chord>อะไรให้มาก<Chord>F#m7</Chord>ความ ไม่ต้องทำ
                <Chord>Bm7</Chord>เป็นว่าเธอ<Chord>E7</Chord>เสียใจ
                <Chord>Amaj7</Chord> ต่อหน้าฉัน<Chord>A7</Chord>
                ไม่ต้องการ<Chord>Dmaj9</Chord>คำอธิบาย อะไร<Chord>C#m7</Chord>
                จากเธอทั้งนั้น<Chord>F#m7</Chord>
                เพียงแค่เธอ<Chord>Bm7</Chord>บอกกัน<Chord>E7</Chord>{" "}
                ว่าฉันไม่ใช่
                <Chord>Amaj7</Chord>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Chord>A7</Chord>
              </Lyric>
              <Lyric>
                รู้<Chord>Dmaj9</Chord> ฉันรู้อยู่แล้วแต่แรกว่าเธอ
                <Chord>C#m7</Chord>น่ะคิดจะไปตั้งแต่ที่เธอไปเจอกับเขา
                ฉันคิดว่ามัน
                <Chord>F#m7</Chord>ก็คงไม่ใช่ เรื่องผิด<Chord>Bm7</Chord>{" "}
                ถ้าเธอคิด<Chord>E7</Chord>จะไปกับเขา<Chord>Amaj7</Chord>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Chord>A7</Chord>
              </Lyric>
              <Lyric>
                คิด<Chord>Dmaj9</Chord> ฉันคิดอยู่แล้วแต่แรกว่า
                ฉันนั้นต้องทำใจแค่รอเวลา<Chord>C#m7</Chord>ว่า เธอ
                จะมาบอกเลิกบอกลา<Chord>F#m7</Chord>บอกกันเมื่อไหร่
                <Chord>Bm7</Chord> ไม่ได้ต้องการ<Chord>E7</Chord>ไอ้คำปลอบใจ
                <Chord>Amaj7</Chord>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Chord>A7</Chord>
              </Lyric>
              <Lyric>เพราะ (**)</Lyric>
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
                คนที่มันคิด<Chord>Dmaj9</Chord>จะไปรั้งอย่างไร เค้าก็ไป
                รั้งเท่าไร เขา<Chord>C#m7</Chord>ก็ไปอยู่ดี<Chord>F#m7</Chord>{" "}
                ต่อให้คิดจะรั้ง<Chord>Bm7</Chord>เท่าไร เค้าก็ไป จะรั้ง
                <Chord>E7</Chord>อย่างไร ถ้าเค้าจะไป เค้า<Chord>Amaj7</Chord>
                ก็ไปอยู่ดี<Chord>A7</Chord>
              </Lyric>
              <Lyric>
                เธอไม่ต้องมาหา<Chord>Dmaj9</Chord>เหตุผล ที่ทำให้เธอ
                <Chord>C#m7</Chord> รู้สึกดี<Chord>F#m7</Chord>
                บอกมาเลยซิ<Chord>Bm7</Chord> ตอนนี้ บอกดิ้<Chord>E</Chord>{" "}
                ว่าตอนเนี้ย เธอน่ะ<Chord>Amaj7</Chord>คิดอะไร<Chord>A7</Chord>
              </Lyric>
              <Lyric>ก็ (**)</Lyric>
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
