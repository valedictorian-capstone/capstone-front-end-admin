import { IBaseProps } from '@extras/interfaces';
import { HeaderComponent, SideBarLeftComponent } from '@modules/core-test/components';
import { RootState } from '@stores/states';
import { Col, Row } from 'antd';
import { ProgressBar } from 'primereact/progressbar';
import React from 'react';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import './layout.component.css';
import { useSwipeable, Swipeable } from 'react-swipeable';
export interface ILayoutComponentProps extends IBaseProps {
  input: {};
  output: {};
}
export const LayoutComponent: React.FC<ILayoutComponentProps> = (props: ILayoutComponentProps) => {
  const account: any = localStorage.getItem('m-crm-username');
  const status = useSelector<RootState, boolean>((state: RootState) => state.loading.loading.status);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [scroll, setScroll] = React.useState<boolean>(false);
  const [stick, setStick] = React.useState<string>('');
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [target, setTarget] = React.useState<EventTarget>();
  return (
    <div onClick={(e) => setTarget(e.target)}>
      <Swipeable onSwipedLeft={(e) => {
        setStick('');
        setTarget(undefined);
      }} onSwipedRight={(e) => {
        if (e.initial[0] <= 100) {
          setStick('stick');
          setTarget(undefined);
        }
      }}>
        <SideBarLeftComponent input={{ stick, target }} output={{}}/>
        <HeaderComponent input={{ target }} output={{ onToggle: () => setStick(stick === 'stick' ? '' : 'stick'), onClickOutside: () => setStick('') }} />
        {/* <Draggable bounds="body" defaultPosition={{ x: 0, y: 0 }}>
          <div className="circle" />
        </Draggable> */}
        <div className="layout" onClick={() => setStick('')}>
          <div className="layout-body-main">
            {status && <ProgressBar mode="indeterminate" style={{ height: '4px' }} />}
            <div className={'layout-header' + (scroll ? ' stick' : '')}>
              <Col />
            </div>
            <div className="layout-body" onScroll={(e) => setScroll((e.target as HTMLElement).scrollTop > 0 ? true : false)}>
              {props.children}
            </div>
          </div>
        </div>
        {/* <Row className="layout-footer">
        <span />
      </Row> */}

      </Swipeable>
    </div>
  );
};