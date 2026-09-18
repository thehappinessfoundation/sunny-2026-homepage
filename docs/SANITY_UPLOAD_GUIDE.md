# Sunny 2026 Impact Report Sanity Upload Guide

본 문서는 다른 컴퓨터에서 안티그래비티(AI) 또는 작업자가 새로운 팀의 리포트를 새니티(Sanity)에 등록할 때 참고하는 가이드입니다.

---

## 1. 새니티 접속 정보 및 환경 변수
다른 컴퓨터의 `.env.local` 또는 환경 변수에 다음 값을 설정합니다:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="u1oyirho"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_WRITE_TOKEN="skDimmdnzIPzxOLBbq59hdXt8gnLNVUdz38CzmDfnk7xAYzCiOEDlpvo5BA3sYxqSdyGwVPbUjNcheCdULEXYYqq4y0lHZ5bpIJpzIPnzXeQdsl9i4UwD0lKFS3LgaK7odWDVNzgogOwcV08DdlZGYmK1yTQB8FkJ6Nn0eidvxByhUJhs2PI"
```

---

## 2. 새니티 `project` 스키마 필드 구조

리포트 페이지 모달에는 2개의 액션 카드가 있으며 각각 아래 필드와 연동됩니다:

| 모달 버튼 | 새니티 필드명 | 설명 및 예시 |
| :--- | :--- | :--- |
| **Card 1: Report** | `reportTitle` | 문제 정의 & 솔루션 아티클 메인 제목 |
| | `reportBody` | 문제 정의 및 성과 내용 본문 (PortableText: 텍스트, 이미지, 소제목, 인용구 등) |
| **Card 2: Project** | `projectTitle` | 프로젝트 과정 회고 아티클 메인 제목 |
| | `projectBody` | 프로젝트 수행 과정 및 회고 본문 (PortableText: 텍스트, 이미지, 소제목, 인용구 등) |
| **공통 다운로드** | `reportPdf` | 리포트 원본 PDF 파일 에셋 (`.pdf`) |
| **기본 메타데이터** | `title` | 프로젝트 기본 제목 (목록 카드에 노출) |
| | `team` | 팀명 (예: `팀 두드림`, `포레`, `등대`) |
| | `slug` | 고유 영문 슬러그 (예: `doodream`, `fou-re`) |
| | `category` | `disability`(장애), `elderly`(노인), `multicultural`(다문화), `others`(기타) |
| | `teamMembers` | 팀원 이름 목록 (예: `홍길동, 김철수, 이영희`) |
| | `shortDescription` | 한 줄 요약 |

---

## 3. 다른 컴퓨터의 안티그래비티에게 지시하는 프롬프트

양식이 제각각인 문서(마크다운, PDF, 사진들)를 전달할 때 안티그래비티에게 다음과 같이 지시하면 알아서 내용을 분석해 등록합니다:

> *"첨부한 팀 리포트 문서와 사진들을 분석해서 Sunny 2026 새니티(`project` 스키마)에 등록해줘.*
> *1. **문제 정의, 해결책, 최종 성과**에 해당하는 내용은 `reportTitle`과 `reportBody`에,*
> *2. **현장 조사 과정, 가설 검증, 시행착오, 팀 회고**에 해당하는 내용은 `projectTitle`과 `projectBody`에 적절히 분류해줘.*
> *3. 이미지가 본문 어디에 들어가야 할지 매칭해서 이미지 블록으로 결합하고, PDF 파일은 `reportPdf`로 업로드해줘.*
> *4. 팀명과 카테고리, 영문 slug도 설정해줘."*

### 만약 양식이 다를 경우의 처리 규칙:
* **내용이 1개로 합쳐져 있는 경우**: `reportTitle`과 `reportBody`에 전체 내용을 넣고, `projectTitle`에는 "프로젝트 과정 회고", `projectBody`에는 핵심 요약 또는 노션 아카이빙 링크를 넣어줍니다.
* **마크다운 없이 PDF만 있는 경우**: 안티그래비티가 PDF 텍스트를 추출하여 제목과 개요를 생성하고, 공식 보고서 PDF인 경우 `reportPdf`에 연결합니다.

---

## 4. ⚠️ PDF 파일 취급 주의사항 (중요)

* **참고용 PDF (노션 내보내기 PDF)**:
  * 노션 폴더에 함께 들어있는 PDF 파일은 **"노션 원본 페이지에서 사진이 어떤 순서와 위치로 배치되었는지를 눈으로 대조/확인하기 위한 용도"**입니다.
  * 이 참고용 PDF를 웹사이트의 다운로드용 `reportPdf`에 자동으로 등록하지 **않습니다**.
* **다운로드용 공식 리포트 PDF**:
  * 실제로 사용자가 다운로드받을 완성형 리포트 PDF는 팀/담당자가 명시적으로 지정하거나, 새니티 관리자 화면(`https://besunny.com/studio`)에서 해당 프로젝트의 **[Report PDF Upload]** 항목에 직접 드래그 앤 드롭으로 업로드합니다.
  * `reportPdf` 필드가 비어 있으면 홈페이지 본문 하단에 '리포트 PDF 다운로드' 버튼이 자동으로 숨겨집니다.

