import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자&nbsp;
              <br className="hidden lg:inline-block" />
              조준영
            </h1>
            <p className="mb-8 leading-relaxed">
              품에 않는 살 청춘의 오아이스도 무엇이 얼음에 생의 반짝이는
              사막이다. 열락의 인생에 청춘의 있는 광야에서 일월과 부패를 때까지
              쓸쓸하랴? 피어나는 스며들어 사라지지 튼튼하며, 피가 대한 무엇을
              같으며, 이것이다. 타오르고 아니더면, 따뜻한 노년에게서 장식하는
              위하여 그리하였는가? 보내는 얼음이 풍부하게 수 얼음과 되는 얼마나
              것이다. 일월과 긴지라 이상의 용감하고 가는 이상, 인간에 있다. 든
              위하여 인생의 우리 피가 이상은 그리하였는가? 같이 끓는 그것을
              천지는 봄바람이다. 투명하되 보배를 거친 청춘을 보이는 청춘 이상은
              대한 있으랴? 내는 힘차게 이것이야말로 심장은 뜨고, 있다. 이성은
              그들은 청춘은 과실이 원질이 것이다.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <button className="btn-project-index">Portfolio</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
