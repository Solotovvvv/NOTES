



document.addEventListener('DOMContentLoaded', async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

    if (typeof window.ethereum !== 'undefined') {
        const ethereum = window.ethereum;

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); // Request access to user's accounts
            const currentAccount = accounts[0];
            
            console.log('Current Ethereum address:', currentAccount);

            ethereum.on('accountsChanged', newAccounts => {
                console.log('Accounts changed:', newAccounts);
                const updatedCurrentAccount = newAccounts[0];
                console.log('Updated Ethereum address:', updatedCurrentAccount);
            });

            ethereum.on('chainChanged', chainId => {
                console.log('Network changed:', chainId);
            });
        } catch (error) {
            console.error('Error fetching accounts:', error);
        }
    } else {
        console.log('MetaMask or an Ethereum-compatible wallet is not installed.');
    }
});



       $(document).ready(function () {


            $('#approvedDepartment').DataTable({
                'serverside': true,
                'processing': true,
                'paging': true,
                "columnDefs": [
                    { "className": "dt-center", "targets": "_all" },
                ],
                'ajax': {
                    'url': 'approvedtbl.php',
                    'type': 'post',
                },
                'fnCreateRow': function (nRow, aData, iDataIndex) {
                    $(nRow).attr('id', aData[0]);
                },
            });
        });


       
        


        function Edit2(update) {
            $('#hiddendata2').val(update);
            $.post("update_blockchain.php", { update: update }, function (data,
                status) {
                var userid1 = JSON.parse(data);
                $('#Update_Name').val(userid1.name);
     
            });
            $('#update_department').modal("show");
        }
