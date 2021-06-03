2021-06-01 :

[기능 정의]

    1) render depth_01's app_name,
        send its' id to depth_02

    2) render depth_02's app_name and app_url,
        reseive depth_01's id and compare it with it's pid,
        send it's id to depth_03

    3) render depth_03's app_name and app_url,
        reseive depth_02's id and compare it with it's pid

redux를 연습하기위해 광주은행 worklist를 만들어보기로 했다.<br />
메뉴트리와, 각 메뉴의 파일 경로를 함께 보여주고, <br />
메뉴와 경로를 수정 추가 및 삭제하며 업데이트하기 위해서 redux 로 전체 데이터의 상태를 관리해보려는 의도였다.<br />
미흡한 react 기본지식으로 인해 기본적인 메뉴트리 구현단계에서 나아가지 못하고 있다...<br />
