import React from 'react';

export default function FoureReportContent() {
  return (
    <div className="prose prose-invert max-w-none w-full pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white leading-tight">
        자립준비청년의 통장에는 왜 매달 돈이 부족할까?
      </h1>
      
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        한 달에 150만 원. 자립준비청년이 보호종료 이후 매달 손에 쥐게 되는 돈의 크기예요. 아동양육시설에서 받던 용돈 10만 원과 비교하면 무려 <strong className="font-bold text-white">1,400%나 늘어난 금액</strong>이에요. 그런데 이 큰 돈을 손에 쥐게 된 청년들은, 오히려 매달 월세와 공과금 앞에서 무너지고 있었어요.
      </p>

      <blockquote className="border-l-4 border-sunny-yellow pl-4 italic text-gray-400 my-8 py-2">
        "동생이 돈을 쓰는 걸 좋아하다 보니까, 한 번씩 저한테 월세 낼 돈 없다고 빌려달라고 와요."<br/>
        "갑자기 연체 이만큼 됐다고 고지서가 날아왔대. 그럼 그 큰 돈을 갑자기 한 번에 내는 거야."<br/>
        "나 집세 안 냈다가 80만 원 냈어."
      </blockquote>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        왜 이런 일이 반복될까요? Sunny Scholar 5기 팀 포레(FOU:RE)는 이 질문에서 출발해, 8개월의 여정 끝에 하나의 답에 다다랐어요. <strong className="font-bold text-white">보호종료 초기 자립준비청년의 반복되는 고정비 연체 문제</strong>, 팀 포레가 몰입한 문제예요.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        자립준비청년, 들어보셨나요?
      </h2>
      
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        먼저 자립준비청년이 누구인지부터 짚어볼게요. 자립준비청년은 부모의 사망, 학대, 방임 등으로 원가정에서 보호받지 못해 가정 밖에서 성장한 청년을 말해요. 2026년 기준 전국에 약 7만 3,955명이 있고, 최근 5년간 매년 1,000명 이상이 보호종료를 맞이하고 있죠.
      </p>

      {/* Placeholder for Appendix 1 */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex flex-col items-center justify-center text-gray-500 my-12 border border-white/10">
        <span className="text-sm mb-2">Appendix 1</span>
        <span className="text-xl font-bold text-gray-400">자립준비청년의 경제적 어려움 데이터 시각화</span>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        이들이 보호종료 당시 가장 크게 걱정하는 것은 무엇일까요? 보건복지부 2023년 자립지원 실태조사에 따르면, 경제적인 문제에 대한 응답이 38%로 가장 높았어요. 특히 '돈 관리 방법에 대한 지식 부족'이라는 응답은 해마다 꾸준히 상승하고 있어요.
      </p>

      {/* Placeholder for Appendix 3 */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex flex-col items-center justify-center text-gray-500 my-12 border border-white/10">
        <span className="text-sm mb-2">Appendix 3</span>
        <span className="text-xl font-bold text-gray-400">비자립준비청년 대비 자립준비청년의 고정비 연체율 (13배)</span>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        수치로도 명확해요. 자립준비청년의 3개월 이상 고정비 연체율은 비자립준비청년의 <strong className="font-bold text-white">13배</strong>에 달해요. 그리고 3개월 이상 고정비를 연체하면 가스 공급 차단, 발신·수신 정지, LH 퇴거 조치, 단전·단수 같은 실질적인 조치가 뒤따라와요. 일상이 무너지는 거죠.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        자립준비청년의 고정비 연체, '귀찮음' 때문일까요?
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        팀 포레는 은평구 자립준비청년청 센터장을 인터뷰하며 이 질문을 던졌어요. 답은 예상과 달랐어요.
      </p>

      <blockquote className="border-l-4 border-sunny-yellow pl-4 italic text-gray-400 my-8 py-2">
        "저도 그게 궁금해요. 왜 고정비를 반복적으로 연체하는 청년들은 핸드폰 요금, 월세, 공과금을 가장 후순위로 둘까? 보통은 그 돈을 뺀 나머지가 쓸 수 있는 돈이라고 생각하는데, <strong className="font-bold text-white">이 친구들은 가진 돈을 다 쓰고 남으면 공과금을 내고, 핸드폰이 끊기면 조금씩 갚아서 풀어요.</strong>"
      </blockquote>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        이 대답이 문제 정의의 실마리였어요. 자립준비청년들에게는 '통장 잔액'과 '실제로 쓸 수 있는 돈'을 구분하는 감각 자체가 없었던 거예요. 잔액 전체를 소비할 수 있는 돈으로 인식하다 보니, 납부 시점이 되면 잔액이 부족한 상황이 반복되고 있었죠.
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white leading-tight">
        왜 이런 인식이 형성됐을까요? 팀 포레는 세 가지 요인을 발견했어요.
      </h3>

      <ul className="list-disc pl-6 space-y-4 mb-12 text-lg text-gray-300">
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">① 아동양육시설: 고정비 관련 경험 부족</strong>
          보호종료 전, 자립준비청년들은 아동양육시설에서 성장해요. 시설에서는 월세, 관리비, 공과금 같은 주요 고정비를 시설이 관리하기 때문에, 청년들이 이를 직접 경험하고 관리해볼 기회가 거의 없었어요.
        </li>
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">② 보호종료 전: 고정비 관련 교육 부족</strong>
          시설 내 교육 프로그램에는 고정비와 변동비를 구분하거나 공과금 개념을 다루는 내용은 있지만, 우선순위와 연체시 위험한 고정비에 대한 교육은 부재했어요. 즉, 개념은 배우지만 실제 상황에서 어떤 돈을 먼저 확보해야 하는지에 대한 판단 기준은 전달되지 못했죠.
        </li>
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">③ 보호종료 후: 정보 전달 중심의 교육</strong>
          보호종료 이후의 금융 교육은 저축·투자·금융사기 예방 등에 초점이 맞춰져 있어요. 정작 매일 반복되는 소비 상황에서 어떻게 판단해야 하는지, 일상적인 소비 관리에까지 닿는 내용은 다루지 못하고 있었어요.
        </li>
      </ul>

      {/* Placeholder for Appendix 4-1 */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex flex-col items-center justify-center text-gray-500 my-12 border border-white/10">
        <span className="text-sm mb-2">Appendix 4-1</span>
        <span className="text-xl font-bold text-gray-400">자립준비청년 대상 주요 경제교육 현황 표</span>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        세 단계를 모두 지나온 자립준비청년들은 결국 이렇게 말했어요.
      </p>
      
      <blockquote className="border-l-4 border-sunny-yellow pl-4 italic text-gray-400 my-8 py-2">
        "솔직히 정신 차리는 방법은 어렵죠. 아예 확 망해보고 잃어봐야 정신 차려요."
      </blockquote>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        소비 기준을 세우고 일상에 개입할 수 있다면
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        기존 교육의 한계를 확인한 팀 포레는 하나의 가설을 세웠어요.
      </p>

      <div className="my-8 p-6 bg-white/5 border border-sunny-yellow/30 rounded-2xl">
        <p className="text-xl font-bold text-sunny-yellow text-center leading-relaxed">
          "고정비를 먼저 확보하도록 소비 기준을 세우고, <br className="hidden md:block"/>경험형 교육으로 일상의 소비 순간에 개입한다면 연체 문제를 해결할 수 있지 않을까?"
        </p>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        이 가설을 바탕으로 팀 포레가 만든 솔루션이 바로 <strong className="font-bold text-white">미리내</strong>, 고정비 시각화 위젯 기반 소비관리 프로그램이에요.
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-12 mb-4 text-white leading-tight">
        숫자를 보여주는 것만으로는 부족했습니다
      </h3>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        팀 포레의 첫 시도는 시각화 위젯이었어요. 스마트폰 홈화면 위젯을 통해 잔액에서 고정비를 차감한 사용가능액을 표시하는 방식이었죠. 사용자가 소득, 소득일, 고정비, 고정비 납부일을 입력하면 "지금 써도 되는 돈"이 홈화면에 자동으로 보이는 구조예요.
      </p>

      {/* Placeholder for Appendix 8-3 */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex flex-col items-center justify-center text-gray-500 my-12 border border-white/10">
        <span className="text-sm mb-2">Appendix 8-3</span>
        <span className="text-xl font-bold text-gray-400">소비 순간에 사용가능액 노출 (위젯)</span>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        1차 MVP를 배포하고 나서 팀 포레는 예상하지 못한 문제를 마주했어요. 위젯을 설치해도, 세 가지 벽이 여전히 남아 있었어요.
      </p>

      <ul className="list-disc pl-6 space-y-4 mb-12 text-lg text-gray-300">
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">① "제 고정비가 얼마인지 잘 모르겠어요"</strong>
          돈이 언제, 얼마나 들어오고 어떻게 나가는지 자체를 파악하지 못하고 있었어요. 위젯에 입력할 정보를 알지 못한 거예요.
        </li>
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">② "정지 문자 오면 납부하는 게 편해서요"</strong>
          고정비가 무엇이고, 왜 그것을 먼저 확보해야 하는지에 대한 이해가 없었어요. 위젯이 사용 가능액을 보여줘도, 그 숫자의 의미를 받아들일 기준이 없었죠.
        </li>
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">③ "고정비 때문에 참은 건 아니에요"</strong>
          일상 속 소비 상황에서 사용가능액을 소비 판단의 기준으로 삼는 경험이 부족했어요. 위젯을 봐도, 그 정보가 실제 소비 순간까지 이어지지 못한 거예요.
        </li>
      </ul>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        팀 포레는 이 지점에서 중요한 것을 깨달았어요. <strong className="font-bold text-white">고정비가 소비보다 우선이 되도록 기준을 세우고, 참여자의 일상에 실제로 닿을 필요가 있다는 것.</strong> 위젯이라는 도구만으로는 부족했어요. 그래서 팀은 미리내를 위젯이 아닌 프로그램으로 개편했어요.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        미리내, 고정비 중심 소비의 시작
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        새로워진 미리내는 네 단계로 구성돼요.
      </p>

      {/* Placeholder for Solution 1 */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex flex-col items-center justify-center text-gray-500 my-12 border border-white/10">
        <span className="text-xl font-bold text-gray-400">미리내, 고정비 중심 소비의 시작 (솔루션 소개 이미지)</span>
      </div>

      <ul className="space-y-4 mb-12 text-lg text-gray-300">
        <li><strong className="font-bold text-white">1단계 · 고정비 개념·중요성 인지</strong> — 사례 중심 교육과 카드게임을 통해 고정비가 무엇이며 왜 먼저 확보해야 하는지를 몸으로 이해해요.</li>
        <li><strong className="font-bold text-white">2단계 · 1:1 소비 상담</strong> — 참여자의 소득과 소비 구조를 파악하고, 고정비별 금액과 납부일을 함께 정리해요.</li>
        <li><strong className="font-bold text-white">3단계 · 일상 속 소비 경험</strong> — 스마트폰 홈화면 위젯을 통해 사용가능액을 확인하며, 고정비 확보를 고려한 소비 판단을 유도해요.</li>
        <li><strong className="font-bold text-white">4단계 · 모니터링 및 사후 인터뷰</strong> — 고정비 확보를 고려한 소비 판단이 지속되는지 관찰하고, 소비 행동 변화와 어려움을 파악해요.</li>
      </ul>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        교육으로 개념을 세우고, 상담으로 자신의 소비 구조를 파악하고, 위젯으로 일상에 개입하고, 모니터링으로 지속성을 확인하는 흐름이에요. 미리내는 2026년 8월, 자립준비청년 12명을 대상으로 운영됐어요. 보호종료 연장 1명, 초기 2명, 3-5년 7명, 5년 이후 2명으로 다양한 단계의 청년들이 참여했죠.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        실제 소비 순간에 변화가 생겼습니다
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        프로그램이 참여자의 일상까지 닿았는지, 팀 포레는 사후 인터뷰를 통해 확인했어요.
      </p>

      <div className="bg-white/5 p-8 rounded-2xl mb-8 border border-white/10">
        <h4 className="text-xl font-bold text-white mb-4">참여 전, 참여자들의 목소리:</h4>
        <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400 space-y-2">
          <p>"고정비 자체를 아예 몰랐어요, 신청하면서 처음 봤어요."</p>
          <p>"돈을 너무 막 써요. 쓰고 싶은 거 다 쓰다가 없다 싶으면 일용직 가요."</p>
          <p>"저번 달엔 돈 들어오고 나서 일주일도 안 돼서 다 사라졌으니까. 아는 형한테 15만 원 빌려서 냈어요. 50만 원까지도 빌려봤어요."</p>
        </blockquote>
      </div>

      <div className="bg-sunny-purple/20 p-8 rounded-2xl mb-12 border border-sunny-purple/40">
        <h4 className="text-xl font-bold text-white mb-4">참여 후, 같은 참여자들의 목소리:</h4>
        <blockquote className="border-l-4 border-sunny-yellow pl-4 italic text-gray-300 space-y-4">
          <p>"고정비 내야 하니까, 라떼를 마시려다가 아아를 마셨고, 제육을 먹으려다 2천원 더 싼 순댓국을 먹었어요."</p>
          <p>"일단 쓰고 보자가 원래 생각이었는데, 지금 잔액으로 더 쓰면 고정비를 못 내게 되니까, 일상에 제한이 걸리잖아요. 지금 쓰면 내가 감당이 되나? 싶은 생각이 들어요."</p>
          <p>"제 친구한테도 알려주고 싶어요. 너 지금 통장 봐봐, 50만 원 있지? 네가 나갈 돈 다 입력하고 쓸 수 있는 돈 봐봐. 나가야 하는 돈 빼고 원래 나머지 돈, 이게 네가 쓸 수 있는 돈이야. 앞으로 이거 보고 쓰는 거야, 그전처럼 쓰면 안돼 너 위험해."</p>
        </blockquote>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        라떼가 아메리카노가 되고, 제육이 순댓국이 되는 그 순간에 미리내가 개입한 거예요. 팀 포레가 세웠던 가설 — <strong className="font-bold text-white">"일상의 소비 순간에 개입한다면"</strong> — 이 실제로 작동하고 있었어요.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        한 사람만의 변화가 아니었습니다
      </h2>

      {/* Placeholder for Solution 2 */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex flex-col items-center justify-center text-gray-500 my-12 border border-white/10">
        <span className="text-xl font-bold text-gray-400">한 사람만의 변화가 아닙니다 (수치 변화 그래프)</span>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        수치로도 확인됐어요.
      </p>
      
      <ul className="list-disc pl-6 space-y-2 mb-12 text-lg text-gray-300">
        <li>12명 중 <strong className="font-bold text-white">9명</strong>이 프로그램 참여 후 '고정비 제외 금액 = 사용 가능액'으로 인식이 변화했어요.</li>
        <li><strong className="font-bold text-white">83.3%</strong>가 프로그램 종료 시점에 사용가능액을 기준으로 소비를 판단하게 됐어요.</li>
        <li>인식 변화가 생긴 청년들은 소비 판단에 따라 조정 행동을 <strong className="font-bold text-white">평균 4.4회</strong> 수행했어요.</li>
      </ul>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        특히 흥미로운 발견은 대상자 특성에 따른 차이였어요. <strong className="font-bold text-white">보호종료 2년차 이하 집단</strong>은 판단 기준 변화가 100%였고 소비 조정 행동은 평균 12.5회로 활발했어요. 반면 <strong className="font-bold text-white">보호종료 3년차 이상 집단</strong>은 이미 통장 잔액과 실제 소비 가능액을 구분하고 있어서, 판단 기준 변화는 14%, 조정 행동은 평균 1.7회에 그쳤죠.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        이 발견은 미리내의 방향성을 명확하게 해줬어요. 미리내가 가장 필요한 대상은 <strong className="font-bold text-white">보호종료 초기의 자립준비청년</strong>이었어요. 아직 소비 기준을 형성하지 못한, 잔액 전체를 사용 가능한 돈으로 인식하는 그 시기의 청년들이에요.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        그렇다면 미리내는 성공한 걸까요?
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        팀 포레는 확인한 것과 확인하지 못한 것을 정직하게 나눴어요.
      </p>

      {/* Placeholder for Solution 3 */}
      <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex flex-col items-center justify-center text-gray-500 my-12 border border-white/10">
        <span className="text-xl font-bold text-gray-400">그렇다면 미리내는 성공한 걸까요? (확인한 것 / 확인하지 못한 것)</span>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        인식과 행동의 변화는 확인했지만, 그 변화가 실제 연체율 감소로 이어졌는지, 프로그램이 끝난 뒤에도 스스로 유지되는지는 아직 답을 얻지 못한 상태예요.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight">
        미리내의 다음 걸음
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        팀 포레의 여정은 여기서 끝나지 않아요. 확인하지 못한 것을 확인하기 위해, 미리내는 두 가지 방향으로 확장돼요.
      </p>

      <ul className="list-disc pl-6 space-y-4 mb-12 text-lg text-gray-300">
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">더 오래</strong>
          기존 7일에서 최소 1개월 이상 참여자의 소비 행동을 추적할 계획이에요. 소비 기준이 일회성 변화가 아니라 습관으로 자리 잡는지, 그리고 실제 고정비 납부까지 이어지는지를 확인하기 위해서예요.
        </li>
        <li className="pl-2">
          <strong className="font-bold text-white block mb-1">타겟팅한 대상이 있는 곳으로</strong>
          미리내가 가장 필요한 보호종료 초기 청년들을 만나기 위해, 팀 포레는 여러 기관과 협업을 논의하고 있어요.
          <ul className="list-circle pl-6 mt-2 space-y-1 text-base text-gray-400">
            <li>아동양육시설 평화의 집: 보호연장 청년 대상 9월 대면 프로그램 진행 예정</li>
            <li>은평구 자립준비청년청: 사업 팀과 프로그램 협의 중</li>
            <li>대구 바람개비 서포터즈: 프로그램 활용 협의 중</li>
            <li>강원도 자립지원전담기관: 진로 탐색 및 경제교육 관련 캠프 '비전퀘스트' 교육 협의 중</li>
          </ul>
        </li>
      </ul>

      <div className="my-12 p-8 bg-white/5 border border-white/10 rounded-2xl">
        <p className="text-lg text-white mb-2"><strong className="font-bold text-sunny-yellow">Vision</strong> — 소비 행동 변화를 넘어, 소비 기준의 내재화를 통한 연체 문제 해결까지.</p>
        <p className="text-lg text-white"><strong className="font-bold text-sunny-yellow">Mission</strong> — 고정비 납부 여부까지 모니터링하여 실제 연체가 줄었음을 증명.</p>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-12">
        라떼가 아아가 되는 그 순간의 판단이, 결국 청년의 일상을 지켜내요. 팀 포레(FOU:RE)의 시행착오는 그 판단의 순간에 개입하기 위한 여정이에요. 미리내의 여정은 계속될 거예요.
      </p>

    </div>
  );
}
