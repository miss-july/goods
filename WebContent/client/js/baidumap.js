var map = new BMap.Map("baiduMap");//�ڰٶȵ�ͼ�����д���һ����ͼ
var point = new BMap.Point(112.712592, 23.347976);//����һ�����ĵ�����
map.centerAndZoom(point,13);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������

map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
map.addControl(new BMap.NavigationControl());//���ͼ��������ſؼ�

map.enableKeyboard();//���ü����������Ҽ��ƶ���ͼ

 
//���ͼ��������ֱ�ע
var label = new BMap.Label("This is my hometown,SiHui.",{point:new BMap.Point(112.712592, 23.347976),offset:new BMap.Size(3,-6)});
map.addOverlay(label);
label.setStyle({
borderColor:"#999"});

    
 