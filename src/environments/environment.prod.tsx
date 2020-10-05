import { ApartmentOutlined, HomeOutlined, LogoutOutlined, NotificationOutlined, PartitionOutlined, PhoneOutlined, ProfileOutlined, SettingOutlined, SmileOutlined, TeamOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
const getPorts = (id: string) => {
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
                  'label': 'Nhân sự',
                  'value': 'account',
                  'icon': (<TeamOutlined />),
                },
                {
                  'label': 'nhân viên',
                  'value': 'customer',
                  'icon': (<PhoneOutlined />),
                },
                {
                  'label': 'Biểu mẫu',
                  'value': 'form',
                  'icon': (<ProfileOutlined />),
                },
                {
                  'label': 'Quy trình',
                  'value': 'work-flow',
                  'icon': (<PartitionOutlined />),
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
                  'label': 'Nhân sự',
                  'value': 'account',
                  'icon': (<TeamOutlined />),
                },
                {
                  'label': 'nhân viên',
                  'value': 'customer',
                  'icon': (<PhoneOutlined />),
                },
                {
                  'label': 'Biểu mẫu',
                  'value': 'form',
                  'icon': (<ProfileOutlined />),
                },
                {
                  'label': 'Quy trình',
                  'value': 'work-flow',
                  'icon': (<PartitionOutlined />),
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
                  'label': 'Nhân sự',
                  'value': 'account',
                  'icon': (<TeamOutlined />),
                },
                {
                  'label': 'nhân viên',
                  'value': 'customer',
                  'icon': (<PhoneOutlined />),
                },
                {
                  'label': 'Biểu mẫu',
                  'value': 'form',
                  'icon': (<ProfileOutlined />),
                },
                {
                  'label': 'Quy trình',
                  'value': 'work-flow',
                  'icon': (<PartitionOutlined />),
                },
              ],
            },
          },
        },
        'modules': {
          'account': {
            'components': {
              'account-canvas': {
                'vi': {
                  'title': 'Thông tin đối tượng',
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
              'account-create': {
                'vi': {
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
                  'search': {
                    'label': 'Danh sách nhân viên',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một nhân viên',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ nhân viên',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các nhân viên bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của nhân viên',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                      },
                    },
                    'create-with-search': 'Tạo mới nhân viên theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã nhân viên',
                    'name': 'Tên nhân viên',
                    'status': 'Trạng thái',
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                },
                'en': {
                  'search': {
                    'label': 'Danh sách nhân viên',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một nhân viên',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ nhân viên',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các nhân viên bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của nhân viên',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                      },
                    },
                    'create-with-search': 'Tạo mới nhân viên theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã nhân viên',
                    'name': 'Tên nhân viên',
                    'status': 'Trạng thái',
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                },
                'jp': {
                  'search': {
                    'label': 'Danh sách nhân viên',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một nhân viên',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ nhân viên',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các nhân viên bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của nhân viên',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng nhân viên này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng nhân viên này?',
                      },
                    },
                    'create-with-search': 'Tạo mới nhân viên theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã nhân viên',
                    'name': 'Tên nhân viên',
                    'status': 'Trạng thái',
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'Xử lí tệp',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'tooltip': 'Nhấn để xem bản chỉnh của nhân viên',
                    },
                    'preview': {
                      'tootip': 'Nhấn để xem bản thực tế của nhân viên',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng nhân viên',
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
                      'tooltip': 'Nhấn để xem bản chỉnh của nhân viên',
                    },
                    'preview': {
                      'tootip': 'Nhấn để xem bản thực tế của nhân viên',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng nhân viên',
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
                      'tooltip': 'Nhấn để xem bản chỉnh của nhân viên',
                    },
                    'preview': {
                      'tootip': 'Nhấn để xem bản thực tế của nhân viên',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng nhân viên',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng nhân viên',
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
              'customer-canvas': {
                'vi': {
                  'title': 'Thông tin đối tượng',
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
              'customer-create': {
                'vi': {
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
                  'search': {
                    'label': 'Danh sách khách hàng',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một khách hàng',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ khách hàng',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các khách hàng bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của khách hàng',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                      },
                    },
                    'create-with-search': 'Tạo mới khách hàng theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã khách hàng',
                    'name': 'Tên khách hàng',
                    'status': 'Trạng thái',
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                },
                'en': {
                  'search': {
                    'label': 'Danh sách khách hàng',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một khách hàng',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ khách hàng',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các khách hàng bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của khách hàng',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                      },
                    },
                    'create-with-search': 'Tạo mới khách hàng theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã khách hàng',
                    'name': 'Tên khách hàng',
                    'status': 'Trạng thái',
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                },
                'jp': {
                  'search': {
                    'label': 'Danh sách khách hàng',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một khách hàng',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ khách hàng',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các khách hàng bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của khách hàng',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng khách hàng này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc cho phép sử dụng khách hàng này?',
                      },
                    },
                    'create-with-search': 'Tạo mới khách hàng theo dữ liệu tìm kiếm',
                  },
                  'col': {
                    'code': 'Mã khách hàng',
                    'name': 'Tên khách hàng',
                    'status': 'Trạng thái',
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'Xử lí tệp',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'tooltip': 'Nhấn để xem bản chỉnh của khách hàng',
                    },
                    'preview': {
                      'tootip': 'Nhấn để xem bản thực tế của khách hàng',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng khách hàng',
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
                      'tooltip': 'Nhấn để xem bản chỉnh của khách hàng',
                    },
                    'preview': {
                      'tootip': 'Nhấn để xem bản thực tế của khách hàng',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng khách hàng',
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
                      'tooltip': 'Nhấn để xem bản chỉnh của khách hàng',
                    },
                    'preview': {
                      'tootip': 'Nhấn để xem bản thực tế của khách hàng',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng khách hàng',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng khách hàng',
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
                  'search': {
                    'label': 'Danh sách biểu mẫu',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một biểu mẫu',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ biểu mẫu',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các biểu mẫu bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của biểu mẫu',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
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
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                },
                'en': {
                  'search': {
                    'label': 'Danh sách biểu mẫu',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một biểu mẫu',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ biểu mẫu',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các biểu mẫu bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của biểu mẫu',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
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
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
                },
                'jp': {
                  'search': {
                    'label': 'Danh sách biểu mẫu',
                    'global-search': 'Nhập để tìm kiếm',
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
                        'active': 'Hoạt động',
                        'deactive': 'Ngừng hoạt động',
                      },
                    },
                  },
                  'buttons': {
                    'create': {
                      'tootip': 'Nhấn để thêm mới một biểu mẫu',
                    },
                    'export-excel': {
                      'tootip': 'Nhấn để tải tệp thông tin toàn bộ biểu mẫu',
                    },
                    'import-excel': {
                      'tootip': 'Nhấn để chèn thông tin các biểu mẫu bằng tệp dữ liệu excel',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
                      'yes': 'Đồng ý',
                      'no': 'Hủy',
                      'confirm': 'Chắc chắn việc cho phép sử dụng biểu mẫu này?',
                    },
                    'setting': {
                      'preview': {
                        'tootip': 'Nhấn để xem bản thực tế của biểu mẫu',
                      },
                      'deactive': {
                        'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                        'yes': 'Đồng ý',
                        'no': 'Hủy',
                        'confirm': 'Chắc chắn việc ngừng sử dụng biểu mẫu này?',
                      },
                      'active': {
                        'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
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
                    'action': 'Tùy chỉnh',
                  },
                  'paging': {
                    'all': 'Tất cả',
                  },
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
                      'placeHolder': 'Đây là ô nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-password-control',
                      'placeHolder': 'Đây là ô nhập mật khẩu',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'password',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'Xử lí tệp',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-password-control',
                      'placeHolder': 'Đây là ô nhập mật khẩu',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'password',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'Xử lí tệp',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'options': '[]',
                      'type': 'input',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-number-control',
                      'placeHolder': 'Đây là ô nhập số',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'number',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'input-password-control',
                      'placeHolder': 'Đây là ô nhập mật khẩu',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'input',
                      'subType': 'password',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'text-area-control',
                      'placeHolder': 'Đây là ô to nhập chữ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'text-area',
                      'subType': 'text',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'select-control',
                      'placeHolder': 'Đây là ô chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'multi-select-control',
                      'placeHolder': 'Đây là ô chọn nhiều',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'multi-select',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'auto-complete-control',
                      'placeHolder': 'Đây là ô chọn nhiều và tìm kiếm',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'auto-complete',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'radio-control',
                      'placeHolder': 'Đây là nhóm lựa chọn một',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'radio',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-control',
                      'placeHolder': 'Đây là 1 tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'check-box-group-control',
                      'placeHolder': 'Đây là nhóm tích chọn',
                      'fontSize': '',
                      'size': '',
                      'options': '[{"value": "yes", "label": "Yes"},{"value": "no", "label": "No"}]',
                      'type': 'check-box-group',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn ngày',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'date-range-control',
                      'placeHolder': '["Ngày bắt đầu", "Ngày kết thúc"]',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'date-range',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'time-picker-control',
                      'placeHolder': 'Đây là ô lựa chọn giờ',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'time-picker',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
                      'color': '',
                    },
                    {
                      'name': 'file-upload-control',
                      'placeHolder': 'Xử lí tệp',
                      'fontSize': '',
                      'size': '',
                      'options': '[]',
                      'type': 'file-upload',
                      'subType': '',
                      'width': 12,
                      'height': '',
                      'isCapitialize': false,
                      'tooltip': 'Đây là gợi ý',
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
                      'tootip': 'Nhấn để xem bản thực tế của biểu mẫu',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                    },
                  },
                  'message': 'Xóa thành công',
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
                      'tootip': 'Nhấn để xem bản thực tế của biểu mẫu',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                    },
                  },
                  'message': 'Xóa thành công',
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
                      'tootip': 'Nhấn để xem bản thực tế của biểu mẫu',
                    },
                    'active': {
                      'tootip': 'Nhấn để cho phép sử dụng biểu mẫu',
                    },
                    'deactive': {
                      'tootip': 'Nhấn để ngừng sử dụng biểu mẫu',
                    },
                  },
                  'message': 'Xóa thành công',
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
          'profile': {
            'components': {

            },
            'pages': {

            },
          },
          'work-flow': {
            'components': {

            },
            'pages': {

            },
          },
        },
      },
    },
  },
};