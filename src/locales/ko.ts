//---------- DEFAULT REACT-ADMIN ----------
//---------- NOT CHANGE ----------
const ra = {
  ra: {
    action: {
      add_filter: '필터 추가',
      add: '추가',
      back: '뒤로가기',
      bulk_actions: '1개 항목 선택 |||| %{smart_count}개 항목 선택',
      cancel: '취소',
      clear_array_input: '목록을 지우십시오',
      clear_input_value: '명확한 가치',
      clone: '클론',
      close_menu: '메뉴 닫기',
      close: '닫기',
      confirm: '확인하다',
      create_item: '%{item} 만들기',
      create: '창조하다',
      delete: '삭제',
      edit: '수정',
      expand: '확장',
      export: '내보내기',
      list: '목록',
      move_down: '아래로 이동',
      move_up: '이동',
      open_menu: '메뉴 열기',
      open: '열기',
      refresh: '새로고짐',
      remove_all_filters: '전체 필터 제거',
      remove_filter: '이 필터 제거',
      remove: '제거',
      save: '저장',
      search: '검색',
      select_all: '전체 선택',
      select_columns: '열',
      select_row: '해당 열 선택',
      show: '보여주기',
      sort: '정렬',
      toggle_theme: '테마 토글',
      undo: '실행취소',
      unselect: '선택취소',
      update_application: '애플리케이션 다시 로드',
      update: '업데이트',
    },
    boolean: {
      false: '아니오',
      null: ' ',
      true: '예',
    },
    page: {
      create: '%{name} 생성',
      dashboard: '대쉬보드',
      edit: '%{name} #%{recordRepresentation}',
      empty: '아직 %{name} 가 없습니다.',
      error: '무엇인가 잘못되었습니다.',
      invite: '추가하시겠습니까?',
      list: '%{name}',
      loading: '로딩 중',
      not_found: '찾을 수 없습니다.',
      show: '%{name} #%{recordRepresentation}',
    },
    input: {
      file: {
        upload_several: '여기에 파일을 끌어다 놓거나 클릭해서 업로드하세요',
        upload_single: '여기에 파일을 끌어다 놓거나 클릭해서 업로드하세요',
      },
      image: {
        upload_several: '여기에 파일을 끌어다 놓거나 클릭해서 업로드하세요',
        upload_single: '여기에 파일을 끌어다 놓거나 클릭해서 업로드하세요',
      },
      references: {
        all_missing: '참조 데이터를 찾을 수 없습니다.',
        many_missing: '연결된 참조 중 하나 이상을 사용할 수 없습니다.',
        single_missing: '연결된 참조를 사용할 수 없습니다.',
      },
      password: {
        toggle_hidden: '비밀번호 보기',
        toggle_visible: '비밀번호 숨기기',
      },
    },
    message: {
      about: '소개',
      are_you_sure: '확실합니까?',
      auth_error: '인증 오류',
      bulk_delete_content:
        '%{name} 항목을 삭제하시겠습니까? |||| %{smart_count}개 항목을 삭제하시겠습니까?',
      bulk_delete_title: '%{name} 삭제 |||| %{name} %{smart_count}개 삭제',
      bulk_update_content:
        '%{name} 항목을 업데이트하시겠습니까? |||| %{smart_count}개 항목을 업데이트하시겠습니까?',
      bulk_update_title:
        '%{name} 업데이트 |||| %{name} %{smart_count}개 업데이트',
      clear_array_input: '정말로 전체 목록을 지우시겠습니까?',
      delete_content: '이 항목을 삭제하시겠습니까?',
      delete_title: '%{name} #%{id} 삭제',
      details: '상세 내용',
      error: '클라이언트 오류가 발생하여 요청을 완료할 수 없습니다.',
      invalid_form: '잘못된 양식입니다. 오류를 확인하여 주십시오',
      loading: '페이지를 불러오는 중입니다. 잠시만 기다려 주십시오',
      no: '아니오',
      not_found: 'URL을 잘못 입력했거나 잘못된 링크를 클릭했습니다.',
      unsaved_changes: '저장되지 않은 변경사항이 있습니다. 무시하시겠습니까?',
      yes: '예',
    },
    navigation: {
      current_page: '%{page} 페이지',
      first: '첫번째 페이지로 이동',
      last: '마지막 페이지로 이동',
      next: '다음 페이지로 이동',
      no_more_results:
        '%{page}번 페이지가 범위를 벗어났습니다. 이전 페이지를 사용해 보십시오.',
      no_results: '결과를 찾을 수 없습니다.',
      page_out_from_begin: '첫번째 페이지입니다.',
      page_out_from_end: '마지막 페이지입니다.',
      page_out_of_boundaries: '%{page}번 페이지가 범위를 벗어났습니다.',
      page_range_info: '%{total} 중 %{offsetBegin}-%{offsetEnd}',
      page_rows_per_page: '페이지당 행 수:',
      page: '%{page} 페이지로 이동',
      partial_page_range_info:
        '%{offsetEnd} 초과 중 %{offsetBegin}-%{offsetEnd}',
      previous: '이전 페이지로 이동',
      skip_nav: '내용으로 건너뛰기',
    },
    sort: {
      ASC: '오름차순',
      DESC: '내림차순',
      sort_by: '%{field}%{order}으로 정렬됨',
    },
    auth: {
      auth_check_error: '계속하려면 로그인하십시오.',
      logout: '로그아웃',
      password: '비밀번호',
      sign_in_error: '인증에 실패했습니다. 다시 시도하십시오.',
      sign_in: '로그인',
      user_menu: '프로필',
      username: '아이디',
    },
    notification: {
      application_update_available: '새 버전을 사용할 수 있습니다.',
      bad_item: '잘못된 요소입니다.',
      canceled: '작업이 취소되었습니다.',
      created: '요소가 생성되었습니다.',
      data_provider_error:
        '데이터 공급자 오류입니다. 자세한 내용은 콘솔을 참조하십시오.',
      deleted:
        '요소가 삭제되었습니다. |||| %{smart_count}개의 요소가 삭제되었습니다.',
      http_error: '서버 통신 오류',
      i18n_error: '지정한 언어에 대한 변환을 불러올 수 없습니다.',
      item_doesnt_exist: '요소가 존재하지 않습니다.',
      logged_out: '세션이 종료되었습니다. 다시 연결하십시오.',
      not_authorized: '이 리소스에 접근할 수 있는 권한이 없습니다.',
      updated:
        '요소가 업데이트되었습니다. |||| %{smart_count}개의 요소가 업데이트되었습니다.',
    },
    validation: {
      email: '유효한 이메일이 아닙니다.',
      maxLength: '%{max}자 이하여야 합니다.',
      maxValue: '%{max} 이하여야 합니다.',
      minLength: '%{min}자 이상이어야 합니다.',
      minValue: '%{min} 이상이어야 합니다.',
      number: '숫자여야 합니다.',
      oneOf: '다음 중 하나여야 합니다: %{options}',
      regex: '특정 형식(regexp)과 일치해야 합니다.: %{pattern}',
      required: '필수',
      unique: '특별해야 해',
    },
    saved_queries: {
      help: '목록을 필터링하고 나중을 위해 이 쿼리 저장',
      label: '저장된 쿼리',
      new_dialog_title: '현재 쿼리 저장 위치',
      new_label: '현재 쿼리 저장...',
      query_name: '쿼리 이름',
      remove_dialog_title: '저장된 쿼리를 삭제하시겠습니까?',
      remove_label_with_name: '"%{name}" 쿼리 삭제',
      remove_label: '저장된 쿼리 삭제',
      remove_message: '저장된 쿼리 목록에서 해당 항목을 삭제하시겠습니까?',
    },
    configurable: {
      configureMode: '현재 페이지 구성',
      customize: '커스터마이즈',
      inspector: {
        content: '애플리케이션 UI 요소를 연결하여 구성합니다',
        hideAll: '모두 숨기기',
        reset: '설정 리셋',
        showAll: '모두 보이기',
        title: '조사관',
      },
      Datagrid: {
        title: '데이터 그리드',
        unlabeled: '레이블이 지정되지 않은 열 #%{column}',
      },
      SimpleForm: {
        title: '형태',
        unlabeled: '레이블이 지정되지 않은 입력 #%{input}',
      },
      SimpleList: {
        primaryText: '1차 텍스트',
        secondaryText: '2차 텍스트',
        tertiaryText: '3차 텍스트',
        title: '목록',
      },
    },
  },
}

//---------- CUSTOMIZE ----------
export const ko = {
  ...ra,
  resources: {},
  customize: {
    action: {
      advanced_search: '고급 검색',
      apply: '신청',
      bookmark: '즐겨찾기',
      clear: '삭제',
      copy: '복사',
      delete_items: '항목 삭제',
      detail: '상세보기',
      download_to_excel: '엑셀로 다운로드',
      download: '다운로드',
      duplicate_row: '선택 항목 복사',
      duplicate: '사본만들기',
      keep: '유지하다',
      logout: '로그아웃',
      next: '다음',
      ok: '확인',
      post: '등록',
      previous: '이전',
      redo: '다시실행',
      remember_me: '자동로그인',
      remove_duplicate: '사본 삭제',
      reset_config: '구성 리셋',
      save_changes: '변동사항 저장',
      try_again: '재시도',
      update_items: '항목 업데이트',
    },
    message: {
      confirm_success: '성공적으로 완료하였습니다.',
      copy_success: '복사됨: %{text}',
      download_failed: '다운로드 실패',
      download_successfully: '다운로드 성공',
      leave_page_form_content: '작성중인 내용이 삭제됩니다.',
      leave_page_form: '페이지를 떠나시겠습니까?',
      not_images: '표시할 이미지가 없습니다.',
      save_change_modal_content: '현재 페이지를 떠나시겠습니까?',
      save_change_modal_leave: '나가기',
      save_change_modal_stay: '머무르기',
      save_change_modal_title: '저장하지 않은 변경사항이 있습니다.',
      save_success: '성공적으로 저장되었습니다.',
      table_config_error: '표를 불러오는데 오류가 발생했습니다',
      upload_image: '업로드할 이미지를 선택했습니다.',
      upload_images: '업로드할 이미지들을 선택했습니다.',
      set_m_name_change: '이 변경 사항은 세트 이름에 영향을 미칩니다.',
      component_m_name_change:
        '이 변경 사항은 구성 요소 이름에 영향을 미칩니다.',
    },
    auth: {
      username_placeholder: 'ID (사원번호)',
      password_placeholder: '비밀번호',
      remember_me: '로그인 상태 유지',
    },
    notification: {
      exist: '나가기',
    },
    validation: {
      is_required: '%{name}이(가) 필요합니다',
    },
  },
  common: {
    area_setting: '담당 지역 관리',
    basic_info: '기본 정보',
    bookmark: '즐겨찾기',
    change_password: '비밀번호 변경',
    code_system: '제품코드체계 관리',
    company_m: '법인/단체 관리',
    component_m: '구성품 관리',
    confirm_password: '비밀번호 확인',
    confirmation: '확인',
    content_place_holder: '콘텐츠를 추가하십시오',
    country_setting: '원산지 관리',
    create_cooperator: '협력사 생성',
    create_engineer: '기사 생성',
    create_marketing: '마케팅 동의 생성',
    create_material: '자재 생성',
    create_mileage: '주행거리 생성',
    create_notice: '공지사항 생성',
    create_reception: '접수자 생성',
    cs_cooperators: 'CS 협력사 관리',
    cs_details: 'CS 관리 상세보기',
    cs_engineers: 'CS 기사 관리',
    cs_list: 'CS 관리 리스트',
    cs_manage: 'CS 고객 관리',
    cs_material_list: 'CS 자재 리스트',
    cs_materials: 'CS 자재',
    cs_new: 'CS 관리 신규등록',
    cs_notice_list: 'CS 공지사항 리스트',
    cs_notice: 'CS 공지사항 관리',
    cs_requests: 'A/S 목록',
    cs: 'CS',
    customer_list: '소비자 리스트',
    detail: '상세보기',
    engineers: 'CS 기사',
    english: '영어',
    from: '부터',
    hrm: 'HRM',
    id_information: 'ID 정보',
    korean: '한국어',
    label_info: '표식',
    language: '언어',
    logistics: '물류',
    logo: '로고',
    management: '관리',
    marketing: '마케팅',
    mileage: '마일리지',
    my_account: '나의 계정',
    new_customer: '신규 소비자',
    new_password: '새 비밀번호',
    current_password: '현재 비밀번호',
    permissions: '권한 설정',
    person_company: '개인/단체 관리',
    person_m: '개인 관리',
    price_info: '가격 정보',
    product: '제품 등록',
    role_information: '직무 정보',
    role_permission_setting: '직무 권한 설정',
    role_permission: '직무 권한 설정',
    sales: '영업',
    screen: '화면',
    set_m: '세트 관리',
    setting: '설정',
    to: '까지',
    user_permission_setting: '개인 권한 설정',
    user_permission: '개인 권한 설정',
    view: '조회',
    work_areas: '지역 관리',
    write: '수정',
  },
}
