
function Sidebar() {
  const menuItems = [
    { icon: 'ti-home', text: 'Account Overview', active: true },
    { icon: 'ti-user', text: 'Personal Info' },
    { icon: 'ti-credit-card', text: 'Billing & Payment' },
    { icon: 'ti-receipt', text: 'Recent Charges' },
    { icon: 'ti-users', text: 'Refer a Friend' }
  ];

  return (
    <div className="flex flex-col w-[18%] max-md:w-full">
      <div className="flex flex-col grow w-full bg-white">
        <div className="px-5 py-7 text-xl font-semibold text-black border-b border-solid">
          Dashboard
        </div>
        <div className="flex flex-col gap-2 p-4 w-full max-md:pb-5">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex gap-3 items-center px-4 py-3 text-base text-black rounded-lg ${
                item.active ? 'bg-blue-50' : ''
              }`}
            >
              <i className={item.icon} />
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;