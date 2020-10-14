import { ApartmentOutlined, HomeOutlined, LayoutOutlined, LogoutOutlined, NotificationOutlined, PartitionOutlined, PhoneOutlined, ProfileOutlined, ProjectOutlined, PropertySafetyOutlined, SettingOutlined, SmileOutlined, SolutionOutlined, SyncOutlined, TagOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
export const getPorts = (id: string) => {
  return [
    {
      'id': id + 'port1',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port2',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0.25 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port3',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0.5 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port4',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0.75 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port5',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port6',
      'shape': 'Circle',
      'offset': { 'x': 0.25, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port7',
      'shape': 'Circle',
      'offset': { 'x': 0.5, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port9',
      'shape': 'Circle',
      'offset': { 'x': 0.75, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port0',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port10',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0.25 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port11',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0.5 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port12',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0.75 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port13',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port14',
      'shape': 'Circle',
      'offset': { 'x': 0.25, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port15',
      'shape': 'Circle',
      'offset': { 'x': 0.5, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port16',
      'shape': 'Circle',
      'offset': { 'x': 0.75, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
  ];
};
export const environment = {
  'apiEndpont': 'http://localhost:4000/',
  'api': {
    'basic-api': {
      'role': {
        'main': 'api/v1/Role',
        'getById': 'api/v1/Role/',
        'active': 'api/v1/Role/Active',
        'deactive': 'api/v1/Role/Deactive',
      },
      'department': {
        'main': 'api/v1/Department',
        'getById': 'api/v1/Department/',
        'active': 'api/v1/Department/Active',
        'deactive': 'api/v1/Department/Deactive',
      },
      'group': {
        'main': 'api/v1/Group',
        'getById': 'api/v1/Group/',
        'active': 'api/v1/Group/Active',
        'deactive': 'api/v1/Group/Deactive',
      },
      'pattern': {
        'main': 'api/v1/Pattern',
        'getById': 'api/v1/Pattern/',
        'active': 'api/v1/Pattern/Active',
        'deactive': 'api/v1/Pattern/Deactive',
      },
      'permission': {
        'main': 'api/v1/Permission',
        'getById': 'api/v1/Permission/',
        'active': 'api/v1/Permission/Active',
        'deactive': 'api/v1/Permission/Deactive',
      },
    },
    'extra-api': {
      'auth': {
        'main': 'api/v1/Auth',
        'getById': 'api/v1/Auth/',
        'active': 'api/v1/Auth/Active',
        'deactive': 'api/v1/Auth/Deactive',
        'authenticate': 'api/v1/Auth/Authentication',
        'login': 'api/v1/Auth/Login',
      },
    },
    'bpmn-api': {
      'comment': {
        'main': 'api/v1/Comment',
        'getById': 'api/v1/Comment/',
        'active': 'api/v1/Comment/Active',
        'deactive': 'api/v1/Comment/Deactive',
      },
      'condition': {
        'main': 'api/v1/Condition',
        'getById': 'api/v1/Condition/',
        'active': 'api/v1/Condition/Active',
        'deactive': 'api/v1/Condition/Deactive',
      },
      'work-flow': {
        'main': 'api/v1/WorkFlow',
        'getById': 'api/v1/WorkFlow/',
        'active': 'api/v1/WorkFlow/Active',
        'deactive': 'api/v1/WorkFlow/Deactive',
      },
      'work-flow-step': {
        'main': 'api/v1/WorkFlowStep',
        'getById': 'api/v1/WorkFlowStep/',
        'active': 'api/v1/WorkFlowStep/Active',
        'deactive': 'api/v1/WorkFlowStep/Deactive',
      },
      'work-flow-step-instance': {
        'main': 'api/v1/WorkFlowStepInstance',
        'getById': 'api/v1/WorkFlowStepInstance/',
        'active': 'api/v1/WorkFlowStepInstance/Active',
        'deactive': 'api/v1/WorkFlowStepInstance/Deactive',
      },
      'work-flow-connection': {
        'main': 'api/v1/WorkFlowConnection',
        'getById': 'api/v1/WorkFlowConnection/',
        'active': 'api/v1/WorkFlowConnection/Active',
        'deactive': 'api/v1/WorkFlowConnection/Deactive',
      },
      'work-flow-instance': {
        'main': 'api/v1/WorkFlowInstance',
        'getById': 'api/v1/WorkFlowInstance/',
        'active': 'api/v1/WorkFlowInstance/Active',
        'deactive': 'api/v1/WorkFlowInstance/Deactive',
      },
    },
    'account-api': {
      'account': {
        'main': 'api/v1/Account',
        'getById': 'api/v1/Account/',
        'active': 'api/v1/Account/Active',
        'deactive': 'api/v1/Account/Deactive',
      },
      'account-extra-data': {
        'main': 'api/v1/AccountExtraData',
        'getById': 'api/v1/AccountExtraData/',
        'active': 'api/v1/AccountExtraData/Active',
        'deactive': 'api/v1/AccountExtraData/Deactive',
      },
      'account-extra-information-data': {
        'main': 'api/v1/AccountExtraInformationData',
        'getById': 'api/v1/AccountExtraInformationData/',
        'active': 'api/v1/AccountExtraInformationData/Active',
        'deactive': 'api/v1/AccountExtraInformationData/Deactive',
      },
      'account-extra-information': {
        'main': 'api/v1/AccountExtraInformation',
        'getById': 'api/v1/AccountExtraInformation/',
        'active': 'api/v1/AccountExtraInformation/Active',
        'deactive': 'api/v1/AccountExtraInformation/Deactive',
      },
    },
    'customer-api': {
      'customer': {
        'main': 'api/v1/Customer',
        'getById': 'api/v1/Customer/',
        'active': 'api/v1/Customer/Active',
        'deactive': 'api/v1/Customer/Deactive',
      },
      'customer-extra-data': {
        'main': 'api/v1/CustomerExtraData',
        'getById': 'api/v1/CustomerExtraData/',
        'active': 'api/v1/CustomerExtraData/Active',
        'deactive': 'api/v1/CustomerExtraData/Deactive',
      },
      'customer-extra-information-data': {
        'main': 'api/v1/CustomerExtraInformationData',
        'getById': 'api/v1/CustomerExtraInformationData/',
        'active': 'api/v1/CustomerExtraInformationData/Active',
        'deactive': 'api/v1/CustomerExtraInformationData/Deactive',
      },
      'customer-extra-information': {
        'main': 'api/v1/CustomerExtraInformation',
        'getById': 'api/v1/CustomerExtraInformation/',
        'active': 'api/v1/CustomerExtraInformation/Active',
        'deactive': 'api/v1/CustomerExtraInformation/Deactive',
      },
    },
    'form-api': {
      'form-control': {
        'main': 'api/v1/FormControl',
        'getById': 'api/v1/FormControl/',
        'active': 'api/v1/FormControl/Active',
        'deactive': 'api/v1/FormControl/Deactive',
      },
      'form-data': {
        'main': 'api/v1/FormData',
        'getById': 'api/v1/FormData/',
        'active': 'api/v1/FormData/Active',
        'deactive': 'api/v1/FormData/Deactive',
      },
      'form-group': {
        'main': 'api/v1/FormGroup',
        'getById': 'api/v1/FormGroup/',
        'active': 'api/v1/FormGroup/Active',
        'deactive': 'api/v1/FormGroup/Deactive',
      },
      'form-value': {
        'main': 'api/v1/FormValue',
        'getById': 'api/v1/FormValue/',
        'active': 'api/v1/FormValue/Active',
        'deactive': 'api/v1/FormValue/Deactive',
      },
    },
  },
  'i18n': {
    'languages': [
      { 'label': 'English', 'value': 'en' },
      { 'label': 'Tiếng việt', 'value': 'vi' },
      { 'label': '日本語', 'value': 'jp' },
    ],
    'extras': {
      'modules': {
        'table': {
          'components': {
            'table-col': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
            'table-empty': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
            'table-footer': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
            'table-header': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
            'table-pagination': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
            'table-row': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
            'table-search': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
            'table-setting': {
              'vi': {
                'edit': {
                  'tooltip': 'Nhấn để chỉnh sửa',
                },
                'preview': {
                  'tooltip': 'Nhấn để xem bản thực tế của',
                },
                'deactive': {
                  'tooltip': 'Nhấn để ngừng sử dụng',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc ngừng sử dụng này?',
                },
                'active': {
                  'tooltip': 'Nhấn để cho phép hoạt động',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc cho phép hoạt động này?',
                },
                'remove': {
                  'tooltip': 'Nhấn để xóa',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc xóa này?',
                },
              },
              'en': {
                'edit': {
                  'tooltip': 'Nhấn để chỉnh sửa',
                },
                'preview': {
                  'tooltip': 'Nhấn để xem bản thực tế của',
                },
                'deactive': {
                  'tooltip': 'Nhấn để ngừng sử dụng',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc ngừng sử dụng này?',
                },
                'active': {
                  'tooltip': 'Nhấn để cho phép hoạt động',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc cho phép hoạt động này?',
                },
                'remove': {
                  'tooltip': 'Nhấn để xóa',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc xóa này?',
                },
              },
              'jp': {
                'edit': {
                  'tooltip': 'Nhấn để chỉnh sửa',
                },
                'preview': {
                  'tooltip': 'Nhấn để xem bản thực tế của',
                },
                'deactive': {
                  'tooltip': 'Nhấn để ngừng sử dụng',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc ngừng sử dụng này?',
                },
                'active': {
                  'tooltip': 'Nhấn để cho phép hoạt động',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc cho phép hoạt động này?',
                },
                'remove': {
                  'tooltip': 'Nhấn để xóa',
                  'yes': 'Đồng ý',
                  'no': 'Hủy',
                  'confirm': 'Chắc chắn việc xóa này?',
                },
              },
            },
            'table-stick': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
          },
          'pages': {
            'table-main': {
              'vi': {

              },
              'en': {

              },
              'jp': {

              },
            },
          },
        },
      },
    },
    'data': {
      'auth': {

      },
      'core': {
        'pages': {
          'layout': {

          },
        },
        'components': {
          'account': {
            'vi': {
              'items': [
                {
                  'value': 'setting',
                  'label': 'Tài khoản',
                  'icon': (<SettingOutlined />),
                },
                {
                  'value': 'log-out',
                  'label': 'Đăng xuất',
                  'icon': (<LogoutOutlined />),
                },
              ],
            },
            'en': {
              'items': [
                {
                  'value': 'setting',
                  'label': 'Tài khoản',
                  'icon': (<SettingOutlined />),
                },
                {
                  'value': 'log-out',
                  'label': 'Đăng xuất',
                  'icon': (<LogoutOutlined />),
                },
              ],
            },
            'jp': {
              'items': [
                {
                  'value': 'setting',
                  'label': 'Tài khoản',
                  'icon': (<SettingOutlined />),
                },
                {
                  'value': 'log-out',
                  'label': 'Đăng xuất',
                  'icon': (<LogoutOutlined />),
                },
              ],
            },
          },
          'content': {

          },
          'footer': {

          },
          'header': {

          },
          'language': {
            'categories': [
              { 'label': 'English', 'value': 'en' },
              { 'label': 'Tiếng việt', 'value': 'vi' },
              { 'label': '日本語', 'value': 'jp' },
            ],
          },
          'notification': {
            'vi': {
              'tabs': [
                {
                  'key': 'work',
                  'tab': (
                    <span>
                      <NotificationOutlined />
                      Công việc
                    </span>
                  ),
                },
                {
                  'key': 'self',
                  'tab': (
                    <span>
                      <SmileOutlined />
                      Cá nhân
                    </span>
                  ),
                },
                {
                  'key': 'company',
                  'tab': (
                    <span>
                      <ApartmentOutlined />
                      Công ty
                    </span>
                  ),
                },
              ],
              'emptyDescription': (
                <span>
                  Chưa có thông báo
                </span>
              ),
              'title': 'Thông báo',
            },
            'en': {
              'tabs': [
                {
                  'key': 'work',
                  'tab': (
                    <span>
                      <NotificationOutlined />
                      Công việc
                    </span>
                  ),
                },
                {
                  'key': 'self',
                  'tab': (
                    <span>
                      <SmileOutlined />
                      Cá nhân
                    </span>
                  ),
                },
                {
                  'key': 'company',
                  'tab': (
                    <span>
                      <ApartmentOutlined />
                      Công ty
                    </span>
                  ),
                },
              ],
              'emptyDescription': (
                <span>
                  Chưa có thông báo
                </span>
              ),
              'title': 'Thông báo',
            },
            'jp': {
              'tabs': [
                {
                  'key': 'work',
                  'tab': (
                    <span>
                      <NotificationOutlined />
                      Công việc
                    </span>
                  ),
                },
                {
                  'key': 'self',
                  'tab': (
                    <span>
                      <SmileOutlined />
                      Cá nhân
                    </span>
                  ),
                },
                {
                  'key': 'company',
                  'tab': (
                    <span>
                      <ApartmentOutlined />
                      Công ty
                    </span>
                  ),
                },
              ],
              'emptyDescription': (
                <span>
                  Chưa có thông báo
                </span>
              ),
              'title': 'Thông báo',
            },
          },
          'side-bar': {
            'vi': {
              'categories': [
                {
                  'label': 'Trang chủ',
                  'value': 'dashboard',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Nhóm',
                  'value': 'group',
                  'icon': (<TeamOutlined />),
                },
                {
                  'label': 'Khách hàng',
                  'value': 'customer',
                  'icon': (<PhoneOutlined />),
                },
                {
                  'label': 'Nhân sự',
                  'value': 'account',
                  'icon': (<UserOutlined />),
                },
                {
                  'label': 'Phòng ban',
                  'value': 'department',
                  'icon': (<SolutionOutlined />),
                },
                {
                  'label': 'Tác vụ',
                  'value': 'role',
                  'icon': (<PropertySafetyOutlined />),
                },
                {
                  'label': 'Điều kiện',
                  'value': 'condition',
                  'icon': (<TagOutlined />),
                },
                {
                  'label': 'Khuôn mẫu',
                  'value': 'pattern',
                  'icon': (<LayoutOutlined />),
                },
                {
                  'label': 'Biểu mẫu',
                  'value': 'form',
                  'icon': (<ProfileOutlined />),
                },
                {
                  'label': 'Chiến lược',
                  'value': 'strategy',
                  'icon': (<ProjectOutlined />),
                },
                {
                  'label': 'Quy trình',
                  'value': 'work-flow',
                  'icon': (<PartitionOutlined />),
                },
                {
                  'label': 'Tiến trình',
                  'value': 'process',
                  'icon': (<SyncOutlined spin={true} />),
                },
              ],
            },
            'en': {
              'categories': [
                {
                  'label': 'Trang chủ',
                  'value': 'dashboard',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Nhóm',
                  'value': 'group',
                  'icon': (<TeamOutlined />),
                },
                {
                  'label': 'Khách hàng',
                  'value': 'customer',
                  'icon': (<PhoneOutlined />),
                },
                {
                  'label': 'Nhân sự',
                  'value': 'account',
                  'icon': (<UserOutlined />),
                },
                {
                  'label': 'Phòng ban',
                  'value': 'department',
                  'icon': (<SolutionOutlined />),
                },
                {
                  'label': 'Tác vụ',
                  'value': 'role',
                  'icon': (<PropertySafetyOutlined />),
                },
                {
                  'label': 'Điều kiện',
                  'value': 'condition',
                  'icon': (<TagOutlined />),
                },
                {
                  'label': 'Khuôn mẫu',
                  'value': 'pattern',
                  'icon': (<LayoutOutlined />),
                },
                {
                  'label': 'Biểu mẫu',
                  'value': 'form',
                  'icon': (<ProfileOutlined />),
                },
                {
                  'label': 'Chiến lược',
                  'value': 'strategy',
                  'icon': (<ProjectOutlined />),
                },
                {
                  'label': 'Quy trình',
                  'value': 'work-flow',
                  'icon': (<PartitionOutlined />),
                },
                {
                  'label': 'Tiến trình',
                  'value': 'process',
                  'icon': (<SyncOutlined spin={true} />),
                },
              ],
            },
            'jp': {
              'categories': [
                {
                  'label': 'Trang chủ',
                  'value': 'dashboard',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Nhóm',
                  'value': 'group',
                  'icon': (<TeamOutlined />),
                },
                {
                  'label': 'Khách hàng',
                  'value': 'customer',
                  'icon': (<PhoneOutlined />),
                },
                {
                  'label': 'Nhân sự',
                  'value': 'account',
                  'icon': (<UserOutlined />),
                },
                {
                  'label': 'Phòng ban',
                  'value': 'department',
                  'icon': (<SolutionOutlined />),
                },
                {
                  'label': 'Tác vụ',
                  'value': 'role',
                  'icon': (<PropertySafetyOutlined />),
                },
                {
                  'label': 'Điều kiện',
                  'value': 'condition',
                  'icon': (<TagOutlined />),
                },
                {
                  'label': 'Khuôn mẫu',
                  'value': 'pattern',
                  'icon': (<LayoutOutlined />),
                },
                {
                  'label': 'Biểu mẫu',
                  'value': 'form',
                  'icon': (<ProfileOutlined />),
                },
                {
                  'label': 'Chiến lược',
                  'value': 'strategy',
                  'icon': (<ProjectOutlined />),
                },
                {
                  'label': 'Quy trình',
                  'value': 'work-flow',
                  'icon': (<PartitionOutlined />),
                },
                {
                  'label': 'Tiến trình',
                  'value': 'process',
                  'icon': (<SyncOutlined spin={true} />),
                },
              ],
            },
          },
        },
        'modules': {
          'account': {
            'components': {
              'account-extra': {},
              'account-canvas': {
                'vi': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                  },
                },
                'en': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                  },
                },
                'jp': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                  },
                },
              },
              'account-control': {
                'vi': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'deactive': {
                    'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của nhân viên',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc ngừng sử dụng thông tin thêm của nhân viên này?',
                  },
                  'active': {
                    'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của nhân viên',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc cho phép sử dụng thông tin thêm của nhân viên này?',
                  },
                },
                'en': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'deactive': {
                    'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của nhân viên',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc ngừng sử dụng thông tin thêm của nhân viên này?',
                  },
                  'active': {
                    'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của nhân viên',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc cho phép sử dụng thông tin thêm của nhân viên này?',
                  },
                },
                'jp': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'deactive': {
                    'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của nhân viên',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc ngừng sử dụng thông tin thêm của nhân viên này?',
                  },
                  'active': {
                    'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của nhân viên',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc cho phép sử dụng thông tin thêm của nhân viên này?',
                  },
                },
              },
              'account-create': {
                'vi': {
                  'label': 'Tạo mới nhân viên',
                  'fields': {
                    'code': {
                      'label': 'Mã nhân viên',
                      'error-message': 'Mã nhân viên không được trống',
                    },
                    'fullname': {
                      'label': 'Tên nhân viên',
                      'error-message': 'Tên nhân viên không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử nhân viên không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại nhân viên không được trống',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới nhân viên',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'en': {
                  'label': 'Tạo mới nhân viên',
                  'fields': {
                    'code': {
                      'label': 'Mã nhân viên',
                      'error-message': 'Mã nhân viên không được trống',
                    },
                    'fullname': {
                      'label': 'Tên nhân viên',
                      'error-message': 'Tên nhân viên không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử nhân viên không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại nhân viên không được trống',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới nhân viên',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'jp': {
                  'label': 'Tạo mới nhân viên',
                  'fields': {
                    'code': {
                      'label': 'Mã nhân viên',
                      'error-message': 'Mã nhân viên không được trống',
                    },
                    'fullname': {
                      'label': 'Tên nhân viên',
                      'error-message': 'Tên nhân viên không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử nhân viên không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại nhân viên không được trống',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới nhân viên',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
              },
              'account-detail': {
                'vi': {
                  'label': 'Thông tin nhân viên',
                  'fields': {
                    'code': {
                      'label': 'Mã nhân viên',
                      'error-message': 'Mã nhân viên không được trống',
                    },
                    'fullname': {
                      'label': 'Tên nhân viên',
                      'error-message': 'Tên nhân viên không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử nhân viên không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại nhân viên không được trống',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin nhân viên',
                  },
                },
                'en': {
                  'label': 'Thông tin nhân viên',
                  'fields': {
                    'code': {
                      'label': 'Mã nhân viên',
                      'error-message': 'Mã nhân viên không được trống',
                    },
                    'fullname': {
                      'label': 'Tên nhân viên',
                      'error-message': 'Tên nhân viên không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử nhân viên không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại nhân viên không được trống',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin nhân viên',
                  },
                },
                'jp': {
                  'label': 'Thông tin nhân viên',
                  'fields': {
                    'code': {
                      'label': 'Mã nhân viên',
                      'error-message': 'Mã nhân viên không được trống',
                    },
                    'fullname': {
                      'label': 'Tên nhân viên',
                      'error-message': 'Tên nhân viên không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử nhân viên không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại nhân viên không được trống',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin nhân viên',
                  },
                },
              },
              'account-item': {
                'vi': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'en': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'jp': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
              },
              'account-list': {
                'vi': {
                  'label': 'Danh sách nhân viên',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã nhân viên',
                      'fullname': 'Tìm kiếm theo tên nhân viên',
                      'email': 'Tìm kiếm theo thư điện tử nhân viên',
                      'phone': 'Tìm kiếm theo số điện thoại nhân viên',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một nhân viên',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ nhân viên',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các nhân viên bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa nhân viên',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của nhân viên',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                      },
                    },
                    'create-with-search': 'Tạo mới nhân viên theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã nhân viên',
                    'fullname': 'Tên nhân viên',
                    'email': 'Thư điện tử',
                    'phone': 'Số điện thoại',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ nhân viên nào',
                },
                'en': {
                  'label': 'Danh sách nhân viên',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã nhân viên',
                      'fullname': 'Tìm kiếm theo tên nhân viên',
                      'email': 'Tìm kiếm theo thư điện tử nhân viên',
                      'phone': 'Tìm kiếm theo số điện thoại nhân viên',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một nhân viên',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ nhân viên',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các nhân viên bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa nhân viên',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của nhân viên',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                      },
                    },
                    'create-with-search': 'Tạo mới nhân viên theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã nhân viên',
                    'fullname': 'Tên nhân viên',
                    'email': 'Thư điện tử',
                    'phone': 'Số điện thoại',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ nhân viên nào',
                },
                'jp': {
                  'label': 'Danh sách nhân viên',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã nhân viên',
                      'fullname': 'Tìm kiếm theo tên nhân viên',
                      'email': 'Tìm kiếm theo thư điện tử nhân viên',
                      'phone': 'Tìm kiếm theo số điện thoại nhân viên',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một nhân viên',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ nhân viên',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các nhân viên bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa nhân viên',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của nhân viên',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                      },
                    },
                    'create-with-search': 'Tạo mới nhân viên theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã nhân viên',
                    'fullname': 'Tên nhân viên',
                    'email': 'Thư điện tử',
                    'phone': 'Số điện thoại',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ nhân viên nào',
                },
              },
              'account-option': {
                'vi': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
                'en': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
                'jp': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
              },
              'account-palette': {
                'vi': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Đây là ô nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'Xử lí tệp',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
                'en': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Đây là ô nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
                'jp': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Đây là ô nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
              },
              'account-view': {
                'vi': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách nhân viên',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của thông tin thêm của nhân viên',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của thông tin thêm của nhân viên',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của nhân viên',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của nhân viên',
                    },
                  },
                  'message': 'Xóa thành công',
                },
                'en': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách nhân viên',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của thông tin thêm của nhân viên',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của thông tin thêm của nhân viên',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của nhân viên',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của nhân viên',
                    },
                  },
                  'message': 'Xóa thành công',
                },
                'jp': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách nhân viên',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của thông tin thêm của nhân viên',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của thông tin thêm của nhân viên',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của nhân viên',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của nhân viên',
                    },
                  },
                  'message': 'Xóa thành công',
                },
              },
            },
            'pages': {
              'account-editable': {

              },
              'account-main': {

              },
            },
          },
          'customer': {
            'components': {
              'customer-extra': {},
              'customer-canvas': {
                'vi': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                  },
                },
                'en': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                  },
                },
                'jp': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                  },
                },
              },
              'customer-control': {
                'vi': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'deactive': {
                    'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của khách hàng',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc ngừng sử dụng thông tin thêm của khách hàng này?',
                  },
                  'active': {
                    'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của khách hàng',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc cho phép sử dụng thông tin thêm của khách hàng này?',
                  },
                },
                'en': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'deactive': {
                    'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của khách hàng',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc ngừng sử dụng thông tin thêm của khách hàng này?',
                  },
                  'active': {
                    'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của khách hàng',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc cho phép sử dụng thông tin thêm của khách hàng này?',
                  },
                },
                'jp': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'deactive': {
                    'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của khách hàng',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc ngừng sử dụng thông tin thêm của khách hàng này?',
                  },
                  'active': {
                    'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của khách hàng',
                    'yes': 'Đồng ý',
                    'no': 'Hủy',
                    'confirm': 'Chắc chắn việc cho phép sử dụng thông tin thêm của khách hàng này?',
                  },
                },
              },
              'customer-create': {
                'vi': {
                  'label': 'Tạo mới khách hàng',
                  'fields': {
                    'code': {
                      'label': 'Mã khách hàng',
                      'error-message': 'Mã khách hàng không được trống',
                    },
                    'fullname': {
                      'label': 'Tên khách hàng',
                      'error-message': 'Tên khách hàng không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử khách hàng không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại khách hàng không được trống',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới khách hàng',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'en': {
                  'label': 'Tạo mới khách hàng',
                  'fields': {
                    'code': {
                      'label': 'Mã khách hàng',
                      'error-message': 'Mã khách hàng không được trống',
                    },
                    'fullname': {
                      'label': 'Tên khách hàng',
                      'error-message': 'Tên khách hàng không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử khách hàng không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại khách hàng không được trống',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới khách hàng',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'jp': {
                  'label': 'Tạo mới khách hàng',
                  'fields': {
                    'code': {
                      'label': 'Mã khách hàng',
                      'error-message': 'Mã khách hàng không được trống',
                    },
                    'fullname': {
                      'label': 'Tên khách hàng',
                      'error-message': 'Tên khách hàng không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử khách hàng không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại khách hàng không được trống',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới khách hàng',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
              },
              'customer-detail': {
                'vi': {
                  'label': 'Thông tin khách hàng',
                  'fields': {
                    'code': {
                      'label': 'Mã khách hàng',
                      'error-message': 'Mã khách hàng không được trống',
                    },
                    'fullname': {
                      'label': 'Tên khách hàng',
                      'error-message': 'Tên khách hàng không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử khách hàng không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại khách hàng không được trống',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin khách hàng',
                  },
                },
                'en': {
                  'label': 'Thông tin khách hàng',
                  'fields': {
                    'code': {
                      'label': 'Mã khách hàng',
                      'error-message': 'Mã khách hàng không được trống',
                    },
                    'fullname': {
                      'label': 'Tên khách hàng',
                      'error-message': 'Tên khách hàng không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử khách hàng không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại khách hàng không được trống',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin khách hàng',
                  },
                },
                'jp': {
                  'label': 'Thông tin khách hàng',
                  'fields': {
                    'code': {
                      'label': 'Mã khách hàng',
                      'error-message': 'Mã khách hàng không được trống',
                    },
                    'fullname': {
                      'label': 'Tên khách hàng',
                      'error-message': 'Tên khách hàng không được trống',
                    },
                    'email': {
                      'label': 'Thư điện tử',
                      'error-message': 'Thư điện tử khách hàng không được trống',
                    },
                    'phone': {
                      'label': 'Số điện thoại',
                      'error-message': 'Số điện thoại khách hàng không được trống',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin khách hàng',
                  },
                },
              },
              'customer-item': {
                'vi': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'en': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'jp': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
              },
              'customer-list': {
                'vi': {
                  'label': 'Danh sách khách hàng',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã khách hàng',
                      'fullname': 'Tìm kiếm theo tên khách hàng',
                      'email': 'Tìm kiếm theo thư điện tử khách hàng',
                      'phone': 'Tìm kiếm theo số điện thoại khách hàng',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một khách hàng',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ khách hàng',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các khách hàng bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa khách hàng',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của khách hàng',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                      },
                    },
                    'create-with-search': 'Tạo mới khách hàng theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã khách hàng',
                    'fullname': 'Tên khách hàng',
                    'email': 'Thư điện tử',
                    'phone': 'Số điện thoại',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ khách hàng nào',
                },
                'en': {
                  'label': 'Danh sách khách hàng',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã khách hàng',
                      'fullname': 'Tìm kiếm theo tên khách hàng',
                      'email': 'Tìm kiếm theo thư điện tử khách hàng',
                      'phone': 'Tìm kiếm theo số điện thoại khách hàng',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một khách hàng',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ khách hàng',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các khách hàng bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa khách hàng',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của khách hàng',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                      },
                    },
                    'create-with-search': 'Tạo mới khách hàng theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã khách hàng',
                    'fullname': 'Tên khách hàng',
                    'email': 'Thư điện tử',
                    'phone': 'Số điện thoại',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ khách hàng nào',
                },
                'jp': {
                  'label': 'Danh sách khách hàng',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã khách hàng',
                      'fullname': 'Tìm kiếm theo tên khách hàng',
                      'email': 'Tìm kiếm theo thư điện tử khách hàng',
                      'phone': 'Tìm kiếm theo số điện thoại khách hàng',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một khách hàng',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ khách hàng',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các khách hàng bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa khách hàng',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của khách hàng',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                      },
                    },
                    'create-with-search': 'Tạo mới khách hàng theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã khách hàng',
                    'fullname': 'Tên khách hàng',
                    'email': 'Thư điện tử',
                    'phone': 'Số điện thoại',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ khách hàng nào',
                },
              },
              'customer-option': {
                'vi': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
                'en': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
                'jp': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
              },
              'customer-palette': {
                'vi': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Đây là ô nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'Xử lí tệp',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
                'en': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Đây là ô nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
                'jp': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Đây là ô nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
              },
              'customer-view': {
                'vi': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách khách hàng',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của thông tin thêm của khách hàng',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của thông tin thêm của khách hàng',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của khách hàng',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của khách hàng',
                    },
                  },
                  'message': 'Xóa thành công',
                },
                'en': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách khách hàng',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của thông tin thêm của khách hàng',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của thông tin thêm của khách hàng',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của khách hàng',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của khách hàng',
                    },
                  },
                  'message': 'Xóa thành công',
                },
                'jp': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách khách hàng',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của thông tin thêm của khách hàng',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của thông tin thêm của khách hàng',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng thông tin thêm của khách hàng',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng thông tin thêm của khách hàng',
                    },
                  },
                  'message': 'Xóa thành công',
                },
              },
            },
            'pages': {
              'customer-editable': {

              },
              'customer-main': {

              },
            },
          },
          'dashboard': {
            'components': {

            },
            'pages': {

            },
          },
          'form': {
            'components': {
              'form-canvas': {
                'vi': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'fontSize': {
                      'placeholder': 'Cỡ chữ',
                    },
                    'size': {
                      'placeholder': 'kích cỡ',
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'width': {
                      'placeholder': 'Chiều rộng',
                    },
                    'height': {
                      'placeholder': 'Chiều cao',
                    },
                    'isCapitalize': {
                      'placeholder': 'In hoa',
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                    'color': {
                      'placeholder': 'Màu sắc',
                    },
                  },
                },
                'en': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'fontSize': {
                      'placeholder': 'Cỡ chữ',
                    },
                    'size': {
                      'placeholder': 'kích cỡ',
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'width': {
                      'placeholder': 'Chiều rộng',
                    },
                    'height': {
                      'placeholder': 'Chiều cao',
                    },
                    'isCapitalize': {
                      'placeholder': 'In hoa',
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                    'color': {
                      'placeholder': 'Màu sắc',
                    },
                  },
                },
                'jp': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'form': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'fontSize': {
                      'placeholder': 'Cỡ chữ',
                    },
                    'size': {
                      'placeholder': 'kích cỡ',
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'width': {
                      'placeholder': 'Chiều rộng',
                    },
                    'height': {
                      'placeholder': 'Chiều cao',
                    },
                    'isCapitalize': {
                      'placeholder': 'In hoa',
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                    'color': {
                      'placeholder': 'Màu sắc',
                    },
                  },
                },
              },
              'form-control': {
                'vi': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'remove': {
                    'tooltip': 'Nhấn để xóa',
                    'confirm': 'Chắc chắn xóa ?',
                    'oke': 'Đồng ý xóa',
                    'cancel': 'Không',
                  },
                },
                'en': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'remove': {
                    'tooltip': 'Nhấn để xóa',
                    'confirm': 'Chắc chắn xóa ?',
                    'oke': 'Đồng ý xóa',
                    'cancel': 'Không',
                  },
                },
                'jp': {
                  'drag': {
                    'tooltip': 'Giữ để kéo và thả vào vị trí muốn chuyển',
                  },
                  'edit': {
                    'tooltip': 'Nhấn để chỉnh sửa',
                  },
                  'remove': {
                    'tooltip': 'Nhấn để xóa',
                    'confirm': 'Chắc chắn xóa ?',
                    'oke': 'Đồng ý xóa',
                    'cancel': 'Không',
                  },
                },
              },
              'form-create': {
                'vi': {
                  'label': 'Tạo mới biểu mẫu',
                  'fields': {
                    'code': {
                      'label': 'Mã biểu mẫu',
                      'error-message': 'Mã biểu mẫu không được trống',
                    },
                    'name': {
                      'label': 'Tên biểu mẫu',
                      'error-message': 'Tên biểu mẫu không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới biểu mẫu',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'en': {
                  'label': 'Tạo mới biểu mẫu',
                  'fields': {
                    'code': {
                      'label': 'Mã biểu mẫu',
                      'error-message': 'Mã biểu mẫu không được trống',
                    },
                    'name': {
                      'label': 'Tên biểu mẫu',
                      'error-message': 'Tên biểu mẫu không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới biểu mẫu',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'jp': {
                  'label': 'Tạo mới biểu mẫu',
                  'fields': {
                    'code': {
                      'label': 'Mã biểu mẫu',
                      'error-message': 'Mã biểu mẫu không được trống',
                    },
                    'name': {
                      'label': 'Tên biểu mẫu',
                      'error-message': 'Tên biểu mẫu không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới biểu mẫu',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
              },
              'form-detail': {
                'vi': {
                  'label': 'Thông tin biểu mẫu',
                  'fields': {
                    'code': {
                      'label': 'Mã biểu mẫu',
                      'error-message': 'Mã biểu mẫu không được trống',
                    },
                    'name': {
                      'label': 'Tên biểu mẫu',
                      'error-message': 'Tên biểu mẫu không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin biểu mẫu',
                  },
                },
                'en': {
                  'label': 'Thông tin biểu mẫu',
                  'fields': {
                    'code': {
                      'label': 'Mã biểu mẫu',
                      'error-message': 'Mã biểu mẫu không được trống',
                    },
                    'name': {
                      'label': 'Tên biểu mẫu',
                      'error-message': 'Tên biểu mẫu không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin biểu mẫu',
                  },
                },
                'jp': {
                  'label': 'Thông tin biểu mẫu',
                  'fields': {
                    'code': {
                      'label': 'Mã biểu mẫu',
                      'error-message': 'Mã biểu mẫu không được trống',
                    },
                    'name': {
                      'label': 'Tên biểu mẫu',
                      'error-message': 'Tên biểu mẫu không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin biểu mẫu',
                  },
                },
              },
              'form-item': {
                'vi': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'en': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'jp': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
              },
              'form-list': {
                'vi': {
                  'label': 'Danh sách biểu mẫu',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã biểu mẫu',
                      'name': 'Tìm kiếm theo tên biểu mẫu',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một biểu mẫu',
                    },
                    'edit': {
                      'tooltip': 'Nhấn để sửa biểu mẫu',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem biểu mẫu',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ biểu mẫu',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các biểu mẫu bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                    },
                    'remove': {
                      'tooltip': 'Nhấn để xóa biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc xóa biểu mẫu này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa biểu mẫu',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của biểu mẫu',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                      },
                    },
                    'create-with-search': 'Tạo mới biểu mẫu theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã biểu mẫu',
                    'name': 'Tên biểu mẫu',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ biểu mẫu nào',
                },
                'en': {
                  'label': 'Danh sách biểu mẫu',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã biểu mẫu',
                      'name': 'Tìm kiếm theo tên biểu mẫu',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một biểu mẫu',
                    },
                    'edit': {
                      'tooltip': 'Nhấn để sửa biểu mẫu',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem biểu mẫu',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ biểu mẫu',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các biểu mẫu bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                    },
                    'remove': {
                      'tooltip': 'Nhấn để xóa biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc xóa biểu mẫu này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa biểu mẫu',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của biểu mẫu',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                      },
                    },
                    'create-with-search': 'Tạo mới biểu mẫu theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã biểu mẫu',
                    'name': 'Tên biểu mẫu',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ biểu mẫu nào',
                },
                'jp': {
                  'label': 'Danh sách biểu mẫu',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã biểu mẫu',
                      'name': 'Tìm kiếm theo tên biểu mẫu',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một biểu mẫu',
                    },
                    'edit': {
                      'tooltip': 'Nhấn để sửa biểu mẫu',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem biểu mẫu',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ biểu mẫu',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các biểu mẫu bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                    },
                    'remove': {
                      'tooltip': 'Nhấn để xóa biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc xóa biểu mẫu này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa biểu mẫu',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của biểu mẫu',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                      },
                    },
                    'create-with-search': 'Tạo mới biểu mẫu theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã biểu mẫu',
                    'name': 'Tên biểu mẫu',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ biểu mẫu nào',
                },
              },
              'form-option': {
                'vi': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
                'en': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
                'jp': {
                  'label': 'Hiển thị',
                  'value': 'Giá trị',
                },
              },
              'form-palette': {
                'vi': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Text Input',
                      'label': 'Text Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Text Number',
                      'label': 'Text Number',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-password-control',
                      'placeHolder': 'Text Password',
                      'label': 'Text Password',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'password',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Text Area',
                      'label': 'Text Area',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Select',
                      'label': 'Select',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Multi Select',
                      'label': 'Multi Select',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'AutoComplete',
                      'label': 'AutoComplete',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Radio',
                      'label': 'Radio',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Checkbox',
                      'label': 'Checkbox',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Checkbox Group',
                      'label': 'Checkbox Group',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Date picker',
                      'label': 'Date picker',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': 'Date range',
                      'label': 'Date range',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Time picker',
                      'label': 'Time picker',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'File upload',
                      'label': 'File upload',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'rate-control',
                      'placeHolder': 'Rate Input',
                      'label': 'Rate Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'rate',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'switch-control',
                      'placeHolder': 'Switch Input',
                      'label': 'Switch Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'switch',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'slider-control',
                      'placeHolder': 'Slider Input',
                      'label': 'Slider Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'slider',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
                'en': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Text Input',
                      'label': 'Text Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Text Number',
                      'label': 'Text Number',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-password-control',
                      'placeHolder': 'Text Password',
                      'label': 'Text Password',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'password',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Text Area',
                      'label': 'Text Area',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Select',
                      'label': 'Select',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Multi Select',
                      'label': 'Multi Select',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'AutoComplete',
                      'label': 'AutoComplete',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Radio',
                      'label': 'Radio',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Checkbox',
                      'label': 'Checkbox',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Checkbox Group',
                      'label': 'Checkbox Group',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Date picker',
                      'label': 'Date picker',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': 'Date range',
                      'label': 'Date range',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Time picker',
                      'label': 'Time picker',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'File upload',
                      'label': 'File upload',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'rate-control',
                      'placeHolder': 'Rate Input',
                      'label': 'Rate Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'rate',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'switch-control',
                      'placeHolder': 'Switch Input',
                      'label': 'Switch Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'switch',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'slider-control',
                      'placeHolder': 'Slider Input',
                      'label': 'Slider Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'slider',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
                'jp': {
                  'items': [
                    {
                      'name': 'input-text-control',
                      'placeHolder': 'Text Input',
                      'label': 'Text Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Text Number',
                      'label': 'Text Number',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'input-password-control',
                      'placeHolder': 'Text Password',
                      'label': 'Text Password',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'input',
                      'subType': 'password',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Text Area',
                      'label': 'Text Area',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Select',
                      'label': 'Select',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Multi Select',
                      'label': 'Multi Select',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'AutoComplete',
                      'label': 'AutoComplete',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Radio',
                      'label': 'Radio',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Checkbox',
                      'label': 'Checkbox',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Checkbox Group',
                      'label': 'Checkbox Group',
                      'fontSize': '',
                      'size': '',
                      'options': [{'value': 'yes', 'label': 'Yes'}, {'value': 'no', 'label': 'No'}],
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Date picker',
                      'label': 'Date picker',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': 'Date range',
                      'label': 'Date range',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Time picker',
                      'label': 'Time picker',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'File upload',
                      'label': 'File upload',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'rate-control',
                      'placeHolder': 'Rate Input',
                      'label': 'Rate Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'rate',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'switch-control',
                      'placeHolder': 'Switch Input',
                      'label': 'Switch Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'switch',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                    {
                      'name': 'slider-control',
                      'placeHolder': 'Slider Input',
                      'label': 'Slider Input',
                      'fontSize': '',
                      'size': '',
                      'options': [],
                      'type': 'slider',
                      'subType': '',
                      'width': 12,
                      'xs': 24,
                      'sm': 24,
                      'md': 24,
                      'lg': 12,
                      'xl': 12,
                      'xxl': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'This is tooltip',
                      'color': '',
                    },
                  ],
                },
              },
              'form-view': {
                'vi': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách biểu mẫu',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của biểu mẫu',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của biểu mẫu',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                    },
                  },
                  'message': 'Cập nhật thành công',
                },
                'en': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách biểu mẫu',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của biểu mẫu',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của biểu mẫu',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                    },
                  },
                  'message': 'Cập nhật thành công',
                },
                'jp': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách biểu mẫu',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của biểu mẫu',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của biểu mẫu',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng biểu mẫu',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng biểu mẫu',
                    },
                  },
                  'message': 'Cập nhật thành công',
                },
              },
            },
            'pages': {
              'form-editable': {

              },
              'form-main': {

              },
            },
          },
          'process': {
            'components': {
              'process-list': {
                'vi': {
                  'label': 'Danh sách tiến trình',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã tiến trình',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một tiến trình',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ tiến trình',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các tiến trình bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng tiến trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng tiến trình này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng tiến trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng tiến trình này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa tiến trình',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của tiến trình',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng tiến trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng tiến trình này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng tiến trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng tiến trình này?',
                      },
                    },
                    'create-with-search': 'Tạo mới tiến trình theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã tiến trình',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ tiến trình nào',
                },
                'en': {
                  'label': 'Danh sách tiến trình',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã tiến trình',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một tiến trình',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ tiến trình',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các tiến trình bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng tiến trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng tiến trình này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng tiến trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng tiến trình này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa tiến trình',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của tiến trình',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng tiến trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng tiến trình này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng tiến trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng tiến trình này?',
                      },
                    },
                    'create-with-search': 'Tạo mới tiến trình theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã tiến trình',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ tiến trình nào',
                },
                'jp': {
                  'label': 'Danh sách tiến trình',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã tiến trình',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một tiến trình',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ tiến trình',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các tiến trình bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng tiến trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng tiến trình này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng tiến trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng tiến trình này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa tiến trình',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của tiến trình',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng tiến trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng tiến trình này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng tiến trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng tiến trình này?',
                      },
                    },
                    'create-with-search': 'Tạo mới tiến trình theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã tiến trình',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ tiến trình nào',
                },
              },
              'process-create': {
                'vi': {
                  'label': 'Tạo mới tiến trình',
                  'fields': {
                    'code': {
                      'label': 'Mã tiến trình',
                      'error-message': 'Mã tiến trình không được trống',
                    },
                    'note': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới tiến trình',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'en': {
                  'label': 'Tạo mới tiến trình',
                  'fields': {
                    'code': {
                      'label': 'Mã tiến trình',
                      'error-message': 'Mã tiến trình không được trống',
                    },
                    'note': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới tiến trình',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'jp': {
                  'label': 'Tạo mới tiến trình',
                  'fields': {
                    'code': {
                      'label': 'Mã tiến trình',
                      'error-message': 'Mã tiến trình không được trống',
                    },
                    'note': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới tiến trình',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
              },
            },
            'pages': {
              'process-main': {

              },
              'process-editable': {

              },
            },
          },
          'profile': {
            'components': {

            },
            'pages': {

            },
          },
          'setting': {
            'components': {
              'profile': [
                {
                  'label': 'Profile',
                  'value': 'profile',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Password',
                  'value': 'password',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Email sync',
                  'value': 'email',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Contact sync',
                  'value': 'contact-sync',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Calender sync',
                  'value': 'calender-sync',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Google Drive',
                  'value': 'google-drive',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Your devices',
                  'value': 'device',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Notifications',
                  'value': 'notification',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Referral program',
                  'value': 'referal-program',
                  'icon': (<HomeOutlined />),
                },
              ],
              'company': [
                {
                  'label': 'Company settings',
                  'value': 'company',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Manager users',
                  'value': 'manage-user',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Data fields',
                  'value': 'data-field',
                  'icon': (<HomeOutlined />),
                },
              ],
              'security': [
                {
                  'label': 'Dashboard',
                  'value': 'dashboard',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Alerts',
                  'value': 'alert',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Rules',
                  'value': 'rule',
                  'icon': (<HomeOutlined />),
                },
                {
                  'label': 'Single sign-on',
                  'value': 'single-sign-on',
                  'icon': (<HomeOutlined />),
                },
              ],
            },
            'pages': {

            },
          },
          'work-flow': {
            'components': {
              'work-flow-canvas': {
                'vi': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'work-flow': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'fontSize': {
                      'placeholder': 'Cỡ chữ',
                    },
                    'size': {
                      'placeholder': 'kích cỡ',
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'width': {
                      'placeholder': 'Chiều rộng',
                    },
                    'height': {
                      'placeholder': 'Chiều cao',
                    },
                    'isCapitalize': {
                      'placeholder': 'In hoa',
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                    'color': {
                      'placeholder': 'Màu sắc',
                    },
                  },
                },
                'en': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'work-flow': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'fontSize': {
                      'placeholder': 'Cỡ chữ',
                    },
                    'size': {
                      'placeholder': 'kích cỡ',
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'width': {
                      'placeholder': 'Chiều rộng',
                    },
                    'height': {
                      'placeholder': 'Chiều cao',
                    },
                    'isCapitalize': {
                      'placeholder': 'In hoa',
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                    'color': {
                      'placeholder': 'Màu sắc',
                    },
                  },
                },
                'jp': {
                  'title': 'Thông tin đối tượng',
                  'add-button': 'Thêm lựa chọn',
                  'work-flow': {
                    'name': {
                      'placeholder': 'Tên đối tượng',
                    },
                    'type': {
                      'placeholder': 'Loại đối tượng',
                    },
                    'subType': {
                      'placeholder': 'Loại phụ đối tuợng',
                    },
                    'placeHolder': {
                      'placeholder': 'Mẫu gợi ý',
                      'placeholder-array': ['Ngày bắt đầu', 'Ngày kết thúc'],
                    },
                    'fontSize': {
                      'placeholder': 'Cỡ chữ',
                    },
                    'size': {
                      'placeholder': 'kích cỡ',
                    },
                    'options': {
                      'placeholder': ['Giá trị', 'Hiển thị'],
                    },
                    'width': {
                      'placeholder': 'Chiều rộng',
                    },
                    'height': {
                      'placeholder': 'Chiều cao',
                    },
                    'isCapitalize': {
                      'placeholder': 'In hoa',
                    },
                    'tooltip': {
                      'placeholder': 'Gợi ý đính kèm',
                    },
                    'color': {
                      'placeholder': 'Màu sắc',
                    },
                  },
                },
              },
              'work-flow-create': {
                'vi': {
                  'label': 'Tạo mới qui trình',
                  'fields': {
                    'code': {
                      'label': 'Mã qui trình',
                      'error-message': 'Mã qui trình không được trống',
                    },
                    'name': {
                      'label': 'Tên qui trình',
                      'error-message': 'Tên qui trình không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới qui trình',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'en': {
                  'label': 'Tạo mới qui trình',
                  'fields': {
                    'code': {
                      'label': 'Mã qui trình',
                      'error-message': 'Mã qui trình không được trống',
                    },
                    'name': {
                      'label': 'Tên qui trình',
                      'error-message': 'Tên qui trình không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới qui trình',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
                'jp': {
                  'label': 'Tạo mới qui trình',
                  'fields': {
                    'code': {
                      'label': 'Mã qui trình',
                      'error-message': 'Mã qui trình không được trống',
                    },
                    'name': {
                      'label': 'Tên qui trình',
                      'error-message': 'Tên qui trình không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'create': 'Tạo mới qui trình',
                    'create-and-edit': 'Tạo mới và thêm thuộc tính',
                  },
                },
              },
              'work-flow-detail': {
                'vi': {
                  'label': 'Thông tin qui trình',
                  'fields': {
                    'code': {
                      'label': 'Mã qui trình',
                      'error-message': 'Mã qui trình không được trống',
                    },
                    'name': {
                      'label': 'Tên qui trình',
                      'error-message': 'Tên qui trình không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin qui trình',
                  },
                },
                'en': {
                  'label': 'Thông tin qui trình',
                  'fields': {
                    'code': {
                      'label': 'Mã qui trình',
                      'error-message': 'Mã qui trình không được trống',
                    },
                    'name': {
                      'label': 'Tên qui trình',
                      'error-message': 'Tên qui trình không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin qui trình',
                  },
                },
                'jp': {
                  'label': 'Thông tin qui trình',
                  'fields': {
                    'code': {
                      'label': 'Mã qui trình',
                      'error-message': 'Mã qui trình không được trống',
                    },
                    'name': {
                      'label': 'Tên qui trình',
                      'error-message': 'Tên qui trình không được trống',
                    },
                    'description': {
                      'label': 'Ghi chú',
                    },
                  },
                  'buttons': {
                    'save': 'Lưu thông tin qui trình',
                  },
                },
              },
              'work-flow-item': {
                'vi': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'en': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
                'jp': {
                  'tooltip': 'Giữ kéo và thả qua vùng trống bên cạnh',
                },
              },
              'work-flow-list': {
                'vi': {
                  'label': 'Danh sách qui trình',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã qui trình',
                      'name': 'Tìm kiếm theo tên qui trình',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một qui trình',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ qui trình',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các qui trình bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng qui trình này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng qui trình này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa qui trình',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của qui trình',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng qui trình này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng qui trình này?',
                      },
                    },
                    'create-with-search': 'Tạo mới qui trình theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã qui trình',
                    'name': 'Tên qui trình',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ khách hàng nào',
                },
                'en': {
                  'label': 'Danh sách qui trình',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã qui trình',
                      'name': 'Tìm kiếm theo tên qui trình',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một qui trình',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ qui trình',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các qui trình bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng qui trình này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng qui trình này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa qui trình',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của qui trình',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng qui trình này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng qui trình này?',
                      },
                    },
                    'create-with-search': 'Tạo mới qui trình theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã qui trình',
                    'name': 'Tên qui trình',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ khách hàng nào',
                },
                'jp': {
                  'label': 'Danh sách qui trình',
                  'search': {
                    'global-search': {
                      'label': 'Nhập để tìm kiếm',
                      'extra': {
                        'title': 'Tìm kiếm nâng cao',
                        'button': 'Tìm kiếm',
                      },
                    },
                    'regexs': {
                      'contains': 'Chứa',
                      'not-contains': 'Không chứa',
                      'equals': 'Bằng',
                      'not-equals': 'Không bằng',
                    },
                    'fields': {
                      'code': 'Tìm kiếm theo mã qui trình',
                      'name': 'Tìm kiếm theo tên qui trình',
                      'status': {
                        'label': 'Tìm kiếm theo trạng thái',
                        'active': 'Hoạt động',
                        'deactive': 'Đã dừng',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tooltip': 'Nhấn để thêm mới một qui trình',
                    },
                    'export-excel': {
                      'tooltip': 'Nhấn để tải tệp thông tin toàn bộ qui trình',
                    },
                    'import-excel': {
                      'tooltip': 'Nhấn để chèn thông tin các qui trình bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng qui trình này?',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng qui trình này?',
                    },
                    'setting': {
                      'edit': {
                        'tooltip': 'Nhấn để chỉnh sửa qui trình',
                      },
                      'preview': {
                        'tooltip': 'Nhấn để xem bản thực tế của qui trình',
                      },
                      'deactive': {
                        'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng qui trình này?',
                      },
                      'active': {
                        'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng qui trình này?',
                      },
                    },
                    'create-with-search': 'Tạo mới qui trình theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã qui trình',
                    'name': 'Tên qui trình',
                    'status': 'Trạng thái',
                    'action': 'T.Chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                  'empty-message': 'Không tìm thấy bất kỳ khách hàng nào',
                },
              },
              'work-flow-palette': {
                'vi': {
                  'items': [
                    {
                      'key': 'events',
                      'label': 'Event Shapes',
                      'data': [
                        {
                          'id': 'Node_Start',
                          'ports': getPorts('Start'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Event',
                            'event': {
                              'event': 'Start',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_End',
                          'ports': getPorts('End'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Event',
                            'event': {
                              'event': 'End',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'gateways',
                      'label': 'Gateway Shapes',
                      'data': [
                        {
                          'id': 'Node_Exclusive',
                          'ports': getPorts('Exclusive'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Exclusive',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_Inclusive',
                          'ports': getPorts('Inclusive'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Inclusive',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_Parallel',
                          'ports': getPorts('Parallel'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Parallel',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'activitys',
                      'label': 'Activity Shapes',
                      'data': [
                        {
                          'id': 'Node_Activity_Task',
                          'ports': getPorts('Activity_Task'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Activity',
                            'activity': {
                              'activity': 'Task',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'connectors',
                      'label': 'Connectors',
                      'data': [
                        {
                          'id': 'Connector_SequenFlow',
                          'type': 'Orthogonal',
                          'sourcePoint': { 'x': 0, 'y': 0 },
                          'targetPoint': { 'x': 40, 'y': 40 },
                          'targetDecorator': { 'shape': 'Arrow' },
                          'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                          'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Normal' },
                          'annotations': [{ 'content': '', 'description': '' }],
                        },
                      ],
                    },
                  ],
                },
                'en': {
                  'items': [
                    {
                      'key': 'events',
                      'label': 'Event Shapes',
                      'data': [
                        {
                          'id': 'Node_Start',
                          'ports': getPorts('Start'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Event',
                            'event': {
                              'event': 'Start',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_End',
                          'ports': getPorts('End'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Event',
                            'event': {
                              'event': 'End',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'gateways',
                      'label': 'Gateway Shapes',
                      'data': [
                        {
                          'id': 'Node_Exclusive',
                          'ports': getPorts('Exclusive'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Exclusive',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_Inclusive',
                          'ports': getPorts('Inclusive'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Inclusive',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_Parallel',
                          'ports': getPorts('Parallel'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Parallel',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'activitys',
                      'label': 'Activity Shapes',
                      'data': [
                        {
                          'id': 'Node_Activity_Task',
                          'ports': getPorts('Activity_Task'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Activity',
                            'activity': {
                              'activity': 'Task',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'connectors',
                      'label': 'Connectors',
                      'data': [
                        {
                          'id': 'Connector_SequenFlow',
                          'type': 'Orthogonal',
                          'sourcePoint': { 'x': 0, 'y': 0 },
                          'targetPoint': { 'x': 40, 'y': 40 },
                          'targetDecorator': { 'shape': 'Arrow' },
                          'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                          'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Normal' },
                          'annotations': [{ 'content': '', 'description': '' }],
                        },
                      ],
                    },
                  ],
                },
                'jp': {
                  'items': [
                    {
                      'key': 'events',
                      'label': 'Event Shapes',
                      'data': [
                        {
                          'id': 'Node_Start',
                          'ports': getPorts('Start'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Event',
                            'event': {
                              'event': 'Start',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_End',
                          'ports': getPorts('End'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Event',
                            'event': {
                              'event': 'End',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'gateways',
                      'label': 'Gateway Shapes',
                      'data': [
                        {
                          'id': 'Node_Exclusive',
                          'ports': getPorts('Exclusive'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Exclusive',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_Inclusive',
                          'ports': getPorts('Inclusive'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Inclusive',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                        {
                          'id': 'Node_Parallel',
                          'ports': getPorts('Parallel'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Gateway',
                            'gateway': {
                              'type': 'Parallel',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'activitys',
                      'label': 'Activity Shapes',
                      'data': [
                        {
                          'id': 'Node_Activity_Task',
                          'ports': getPorts('Activity_Task'),
                          'width': 50,
                          'height': 50,
                          'shape': {
                            'type': 'Bpmn',
                            'shape': 'Activity',
                            'activity': {
                              'activity': 'Task',
                            },
                          },
                          'annotations': [{
                            'content': '',
                          }],
                        },
                      ],
                    },
                    {
                      'key': 'connectors',
                      'label': 'Connectors',
                      'data': [
                        {
                          'id': 'Connector_SequenFlow',
                          'type': 'Orthogonal',
                          'sourcePoint': { 'x': 0, 'y': 0 },
                          'targetPoint': { 'x': 40, 'y': 40 },
                          'targetDecorator': { 'shape': 'Arrow' },
                          'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                          'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Normal' },
                          'annotations': [{ 'content': '', 'description': '' }],
                        },
                      ],
                    },
                  ],
                },
              },
              'work-flow-view': {
                'vi': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách qui trình',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của qui trình',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của qui trình',
                    },
                    'remove': {
                      'tooltip': 'Nhấn để xóa',
                    },
                    'edit': {
                      'tooltip': 'Nhấn để chỉnh sửa',
                    },
                    'form': {
                      'tooltip': 'Nhấn để tùy chỉnh biểu mẫu cho bước',
                    },
                    'department': {
                      'tooltip': 'Nhấn để chọn phòng ban sẽ thực hiện bước',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                    },
                  },
                  'message': 'Cập nhật thành công',
                  'step-detail': {
                    'label': 'Thông tin bước',
                    'fields': {
                      'name': {
                        'label': 'Tên bước',
                        'error-message': 'Tên bước không được trống',
                      },
                      'description': {
                        'label': 'Ghi chú',
                      },
                    },
                  },
                },
                'en': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách qui trình',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của qui trình',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của qui trình',
                    },
                    'remove': {
                      'tooltip': 'Nhấn để xóa',
                    },
                    'edit': {
                      'tooltip': 'Nhấn để chỉnh sửa',
                    },
                    'form': {
                      'tooltip': 'Nhấn để tùy chỉnh biểu mẫu cho bước',
                    },
                    'department': {
                      'tooltip': 'Nhấn để chọn phòng ban sẽ thực hiện bước',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                    },
                  },
                  'message': 'Cập nhật thành công',
                  'step-detail': {
                    'label': 'Thông tin bước',
                    'fields': {
                      'name': {
                        'label': 'Tên bước',
                        'error-message': 'Tên bước không được trống',
                      },
                      'description': {
                        'label': 'Ghi chú',
                      },
                    },
                  },
                },
                'jp': {
                  'buttons': {
                    'back': {
                      'tooltip': 'Nhấn đế quay về trang danh sách qui trình',
                    },
                    'config': {
                      'tooltip': 'Nhấn để xem bản chỉnh của qui trình',
                    },
                    'preview': {
                      'tooltip': 'Nhấn để xem bản thực tế của qui trình',
                    },
                    'remove': {
                      'tooltip': 'Nhấn để xóa',
                    },
                    'edit': {
                      'tooltip': 'Nhấn để chỉnh sửa',
                    },
                    'form': {
                      'tooltip': 'Nhấn để tùy chỉnh biểu mẫu cho bước',
                    },
                    'department': {
                      'tooltip': 'Nhấn để chọn phòng ban sẽ thực hiện bước',
                    },
                    'active': {
                      'tooltip': 'Nhấn để cho phép sử dụng qui trình',
                    },
                    'deactive': {
                      'tooltip': 'Nhấn để ngừng sử dụng qui trình',
                    },
                  },
                  'message': 'Cập nhật thành công',
                  'step-detail': {
                    'label': 'Thông tin bước',
                    'fields': {
                      'name': {
                        'label': 'Tên bước',
                        'error-message': 'Tên bước không được trống',
                      },
                      'description': {
                        'label': 'Ghi chú',
                      },
                    },
                  },
                },
              },
            },
            'pages': {
              'work-flow-editable': {

              },
              'work-flow-main': {

              },
            },
          },
        },
      },
    },
  },
};