import { ApartmentOutlined, HomeOutlined, LogoutOutlined, NotificationOutlined, PartitionOutlined, PhoneOutlined, ProfileOutlined, SettingOutlined, SmileOutlined, TeamOutlined } from '@ant-design/icons';
import React from 'react';

export const environment = {
  'apiEndpont': 'http://localhost:3000/',
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
        'token': 'api/v1/Auth/Token',
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
  'languages': [
    {
      'value': 'vi',
      'label': 'Tiếng Việt',
      'data': {
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
            'label': 'Khách hàng',
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
        'work-flow-step': [
          {
            'value': 'activity',
            'label': 'Activity',
            'data': [
              { 'value': 'task', 'label': 'Task' },
              { 'value': 'sub-process', 'label': 'Sub-process' },
              { 'value': 'transaction', 'label': 'Transaction' },
              { 'value': 'call-activity', 'label': 'Call Activity' },
            ],
          },
          {
            'value': 'event',
            'label': 'Event',
            'data': [
              { 'value': 'start-event', 'label': 'Start Event' },
              { 'value': 'intermediate-event', 'label': 'Intermediate Event' },
              { 'value': 'end-event', 'label': 'End Event' },
            ],
          },
          {
            'value': 'gateway',
            'label': 'Gateway',
            'data': [
              { 'value': 'exclusive', 'label': 'Exclusive' },
              { 'value': 'parallel', 'label': 'Parallel' },
              { 'value': 'inclusive', 'label': 'Inclusive' },
              { 'value': 'complex', 'label': 'Complex' },
            ],
          },
        ],
        'work-flow-connection': [
          {
            'value': 'sequence',
            'label': 'Sequence Flow',
          },
          {
            'value': 'message',
            'label': 'Message Flow',
          },
          {
            'value': 'association',
            'label': 'Association',
          },
        ],
        'form-control': [
          { 'label': 'INPUT', value: 'input', icon: '' },
          { 'label': 'TEXT-AREA', value: 'text-area', icon: '' },
          { 'label': 'AUTO-COMPLETE', value: 'auto-complete', icon: '' },
          { 'label': 'CHECK-BOX', value: 'check-box', icon: '' },
          { 'label': 'RADIO', value: 'radio', icon: '' },
          { 'label': 'FILE', value: 'file', icon: '' },
          { 'label': 'MULTI-SELECT', value: 'multi-select', icon: '' },
          { 'label': 'COMBO-BOX', value: 'combo-box', icon: '' },
          { 'label': 'DATE-PICKER', value: 'date-picker', icon: '' },
          { 'label': 'TIME-PICKER', value: 'time-picker', icon: '' },
          { 'label': 'LABEL', value: 'label', icon: '' },
          { 'label': 'EDITOR', value: 'editor', icon: '' },
        ],
        'header': {
          'account': {
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
          'notification': {
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
          },
        },
      },
    },
    {
      'value': 'en',
      'label': 'English',
      'data': {
        'categories': [
          {
            'label': 'Home',
            'value': 'dashboard',
            'icon': (<HomeOutlined />),
          },
          {
            'label': 'Account',
            'value': 'account',
            'icon': (<TeamOutlined />),
          },
          {
            'label': 'Customer',
            'value': 'customer',
            'icon': (<PhoneOutlined />),
          },
          {
            'label': 'Form',
            'value': 'form',
            'icon': (<ProfileOutlined />),
          },
          {
            'label': 'Work Flow',
            'value': 'work-flow',
            'icon': (<PartitionOutlined />),
          },
        ],
        'work-flow-step': [
          {
            'value': 'activity',
            'label': 'Activity',
            'data': [
              { 'value': 'task', 'label': 'Task' },
              { 'value': 'sub-process', 'label': 'Sub-process' },
              { 'value': 'transaction', 'label': 'Transaction' },
              { 'value': 'call-activity', 'label': 'Call Activity' },
            ],
          },
          {
            'value': 'event',
            'label': 'Event',
            'data': [
              { 'value': 'start-event', 'label': 'Start Event' },
              { 'value': 'intermediate-event', 'label': 'Intermediate Event' },
              { 'value': 'end-event', 'label': 'End Event' },
            ],
          },
          {
            'value': 'gateway',
            'label': 'Gateway',
            'data': [
              { 'value': 'exclusive', 'label': 'Exclusive' },
              { 'value': 'parallel', 'label': 'Parallel' },
              { 'value': 'inclusive', 'label': 'Inclusive' },
              { 'value': 'complex', 'label': 'Complex' },
            ],
          },
        ],
        'work-flow-connection': [
          {
            'value': 'sequence',
            'label': 'Sequence Flow',
          },
          {
            'value': 'message',
            'label': 'Message Flow',
          },
          {
            'value': 'association',
            'label': 'Association',
          },
        ],
        'form-control': [
          { 'label': 'INPUT', value: 'input', icon: '' },
          { 'label': 'TEXT-AREA', value: 'text-area', icon: '' },
          { 'label': 'AUTO-COMPLETE', value: 'auto-complete', icon: '' },
          { 'label': 'CHECK-BOX', value: 'check-box', icon: '' },
          { 'label': 'RADIO', value: 'radio', icon: '' },
          { 'label': 'FILE', value: 'file', icon: '' },
          { 'label': 'MULTI-SELECT', value: 'multi-select', icon: '' },
          { 'label': 'COMBO-BOX', value: 'combo-box', icon: '' },
          { 'label': 'DATE-PICKER', value: 'date-picker', icon: '' },
          { 'label': 'TIME-PICKER', value: 'time-picker', icon: '' },
          { 'label': 'LABEL', value: 'label', icon: '' },
          { 'label': 'EDITOR', value: 'editor', icon: '' },
        ],
        'header': {
          'account': {
            'items': [
              {
                'value': 'setting',
                'label': 'Setting',
                'icon': (<SettingOutlined />),
              },
              {
                'value': 'log-out',
                'label': 'Log-out',
                'icon': (<LogoutOutlined />),
              },
            ],
          },
          'notification': {
            'tabs': [
              {
                'key': 'work',
                'tab': (
                  <span>
                    <NotificationOutlined />
                    Work
                  </span>
                ),
              },
              {
                'key': 'self',
                'tab': (
                  <span>
                    <SmileOutlined />
                    MySelf
                  </span>
                ),
              },
              {
                'key': 'company',
                'tab': (
                  <span>
                    <ApartmentOutlined />
                    Company
                  </span>
                ),
              },
            ],
            'emptyDescription': (
              <span>
                No notification yet
              </span>
            ),
          },
        },
      },
    },
    {
      'value': 'jp',
      'label': '日本語',
      'data': {
        'categories': [
          {
            'label': '自宅',
            'value': 'dashboard',
            'icon': (<HomeOutlined />),
          },
          {
            'label': '口座',
            'value': 'account',
            'icon': (<TeamOutlined />),
          },
          {
            'label': 'お客様',
            'value': 'customer',
            'icon': (<PhoneOutlined />),
          },
          {
            'label': '形',
            'value': 'form',
            'icon': (<ProfileOutlined />),
          },
          {
            'label': 'ワークフロー',
            'value': 'work-flow',
            'icon': (<PartitionOutlined />),
          },
        ],
        'work-flow-step': [
          {
            'value': 'activity',
            'label': 'Activity',
            'data': [
              { 'value': 'task', 'label': 'Task' },
              { 'value': 'sub-process', 'label': 'Sub-process' },
              { 'value': 'transaction', 'label': 'Transaction' },
              { 'value': 'call-activity', 'label': 'Call Activity' },
            ],
          },
          {
            'value': 'event',
            'label': 'Event',
            'data': [
              { 'value': 'start-event', 'label': 'Start Event' },
              { 'value': 'intermediate-event', 'label': 'Intermediate Event' },
              { 'value': 'end-event', 'label': 'End Event' },
            ],
          },
          {
            'value': 'gateway',
            'label': 'Gateway',
            'data': [
              { 'value': 'exclusive', 'label': 'Exclusive' },
              { 'value': 'parallel', 'label': 'Parallel' },
              { 'value': 'inclusive', 'label': 'Inclusive' },
              { 'value': 'complex', 'label': 'Complex' },
            ],
          },
        ],
        'work-flow-connection': [
          {
            'value': 'sequence',
            'label': 'Sequence Flow',
          },
          {
            'value': 'message',
            'label': 'Message Flow',
          },
          {
            'value': 'association',
            'label': 'Association',
          },
        ],
        'form-control': [
          { 'label': 'INPUT', value: 'input', icon: '' },
          { 'label': 'TEXT-AREA', value: 'text-area', icon: '' },
          { 'label': 'AUTO-COMPLETE', value: 'auto-complete', icon: '' },
          { 'label': 'CHECK-BOX', value: 'check-box', icon: '' },
          { 'label': 'RADIO', value: 'radio', icon: '' },
          { 'label': 'FILE', value: 'file', icon: '' },
          { 'label': 'MULTI-SELECT', value: 'multi-select', icon: '' },
          { 'label': 'COMBO-BOX', value: 'combo-box', icon: '' },
          { 'label': 'DATE-PICKER', value: 'date-picker', icon: '' },
          { 'label': 'TIME-PICKER', value: 'time-picker', icon: '' },
          { 'label': 'LABEL', value: 'label', icon: '' },
          { 'label': 'EDITOR', value: 'editor', icon: '' },
        ],
        'header': {
          'account': {
            'items': [
              {
                'value': 'setting',
                'label': '設定',
                'icon': (<SettingOutlined />),
              },
              {
                'value': 'log-out',
                'label': 'ログアウト',
                'icon': (<LogoutOutlined />),
              },
            ],
          },
          'notification': {
            'tabs': [
              {
                'key': 'work',
                'tab': (
                  <span>
                    <NotificationOutlined />
                    作業
                  </span>
                ),
              },
              {
                'key': 'self',
                'tab': (
                  <span>
                    <SmileOutlined />
                    私自身
                  </span>
                ),
              },
              {
                'key': 'company',
                'tab': (
                  <span>
                    <ApartmentOutlined />
                    会社
                  </span>
                ),
              },
            ],
            'emptyDescription': (
              <span>
                通知なし
              </span>
            ),
          },
        },
      },
    },
  ],
};

const getPorts = (id: string) => {
  return [
    {
      id: id + 'port1',
      shape: 'Circle',
      offset: { x: 0, y: 0 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port2',
      shape: 'Circle',
      offset: { x: 0, y: 0.25 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port3',
      shape: 'Circle',
      offset: { x: 0, y: 0.5 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port4',
      shape: 'Circle',
      offset: { x: 0, y: 0.75 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port5',
      shape: 'Circle',
      offset: { x: 0, y: 1 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port6',
      shape: 'Circle',
      offset: { x: 0.25, y: 0 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port7',
      shape: 'Circle',
      offset: { x: 0.5, y: 0 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port9',
      shape: 'Circle',
      offset: { x: 0.75, y: 0 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port0',
      shape: 'Circle',
      offset: { x: 1, y: 0 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port10',
      shape: 'Circle',
      offset: { x: 1, y: 0.25 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port11',
      shape: 'Circle',
      offset: { x: 1, y: 0.5 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port12',
      shape: 'Circle',
      offset: { x: 1, y: 0.75 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port13',
      shape: 'Circle',
      offset: { x: 1, y: 1 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port14',
      shape: 'Circle',
      offset: { x: 0.25, y: 1 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port15',
      shape: 'Circle',
      offset: { x: 0.5, y: 1 },
      height: 8,
      width: 8,
      visibility: 1,
    },
    {
      id: id + 'port16',
      shape: 'Circle',
      offset: { x: 0.75, y: 1 },
      height: 8,
      width: 8,
      visibility: 1,
    },
  ];
};